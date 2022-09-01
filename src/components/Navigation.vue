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
        <router-link :class="$style.link" to="/announcements">{{
            t("navigation.announcements")
        }}</router-link>
      </li>
      <li :class="$style.route">
        <router-link :class="$style.link" to="/news">{{
            t("navigation.news")
        }}</router-link>
      </li>
      <li :class="$style.route">
        <a :class="$style.link" href="https://www.instagram.com/help_ukraine_market/">{{
            t("navigation.market")
        }}</a>
      </li>
      <li :class="$style.route">
        <router-link :class="$style.link" to="/vacancy">{{
            t("navigation.vacancy")
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
}

.routes {
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
  display: flex;
  max-width: 1280px;
  flex-wrap: wrap;
  justify-content: center;
}

.route {
  margin: 0 10px;
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
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
  }

  .route {
    margin: 0;
  }

  .link {
    padding: 20px 10px;
  }
}
</style>
