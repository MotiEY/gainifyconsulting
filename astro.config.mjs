import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://motisadot.com',
  integrations: [
    sitemap({
      // link-only pages: shared by link, kept out of the sitemap (/90 campaign, /ai, /derech)
      filter: (page) => !['/90/', '/ai/', '/derech/'].some((p) => page.endsWith(p)),
    }),
  ],
});
