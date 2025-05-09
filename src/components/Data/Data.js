import service1 from "../../assets/mobile.jpg";
import service2 from "../../assets/web.jpg";
import service3 from "../../assets/desi.jpg";
import service4 from "../../assets/sup.jpg";
import service5 from "../../assets/mac.jpg";
import image2 from "../../assets/est.jpg";
import image1 from "../../assets/crop.jpg";
import image5 from "../../assets/kachi.png";
import image3 from "../../assets/gwlogo.jpg";
import image4 from "../../assets/nevers.png";

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
    image: image1,
    title: "Crops Diseases Detection & Diagnosis",
    description:
      "This app helps farmers detect and diagnose crop diseases using a custom convolutional neural network (CNN) model, enhanced with a support vector machine (SVM) algorithm. Additionally, the app features an AI-powered chatbot, trained to provide information on identified diseases and recommended treatments, making it a valuable tool for farmers seeking agricultural guidance.",
    technologies: ["Flutter", "Dart", "Python", "TensorFlow", "Firebase"],
    link: "https://github.com/Owen123Nsofu/cropdetection.git",
  },
  {
    id: 3,
    image: image3,
    title: "GloriousWorld Logo Poster",
    description:
      "A creative logo poster designed for GloriousWorld, capturing the brand’s essence through bold typography and modern visual elements. The design emphasizes professionalism and aesthetic appeal, ideal for promotional use.",
    technologies: ["Adobe Photoshop"],
    link: image3,
  },
  {
    id: 4,
    image: image4,
    title: "GloriousWorld Poster",
    description:
      "This promotional poster for GloriousWorld highlights the organization's mission and values using vibrant imagery and clean layout techniques. Designed to enhance brand visibility in both digital and print formats.",
    technologies: ["Adobe Photoshop"],
    link: image4,
  },
  {
    id: 5,
    image: image5,
    title: "Kachimfya's Store Poster",
    description:
      "A vibrant and eye-catching poster designed for Kachimfya's Store to promote products and attract customers. The layout combines modern design trends with localized flair to resonate with the target audience.",
    technologies: ["Adobe Photoshop"],
    link: image5,
  }
  
];

export const serviceData = [
  {
    id: 1,
    image: service1,
    title: "Mobile Development",
    description:
      "We specialize in building high-performance mobile applications using Flutter and Dart, ensuring seamless user experience across Android and iOS platforms.",
   
  },
  {
    id: 2,
    image: service2,
    title: "Web Development",
    description:
      "Crafting modern and responsive websites with clean UI/UX, utilizing a variety of web technologies to bring your ideas to life.",
   
  },
  {
    id: 3,
    image: service3,
    title: "Graphics Design",
    description:
      "Bringing creativity to life through stunning visual designs using industry-standard tools like Adobe Photoshop, Illustrator, and Canva.",
   
  },
  {
    id: 4,
    image: service4,
    title: "IT Support",
    description:
      "Providing professional IT support, including network setup, troubleshooting, software installation, and system maintenance for businesses and individuals.",
   
  },
  {
    id: 5,
    image: service5,
    category: "Machine Learning & AI",
    description:
      "Skilled in developing AI-powered solutions, including image classification models for disease detection. Experienced in using TensorFlow and implementing AI chatbots for automation.",
  }
];

export const skillsData = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 80 },
  { name: "Flutter", level: 75 },
  { name: "React.js", level: 80 },
  { name: "Git", level: 80 },
  { name: "GitHub", level:80 },
  { name: "JavaScript", level: 75 },
  { name: "Firebase", level: 85 },
  { name: "Node.js", level: 75 },
  { name: "Photoshop", level: 85 },
  { name: "Python", level: 80 },
  { name: "PHP", level: 70 },
  { name: "Figma", level: 70 },
  { name: "Canva", level: 90 },
  { name: "MySQL", level: 80 },
];


export const workData = [
  {
    id: 1,
    title: "Experience",
    description: "1+ Year Experience",
  },
  {
    id: 2,
    title: "Happy Client",
    description: "4 Clients",
  },
  {
    id: 3,
    title: "Completed Projects",
    description: "4 Projects",
  },
];
export const blogPosts = [
  {
    id: 1,
    title: "How to Use React Effectively",
    date: "April 10, 2025",
    excerpt: "Learn best practices for building scalable React apps.",
    image: service1, // adjust path based on your setup
    link: "/blog/react-effectively",
  },
  {
    id: 2,
    title: "Understanding JavaScript Closures",
    date: "March 25, 2025",
    excerpt: "A deep dive into one of JavaScript’s most powerful features.",
    image: service1,
    link: "/blog/js-closures",
  },
  {
    id: 3,
    title: "Understanding JavaScript Closures",
    date: "March 25, 2025",
    excerpt: "A deep dive into one of JavaScript’s most powerful features.",
    image: service1,
    link: "/blog/js-closures",
  },
  {
    id: 4,
    title: "Understanding JavaScript Closures",
    date: "March 25, 2025",
    excerpt: "A deep dive into one of JavaScript’s most powerful features.",
    image: service1,
    link: "/blog/js-closures",
  },
  // add more posts as needed
];
// src/components/Data/Data.js

export const clients = [
  {
    id: 1,
    name: "Jane Doe",
    position: "Marketing Manager",
    description: "This company exceeded our expectations with their outstanding service and support.",
    image: "service1" // Adjust path based on your setup
  },
  {
    id: 2,
    name: "John Smith",
    position: "CEO, TechCorp",
    description: "Professional, innovative, and responsive. Highly recommended!",
    image: "service1"
  },
  {
    id: 3,
    name: "Alice Johnson",
    position: "Product Designer",
    description: "A wonderful experience working with the team. Timely delivery and great results.",
    image: service1
  },
  {
    id: 4,
    name: "Michael Brown",
    position: "CTO, FintechX",
    description: "They understood our needs perfectly and delivered beyond our expectations.",
    image: service1
  },
  {
    id: 5,
    name: "Emily White",
    position: "Operations Lead",
    description: "Top-notch work and excellent communication throughout the project.",
    image: service1
  },
  {
    id: 6,
    name: "David Wilson",
    position: "Senior Developer",
    description: "Their team is very skilled and professional. We’ll definitely work with them again.",
    image: service1
  },
];

