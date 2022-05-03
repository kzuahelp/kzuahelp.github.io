<script setup lang="ts">
//// Localization
const { t, locale, fallbackLocale } = useI18n({
  inheritLocale: true,
});

const router = useRouter();

function dateDiff(dateStringA: string, dateStringB: string) {
  return new Date(dateStringB).getTime() - new Date(dateStringA).getTime();
}

let routes = router.getRoutes()

let LatestAnnouncements = computed(() => {
  let posts = []

  let postsByDate = {}
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i]

    if (route.meta.layout !== 'announcements') continue;

    // Skip expired
    if (new Date(route.meta.date).getTime() + 86400000 < new Date().getTime()) continue;

    if (!postsByDate[route.meta.date]) {
      postsByDate[route.meta.date] = []
    }

    postsByDate[route.meta.date].push(route)
  }

  for (const [date, localizedPosts] of Object.entries(postsByDate)) {
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
    time: post.meta.time,
    picture: new URL(`../../data/announcements/${post.meta.date.substring(0, 10)}/picture.jpg`, import.meta.url).href,
    url: post.path
  }))

  if (!posts.length) {
    return null
  }

  return {
    last: posts.slice(0, 1)[0],
    other: posts.slice(1, 3)
  }
})
</script>

<template>
  <Section v-if="LatestAnnouncements" :title="t('sections.announcements')" id="announcements">
    <template v-slot:first>
      <NewsCard :title="LatestAnnouncements.last.title" :description="LatestAnnouncements.last.description"
        :picture="LatestAnnouncements.last.picture" :url="LatestAnnouncements.last.url"
        :time="LatestAnnouncements.last.time" :fullwidth="!LatestAnnouncements.other.length" />
    </template>
    <template v-slot:second v-if="LatestAnnouncements.other.length">
      <div :class="$style.minicards">
        <NewsMiniCard v-for="article in LatestAnnouncements.other" :title="article.title"
          :description="article.description" :picture="article.picture" :key="article.date" :class="$style.minicard"
          :url="article.url" />
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
