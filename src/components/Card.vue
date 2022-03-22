<template>
  <div :class="$style.card">
    <slot></slot>
  </div>
</template>


<style lang="postcss" module>
.card {
  background: #fff;
  padding: 40px;
  margin-top: 20px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 1.25rem;
}

@media only screen and (max-width: 1024px) {
  .card {
    padding: 20px;
  }
}
</style>