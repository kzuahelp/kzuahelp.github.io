<script setup lang="ts">
//// Router
import { useRoute } from 'vue-router';
const route = useRoute()


//// Functions
const getLang = function (): string {
  let lang = localStorage.getItem('lang')

  if (lang) {
    return lang
  }

  lang = navigator.language.toLowerCase()

  switch (lang) {
    case 'ru':
      return 'ru-RU'
    case 'ru-RU':
      return 'ru-RU'
    case 'ua':
      return 'ru-UA'
    case 'ru-UA':
      return 'ru-UA'
    case 'en':
      return 'en-US'
    case 'en-US':
      return 'en-US'
    case 'kk':
      return 'kk-KZ'
    case 'kk-KZ':
      return 'kk-KZ'
    default:
      return 'ru-RU'
  }
}


//// Localization
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({
  useScope: 'global'
})

locale.value = getLang()
</script>

<template>
  <router-view />
</template>

<style lang="postcss">
@import "./assets/colors.pcss";
@import "./assets/global.pcss";
@import "./assets/fonts.pcss";
</style>