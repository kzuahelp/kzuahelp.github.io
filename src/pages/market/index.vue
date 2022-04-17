<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed, ref, watch } from "vue";

//// Localization
const { t, locale } = useI18n({
  inheritLocale: true,
});

const items = ref(null);

// TODO: set type
const loadItems = async function () {
  const response = await fetch(`/data/${locale.value}/market/list.json`);
  items.value = await response.json();
};

watch(locale, (value) => {
  loadItems();
});

loadItems();
</script>

<template>
  <main :class="[$style.main, $style.limiter]">
    <div :class="[$style.group, $style.section]">
      <MarketCard
        v-for="item in items"
        :title="item.title"
        :description="item.description"
        :author="item.author"
        :article="item.id"
        :cost="item.cost"
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
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

@media only screen and (max-width: 1024px) {
  .group {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
