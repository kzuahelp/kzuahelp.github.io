<script lang="ts" setup>
//// Localization
const { t } = useI18n();
</script>


<template>
  <Section id="our-mission" :title="t('sections.our-mission')">
    <template #first>
      <div v-html="t('sections.our-mission-description')" />
      <Socials />
    </template>
    <template #second>
      <ul :class="$style.images">
        <li :class="$style.image" v-for="n in 4">
          <img :src="`/photos/${n}.jpg`" />
        </li>
      </ul>
    </template>
  </Section>
</template>


<style module lang="postcss">
.images {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.image {
  background: rgba(0, 0, 0, 0.1);

  & img {
    width: 100%;
    display: block;
    border-radius: 4px;
    overflow: hidden;
  }
}
</style>