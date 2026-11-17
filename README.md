# Owen Nsofu — Portfolio

Personal portfolio website of Owen Nsofu, a software engineer based in Lusaka, Zambia, building web and mobile apps with React, Node.js and Flutter.

**Live site:** [owennsofu.com](https://owennsofu.com)

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — intro, highlights and calls to action |
| `/about` | Experience, education and certifications |
| `/services` | Mobile apps, websites, design, IT support and AI features |
| `/projects` | Portfolio of apps and websites |
| `/projects/:slug` | Detail page for each project |
| `/skills` | Technical skills |
| `/blog` | Latest posts pulled from Substack |
| `/contact` | Contact form (EmailJS) and WhatsApp link |

## Tech stack

- **React 18** + **TypeScript**, bundled with **Vite 6** (SWC)
- **Tailwind CSS** for styling
- **Framer Motion** for page transitions and animations (respects reduced-motion)
- **React Router 7** for client-side routing
- **react-helmet-async** for per-page SEO tags
- **EmailJS** for the contact form
- **vite-plugin-sitemap** for `sitemap.xml`

## SEO and build extras

Configured in `vite.config.ts`:

- **Per-page HTML** — at build time, a static `index.html` is written for every page (including each project) with its title, description, canonical URL and Open Graph/Twitter tags baked in, so link previews and crawlers work without JavaScript. Page metadata lives in `src/seo.ts`.
- **Substack feed** — the blog feed is fetched at build time and shipped as `blog-feed.xml` (and proxied live during `npm run dev`), since Substack's feed has no CORS headers.
- **Sitemap** — generated for `https://owennsofu.com` from the built pages.

## Project structure

```
src/
├── App.tsx              # Providers (Helmet, MotionConfig)
├── HomeWrapper.tsx      # Router and routes
├── seo.ts               # Page titles/descriptions (single source of truth)
├── constants/           # Shared colours
├── assets/              # Images and CV
└── components/
    ├── Data/            # Site content: projects, services, experience, etc.
    ├── Home/ About/ Service/ Project/ Skills/ Blog/ Contact/ Client/
    ├── Header/ Footer/
    └── ui/              # Reusable pieces (Section, CtaBand, WhatsAppButton…)
public/                  # Static files: logo, OG image, robots.txt, app-ads.txt
```

To update content such as projects or services, edit `src/components/Data/Data.ts` and `src/components/Data/projectDetails.ts`.

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev        # start the dev server
npm run build      # type-check and build to dist/
npm run preview    # preview the production build
npm run lint       # run ESLint
npm run typecheck  # run the TypeScript compiler
```

## Deployment

The site builds to `dist/` and is set up as a single-page app with history-API fallback:

- **Netlify** — `netlify.toml` (SPA redirect and sitemap headers)
- **Firebase Hosting** — `firebase.json` (serves `dist`, rewrites to `index.html`)

## Contact

- Website: [owennsofu.com](https://owennsofu.com)
- Blog: [owennsofu.substack.com](https://owennsofu.substack.com)
