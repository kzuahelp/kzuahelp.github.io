<script lang="ts" setup>
//// Components
import Locales from "../components/Locales.vue";

//// Localization
import { useI18n } from "vue-i18n";
const { t, n } = useI18n({
  inheritLocale: true,
});
</script>

<template>
  <header :class="$style.header">
    <img src="/ornament.svg" :class="$style.ornament" />
    <Locales></Locales>
    <div :class="$style.wrapper">
      <div :class="$style.container">
        <h1 :class="$style.title">{{ t("title") }}</h1>
        <div :class="$style.description">{{ t("description") }}</div>
        <a :class="$style.stats" href="#our-mission" v-smooth-scroll>{{
          t("statistics", { tons: 140 })
        }}</a>
      </div>
    </div>
  </header>
  <Navigation />
</template>

<style lang="postcss" module>
.header {
  height: 500px;
  background-image: url(/header.jpg);
  background-size: cover;
  background-position: center;
  position: relative;
}

.ornament {
  display: block;
  position: absolute;
  left: 20px;
  top: 20px;
  height: calc(100% - 40px);
}

.wrapper {
  height: 100%;
  background: rgba(var(--primary-color), 0.5);
  padding: 0 20px;
}
.title {
  color: rgb(var(--on-primary-color));
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgba(var(--primary-darken-color), 0.6);
  font-weight: 500;
  font-size: 3.8rem;
  margin: 0;
  text-align: center;
}
.description {
  color: rgb(var(--on-primary-color));
  text-shadow: 1px 1px 2px rgba(var(--primary-darken-color), 0.6);
  font-weight: 500;
  font-size: 1.5rem;
  margin-top: 10px;
  text-align: center;
}
.container {
  height: 100%;
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  flex-flow: column;
}

.stats {
  background: rgb(var(--on-primary-color));
  color: rgb(var(--primary-darken-color));
  padding: 20px;
  margin-top: 20px;
  font-weight: 500;
  font-size: 1.5rem;
  margin-top: 30px;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition: box-shadow 250ms ease;

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  }
}

.sum {
  white-space: nowrap;
}

@media only screen and (max-width: 1024px) {
  .header {
    height: 400px;
  }
  .title {
    font-size: 2rem;
  }
  .description {
    font-size: 1.25rem;
  }

  .ornament {
    display: none;
  }

  .stats {
    padding: 10px 14px;
    margin-top: 20px;
    font-size: 1.25rem;
    margin-top: 30px;
  }
}
</style>

<i18n lang="yaml">
ru-RU:
  title: "Украина, мы с тобой!"
  description: "Штаб гуманитарной поддержки Украины в Казахстане"
  statistics: "Отправлено более {tons} тонн помощи"
kk-KZ:
  title: "Украина, біз біргеміз!"
  description: "Қазақстандағы Украинаға гуманитарлық қолдау көрсету штабы"
  statistics: "{tons} тоннадан астам көмек жіберілді"
ru-UA:
  title: "Україно, ми з тобою!"
  description: "Штаб гуманітарної підтримки України у Казахстані"
  statistics: "Надіслано понад {tons} тонн допомоги"
en-US:
  title: "Ukraine, we are with you!"
  description: "Humanitarian Aid Headquarters for Ukraine in Kazakhstan "
  statistics: "More than {tons} tons of aid sent"
</i18n>
