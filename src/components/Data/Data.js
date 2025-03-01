import service1 from "../../assets/mobile.jpg";
import service2 from "../../assets/web.jpg";
import service3 from "../../assets/desi.jpg";
import service4 from "../../assets/sup.jpg";
import image2 from "../../assets/est.jpg";

export const projectData = [
  {
    id: 1,
    image: image2,
    title: "EstateEase",
    description:
      "EstateEase is a real estate app that connects clients with property owners. Owners can list properties such as houses, land, and shops, specifying whether they are for sale or rent. Clients can browse properties based on their status and directly communicate with owners via in-app messaging or phone calls.",
    technologies: ["Flutter", "Dart", "Firebase", "Google Cloud Api"],
    link: "https://play.google.com/store/apps/details?id=com.owennsofu.business",
  },
  {
    id: 2,
    image: image2,
    title: "Crops Diseases Detection & Diagnosis",
    description:
      "This app helps farmers detect and diagnose crop diseases using a custom convolutional neural network (CNN) model, enhanced with a support vector machine (SVM) algorithm. Additionally, the app features an AI-powered chatbot, trained to provide information on identified diseases and recommended treatments, making it a valuable tool for farmers seeking agricultural guidance.",
    technologies: ["Flutter", "Dart", "Python", "TensorFlow", "Firebase"],
    link: "https://github.com/Owen123Nsofu/cropdetection.git",
  },
];

export const serviceData = [
  {
    id: 1,
    image: service1,
    title: "Mobile Development",
    description:
      "We specialize in building high-performance mobile applications using Flutter and Dart, ensuring seamless user experience across Android and iOS platforms.",
    technologies: ["Flutter", "Dart", "Firebase", "Postgres"],
  },
  {
    id: 2,
    image: service2,
    title: "Web Development",
    description:
      "Crafting modern and responsive websites with clean UI/UX, utilizing a variety of web technologies to bring your ideas to life.",
    technologies: ["JavaScript", "Python", "PHP", "HTML", "CSS", "MySQL"],
  },
  {
    id: 3,
    image: service3,
    title: "Graphics Design",
    description:
      "Bringing creativity to life through stunning visual designs using industry-standard tools like Adobe Photoshop, Illustrator, and Canva.",
    technologies: ["Adobe Photoshop", "Illustrator", "Canva"],
  },
  {
    id: 4,
    image: service4,
    title: "IT Support",
    description:
      "Providing professional IT support, including network setup, troubleshooting, software installation, and system maintenance for businesses and individuals.",
    technologies: ["Hardware Troubleshooting", "Network Setup", "Software Installation"],
  },
  {
    id: 5,
    category: "Machine Learning & AI",
    description:
      "Skilled in developing AI-powered solutions, including image classification models for disease detection. Experienced in using TensorFlow and implementing AI chatbots for automation.",
    technologies: ["Python", "TensorFlow", "Support Vector Machine (SVM)", "CNN"],
  },
];

export const skillsData = [
  {
    id: 1,
    category: "Programming Languages",
    skills: [
      { name: "Dart", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "PHP", level: 75 },
    ],
  },
  {
    id: 2,
    category: "Mobile Development",
    skills: [
      { name: "Flutter", level: 90 },
      { name: "Firebase", level: 85 },
      { name: "Google Cloud API", level: 80 },
      { name: "PostgreSQL", level: 75 },
    ],
  },
  {
    id: 3,
    category: "Web Development",
    skills: [
      { name: "React.js", level: 90 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    id: 4,
    category: "Machine Learning & AI",
    skills: [
      { name: "TensorFlow", level: 80 },
      { name: "Support Vector Machine (SVM)", level: 75 },
      { name: "CNN", level: 70 },
    ],
  },
  {
    id: 5,
    category: "Graphics Design",
    skills: [
      { name: "Adobe Photoshop", level: 85 },
      { name: "Illustrator", level: 80 },
      { name: "Canva", level: 90 },
    ],
  },
  {
    id: 6,
    category: "IT Support",
    skills: [
      { name: "Hardware Troubleshooting", level: 85 },
      { name: "Network Setup", level: 80 },
      { name: "Software Installation", level: 85 },
    ],
  },
  {
    id: 7,
    category: "Version Control & Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Figma", level: 80 },
    ],
  },
];

export const workData = [
  {
    id: 1,
    title: "Experience",
    description: "1 Year Experience",
  },
  {
    id: 2,
    title: "Completed Projects",
    description: "2 Projects",
  },
];
