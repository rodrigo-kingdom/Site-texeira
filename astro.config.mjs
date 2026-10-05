// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://despachanteteixeira.com.br',
  integrations: [sitemap()],
  // one page: CSS embutido no HTML elimina a requisição que bloqueia a renderização
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
