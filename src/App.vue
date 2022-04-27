<script setup lang="ts">
//// Router
import { useRoute } from "vue-router";
const route = useRoute();

//// Functions
const getLang = function (): string {
  const storedLang = localStorage.getItem("lang")

  if (storedLang) {
    return storedLang
  }

  const navigatorLang = navigator.language.toLowerCase();

  if (navigatorLang) {
    return navigatorLang;
  }

  return 'ru'
};

//// Localization
const { locale } = useI18n({
  useScope: "global",
});

locale.value = getLang();
</script>

<template>
  <router-view />
</template>

<style lang="postcss">
@import "./assets/colors.pcss";
@import "./assets/global.pcss";
@import "./assets/fonts.pcss";
</style>
