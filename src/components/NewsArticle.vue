<template>
  <article :class="$style.article">
    <slot />
  </article>
</template>

<style module lang="postcss">
.article {
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 20px;
}
</style>

<style>
@import "../assets/article.pcss";
</style>
