//// FS Tools
import { readFileSync, readdirSync } from "fs-extra";

//// Path Resolving Tool
import { resolve, dirname } from "path";

//// Vite Stuff
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

//// Markdown Components
import markdown, { meta } from "vite-plugin-md";

//// Locale
import vueI18n from "@intlify/vite-plugin-vue-i18n";

//// Filesystem-Based Router
import Pages from "vite-plugin-pages";

//// Sitemap generation
import generateSitemap from "vite-plugin-pages-sitemap";

//// Automatic slug generation from title
import { slugify } from "transliteration";

//// Markdown parser
// https://github.com/jonschlinkert/gray-matter/issues/105
//@ts-ignore
import matter from "gray-matter";

//// Layout wrapper for Filesystem-Based Router
import Layouts from "vite-plugin-vue-layouts";

//// SVG Bundler
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

//// Auto Import Components
import Components from "unplugin-vue-components/vite";

//// Auto Import Modules
import AutoImport from "unplugin-auto-import/vite";

//// CSS Plugins
// TODO: Create typescrypt definitions like this
// https://github.com/postcss/postcss-nested/blob/main/index.d.ts
import postcssNesting from "postcss-nesting";

//// ImageTools
// import { imagetools } from "vite-imagetools";

export default ({ mode }) => {
  // Import enviroment variables from dotenv file
  const env = loadEnv(mode, __dirname);

  // Export Vite config
  // https://vitejs.dev/config/
  return defineConfig({
    server: {
      cors: true,
      headers: {
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
    },

    build: {
      emptyOutDir: true,

      // Disable module preload polyfill due to double request in firefox
      // https://github.com/vitejs/vite/issues/5532
      polyfillModulePreload: false,

      rollupOptions: {
        input: {
          // Use 404.html hack to use WebHistory routing on github pages
          main: resolve(__dirname, "404.html"),
        },
      },
    },

    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),

        // Improve performance and reduce bundle size with runtime build only
        // https://vue-i18n.intlify.dev/guide/advanced/optimization.html
        "vue-i18n": "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js",
      },
    },

    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),

      markdown({
        wrapperClasses: "article",
        builders: [meta()],
      }),

      vueI18n({
        include: resolve(__dirname, "locales/**"),
      }),

      createSvgIconsPlugin({
        iconDirs: [resolve(__dirname, "src/icons")],
        symbolId: "icon-[dir]-[name]",
      }),

      //// Auto Import Components
      Components({
        dts: "./src/components.d.ts",
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),

      //// Auto Import Modules
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        imports: ["vue", "vue-router", "vue-i18n", "@vueuse/head"],
        dts: "./src/auto-imports.d.ts",
      }),

      //// Layout wrapper for Filesystem-Based Router
      Layouts({
        layoutsDirs: "src/layouts",
        defaultLayout: "default",
      }),

      //// Filesystem-Based Router
      Pages({
        extensions: ["vue", "md"],
        dirs: [
          { dir: "data/news", baseRoute: ":locale" },
          { dir: "data/market", baseRoute: ":locale" },
          { dir: "data/announcements", baseRoute: ":locale" },
          { dir: "data/articles", baseRoute: ":locale" },
          { dir: "pages", baseRoute: "" },
        ],

        async extendRoute(route) {
          // Transform "/market" paths
          // from: "/market/date/title.lang.md"
          // into: "/lang/market/type/article/slugged-title"
          if (route.component.startsWith("/data/market/")) {
            const path = resolve(__dirname, route.component.slice(1));
            const data = path.split("/").reverse();
            const filename = data[0].split(".").reverse();
            const article = data[1];
            const category = data[2];
            const locale = filename[1];
            const md = readFileSync(path, "utf-8");
            const frontmatter = matter(md);
            const slug = slugify(frontmatter.data.title);
            const dir = dirname(path);

            const alternate = readdirSync(dir)
              .filter(
                (name) =>
                  name.endsWith(".md") && !name.endsWith(`.${locale}.md`)
              )
              .map((name) => {
                const data = name.split(".").reverse();
                const locale = data[1];
                const slug = slugify(data[2]);
                const path = `/${locale}/market/${article}/${slug}`;
                return { locale, path };
              });

            route.meta = Object.assign(route.meta || {}, {
              layout: "market",
              article: data[1],
              category,
              locale,
              dir: dirname(route.component),
              slug,
              alternate,
              ...frontmatter.data,
            });

            route.path = `/${locale}/market/${category}/${article}/${slug}`;

            return route;
          }

          // Transform "/news" paths
          // from: "/news/date/title.lang.md"
          // into: "/lang/news/year/month/day/slugged-title"
          if (route.component.startsWith("/data/news/")) {
            const path = resolve(__dirname, route.component.slice(1));
            const data = path.split("/").reverse();
            const filename = data[0].split(".").reverse();
            const date = data[1].split("-").join("/");
            const locale = filename[1];
            const md = readFileSync(path, "utf-8");
            const frontmatter = matter(md);
            const slug = slugify(frontmatter.data.title);
            const dir = dirname(path);

            const alternate = readdirSync(dir)
              .filter(
                (name) =>
                  name.endsWith(".md") && !name.endsWith(`.${locale}.md`)
              )
              .map((name) => {
                const data = name.split(".").reverse();
                const locale = data[1];
                const slug = slugify(data[2]);
                const path = `/${locale}/news/${date}/${slug}`;
                return { locale, path };
              });

            route.meta = Object.assign(route.meta || {}, {
              layout: "news",
              date: new Date(data[1]),
              locale,
              dir: dirname(route.component),
              slug,
              alternate,
              ...frontmatter.data,
            });

            route.path = `/${locale}/news/${date}/${slug}`;

            return route;
          }

          // Transform "/articles" paths
          // from: "/articles/date/title.lang.md"
          // into: "/lang/news/year/month/day/slugged-title"
          if (route.component.startsWith("/data/articles/")) {
            const path = resolve(__dirname, route.component.slice(1));
            const data = path.split("/").reverse();
            const filename = data[0].split(".").reverse();
            const date = data[1].split("-").join("/");
            const locale = filename[1];
            const md = readFileSync(path, "utf-8");
            const frontmatter = matter(md);
            const slug = slugify(frontmatter.data.title);
            const dir = dirname(path);

            const alternate = readdirSync(dir)
              .filter(
                (name) =>
                  name.endsWith(".md") && !name.endsWith(`.${locale}.md`)
              )
              .map((name) => {
                const data = name.split(".").reverse();
                const locale = data[1];
                const slug = slugify(data[2]);
                const path = `/${locale}/articles/${date}/${slug}`;
                return { locale, path };
              });

            route.meta = Object.assign(route.meta || {}, {
              layout: "articles",
              date: new Date(data[1]),
              locale,
              dir: dirname(route.component),
              slug,
              alternate,
              ...frontmatter.data,
            });

            route.path = `/${locale}/articles/${date}/${slug}`;

            return route;
          }

          // Transform "/announcements" paths
          // from: "/announcements/date/title.lang.md"
          // into: "/lang/announcements/year/month/day/slugged-title"
          if (route.component.startsWith("/data/announcements/")) {
            const path = resolve(__dirname, route.component.slice(1));
            const data = path.split("/").reverse();
            const filename = data[0].split(".").reverse();
            const date = data[1].split("-").join("/");
            const locale = filename[1];
            const md = readFileSync(path, "utf-8");
            const frontmatter = matter(md);
            const slug = slugify(frontmatter.data.title);
            const dir = dirname(path);

            const alternate = readdirSync(dir)
              .filter(
                (name) =>
                  name.endsWith(".md") && !name.endsWith(`.${locale}.md`)
              )
              .map((name) => {
                const data = name.split(".").reverse();
                const locale = data[1];
                const slug = slugify(data[2]);
                const path = `/${locale}/announcements/${date}/${slug}`;
                return { locale, path };
              });

            route.meta = Object.assign(route.meta || {}, {
              layout: "announcements",
              date: new Date(data[1]),
              locale,
              dir: dirname(route.component),
              slug,
              alternate,
              ...frontmatter.data,
            });

            route.path = `/${locale}/announcements/${date}/${slug}`;

            return route;
          }

          return route;
        },

        onRoutesGenerated: (routes) =>
          generateSitemap({
            routes,
            readable: true,
            hostname: "https://helpukraine.kz/",
          }),
      }),
    ],
    css: {
      modules: {
        generateScopedName:
          mode === "development"
            ? "[name]__[local]__[hash:base64:5]"
            : "[hash:base64:5]",
      },
      postcss: {
        plugins: [postcssNesting],
      },
    },
  });
};
