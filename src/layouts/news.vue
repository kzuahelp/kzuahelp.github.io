<script setup lang="ts">
const route = useRoute();
const picture = new URL(`/data/news/${route.meta.date.substring(0, 10)}/picture.jpg`, import.meta.url).href
</script>

<template>
  <Header />
  <NewsHeader :title="route.meta.title" :description="route.meta.description" :picture="picture"
    :date="route.meta.date" />
  <NewsArticle>
    <router-view />
  </NewsArticle>
  <Footer />
</template>
