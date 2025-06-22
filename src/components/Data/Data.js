import service1 from "../../assets/mobile.jpeg";
import service2 from "../../assets/web.jpeg";
import service3 from "../../assets/desi.jpg";
import service4 from "../../assets/sup.jpg";
import service5 from "../../assets/mac.jpeg";
import image2 from "../../assets/est.jpg";
import image1 from "../../assets/crop.jpg";
import image5 from "../../assets/kachi.png";
import image3 from "../../assets/gwlogo.jpg";
import image4 from "../../assets/nevers.png";
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
  { icon: FaAward, value: "5+", label: "Projects Completed", color: "#10B981" },
  { icon: FaHandshake, value: "1+", label: "Years Experience", color: "#F59E0B" },
  { icon: FaStar, value: "4.9", label: "Average Rating", color: "#EF4444" }
];

// Projects Data
export const projectData = [
  {
    id: 1,
    image: image2,
    title: "EstateEase",
    description:
      "A real estate app connecting clients with property owners. Browse listings and communicate directly via in-app messaging or calls.",
    technologies: ["Flutter", "Dart", "Firebase", "Google Cloud Api"],
    link: "https://play.google.com/store/apps/details?id=com.owennsofu.business",
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
    image: service2,
    title: "Portfolio Website",
    description:
      "Modern responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and professional design.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    link: "#",
    category: "Web"
  }
];

// Services Data
export const serviceData = [
  {
    id: 1,
    image: service1,
    title: "Mobile Development",
    description:
      "We specialize in building high-performance mobile applications using Flutter and Dart, ensuring seamless user experience across Android and iOS platforms.",
    color: "#3B82F6"
  },
  {
    id: 2,
    image: service2,
    title: "Web Development",
    description:
      "Crafting modern and responsive websites with clean UI/UX, utilizing a variety of web technologies to bring your ideas to life.",
    color: "#F63B3BFF"
  },
  {
    id: 3,
    image: service3,
    title: "Graphics Design",
    description:
      "Bringing creativity to life through stunning visual designs using industry-standard tools like Adobe Photoshop, Illustrator, and Canva.",
    color: "#41032FFF"
  },
  {
    id: 4,
    image: service4,
    title: "IT Support",
    description:
      "Providing professional IT support, including network setup, troubleshooting, software installation, and system maintenance for businesses and individuals.",
    color: "#77A8F6FF"
  },
  {
    id: 5,
    image: service5,
    title: "Machine Learning & AI",
    description:
      "Skilled in developing AI-powered solutions, including image classification models for disease detection. Experienced in using TensorFlow and implementing AI chatbots for automation.",
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

  { name: "Node.js", level: 75, category: "Backend" },
  { name: "PHP", level: 70, category: "Backend" },
  { name: "Python", level: 80, category: "Backend" },
  { name: "Firebase", level: 85, category: "Backend" },
  { name: "AWS", level: 70, category: "Cloud" },
  { name: "Google Cloud", level: 70, category: "Cloud" },

  { name: "MySQL", level: 80, category: "Database" },
  { name: "PostgreSQL", level: 75, category: "Database" },
  { name: "SQLite", level: 80, category: "Database" },

  { name: "Git", level: 80, category: "Tools" },
  { name: "GitHub", level: 80, category: "Tools" },

  { name: "Figma", level: 70, category: "Design" },
  { name: "Canva", level: 90, category: "Design" },
  { name: "Photoshop", level: 85, category: "Design" }
];

// Work Experience Data
export const workData = [
  {
    id: 1,
    title: "Freelancer",
    description: "2024 to Current • Full-time • Web Development, Mobile Apps, UI/UX Design, IT Support"
  },
  {
    id: 2,
    title: "IT Support Intern",
    description: "Mulungushi University • 2 Months (2023) • Assisted with network setup and configuration, improving system reliability. Managed hardware and software inventory for streamlined IT asset tracking. Installed and updated software to maintain system security and efficiency. Diagnosed and resolved hardware issues to reduce downtime."
  }
];

// Client Testimonials
export const clients = [
  {
    id: 1,
    name: "Jane Doe",
    position: "Marketing Manager",
    description: "This company exceeded our expectations with their outstanding service and support.",
    fullDescription:
      "Working with this company has been a fantastic experience. Their attention to detail, quick response time, and innovative approach have greatly benefited our marketing campaigns and overall brand image.",
    image: service1
  },
  {
    id: 2,
    name: "John Smith",
    position: "CEO, TechCorp",
    description: "Professional, innovative, and responsive. Highly recommended!",
    fullDescription:
      "TechCorp is proud to partner with such a professional and innovative team. Their responsiveness and expertise helped us accelerate our product development and deliver exceptional results to our clients.",
    image: service1
  },
  {
    id: 3,
    name: "Alice Johnson",
    position: "Product Designer",
    description: "A wonderful experience working with the team. Timely delivery and great results.",
    fullDescription:
      "Collaborating with this team was seamless and enjoyable. Their commitment to quality and timely delivery made a huge difference in bringing our product designs to life effectively.",
    image: service1
  },
  {
    id: 4,
    name: "Michael Brown",
    position: "CTO, FintechX",
    description: "They understood our needs perfectly and delivered beyond our expectations.",
    fullDescription:
      "FintechX highly recommends this team for their deep understanding of complex technical requirements and their dedication to delivering beyond what was expected in our fintech solutions.",
    image: service1
  },
  {
    id: 5,
    name: "Emily White",
    position: "Operations Lead",
    description: "Top-notch work and excellent communication throughout the project.",
    fullDescription:
      "The team demonstrated exceptional skills and maintained clear and continuous communication throughout the project, making our operations much smoother and more efficient.",
    image: service1
  },
  {
    id: 6,
    name: "David Wilson",
    position: "Senior Developer",
    description: "Their team is very skilled and professional. We'll definitely work with them again.",
    fullDescription:
      "As a senior developer, I appreciated the team's professionalism and technical expertise. They delivered high-quality code and showed great collaboration skills, making future partnerships very promising.",
    image: service1
  }
];
