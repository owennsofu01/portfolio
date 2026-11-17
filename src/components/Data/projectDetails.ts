// Case-study content for each project, keyed by project id in Data.ts.
// Plain data (no image imports) so vite.config.ts can also read it to build
// per-project SEO pages. Facts come from the CV and the project descriptions.

export interface ProjectDetail {
  slug: string;
  title: string;
  tagline: string;          // one line, also used as the SEO description
  overview: string;
  features: string[];
  role: string;
  platform: string;
  year?: string;
}

export const projectDetails: Record<number, ProjectDetail> = {
  18: {
    slug: "hush-tms",
    title: "Hush TMS",
    tagline: "A time management platform for BPO teams: attendance, scheduling, leave and productivity in one place.",
    overview:
      "BPO teams need clear visibility into who is working, when, and how productively. Hush TMS brings attendance, shift scheduling, leave and productivity tracking together in one web platform for Hush Solutions Limited, with a desktop tracker for Windows.",
    features: [
      "Attendance tracking with live clock-in status",
      "Work and shift scheduling",
      "Leave management",
      "Task and productivity management, including a Windows desktop tracker",
    ],
    role: "Software Engineer at Hush Solutions Limited",
    platform: "Web",
    year: "2025 – present",
  },
  19: {
    slug: "acig-zambia",
    title: "ACIG Zambia",
    tagline: "Corporate website for the Africa Center for Innovative Governance, built at Hush Solutions.",
    overview:
      "A corporate website presenting ACIG's mission, programs and work across Africa. The focus was a clean, structured layout that reads well on any device and makes the content easy to navigate.",
    features: [
      "Clean, structured page layout",
      "Fully responsive across phones, tablets and desktops",
      "Content organised for clarity and quick scanning",
    ],
    role: "Software Engineer at Hush Solutions Limited",
    platform: "Web",
  },
  1: {
    slug: "estateease",
    title: "EstateEase",
    tagline: "A real estate app for listing, buying and renting property, published on the App Store and Google Play.",
    overview:
      "EstateEase connects people looking for property with owners and agents. Listings update in real time, and buyers can search by location and contact owners directly in the app.",
    features: [
      "Property listing, buying and renting",
      "Real-time data sync with Firebase",
      "Location-based search and filtering with Google Maps",
      "In-app messaging and calls with property owners",
      "A modern, intuitive interface focused on usability",
    ],
    role: "Design and development",
    platform: "iOS and Android",
  },
  2: {
    slug: "crop-disease-detection",
    title: "Crops Diseases Detection & Diagnosis",
    tagline: "A mobile app that detects crop diseases from photos using CNN and SVM models, with an AI chatbot for advice.",
    overview:
      "Farmers often can't get an expert to look at a sick plant quickly. This app classifies crop diseases from a photo and pairs the result with an AI chatbot that explains the disease and suggests treatment.",
    features: [
      "Image-based disease detection using CNN and SVM models",
      "AI chatbot with disease information and treatment advice",
      "Mobile app built with Flutter, models trained in Python and TensorFlow",
    ],
    role: "Design, development and model training",
    platform: "Mobile",
  },
  3: {
    slug: "gloriousworld-logo-poster",
    title: "GloriousWorld Logo Poster",
    tagline: "A logo poster capturing GloriousWorld's brand with bold typography and modern visuals.",
    overview: "A promotional poster built around the GloriousWorld logo, using bold typography and modern visuals for promotional use.",
    features: ["Brand-led layout around the logo", "Bold typography", "Prepared for digital and print"],
    role: "Graphic design",
    platform: "Print and digital",
  },
  4: {
    slug: "gloriousworld-poster",
    title: "GloriousWorld Poster",
    tagline: "A promotional poster highlighting GloriousWorld's mission with vibrant imagery and clean design.",
    overview: "A promotional poster that communicates GloriousWorld's mission through vibrant imagery and a clean, readable layout.",
    features: ["Vibrant, on-brand imagery", "Clear information hierarchy", "Prepared for digital and print"],
    role: "Graphic design",
    platform: "Print and digital",
  },
  5: {
    slug: "kachimfya-store-poster",
    title: "Kachimfya's Store Poster",
    tagline: "An eye-catching store poster combining modern design with local flair to attract customers.",
    overview: "A promotional poster for Kachimfya's Store, mixing modern design with local flair to draw customers in.",
    features: ["Eye-catching promotional layout", "Local, recognisable style", "Prepared for print and social media"],
    role: "Graphic design",
    platform: "Print and digital",
  },
  6: {
    slug: "owenito-portfolio",
    title: "Owenito Portfolio Website",
    tagline: "A responsive portfolio website built with React, Tailwind CSS and Framer Motion.",
    overview: "A portfolio website built to showcase my skills and projects with modern web technologies.",
    features: ["Responsive layout for every screen size", "Animated sections with Framer Motion", "Project and skills showcase"],
    role: "Design and development",
    platform: "Web",
  },
  7: {
    slug: "gamehub",
    title: "Owenito Game Hub",
    tagline: "A multi-game mobile app with Art Puzzle, Word Search, Emoji Expression and Memory Match.",
    overview: "GameHub bundles several brain-training games into one app for all ages, tuned for smooth animations and a responsive interface.",
    features: [
      "Art Puzzle, Word Search, Emoji Expression and Memory Match games",
      "Optimised UI responsiveness and animations",
      "Published on the App Store and Google Play",
    ],
    role: "Design and development",
    platform: "iOS and Android",
  },
  8: {
    slug: "mindbench",
    title: "MindBench",
    tagline: "An AI-powered academic planner with flashcards, reminders and study assistance.",
    overview:
      "MindBench helps students plan, revise and stay focused. It combines planning tools with OpenAI-powered study assistance for more personal learning.",
    features: [
      "Flashcards and study reminders",
      "OpenAI integration for personalised learning and study help",
      "Note summarisation and a Pomodoro study timer",
      "Clean, distraction-free interface",
    ],
    role: "Design and development",
    platform: "iOS and Android",
  },
  9: {
    slug: "postgenza",
    title: "PostGenZA",
    tagline: "An AI social media post generator: turn text, images or voice notes into ready-to-post content.",
    overview:
      "PostGenZA helps people create social media content faster. Users give it text, images or a voice message and the AI produces tailored posts they can preview and schedule.",
    features: [
      "AI-generated posts from text, images or voice",
      "Preview and scheduling",
      "Scalable backend with a modern React frontend",
    ],
    role: "Design and development",
    platform: "Web",
    year: "In progress",
  },
  10: {
    slug: "clock-tower-gems",
    title: "Clock Tower Gems",
    tagline: "A gemstone business website for Clocktower Gemstone Trading Ltd, built at Hush Solutions.",
    overview:
      "A business website presenting Clocktower Gemstone Trading's gemstones to international markets, with responsive layouts and product showcasing.",
    features: ["Product showcasing", "Responsive layouts", "Built with React, Node.js, Prisma and PostgreSQL"],
    role: "Software Engineer at Hush Solutions Limited",
    platform: "Web",
  },
  11: {
    slug: "hush-bpo-services",
    title: "Hush BPO Services",
    tagline: "The company website for Hush Solutions Limited, built with React and Node.js in TypeScript.",
    overview: "The public website for Hush Solutions Limited, presenting its BPO and software services.",
    features: ["Service pages for BPO and software offerings", "Built with React.js and Node.js in TypeScript", "Responsive design"],
    role: "Software Engineer at Hush Solutions Limited",
    platform: "Web",
  },
  12: {
    slug: "scantix",
    title: "ScanTix",
    tagline: "Effortless event check-in: QR ticket scanning and attendee management for events of any size.",
    overview: "ScanTix helps event organisers and their teams check guests in quickly by scanning QR tickets and managing attendees.",
    features: ["QR code ticket scanning", "Attendee management", "Built with React, Node.js and MySQL"],
    role: "Development",
    platform: "Web",
  },
  13: {
    slug: "carlynk",
    title: "CarLynk",
    tagline: "A car marketplace for buying and selling cars in Zambia, on the App Store and Google Play.",
    overview:
      "CarLynk (formerly ZamCar Deals) connects car buyers and sellers. Buyers browse listings with photos, prices and map locations; sellers manage their listings and talk to buyers directly.",
    features: [
      "Listings with photos, pricing and location on a map",
      "Browse by brand; search by price, location or type",
      "Favourites and new-listing notifications",
      "In-app messaging, one-tap calling and multi-currency support",
      "Seller tools to add and manage listings",
    ],
    role: "Design and development",
    platform: "iOS, Android and web",
  },
  14: {
    slug: "farmguard-ai",
    title: "FarmGuard AI",
    tagline: "A smart farming app with photo-based tomato disease detection, weather and a farmers' marketplace.",
    overview: "FarmGuard AI puts practical tools in farmers' pockets: diagnose plant disease from a photo, check the weather, and buy or sell produce.",
    features: [
      "Image-based tomato disease detection from uploaded photos",
      "Weather overview",
      "Marketplace for farmers to buy and sell produce",
    ],
    role: "Design and development",
    platform: "iOS and Android",
  },
  15: {
    slug: "bible-gamehive",
    title: "Bible GameHive",
    tagline: "A free Bible trivia and games app with Kid Mode, two translations and progress tracking. No ads.",
    overview:
      "Bible GameHive makes learning scripture engaging for every age, with themed trivia, difficulty levels and a Kid Mode with narrated prompts.",
    features: [
      "Themed categories and four difficulty levels",
      "King James and World English translations",
      "Kid Mode with narrated prompts, plus accessibility settings",
      "Streaks, badges and a 66-book completion map",
      "Free, with no ads",
    ],
    role: "Design and development",
    platform: "iOS",
  },
  16: {
    slug: "profitpulse",
    title: "ProfitPulse",
    tagline: "A sales and expense tracker that shows small sellers their real profit.",
    overview:
      "ProfitPulse helps small sellers record products, sales and expenses, and see exactly where they make or lose money.",
    features: [
      "Record products, sales and expenses",
      "Dashboard with daily and monthly totals and a 7-day sales vs expenses chart",
      "Product insights: profitable, loss-making or not sold; stock cost and expected profit",
      "Shareable reports by day, week, month or custom range",
    ],
    role: "Design and development",
    platform: "iOS",
  },
  17: {
    slug: "homeguard",
    title: "HomeGuard",
    tagline: "A household bills and budget app with subscription reminders, spending insights and pantry management.",
    overview: "HomeGuard keeps household finances under control: never miss a bill or a free-trial deadline, and see where the money goes.",
    features: [
      "Bills and subscriptions with due dates and free-trial reminders",
      "Subscriptions manager with cancel links and a mark-as-reviewed workflow",
      "Spending insights and budgets",
      "Pantry and recipe management",
    ],
    role: "Design and development",
    platform: "iOS",
  },
};

export const detailBySlug = (slug: string) => {
  const entry = Object.entries(projectDetails).find(([, d]) => d.slug === slug);
  return entry ? { id: Number(entry[0]), detail: entry[1] } : undefined;
};
