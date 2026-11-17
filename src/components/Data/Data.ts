import service1 from "../../assets/opt/mobile.jpeg";
import image2 from "../../assets/est.jpg";
import image1 from "../../assets/crop.jpg";
import image5 from "../../assets/opt/kachi.jpg";
import image3 from "../../assets/gwlogo.jpg";
import image4 from "../../assets/opt/nevers.jpg";
import image6 from "../../assets/opt/web.jpg";
import image8 from "../../assets/game.jpg";
import image7 from "../../assets/opt/mindbench.png";
import image9 from "../../assets/opt/postai.jpg";
import image10 from "../../assets/opt/hush.jpg";
import image11 from "../../assets/opt/gems.jpg";
import image12 from "../../assets/scan.jpg";
import image13 from "../../assets/opt/car.jpeg";
// TODO: add these images to src/assets/
import image14 from "../../assets/opt/farmguard.png";
import image15 from "../../assets/opt/biblegamehive.png";
import image16 from "../../assets/opt/profitpulse.png";
import image17 from "../../assets/opt/household.png";
import image18 from "../../assets/opt/hushtms.jpg";
import image19 from "../../assets/opt/acigzambia.jpg";
import {
  FaUserTie,
  FaAward,
  FaHandshake,
  FaStar,
  FaGamepad,
  FaMusic,
  FaFutbol,
  FaCode,
  FaBook,

} from "react-icons/fa";

// Hobbies Data
export const hobbies = [
  { icon: FaGamepad, name: "Gaming", color: "#3B82F6" },
  { icon: FaMusic, name: "Music", color: "#10B981" },
  { icon: FaFutbol, name: "Soccer", color: "#F59E0B" },
  { icon: FaCode, name: "Coding", color: "#EF4444" },
  { icon: FaBook, name: "Reading Books", color: "#8B5CF6" }
];

// Education Data
export const education = [
  {
    degree: "BSc in Computer Science",
    institution: "Mulungushi University",
    period: "2020 - 2024",
    description:
      "Comprehensive study of computer science fundamentals, programming, and software development."
  },
  {
    degree: "Grade 12 Certificate",
    institution: "Sathya Sai Trust School",
    period: "2017 - 2019",
    description:
      "Secondary education completion with focus on science and mathematics."
  },
  {
    degree: "Grade 9 Certificate",
    institution: "Twatasha Primary School",
    period: "2015 - 2016",
    description: "Primary education foundation with core academic subjects."
  }
];

// Certifications Data
export const certifications = [
  {
    name: "Certificate in Cloud Computing",
    issuer: "Huawei",
    year: "2024",
    description: "Comprehensive cloud computing technologies and solutions."
  },
  {
    name: "Certificate in Internet of Things",
    issuer: "Huawei",
    year: "2024",
    description: "IoT technologies, protocols, and implementation strategies."
  },
  {
    name: "Certificate in Introduction to Internet of Things",
    issuer: "Cisco",
    year: "2024",
    description: "Fundamentals of IoT networks and connected devices."
  },
  {
    name: "BSc in Computer Science Degree Certificate",
    issuer: "Mulungushi University",
    year: "2024",
    description: "Official degree certification in Computer Science."
  }
];

// Statistics Data
export const statsData = [
  { icon: FaUserTie, value: "5+", label: "Happy Clients", color: "#3B82F6" },
  { icon: FaAward, value: "8+", label: "Projects Completed", color: "#10B981" },
  { icon: FaHandshake, value: "3+", label: "Years Experience", color: "#F59E0B" },
  { icon: FaStar, value: "4.9", label: "Average Rating", color: "#EF4444" }
];

