<script lang="ts" setup>
//// Leaflet
import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet"
const attribution = '<a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> | <a target="_blank" href="https://osmand.net/">OsmAnd</a>'
</script>

<template>
  <l-map
    ref="map"
    :zoom="15"
    :minZoom="9"
    :maxZoom="19"
    :options="{
      scrollWheelZoom: false
    }"
    :center="[51.14916, 71.40489]"
  >
    <l-tile-layer url="https://tile.osmand.net/hd/{z}/{x}/{y}.png" :attribution="attribution" />
    <l-marker :lat-lng="[51.14916, 71.40489]"></l-marker>
  </l-map>
</template>