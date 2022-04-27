<script setup lang="ts">
// Accordion
import {
  VueCollapsiblePanelGroup,
  VueCollapsiblePanel,
} from "@dafcoe/vue-collapsible-panel";
import "@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css";

import requirements from "../../data/lists/requirements.json";
</script>

<template>
  <vue-collapsible-panel-group accordion :class="$style.accordion">
    <vue-collapsible-panel :expanded="false" v-for="category in requirements">
      <template #title>{{ category.name }}</template>
      <template #content>
        <ul>
          <li v-for="item in category.items">
            {{ item }}
          </li>
        </ul>
      </template>
    </vue-collapsible-panel>
  </vue-collapsible-panel-group>
</template>

<style lang="postcss" module>
/* Accordion */
.accordion {
  --base-color: red !important;
  --border-color: rgb(var(--primary-color)) !important;
  --bg-color-header: rgb(var(--primary-color)) !important;
  --bg-color-header-hover: rgb(var(--primary-lighten-color)) !important;
  --bg-color-header-active: rgb(var(--primary-color)) !important;
  --bg-color-body: rgb(var(--on-primary-color)) !important;

  & header {
    color: rgb(var(--on-primary-color)) !important;
    height: 70px !important;
  }
}
</style>
