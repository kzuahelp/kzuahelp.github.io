<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed } from "vue";

//// Properties
const props = defineProps<{
  title: string;
  description: string;
  picture: string;
  link: string;
  square?: boolean;
  time?: string;
}>();

//// Localization
const { t, locale } = useI18n({
  inheritLocale: true,
});

const timeString = computed(() => {
  if (!props.time) return null;
  return new Date(props.time).toLocaleDateString(locale.value);
});
</script>

<template>
  <router-link :class="$style.card" :to="link">
    <img :class="$style.picture" :src="picture" />
    <div :class="[$style.info, { [$style.square]: square, [$style.timed]: time }]">
      <div :class="$style.title">{{ title }}</div>
      <div :class="$style.description">{{ description }}</div>
      <div v-if="time" :class="$style.time">{{ timeString }}</div>
    </div>
  </router-link>
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
  padding: 20px;
  background: #fff;
}

.square {
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(var(--primary-color), 0.85);
  color: rgb(var(--on-primary-color));
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
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

.timed {
  padding-bottom: 60px;
}

.time {
  position: absolute;
  bottom: 18px;
  right: 20px;
  opacity: 0.5;
  font-size: 1rem;
  text-align: right;
}

@media only screen and (max-width: 1024px) {
  .title {
    font-size: 1.25rem;
  }

  .description {
    font-size: 1rem;
  }

  .square {
    position: relative;
    bottom: 0;
    left: 0;
    background: rgba(var(--background-color-color), 0.85);
    color: rgb(var(--on-background-color));
    text-shadow: none;
  }
}
</style>
