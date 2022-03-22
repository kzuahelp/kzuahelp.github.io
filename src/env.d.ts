/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Vue Leaflet
// https://github.com/vue-leaflet/vue-leaflet
declare module '@vue-leaflet/vue-leaflet'
declare module 'leaflet/dist/leaflet-src.esm'

// Accordion
declare module '@dafcoe/vue-collapsible-panel';