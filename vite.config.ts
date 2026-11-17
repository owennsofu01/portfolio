import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import sitemap from 'vite-plugin-sitemap';
import { allPages, SITE_URL } from './src/seo';

const SUBSTACK_FEED = 'https://owennsofu.substack.com/feed';
const FEED_FILE = 'blog-feed.xml';

// Substack's feed can't be read from the browser (no CORS headers), and the
// rss2json relay now sits behind a Cloudflare bot check. So we ship a copy of
// the feed with the site: fetched at build time, and live during `vite dev`.
function substackFeed(): Plugin {
  return {
    name: 'substack-feed',
    configureServer(server) {
      server.middlewares.use(`/${FEED_FILE}`, async (_req, res) => {
        try {
          const feed = await fetch(SUBSTACK_FEED);
          res.setHeader('Content-Type', 'application/xml');
          res.end(await feed.text());
        } catch {
          res.statusCode = 502;
          res.end();
        }
      });
    },
    async generateBundle() {
      try {
        const feed = await fetch(SUBSTACK_FEED);
        if (!feed.ok) throw new Error(`HTTP ${feed.status}`);
        this.emitFile({ type: 'asset', fileName: FEED_FILE, source: await feed.text() });
      } catch (err) {
        this.warn(`Could not fetch Substack feed, blog will rely on rss2json: ${err}`);
      }
    },
  };
}

// Writes dist/<page>/index.html with that page's title, description, canonical
// and social tags baked in. Link previews (LinkedIn, WhatsApp, Facebook) and
// crawlers read these without running JavaScript; React takes over after load.
function perPageHtml(): Plugin {
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  return {
    name: 'per-page-html',
    apply: 'build',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const index = bundle['index.html'];
      if (!index || index.type !== 'asset') return;
      const base = String(index.source);
      for (const page of allPages) {
        const url = `${SITE_URL}${page.path}`;
        const t = esc(page.title), d = esc(page.description);
        const html = base
          .replace(/<title data-rh="true">[^<]*<\/title>/, `<title data-rh="true">${t}</title>`)
          .replace(/(<meta data-rh="true" name="description" content=")[^"]*"/, `$1${d}"`)
          .replace(/(<link data-rh="true" rel="canonical" href=")[^"]*"/, `$1${url}"`)
          .replace(/(<meta data-rh="true" property="og:title" content=")[^"]*"/, `$1${t}"`)
          .replace(/(<meta data-rh="true" property="og:description" content=")[^"]*"/, `$1${d}"`)
          .replace(/(<meta data-rh="true" property="og:url" content=")[^"]*"/, `$1${url}"`)
          .replace(/(<meta data-rh="true" name="twitter:title" content=")[^"]*"/, `$1${t}"`)
          .replace(/(<meta data-rh="true" name="twitter:description" content=")[^"]*"/, `$1${d}"`);
        if (page.path === '/') index.source = html;
        else this.emitFile({ type: 'asset', fileName: `${page.path.slice(1)}/index.html`, source: html });
      }
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    substackFeed(),
    perPageHtml(),
    sitemap({
      hostname: 'https://owennsofu.com',
      // Pages are discovered from the per-page HTML files (perPageHtml)
      lastmod: new Date(),
      changefreq: 'monthly',
      priority: 1.0,
    }),
  ],
  assetsInclude: ['**/*.JPG'],
});
