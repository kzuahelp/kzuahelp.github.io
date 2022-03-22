
<script lang="ts" setup>
//// Localization
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n({
  useScope: 'global'
})

//// Functions
const setLanguage = function (targetLocale: string) {
  locale.value = targetLocale
  localStorage.setItem('lang', targetLocale)
}
</script>

<template>
  <ul :class="$style.locales">
    <li :class="$style.locale" @click="setLanguage('kk-KZ')">KZ</li>
    <li :class="$style.locale" @click="setLanguage('ru-RU')">RU</li>
    <li :class="$style.locale" @click="setLanguage('ru-UA')">UA</li>
    <li :class="$style.locale" @click="setLanguage('en-US')">EN</li>
  </ul>
</template>

<style lang="postcss" module>
.locales {
  display: flex;
  list-style-type: none;
  color: rgb(var(--on-primary-color));
  text-shadow: 1px 1px 2px rgba(var(--primary-darken-color), 0.25);
  font-weight: 500;
  font-size: 1.4rem;
  margin: 0;
  position: absolute;
  top: 10px;
  right: 10px;
}
.locale {
  padding: 10px;
  cursor: pointer;
}

@media only screen and (max-width: 1024px) {
  .locales {
    font-size: 1.25rem;
  }
}
</style>

