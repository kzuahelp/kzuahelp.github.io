//// Vue stuff
import { createApp } from 'vue'


//// Meta tags
import { createHead } from '@vueuse/head'
const head = createHead()

//// Smooth scroll
import scroll from 'v-smooth-scroll'


//// Locale
import messages from '@intlify/vite-plugin-vue-i18n/messages'
import { createI18n } from 'vue-i18n'
const i18n = createI18n({
  locale: 'ru-RU',
  fallbackLocale: 'ru-RU',
  // Force to use Composition API 
  // Required to prevent "Not available in legacy mode" error
  // appears when you open page rendered with SSR
  // https://github.com/intlify/vite-plugin-vue-i18n/issues/102
  legacy: false,
  messages
})


//// Application
import App from './App.vue'


//// Router
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
const router = createRouter({
  history: createWebHistory(),
  routes,
})


//// SVG icon handler
// TODO: manualChunks generates different files, create pull request
// https://github.com/anncwb/vite-plugin-svg-icons/issues/24
import 'virtual:svg-icons-register'


createApp(App)
  .use(router)
  .use(i18n)
  .use(head)
  .use(scroll)
  .mount('#app')
