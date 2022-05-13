<script setup lang="ts">
import press from '../../data/lists/press.json'

//// Localization
const { t } = useI18n({
  inheritLocale: true,
});
</script>

<template>
  <Section :title="t('sections.press-about-us')" id="press">
    <template #first>
      <ul :class="$style.press">
        <li v-for="item  in press" :class="$style.item">
          <a target="_blank" :href="item.link" :title="`${item.name}: ${item.title}`"  :class="$style.link">
            <svg fill="currentColor" :class="$style.logo">
              <use :href="'#icon-press-' + item.id" />
            </svg>
          </a>
        </li>
      </ul>
    </template>
  </Section>
</template>

<style module lang="postcss">
  .press {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .item {
    margin: 20px;
  }

  .link {
    display: block;
    background: #fff;
    width: 180px;
    height: 48px;
    padding: 40px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  }

  .logo {
    color: rgba(var(--on-background-color), 0.75);
    max-width: 100%;
    max-height: 100%;
  }

@media only screen and (max-width: 1024px) {
  .link {
    width: 128px;
    height: 32px;
    padding: 20px;
  }
  .item {
    margin: 10px;
  }
}
</style>