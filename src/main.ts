//// Vue stuff
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import { createHead } from "@vueuse/head";
import { createI18n } from "vue-i18n";
import "virtual:svg-icons-register";
import App from "./App.vue";
import scroll from "v-smooth-scroll";

//// Meta tags
const head = createHead();

//// Locale
const messages = Object.fromEntries(
  Object.entries(import.meta.globEager("../locales/*.yaml")).map(
    ([key, value]) => [key.slice(11, -5), value.default]
  )
);

const i18n = createI18n({
  locale: "ru",
  fallbackLocale: "ru",
  legacy: false,
  messages,
});

//// Router
const routes = setupLayouts(generatedRoutes);
const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(i18n).use(head).use(scroll).mount("#app");
