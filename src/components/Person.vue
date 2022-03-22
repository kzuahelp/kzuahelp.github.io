<script lang="ts" setup>
//// Components
import Card from './Card.vue'

//// Properties
defineProps<{
  name: string,
  position: string,
  avatar: string,
  action: string
}>();
</script>

<template>
  <Card>
    <div :class="$style.profile">
      <div :class="$style.avatar">
        <img :src="avatar" :alt="name" />
      </div>
      <div :class="$style.description">
        <div :class="$style.name">{{ name }}</div>
        <div :class="$style.position">{{ position }}</div>
      </div>
    </div>
    <div :class="$style.action">{{ action }}</div>
  </Card>
</template>

<style lang="postcss" module>
.profile {
  display: flex;
  align-items: center;
}

.name {
  font-weight: 600;
}

.action {
  margin-top: 20px;
}

.avatar {
  width: 64px;
  height: 64px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 20px;
  flex-shrink: 0;

  & img {
    display: block;
    width: 100%;
  }
}
</style>