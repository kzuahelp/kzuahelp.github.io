<script setup lang="ts">
import { useI18n } from "vue-i18n";

//// Localization
const { t } = useI18n({
  inheritLocale: true,
});
</script>

<template>
  <div>
    <Header />
    <main :class="[$style.main, $style.limiter]">
      <section :class="$style.section">
        <h2 :class="$style.title" :id="id">{{ t("navigation.vacancy") }}</h2>
        <div :class="$style.panel">
          <p>
            Наша благотворительная ярмарка в онлайн-формате. Вся прибыль с продажи
            представленных здесь товаров будет отправлена в качестве гуманитарной помощи
            народу Украины.
          </p>
        </div>
      </section>

      <section :class="$style.section">
        <div :class="$style.panel">
          <p>
            Наши вакансии
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>


<style module lang="postcss">
.section {
  margin: 0 40px 40px;
  font-size: 1.2rem;
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
