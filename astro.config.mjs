import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://motisadot.com',
  integrations: [
    sitemap({
      // link-only pages: /90 (campaign, expires 29.10.2026) /ai and /derech
      filter: (page) => !page.endsWith('/90/') && !page.endsWith('/ai/') && !page.endsWith('/derech/'),
    }),
  ],
});
