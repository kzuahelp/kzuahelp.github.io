
<script lang="ts" setup>
//// Localization
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  inheritLocale: true
})
</script>

<template>
  <nav :class="$style.navigation">
    <div :class="$style.ribbon">
      <div :class="$style.howto">{{ t('how-to-help') }}</div>
      <ul :class="$style.targets">
        <slot />
      </ul>
    </div>
  </nav>
</template>

<style lang="postcss" module>
.ribbon {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
}

.navigation {
  background: rgba(0, 170, 195, 0.1);
  padding: 20px;
}

.howto {
  border-radius: 8px;
  position: relative;
  text-decoration: none;
  color: rgb(var(--primary-color));
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  margin-right: 20px;
  white-space: nowrap;
}

.targets {
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 0;
}

@media only screen and (max-width: 1024px) {
  .ribbon {
    display: block;
  }
  .targets {
    display: block;
  }
  .howto {
    font-size: 1.5rem;
    margin-right: 0;
  }
}
</style>

<i18n lang="yaml">
ru-RU:
  how-to-help: "Как помочь:"
kk-KZ:
  how-to-help: "Қалай көмектесуге болады"
ru-UA:
  how-to-help: "Як допомогти:"
en-US:
  how-to-help: "How to help:"
</i18n>
