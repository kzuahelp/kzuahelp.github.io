<script lang="ts" setup>
defineProps<{ number: number, title: string, icon: string }>();
</script>

<template>
  <div :class="$style.actions">
    <div :class="$style.header">
      <div :class="$style.number">{{ number }}</div>
      <div :class="$style.group">
        <svg fill="currentColor" :class="$style.icon" width="48" height="48">
          <use :href="icon" />
        </svg>
        <h3 :class="$style.title">{{ title }}</h3>
      </div>
    </div>

    <div :class="$style.content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="postcss" module>
.header {
  display: flex;
  margin-bottom: 40px;
}

.number {
  width: 160px;
  text-align: center;
  font-size: 200px;
  line-height: 1;
  color: rgb(var(--accent-color));
}

.icon {
  display: block;
  width: 96px;
  height: 96px;
  color: rgb(var(--primary-color));
  margin-top: 10px;
}

.group {
  margin: 20px 0 0;
}

.title {
  margin: 12px 0 0;
  font-size: 2rem;
  line-height: 1.2;
  font-weight: 500;
  color: rgb(var(--primary-color));
}

@media only screen and (max-width: 1024px) {
  .number {
    font-size: 140px;
    width: 100px;
  }
  .icon {
    width: 64px;
    height: 64px;
    margin-top: 0;
  }

  .title {
    font-size: 1.5rem;
    margin-top: 8px;
  }
}
</style>