import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// The site is served from a project page, so every built asset path is
// prefixed with the repository name. Without `base`, Astro emits `/_astro/...`,
// which resolves against the domain root and 404s: the page loads unstyled.
// `site` is separate and gives absolute URLs for canonical links and sitemaps.
export default defineConfig({
  site: 'https://lfx-talent-angels.github.io',
  base: '/TA-site',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
