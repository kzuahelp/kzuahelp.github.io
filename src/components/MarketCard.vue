<script setup lang="ts">
import VueEasyLightbox from 'vue-easy-lightbox'

import { useI18n } from "vue-i18n";
import { computed } from "vue";

//// Properties
const props = defineProps<{
  title: string;
  description: string;
  picture: string;
  author?: string;
  article?: string;
  cost?: string;
  content?: string;
}>();

//// Localization
const { t, locale } = useI18n({
  inheritLocale: true,
});

const authorString = computed(() => {
  if (!props.author) return null;
  return "@" + props.author.substring(props.author.lastIndexOf("/") + 1);
});

const orderUrl = computed(() => {
  const formId = "1FAIpQLSePO2cptro1VTLtV0GgJWsU1Z-SpIYbOInQ-dsI-og1JfuTrg";
  const query = new URLSearchParams({
    "entry.864684790": `${props.article} ${props.title}`,
  });
  return `https://docs.google.com/forms/d/e/${formId}/viewform?${query}`;
});

let lightbox = ref(false)

function handleHide() {
  lightbox.value = false
}

function handleShow() {
  lightbox.value = true
}
</script>

<template>
  <div :class="$style.card">
    <img @click="handleShow()" :class="$style.picture" :src="picture" />

    <div :class="[$style.info]">
      <div :class="$style.title">{{ title }}</div>
      <div v-if="description" :class="$style.description">{{ description }}</div>
      <div v-if="content" :class="$style.description" v-html="content"></div>
    </div>
    <footer :class="$style.footer">
      <div :class="$style.additional">
        <span :class="$style.article">Арт. {{ article }}</span>
        <a :href="author" v-if="author" :class="$style.author">{{ authorString }}</a>
      </div>

      <a target="_blank" :href="orderUrl" :class="$style.button">Заказать {{ cost }}</a>
    </footer>

    <vue-easy-lightbox moveDisabled scrollDisabled :visible="lightbox" :imgs="picture" @hide="handleHide">
    </vue-easy-lightbox>
  </div>
</template>

<style module lang="postcss">
.card {
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 1.25rem;
  overflow: hidden;
  position: relative;
  display: block;
  text-decoration: none;
  color: rgba(var(--on-background-color), 0.85);
}

.picture {
  width: 100%;
  display: block;
  margin: 0;
}

.info {
  padding: 20px 20px 128px;
  background: #fff;
}

.title {
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: 500;
}

.description {
  line-height: 1.2;
  margin-top: 15px;
}

.author {
  opacity: 0.5;
  text-decoration: none;
  color: rgb(var(--on-background-color));
}

.article {
  opacity: 0.5;
  color: rgb(var(--on-background-color));
}

.additional {
  display: flex;
  padding: 0 20px;
  height: 24px;
  align-items: center;
  font-size: 1rem;
}

.article {
  flex: 1;
}

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.button {
  background: rgb(var(--primary-color));
  color: rgb(var(--on-primary-color));
  text-align: center;
  display: block;
  margin: 20px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 250ms ease;

  &:hover {
    background: rgb(var(--accent-color));
  }
}
</style>
