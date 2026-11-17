// Single source of truth for page titles/descriptions.
// Used by the app (react-helmet-async) and by the build step in vite.config.ts,
// which writes a static HTML file per page so link previews and crawlers see
// the right title/description without running JavaScript.

import { projectDetails } from "./components/Data/projectDetails";

export const SITE_URL = "https://owennsofu.com";
export const SITE_NAME = "Owen Nsofu";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export interface PageSeo {
  path: string;
  title: string;
  description: string;
}

export const pages: Record<string, PageSeo> = {
  home: {
    path: "/",
    title: "Owen Nsofu | Software Engineer in Lusaka, Zambia",
    description:
      "Owen Nsofu is a software engineer in Lusaka, Zambia building web and mobile apps with React, Node.js and Flutter. 8 apps published on the App Store and Google Play.",
  },
  about: {
    path: "/about",
    title: "About Owen Nsofu | Software Engineer",
    description:
      "Experience, education and certifications of Owen Nsofu: Software Engineer at Hush Solutions, founder of Owenito Innovations, BSc Computer Science (Mulungushi University).",
  },
  services: {
    path: "/services",
    title: "Services | Mobile Apps, Websites & AI | Owen Nsofu",
    description:
      "Mobile app development with Flutter, websites and web apps with React and Node.js, graphic design, IT support and AI features. Based in Lusaka, available worldwide.",
  },
  projects: {
    path: "/projects",
    title: "Projects | Apps & Websites by Owen Nsofu",
    description:
      "Apps on the App Store and Google Play (CarLynk, EstateEase, MindBench, FarmGuard AI and more), websites like Hush TMS and ACIG Zambia, and design work.",
  },
  skills: {
    path: "/skills",
    title: "Skills & Tech Stack | Owen Nsofu",
    description:
      "Languages, frameworks and tools Owen Nsofu works with: React, TypeScript, Flutter, Dart, Node.js, Prisma, PostgreSQL, Firebase, Google Cloud, Vercel and more.",
  },
  blog: {
    path: "/blog",
    title: "Blog | Owen Nsofu",
    description:
      "Short reflections from Owen Nsofu on growth, faith, consistency and building things, published on Substack.",
  },
  contact: {
    path: "/contact",
    title: "Contact Owen Nsofu | Hire a Software Engineer",
    description:
      "Get in touch with Owen Nsofu about a mobile app, website or role. Email, phone or WhatsApp; replies within 24 hours.",
  },
};

// One page per project case study (/projects/<slug>)
export const projectPages: PageSeo[] = Object.values(projectDetails).map((d) => ({
  path: `/projects/${d.slug}`,
  title: `${d.title} | Project by Owen Nsofu`,
  description: d.tagline,
}));

export const allPages: PageSeo[] = [...Object.values(pages), ...projectPages];
