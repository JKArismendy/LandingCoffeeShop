// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: cambiar por el dominio real cuando se publique en Vercel.
export default defineConfig({
  site: 'https://cafetonato.com',
  integrations: [sitemap()],
});
