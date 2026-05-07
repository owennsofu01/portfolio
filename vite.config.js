import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://owennsofu.com',
      routes: [
        '/', 
        '/blog', 
        '/services', 
        '/projects', 
        '/contact', 
        '/about', 
        '/client'
      ],
      filename: 'owen-sitemap.xml', // 👈 This renames sitemap.xml
      transform(route) {
        return {
          loc: route,
          lastmod: new Date().toISOString().split('T')[0],
          changefreq: 'monthly',
          priority: route === '/' ? 1.0 : 0.8,
        };
      },
    }),
  ],
  assetsInclude: ['**/*.JPG'],
});
