<script setup lang="ts">
import { computed } from "vue";

//// Properties
const props = defineProps<{
  title: string;
  description: string;
  picture: string;
  url: string;
}>();
</script>

<template>
  <router-link :class="$style.card" :to="url">
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
  overflow: hidden;
  text-decoration: none;
  color: var(--on-primary-color);
  display: flex;
  max-height: 300px;
}

.picture {
  width: 180px;
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
  display: flex;
  flex-flow: column;
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
  overflow: hidden;
}

@media only screen and (max-width: 1024px) {
  .card {
    flex-flow: column;
    display: block;
    max-height: auto;
  }

  .picture {
    width: auto;
  }

  .description {
    font-size: 1rem;
  }
}
</style>
