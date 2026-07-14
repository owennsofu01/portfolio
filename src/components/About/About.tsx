import { motion } from "framer-motion";

import profileImg from "../../assets/profile.jpg";
import cvPDF from "../../assets/ow.pdf";
import { 
  FaPhone, 
  FaEnvelope, 
  FaLinkedin, 
  FaDownload, 
  FaUser,
  FaGamepad,
  FaMusic,
  FaFutbol,
  FaCode,
  FaBook,
  FaArrowRight,
  FaStar,
  FaRocket,
  FaHeart,
  FaArtstation
} from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
  description: string;
}

// Data configuration
const hobbies = [
  { icon: FaGamepad, name: "Gaming", color: "#3B82F6" },
  { icon: FaMusic, name: "Music", color: "#10B981" },
  { icon: FaFutbol, name: "Soccer", color: "#F59E0B" },
  { icon: FaCode, name: "Coding", color: "#EF4444" },
  { icon: FaBook, name: "Reading Books", color: "#8B5CF6" },
  { icon: FaArtstation, name: "Graphics", color: "#050099FF" }
];

const education: Education[] = [
  {
    degree: "BSc in Computer Science",
    institution: "Mulungushi University",
    period: "2020 - 2024",
    description: "Comprehensive study of computer science fundamentals, programming, and software development."
  },
  {
    degree: "Grade 12 Certificate",
    institution: "Sathya Sai Trust School",
    period: "2017 - 2019",
    description: "Secondary education completion with focus on science and mathematics."
  },
  {
    degree: "Grade 9 Certificate",
    institution: "Twatasha Primary School",
    period: "2015 - 2016",
    description: "Primary education foundation with core academic subjects."
  }
];

