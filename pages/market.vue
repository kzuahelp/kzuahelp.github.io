<script setup lang="ts">
import { RouteRecord } from 'vue-router';

//// Localization
const { t, locale, fallbackLocale } = useI18n({
  inheritLocale: true,
});

const router = useRouter();

let routes = router.getRoutes()

let items = computed(() => {
  let items = []

  let itemsByArticle: { [k: string]: Array<RouteRecord> } = {}
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i]

    if (route.meta.layout !== 'market') continue;

    if (!itemsByArticle[route.meta.article]) {
      itemsByArticle[route.meta.article] = []
    }

    itemsByArticle[route.meta.article].push(route)
  }

  for (const localizedItems of Object.values(itemsByArticle)) {

    // Return article in current locale
    const currentLocaleItem = localizedItems.find(item =>
      item.meta.locale === locale.value
    )

    if (currentLocaleItem) {
      items.push(currentLocaleItem)
      continue;
    };

    // Fallback to default locale
    items.push(localizedItems.find(item => item.meta.locale === fallbackLocale.value))
  }

  items = items.sort();

  items = items.map(post => ({
    title: post.meta.title,
    description: post.meta.description,
    article: post.meta.article,
    author: post.meta.author,
    cost: post.meta.cost,
    picture: new URL(`/data/market/${post.meta.category}/${post.meta.article}/picture.jpg`, import.meta.url).href,
    url: post.path,
    content: post.meta.content
  }))

  return items
})

</script>

<template>
  <main :class="[$style.main, $style.limiter]">
    <section :class="$style.section">
      <h2 :class="$style.title" id="market">{{ t("navigation.market") }}</h2>
      <div :class="$style.panel">
        <p>
          {{ t('description') }}
        </p>
      </div>
    </section>

    <div :class="[$style.group, $style.section]">
      <MarketCard v-for="item in items" :key="item.article" :title="item.title" :description="item.description" :content="item.content"
        :author="item.author" :article="item.article" :picture="item.picture" :cost="item.cost" />
    </div>
  </main>
</template>

<i18n>
  ru:
    description: "Дорогие друзья! Приветствуем вас в нашем благотворительном онлайн-магазине. У нас вы найдете сувениры ручной работы, сделанные мастерами Казахстана и волонтерами Штаба гуманитарной поддержки Украины. Деньги, вырученные от продаж в нашем магазине, мы направляем на закупку гуманитарной помощи для народа Украины. Покупая у нас товар, вы не просто получаете уникальный сувенир, но и делаете доброе дело для нуждающихся жителей Украины."
  kz:
    description: "Біздің онлайн форматтағы қайырымдылық жәрмеңкесі. Мұнда ұсынылған тауарларды сатудан түскен барлық пайда Украина халқына гуманитарлық көмек ретінде жіберіледі."
  ua:
    description: "Наш благодійний ярмарок в онлайн-форматі. Весь прибуток з продажу представлених тут товарів буде відправлено як гуманітарну допомогу народу України."
  en:
    description: "Our charity fair in an online format. All profits from the sale of the goods presented here will be sent as humanitarian aid to the people of Ukraine."
</i18n>

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
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

@media only screen and (max-width: 1024px) {
  .group {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

.section {
  margin: 0 40px 40px;
}

@media only screen and (max-width: 1024px) {
  .section {
    margin: 20px;
  }
}

.title {
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 500;
  color: rgb(var(--accent-color));
  display: flex;
  align-items: center;
  margin: 0;
  padding: 40px 0;

  &::before {
    content: "";
    display: block;
    width: 100px;
    height: 28px;
    background: rgb(var(--accent-color));
    margin-right: 20px;
    border-radius: 20px;
  }
}

@media only screen and (max-width: 1024px) {
  .title {
    font-size: 1.8rem;
    margin: 0 0 20px;
    padding: 20px 0;

    &::before {
      width: 60px;
      height: 28px;
    }
  }
}

.panel {
  font-size: 1.25rem;
  display: flex;
  flex-flow: column;
}
</style>
