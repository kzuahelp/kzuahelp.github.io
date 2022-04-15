//// Path Resolving Tool
import { resolve } from 'path'

//// Vite Stuff
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

//// Markdown
import markdown from 'vite-plugin-md'

//// Locale
import vueI18n from '@intlify/vite-plugin-vue-i18n'

//// Filesystem-Based Router
import pages from 'vite-plugin-pages'

//// SVG Bundler
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

//// Auto Import Components
import Components from 'unplugin-vue-components/vite'

//// CSS Plugins
// TODO: Create typescrypt definitions like this
// https://github.com/postcss/postcss-nested/blob/main/index.d.ts
import postcssNesting from 'postcss-nesting'

//// Cleanup result files
// import cleanup from 'rollup-plugin-cleanup'


export default ({ mode }) => {
  // Import enviroment variables from dotenv file
  const env = loadEnv(mode, __dirname)

  // Export Vite config
  // https://vitejs.dev/config/
  return defineConfig({
    build: {
      emptyOutDir: true,

      // Disable module preload polyfill due to double request in firefox
      // https://github.com/vitejs/vite/issues/5532
      polyfillModulePreload: false,
    },

    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),

        // Improve performance and reduce bundle size with runtime build only
        // https://vue-i18n.intlify.dev/guide/advanced/optimization.html
        'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js'
      },
    },

    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/]
      }),

      markdown({
        wrapperClasses: 'article'
      }),

      pages({
        // extensions: ['vue', 'md'],
        // dirs: [
        //   {
        //     dir: resolve(__dirname, 'src/pages'),
        //     baseRoute: ':locale'
        //   },
        //   {
        //     dir: resolve(__dirname, 'src/pages'),
        //     baseRoute: ''
        //   }
        // ]
      }),

      vueI18n({
        include: resolve(__dirname, 'src/locales/**')
      }),

      createSvgIconsPlugin({
        iconDirs: [resolve(__dirname, 'src/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),

      Components({
        dts: true,
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      })
    ],
    css: {
      modules: {
        generateScopedName: mode === 'development' ? "[name]__[local]__[hash:base64:5]" : "[hash:base64:5]"
      },
      postcss: {
        plugins: [
          postcssNesting
        ]
      }
    }
  })
}