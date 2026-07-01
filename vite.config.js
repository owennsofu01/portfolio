import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://owennsofu.com',
      // Single-page app: only "/" is a real route, every other section is
      // an anchor on that same page, so only "/" belongs in the sitemap.
      routes: ['/'],
      transform(route) {
        return {
          loc: route,
          lastmod: new Date().toISOString().split('T')[0],
          changefreq: 'monthly',
          priority: 1.0,
        };
      },
    }),
  ],
  assetsInclude: ['**/*.JPG'],
});
