<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed, ref, watch } from "vue";

//// Localization
const { t, locale } = useI18n({
  inheritLocale: true,
});

const news = ref(null);

// TODO: set type
const createLink = (article: any) => {
  return `/news/${article.time.replaceAll("-", "/")}/${article.url}`;
};

const loadNews = async function () {
  const response = await fetch(`/data/${locale.value}/news/list.json`);
  const result = await response.json();
  news.value = result.slice().reverse();
};

watch(locale, (value) => {
  loadNews();
});

loadNews();
</script>

<template>
  <main :class="[$style.main, $style.limiter]">
    <div :class="[$style.group, $style.section]">
      <NewsCard
        v-for="article in news"
        :title="article.title"
        :description="article.description"
        :picture="article.picture"
        :time="article.time"
        :link="createLink(article)"
      />
    </div>
  </main>
</template>

<style module lang="postcss">
.section {
  margin: 0 40px 40px;
}

.main {
  padding: 40px 0;
}

@media only screen and (max-width: 1024px) {
  .section {
    margin: 20px;
  }

  .main {
    padding: 0;
  }
}

.limiter {
  max-width: 1280px;
  margin: 0 auto;
}

.group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

@media only screen and (max-width: 1024px) {
  .group {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
