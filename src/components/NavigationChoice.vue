<script lang="ts" setup>
//// Properties
defineProps<{
  step: number,
  title: string,
  link: string
}>()
</script>

<template>
  <li :class="$style.choice">
    <a :href="link" :class="$style.button">
      <div :class="$style.step">{{ step }}</div>
      <div :class="$style.title">{{ title }}</div>
    </a>
  </li>
</template>

<style lang="postcss" module>
.step {
  font-size: 80px;
  line-height: 1;
  color: rgb(var(--on-primary-color), 0.9);
}

.button {
  box-sizing: border-box;
  width: 100%;
  padding: 10px 20px;
  background: rgb(var(--primary-color));
  border-radius: 8px;
  /* background: #eee; */
  position: relative;
  text-decoration: none;
  color: rgb(var(--on-primary-color), 0.95);
  display: flex;
  align-items: center;
  transition: background-color 250ms ease;

  &:hover {
    background: rgb(var(--accent-color));
  }
}

.title {
  font-size: 1.5rem;
  line-height: 1;
  margin-left: 20px;
}

@media only screen and (max-width: 1024px) {
  .choice {
    margin-top: 10px;
  }
  .step {
    font-size: 3rem;
  }
  .button {
    border-radius: 4px;
  }
}
</style>