const certifications: Certification[] = [
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

// Profile Card Component (matching Skills card style)
const ProfileCard = () => (
  <motion.div
    className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700
               hover:border-teal-400 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/20
               hover:-translate-y-1"
    variants={cardVariants}
  >
    {/* Background gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
    
    <div className="relative z-10 text-center">
      {/* Profile Image */}
      <div className="relative inline-block mb-6">
        <motion.div
          className="w-32 h-32 rounded-full overflow-hidden border-4 border-teal-400 shadow-2xl mx-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={profileImg}
            alt="Owen Nsofu - Software Developer"
            className="w-full h-full object-cover"
            width="128"
            height="128"
            loading="eager"
          />
        </motion.div>
        <motion.div
          className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center bg-teal-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <FaUser className="text-white text-sm" />
        </motion.div>
      </div>

      {/* Profile Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
          Owen Nsofu
        </h3>
        <div className="flex items-center space-x-1">
          <FaStar className="text-xs text-teal-400" />
          <span className="text-xs font-medium text-teal-400">Available</span>
        </div>
      </div>

      {/* Profile Info */}
      <div className="mb-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Status</span>
          <span className="text-sm font-semibold text-teal-400">Active</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-600"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
      </div>

      {/* Profile Description */}
      <div className="text-xs text-gray-400 leading-relaxed mb-4">
        Proactive software developer with strong foundation in web development and database design
      </div>

      {/* Download CV Button */}
      <motion.a
        href={cvPDF}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg
                   font-semibold flex items-center justify-center gap-2 hover:from-teal-600 hover:to-teal-700
                   transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <FaDownload size={16} />
        <span>Download CV</span>
      </motion.a>
    </div>

    {/* Decorative elements */}
    <div className="absolute top-3 right-3 w-2 h-2 bg-teal-400 rounded-full opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);

// Contact Info Card Component
const ContactInfoCard = () => (
  <motion.div
    className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700
               hover:border-teal-400 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/20
               hover:-translate-y-1"
    variants={cardVariants}
  >
    {/* Background gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
    
    <div className="relative z-10">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
          Contact Information
        </h3>
        <div className="flex items-center space-x-1">
          <FaRocket className="text-xs text-teal-400" />
          <span className="text-xs font-medium text-teal-400">Connect</span>
        </div>
      </div>

      {/* Contact Details */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <FaPhone className="text-teal-400 text-sm" />
          <span className="text-gray-300 text-sm">+260 764 670 944</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-teal-400 text-sm" />
          <span className="text-gray-300 text-sm">owennsofu@gmail.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaLinkedin className="text-teal-400 text-sm" />
          <span className="text-gray-300 text-sm">LinkedIn Profile</span>
        </div>
      </div>
    </div>

    {/* Decorative elements */}
    <div className="absolute top-3 right-3 w-2 h-2 bg-teal-400 rounded-full opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);

// Education Card Component
const EducationCard = ({ education, index }: { education: Education; index: number }) => (
  <motion.div
    className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700
               hover:border-teal-400 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/20
               hover:-translate-y-1"
    variants={cardVariants}
    custom={index}
  >
    {/* Background gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
    
    <div className="relative z-10">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
          {education.degree}
        </h3>
        <div className="flex items-center space-x-1">
          <FaStar className="text-xs text-teal-400" />
          <span className="text-xs font-medium text-teal-400">Completed</span>
        </div>
      </div>

      {/* Education Info */}
      <div className="mb-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Institution</span>
          <span className="text-sm font-semibold text-teal-400">{education.period}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-600"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
      </div>

      {/* Institution */}
      <div className="text-white font-medium text-sm mb-3">{education.institution}</div>

      {/* Description */}
      <div className="text-xs text-gray-400 leading-relaxed">
        {education.description}
      </div>
    </div>

    {/* Decorative elements */}
    <div className="absolute top-3 right-3 w-2 h-2 bg-teal-400 rounded-full opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);

// Certification Card Component
const CertificationCard = ({ certification, index }: { certification: Certification; index: number }) => (
  <motion.div
    className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700
               hover:border-teal-400 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/20
               hover:-translate-y-1"
    variants={cardVariants}
    custom={index}
  >
    {/* Background gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
    
    <div className="relative z-10">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
          {certification.name}
        </h3>
        <div className="flex items-center space-x-1">
          <FaStar className="text-xs text-teal-400" />
          <span className="text-xs font-medium text-teal-400">{certification.year}</span>
        </div>
      </div>

      {/* Certification Info */}
      <div className="mb-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Issuer</span>
          <span className="text-sm font-semibold text-teal-400">Valid</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-600"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
      </div>

      {/* Issuer */}
      <div className="text-white font-medium text-sm mb-3">{certification.issuer}</div>

      {/* Description */}
      <div className="text-xs text-gray-400 leading-relaxed">
        {certification.description}
      </div>
    </div>

    {/* Decorative elements */}
    <div className="absolute top-3 right-3 w-2 h-2 bg-teal-400 rounded-full opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);

// Hobbies Card Component
const HobbiesCard = () => (
  <motion.div
    className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700
               hover:border-teal-400 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/20
               hover:-translate-y-1"
    variants={cardVariants}
  >
    {/* Background gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
    
    <div className="relative z-10">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
          Hobbies & Interests
        </h3>
        <div className="flex items-center space-x-1">
          <FaHeart className="text-xs text-teal-400" />
          <span className="text-xs font-medium text-teal-400">Passion</span>
        </div>
      </div>

      {/* Hobbies Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            className="text-center p-3 rounded-xl transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: `${hobby.color}20` }}
            whileHover={{ 
              boxShadow: `0 0 20px ${hobby.color}30`
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <hobby.icon 
              className="text-2xl mb-2 mx-auto" 
              style={{ color: hobby.color }}
            />
            <p className="text-xs font-medium text-white">
              {hobby.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Decorative elements */}
    <div className="absolute top-3 right-3 w-2 h-2 bg-teal-400 rounded-full opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);

// About Overview Component
const AboutOverview = () => (
  <motion.div 
    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {[
      { value: "3+", label: "Years Experience", icon: FaStar },
      { value: "8+", label: "Projects Completed", icon: FaRocket },
      { value: "100%", label: "Client Satisfaction", icon: FaHeart },
      { value: "24/7", label: "Always Available", icon: FaCode }
    ].map((stat, index) => (
      <div key={index} className="text-center p-4 rounded-xl bg-gray-800/50 border border-gray-700">
        <stat.icon className="text-2xl text-teal-400 mx-auto mb-2" />
        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
        <div className="text-sm text-gray-300">{stat.label}</div>
      </div>
    ))}
  </motion.div>
);

// Main About Component
export const About = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <motion.div
              className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-teal-400 to-teal-600"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get to know me better - my journey, education, and what drives my passion for technology.
            </p>
          </motion.div>

          {/* About Overview */}
          <AboutOverview />

          <motion.div
            className="grid lg:grid-cols-3 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Left Column - Profile & Contact */}
            <div className="lg:col-span-1 space-y-6">
              <ProfileCard />
              <ContactInfoCard />
              {/* Hobbies */}
              <div>
                <HobbiesCard />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Education */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
                <div className="grid gap-4">
                  {education.map((edu, index) => (
                    <EducationCard key={index} education={edu} index={index} />
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Certifications</h2>
                <div className="grid gap-4">
                  {certifications.map((cert, index) => (
                    <CertificationCard key={index} certification={cert} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};