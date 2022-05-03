<script setup lang="ts">
import { RouteRecord } from 'vue-router';

//// Localization
const { t, locale, fallbackLocale } = useI18n({
  inheritLocale: true,
});

const router = useRouter();

function dateDiff(dateStringA: string, dateStringB: string) {
  return new Date(dateStringB).getTime() - new Date(dateStringA).getTime();
}

let routes = router.getRoutes()

let announcements = computed(() => {
  let posts = []

  let postsByDate: { [k: string]: Array<RouteRecord> } = {}
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i]

    if (route.meta.layout !== 'announcements') continue;

    if (!postsByDate[route.meta.date]) {
      postsByDate[route.meta.date] = []
    }

    postsByDate[route.meta.date].push(route)
  }

  for (const localizedPosts of Object.values(postsByDate)) {
    // Return article in current locale
    const currentLocalePost = localizedPosts.find(post =>
      post.meta.locale === locale.value
    )

    if (currentLocalePost) {
      posts.push(currentLocalePost)
      continue;
    };

    // Fallback to default locale
    posts.push(localizedPosts.find(post => post.meta.locale === fallbackLocale.value))
  }

  posts = posts.sort((a, b) => dateDiff(a.meta.date, b.meta.date));

  posts = posts.map(post => ({
    title: post.meta.title,
    description: post.meta.description,
    date: post.meta.date,
    expired: new Date(post.meta.date).getTime() + 86400000 < new Date().getTime(),
    url: post.path,
    picture: new URL(`/data/announcements/${post.meta.date.substring(0, 10)}/picture.jpg`, import.meta.url).href
  }))

  return posts
})
</script>

<template>
  <main :class="[$style.main, $style.limiter]">
    <div :class="[$style.group, $style.section]">
      <NewsCard v-for="article in announcements" :title="article.title" :description="article.description"
        :picture="article.picture" :date="article.date" :expired="article.expired" :url="article.url" />
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
