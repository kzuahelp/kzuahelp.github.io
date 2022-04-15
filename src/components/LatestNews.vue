<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed, ref, watch } from "vue";

//// Localization
const { t, locale } = useI18n({
  inheritLocale: true,
});

const news = ref(null);

const latestNews = computed(() => {
  if (!news.value) return null;

  return {
    last: news.value[news.value.length - 1],
    other: news.value.slice(-3, -1),
  };
});

const createLink = (article) => {
  return `/news/${article.time.replaceAll("-", "/")}/${article.url}`;
};

const loadNews = async function () {
  const response = await fetch(`/data/${locale.value}/news/list.json`);
  news.value = await response.json();
};

watch(locale, (value) => {
  loadNews();
});

loadNews();
</script>

<template>
  <Section v-if="latestNews" :title="t('sections.latest-news')" id="latest-news">
    <template v-slot:first>
      <NewsCard
        :title="latestNews.last.title"
        :description="latestNews.last.description"
        :picture="latestNews.last.picture"
        :link="createLink(latestNews.last)"
        :square="true"
      />
    </template>
    <template v-slot:second>
      <div :class="$style.minicards">
        <NewsMiniCard
          v-for="article in latestNews.other"
          :title="article.title"
          :description="article.description"
          :picture="article.picture"
          :key="article.id"
          :class="$style.minicard"
          :link="createLink(article)"
        />
      </div>
    </template>
  </Section>
</template>

<style module lang="postcss">
.minicards {
  display: flex;
  flex-flow: column;
  flex: 1;
}

.minicard {
  margin-bottom: 20px;
  flex: 1;
}

.minicard:last-child {
  margin-bottom: 0;
}
</style>
