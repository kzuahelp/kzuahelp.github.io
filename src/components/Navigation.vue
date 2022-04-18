<script setup lang="ts">
import { useI18n } from "vue-i18n";

//// Localization
const { t } = useI18n({
  inheritLocale: true,
});
</script>

<template>
  <nav :class="$style.navigation">
    <ul :class="$style.routes">
      <li :class="$style.route">
        <router-link :class="$style.link" to="/">{{ t("navigation.home") }}</router-link>
      </li>
      <li :class="$style.route">
        <router-link :class="$style.link" to="/news">{{
          t("navigation.news")
        }}</router-link>
      </li>
      <li :class="$style.route">
        <router-link :class="$style.link" to="/market">{{
          t("navigation.market")
        }}</router-link>
      </li>
      <li :class="$style.route">
        <a :class="$style.link" href="#contacts" v-smooth-scroll>{{
          t("navigation.contacts")
        }}</a>
      </li>
    </ul>
  </nav>
</template>

<style module lang="postcss">
.navigation {
  background: #dbf0ea;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
}

.routes {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  max-width: 1280px;
}

.route {
  margin: 0 20px;
}

.link {
  padding: 20px;
  display: block;
  text-decoration: none;
  color: #0e6273;
  transition: color 250ms ease;
  white-space: nowrap;

  &:hover {
    color: #e18611;
  }
}

@media only screen and (max-width: 1024px) {
  .navigation {
    background: #dbf0ea;
    font-size: 1.25rem;
    display: flex;
    justify-content: center;
  }

  .route {
    margin: 0;
  }
}
</style>
