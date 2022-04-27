export {};

import "vue-router";

declare module "vue-router" {
  interface FrontmatterData {
    title: string;
    description: string;
    author: string;
    cost: string;
  }

  interface Alternate {
    locale: string;
    path: string;
  }

  interface RouteMeta {
    frontmatter?: FrontmatterData;
    layout?: string;
    article?: string;
    locale?: string;
    date?: string;
    time?: string;
    place?: string;
    dir?: string;
    slug?: string;
    alternate?: Alternate;
    category?: string;
  }
}
