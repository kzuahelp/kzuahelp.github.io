<script setup lang="ts">
defineProps<{
  title: string;
  id: string;
}>();

const slots = useSlots();
</script>

<template>
  <section :class="$style.section">
    <h2 :class="$style.title" :id="id">{{ title }}</h2>
    <div :class="[$style.group, { [$style.single]: !slots.first || !slots.second }]">
      <div v-if="slots.first" :class="$style.panel">
        <slot name="first"></slot>
      </div>
      <div v-if="slots.second" :class="$style.panel">
        <slot name="second"></slot>
      </div>
    </div>
  </section>
</template>

<style module lang="postcss">
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

.group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.panel {
  font-size: 1.25rem;
  display: flex;
  flex-flow: column;
}

@media only screen and (max-width: 1024px) {
  .group {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

.single {
  grid-template-columns: 1fr;
}
</style>
