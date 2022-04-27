<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed } from "vue";


//// Properties
const props = defineProps<{
  title: string;
  description: string;
  picture: string;
  date: string;
}>();

//// Localization
const { t, locale } = useI18n({
  inheritLocale: true,
});

const timeString = computed(() => {
  return new Date(props.date).toLocaleDateString(locale.value);
});
</script>

<template>
  <div :class="$style.limiter">
    <header :class="$style.header">
      <div :class="$style.info">
        <h1 :class="$style.title">{{ title }}</h1>
        <div :class="$style.description">
          {{ description }}
        </div>
        <div :class="$style.time">
          {{ timeString }}
        </div>
      </div>
      <div v-if="picture" :class="$style.picture">
        <img :src="picture" :alt="title" />
      </div>
    </header>
  </div>
</template>

<style module lang="postcss">
.limiter {
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 20px 0;
}

.header {
  background: #fff;
  box-shadow: 0 2px 8px rgba(66, 55, 44, 0.2);
  border-radius: 4px;
  display: flex;
  overflow: hidden;
}

.info {
  display: flex;
  flex-flow: column;
  justify-content: center;
  position: relative;
  padding: 56px 0;
  flex: 1;
  ;
}

.title {
  font-weight: 500;
  font-size: 2.25rem;
  line-height: 1.25;
  text-align: center;
  margin: 20px;
}

.description {
  margin: 20px;
  font-size: 1.25rem;
}

.picture {
  flex: 1;

  & img {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0;
    object-fit: cover;
  }
}

.time {
  position: absolute;
  bottom: 20px;
  right: 20px;
  opacity: 0.5;
  font-size: 1rem;
}

@media only screen and (max-width: 1024px) {
  .header {
    flex-flow: column;
  }

  .info {
    padding-top: 0;
  }

  .title {
    font-size: 1.5rem;
  }

  .description {
    margin: 0 20px;
  }
}
</style>
