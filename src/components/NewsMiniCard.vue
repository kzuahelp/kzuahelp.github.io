<script setup lang="ts">
import { computed } from "vue";

//// Properties
const props = defineProps<{
  title: string;
  description: string;
  picture: string;
  link: string;
}>();
</script>

<template>
  <router-link :class="$style.card" :to="link">
    <div :class="$style.picture">
      <img :src="picture" />
    </div>
    <div :class="$style.info">
      <div :class="$style.title">{{ title }}</div>
      <div :class="$style.description">{{ description }}</div>
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
  text-decoration: none;
  color: var(--on-primary-color);
  display: flex;
}

.picture {
  width: 180px;
  background: red;
  flex-shrink: 0;

  & img {
    display: block;
    margin: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.info {
  padding: 20px;
}

.title {
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 500;
}

.description {
  margin-top: 15px;
  font-size: 1.2rem;
  line-height: 1.2;
}
</style>