// Projects Data
export const projectData = [
  {
    id: 18,
    image: image18,
    title: "Hush TMS",
    status: "In Progress",
    description:
      "A time management system for BPO teams at Hush Solutions Limited, covering attendance tracking, work scheduling, leave management, and productivity management.",
    technologies: ["React.js", "Node.js", "Prisma", "PostgreSQL"],
    link: "https://hushtms.com",
    category: "Web"
  },
  {
    id: 19,
    image: image19,
    title: "ACIG Zambia",
    description:
      "A corporate website for the Africa Center for Innovative Governance, built at Hush Solutions with a clean, structured layout focused on usability, responsiveness, and content clarity.",
    technologies: ["React.js", "Node.js", "Prisma", "PostgreSQL"],
    link: "https://acigzambia.com",
    category: "Web"
  },
  {
    id: 1,
    image: image2,
    title: "EstateEase",
    description:
      "A real estate app for listing, buying, and renting property. Real-time listings with Firebase, location-based search and filtering with Google Maps, and in-app messaging or calls with owners.",
    technologies: ["Flutter", "Dart", "Firebase", "Google APIs"],
    link: "https://play.google.com/store/apps/details?id=com.owennsofu.business",
    iosLink: "https://apps.apple.com/app/estateease-property-estate/id6789025606",
    category: "Mobile"
  },
  {
    id: 2,
    image: image1,
    title: "Crops Diseases Detection & Diagnosis",
    description:
      "App to detect crop diseases using CNN and SVM models. Includes an AI chatbot for disease info and treatment advice.",
    technologies: ["Flutter", "Dart", "Python", "TensorFlow", "Firebase"],
    link: "https://github.com/Owen123Nsofu/cropdetection.git",
    category: "Mobile"
  },
  {
    id: 3,
    image: image3,
    title: "GloriousWorld Logo Poster",
    description:
      "Creative logo poster capturing GloriousWorld's brand with bold typography and modern visuals for promotional use.",
    technologies: ["Adobe Photoshop"],
    link: image3,
    category: "Graphics"
  },
  {
    id: 4,
    image: image4,
    title: "GloriousWorld Poster",
    description:
      "Promotional poster highlighting GloriousWorld's mission with vibrant imagery and clean design for digital and print.",
    technologies: ["Adobe Photoshop"],
    link: image4,
    category: "Graphics"
  },
  {
    id: 5,
    image: image5,
    title: "Kachimfya's Store Poster",
    description:
      "Eye-catching poster for Kachimfya's Store combining modern design and local flair to attract customers.",
    technologies: ["Adobe Photoshop"],
    link: image5,
    category: "Graphics"
  },
  {
    id: 6,
    image: image6,
    title: "Owenito Portfolio Website",
    description:
      "A professional and responsive portfolio website built with modern web technologies to showcase my skills and projects.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    link: "https://owenitotech.netlify.app/",
    category: "Web"
  },
  {
    id: 7,
    image: image8,
    title: "Owenito Game Hub",
    description:
      "A multi-game mobile app with Art Puzzle, Word Search, Emoji Expression, and Memory Match games, tuned for smooth animations and a responsive UI. Designed for all ages.",
    technologies: ["Flutter", "Dart", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.owennsofu.gamhub",
    iosLink: "https://apps.apple.com/app/gamehive-puzzle-brain-games/id6786838717",
    category: "Mobile"
  },
  {
    id: 8,
    image: image7,
    title: "MindBench",
    description:
      "An AI-powered academic planner that helps students plan, revise, and stay focused, with flashcards, reminders, note summarization, a Pomodoro timer, and OpenAI-powered study assistance.",
    technologies: ["Flutter", "Dart", "Firebase", "OpenAI API", "Google APIs"],
    link: "https://play.google.com/store/apps/details?id=com.owennsofu.mindbench",
    category: "Mobile"
  },
  {
    id: 9,
    image: image9,
    title: "PostGenZA",
    status: "In Progress",
    description:
      "An AI social media post generator. Users input text, upload images, or record voice messages, and the AI produces tailored posts to preview and schedule. Scalable backend with a modern React frontend.",
    technologies: ["Python", "OpenAI API", "Firebase", "React.js"],
    link: "https://postgenza.com",
    category: "Web"
  },
  {
    id: 10,
    image: image11,
    title: "Clock Tower Gems",
    description:
      "A gemstone business website for Clocktower Gemstone Trading Ltd, built at Hush Solutions. Responsive layouts and product showcasing that present the company's gemstones to global markets.",
    technologies: ["React.js", "Node.js", "Prisma", "PostgreSQL"],
    link: "https://clocktowergems.com",
    category: "Web"
  },
  {
    id: 11,
    image: image10,
    title: "Hush BPO Services",
    description:
      "The company website for Hush Solutions Limited, presenting its BPO and software services. Built with React.js and Node.js in TypeScript.",
    technologies: ["React.js", "Node.js", "TypeScript"],
    link: "https://hushbposervices.com",
    category: "Web"
  },
  {
    id: 12,
    image: image12,
    title: "ScanTix",
    description:
      "Effortless event check-in for organizers and their teams. ScanTix streamlines ticket scanning and attendee management for events of any size.",
    technologies: ["React.js", "Node.js", "MySQL", "QR Code Scanning"],
    link: "https://scantix.io",
    category: "Web"
  },
  {
    id: 13,
    image: image13,
    title: "CarLynk",
    description:
      "A car marketplace connecting buyers and sellers across Zambia. Browse by brand, search by price, location, or type, save favourites, get new-listing alerts, chat in-app or call sellers in one tap, with multi-currency support and seller tools to manage listings.",
    technologies: ["Flutter", "Dart", "Firebase", "Google APIs"],
    link: "https://play.google.com/store/apps/details?id=com.owenito.zamcardeals",
    website: "https://car-lynk.com",
    iosLink: "https://apps.apple.com/us/app/carlynk-buy-sell-cars/id6788877603",
    category: "Mobile"
  },
  {
    id: 14,
    image: image14,
    title: "FarmGuard AI",
    description:
      "A smart farming assistant with image-based tomato disease detection from uploaded photos, a weather overview, and a marketplace for farmers to buy and sell produce.",
    technologies: ["Flutter", "Dart", "Firebase", "TensorFlow", "Google ML Kit"],
    link: "",
    iosLink: "https://apps.apple.com/app/farmguard-ai/id6796224010",
    category: "Mobile"
  },
  {
    id: 15,
    image: image15,
    title: "Bible GameHive",
    description:
      "A Bible trivia and games app with themed categories, four difficulty levels, King James and World English translations, a Kid Mode with narrated prompts, and progress tracking with streaks, badges, and a 66-book completion map. Free with no ads.",
    technologies: ["Flutter", "Dart", "Firebase", "Hive"],
    link: "",
    iosLink: "https://apps.apple.com/app/bible-gamehive-quizzes-trivia/id6797326456",
    category: "Mobile"
  },
  {
    id: 16,
    image: image16,
    title: "ProfitPulse",
    description:
      "A sales and expense tracker for small sellers: record products, sales, and expenses, see daily and monthly profit with a 7-day sales vs expenses chart, spot profitable and loss-making products, and share reports for any date range.",
    technologies: ["Flutter", "Dart", "Firebase"],
    link: "",
    iosLink: "https://apps.apple.com/app/profitpulse-sales-expenses/id6797017823",
    category: "Mobile"
  },
  {
    id: 17,
    image: image17,
    title: "HomeGuard",
    description:
      "A household bills and budget app that tracks bills and subscriptions with due dates and free-trial reminders, a subscriptions manager with cancel links, spending insights, budgets, and pantry and recipe management.",
    technologies: ["Flutter", "Dart", "Firebase"],
    link: "",
    iosLink: "https://apps.apple.com/app/homeguard-bills-budget/id6807146276",
    category: "Mobile"
  }
];

// Services Data
export const serviceData = [
  {
    id: 1,
    title: "Mobile Development",
    description:
      "Cross-platform apps in Flutter and Dart, built, tested and published to the App Store and Google Play.",
    color: "#3B82F6"
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Fast, responsive websites and web apps with React, Node.js and PostgreSQL, from company sites to full platforms.",
    color: "#F63B3BFF"
  },
  {
    id: 3,
    title: "Graphics Design",
    description:
      "Posters, social media graphics and brand assets designed in Photoshop, Illustrator and Canva.",
    color: "#41032FFF"
  },
  {
    id: 4,
    title: "IT Support",
    description:
      "Network setup, troubleshooting, software installation and system maintenance for teams and individuals.",
    color: "#77A8F6FF"
  },
  {
    id: 5,
    title: "Machine Learning & AI",
    description:
      "AI features that solve real problems, from image-based disease detection with TensorFlow to OpenAI-powered assistants.",
    color: "#FFE600FF"
  }
];


// Skills Data
export const skillsData = [
  { name: "HTML", level: 95, category: "Frontend" },
  { name: "CSS", level: 80, category: "Frontend" },
  { name: "Flutter", level: 75, category: "Frontend" },
  { name: "React.js", level: 80, category: "Frontend" },
  { name: "React Native", level: 75, category: "Frontend" },
  { name: "JavaScript", level: 75, category: "Frontend" },
  { name: "TypeScript", level: 70, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  { name: "Dart", level: 80, category: "Frontend" },

  { name: "Node.js", level: 75, category: "Backend" },
  { name: "PHP", level: 70, category: "Backend" },
  { name: "Python", level: 80, category: "Backend" },
  { name: "Firebase", level: 85, category: "Backend" },
  { name: "Prisma", level: 75, category: "Backend" },
  { name: "REST APIs", level: 80, category: "Backend" },
  { name: "Google APIs", level: 75, category: "Backend" },
  { name: "OpenAI API", level: 75, category: "Backend" },
  { name: "TensorFlow", level: 65, category: "Backend" },
  { name: "AWS", level: 70, category: "Cloud" },
  { name: "Google Cloud", level: 70, category: "Cloud" },
  { name: "VPS Hosting (Hostinger, Bluehost)", level: 75, category: "Cloud" },
  { name: "Vercel", level: 80, category: "Cloud" },
  { name: "Render", level: 75, category: "Cloud" },

  { name: "MySQL", level: 80, category: "Database" },
  { name: "PostgreSQL", level: 75, category: "Database" },
  { name: "SQLite", level: 80, category: "Database" },

  { name: "Git", level: 80, category: "Tools" },
  { name: "GitHub", level: 80, category: "Tools" },
  { name: "Cursor", level: 90, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
  { name: "Claude AI", level: 90, category: "Tools" },
  { name: "ChatGPT", level: 90, category: "Tools" },
  { name: "DeepSeek", level: 85, category: "Tools" },
  { name: "Gemini", level: 85, category: "Tools" },
  { name: "App Store Connect", level: 85, category: "Tools" },
  { name: "Google Play Console", level: 85, category: "Tools" },
  { name: "Agile/Scrum", level: 70, category: "Tools" },

  { name: "Figma", level: 70, category: "Design" },
  { name: "Canva", level: 90, category: "Design" },
  { name: "Adobe Photoshop", level: 90, category: "Design" },
  { name: "Adobe Illustrator", level: 85, category: "Design" },
  { name: "Adobe InDesign", level: 85, category: "Design" },
  { name: "Affinity Designer", level: 75, category: "Design" }
];

// Work Experience Data (from CV)
export const workData = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Hush Solutions Limited",
    period: "Sep 2025 – Present",
    points: [
      "Developing Hush TMS, a web-based time management system covering attendance, scheduling, leave, and productivity management",
      "Building and maintaining features for the platform at hushtms.com",
      "Built and deployed company websites, including Clock Tower Gems and ACIG Zambia, with React.js, Node.js and PostgreSQL",
    ],
  },
  {
    id: 2,
    title: "Founder",
    company: "Owenito Innovations · Zambia",
    period: "",
    points: [
      "Founded a software and design company building mobile apps, websites, and digital products",
      "Publish and maintain apps on the Apple App Store and Google Play Store",
    ],
  },
  {
    id: 3,
    title: "Freelance Graphic Designer",
    company: "Self-employed",
    period: "Jan 2023 – Present",
    points: [
      "Design posters, social media graphics, and brand assets",
      "Produce promotional visuals and marketing content for apps and businesses",
    ],
  },
  {
    id: 4,
    title: "IT Support Intern",
    company: "Mulungushi University",
    period: "Jan 2023 – Mar 2023",
    points: [
      "Configured and maintained network systems to improve reliability and performance",
      "Installed and supported software, diagnosed hardware issues, and resolved system faults",
      "Managed IT inventory and provided technical support to staff and students",
    ],
  },
];

// Leadership (from CV)
export const leadershipData = [
  { role: "Vice Chairperson", org: "Mulungushi UCZ Fellowship" },
  { role: "Secretary", org: "Sunday School" },
  { role: "Bible Teacher", org: "Teaching and explaining Scripture to church groups" },
];

// Client Testimonials
export const clients = [
  {
    id: 1,
    name: "",
    position: "",
    description: "",
    fullDescription: "",
    image: service1
  }
];