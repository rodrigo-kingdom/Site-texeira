// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// No GitHub Pages, o workflow (.github/workflows/deploy.yml) informa a URL e o caminho base.
// Sem domínio próprio: https://<usuario>.github.io + /<repositorio>. Com domínio: base vazia.
// Localmente, vale o domínio final.
const site = process.env.SITE_URL || 'https://despachanteteixeira.com.br';
// barra final evita URL duplicada no sitemap ("/Site" e "/Site/")
const base = `${(process.env.BASE_PATH || '').replace(/\/$/, '')}/`;

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  // one page: CSS embutido no HTML elimina a requisição que bloqueia a renderização
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
