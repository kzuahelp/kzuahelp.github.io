<script setup lang="ts">
import {
  onBeforeMount,
  ref,
  shallowRef,
  defineAsyncComponent,
  defineComponent,
  watch,
  reactive,
} from "vue";

import { useI18n } from "vue-i18n";

//// Properties
const props = defineProps<{
  year: string;
  month: string;
  day: string;
  name: string;
}>();

//// Localization
const { t, locale } = useI18n({
  inheritLocale: true,
});

//// Functions
// TODO: Replace any with component type
const loadPage = function (): Promise<any> {
  return new Promise(async (resolve, reject) => {
    const path = `${props.year}/${props.month}/${props.day}/${props.name}`;
    resolve(
      import(
        `../../../../../data/${locale.value}/news/${props.year}/${props.month}/${props.day}/${props.name}.md`
      )
    );
  });
};

const AsyncComp = shallowRef(defineAsyncComponent(loadPage));

watch(locale, (value) => {
  AsyncComp.value = defineAsyncComponent(loadPage);
});
</script>

<template>
  <NewsArticle>
    <AsyncComp />
  </NewsArticle>
</template>
