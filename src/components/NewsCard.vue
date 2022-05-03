<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed } from "vue";

//// Properties
const props = defineProps<{
  title: string;
  description: string;
  picture: string;
  url?: string;
  square?: boolean;
  fullwidth?: boolean;
  date?: string;
  time?: string;
  expired?: boolean;
}>();

//// Localization
const { t, locale } = useI18n({
  inheritLocale: true,
});

const dateString = computed(() => {
  if (!props.date) return null;
  return new Date(props.date).toLocaleDateString(locale.value);
});
</script>

<template>
  <router-link :class="[$style.card, { [$style.fullwidth]: fullwidth }, { [$style.expired]: expired }]" :to="url">
    <img :class="$style.picture" :src="picture" />
    <div :class="[$style.info, { [$style.square]: square, [$style.timed]: date }]">
      <div :class="$style.title">{{ title }}</div>
      <div :class="$style.description">{{ description }}</div>
      <div v-if="props.time">{{ time }}</div>
      <div v-if="date" :class="$style.time">{{ dateString }}</div>
    </div>
  </router-link>
</template>

<style module lang="postcss">
.expired {
  filter: grayscale(0.85);
  opacity: .5;

  & .picture {
    opacity: .5;
  }
}

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
  display: flex;
  flex-flow: column;
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
  flex: 1;
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

.fullwidth {
  display: flex;
  flex-flow: row;

  & .picture {
    width: 570px;
  }
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

  .fullwidth {
    flex-flow: column;

    & .picture {
      width: 100%;
    }
  }

}
</style>
