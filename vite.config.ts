//// Path Resolving Tool
import { resolve } from 'path'

//// Vite Stuff
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

//// Locale
import vueI18n from '@intlify/vite-plugin-vue-i18n'

//// Filesystem-Based Router
import pages from 'vite-plugin-pages'

//// SVG Bundler
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

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

      // Rename "dist" directory especially for github pages
      outDir: 'docs',

      // Disable module preload polyfill due to double request in firefox
      // https://github.com/vitejs/vite/issues/5532
      polyfillModulePreload: false,
    },

    // server: {
    //   hmr: {
    //     port: 443
    //   }
    // },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      },
    },
    plugins: [
      vue(),
      pages(),
      vueI18n({
        include: resolve(__dirname, 'src/locales/**')
      }),
      createSvgIconsPlugin({
        iconDirs: [resolve(__dirname, 'src/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
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