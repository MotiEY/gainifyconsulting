import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://motisadot.com',
  integrations: [
    sitemap({
      // campaign landing page: shared by link only, expires 29.10.2026
      filter: (page) => !page.endsWith('/90/'),
    }),
  ],
});
