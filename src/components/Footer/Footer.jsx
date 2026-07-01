
import { motion } from "framer-motion";
import { 
  FaFacebook, 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaArrowUp,
  FaHeart,
  FaCode
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

// Contact Info Component
const ContactInfo = () => (
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
        <h3 className="text-xl font-semibold text-white group-hover:text-teal-400 transition-colors duration-300 flex items-center gap-3">
          <FaEnvelope className="text-teal-400" />
          Contact Info
        </h3>
        <div className="flex items-center space-x-1">
          <FaCode className="text-xs text-teal-400" />
          <span className="text-xs font-medium text-teal-400">Available</span>
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
          <span className="text-gray-300 text-sm">owennsofu01@gmail.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaMapMarkerAlt className="text-teal-400 text-sm" />
          <span className="text-gray-300 text-sm">Ndola, Zambia</span>
        </div>
      </div>
    </div>

    {/* Decorative elements */}
    <div className="absolute top-3 right-3 w-2 h-2 bg-teal-400 rounded-full opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);

// Quick Links Component
const QuickLinks = () => (
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
          Quick Links
        </h3>
        <div className="flex items-center space-x-1">
          <FaCode className="text-xs text-teal-400" />
          <span className="text-xs font-medium text-teal-400">Navigate</span>
        </div>
      </div>

      {/* Links */}
      <div className="space-y-3">
        {[
          { name: "Home", href: "#home" },
          { name: "About", href: "#about" },
          { name: "Services", href: "#services" },
          { name: "Projects", href: "#projects" },
          { name: "Skills", href: "#skills" },
          { name: "Contact", href: "#contact" }
        ].map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            className="block text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {link.name}
          </motion.a>
        ))}
      </div>
    </div>

    {/* Decorative elements */}
    <div className="absolute top-3 right-3 w-2 h-2 bg-teal-400 rounded-full opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);

// Social Links Component
const SocialLinks = () => (
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
          Follow Me
        </h3>
        <div className="flex items-center space-x-1">
          <FaCode className="text-xs text-teal-400" />
          <span className="text-xs font-medium text-teal-400">Connect</span>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4">
        {[
          { icon: FaFacebook, href: "https://web.facebook.com/profile.php?id=100078009960924", label: "Facebook" },
          { icon: FaLinkedin, href: "https://www.linkedin.com/in/owen-nsofu-93169b300", label: "LinkedIn" },
          { icon: FaGithub, href: "https://github.com/Owen123Nsofu", label: "GitHub" }
        ].map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-gray-700 flex items-center justify-center text-gray-300
                       hover:bg-teal-500 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            aria-label={social.label}
          >
            <social.icon size={20} />
          </motion.a>
        ))}
      </div>
    </div>

    {/* Decorative elements */}
    <div className="absolute top-3 right-3 w-2 h-2 bg-teal-400 rounded-full opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);

// About Section Component
const AboutSection = () => (
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
          Owen Nsofu
        </h3>
        <div className="flex items-center space-x-1">
          <FaCode className="text-xs text-teal-400" />
          <span className="text-xs font-medium text-teal-400">Developer</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        Passionate Software Engineer specializing in web development, mobile apps, and UI/UX design. 
        Committed to creating innovative solutions that make a difference.
      </p>

      {/* Skills Preview */}
      <div className="flex flex-wrap gap-2">
        {["React", "Flutter", "Node.js", "Python"].map((skill, index) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-700 text-teal-400 text-xs rounded-full font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Decorative elements */}
    <div className="absolute top-3 right-3 w-2 h-2 bg-teal-400 rounded-full opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);

// Scroll to Top Button
const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center
                 hover:bg-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <FaArrowUp size={16} />
    </motion.button>
  );
};

// Main Footer Component
export const Footer = () => {
  return (
    <>
      <footer className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
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
              Let's Connect
            </h2>
            <motion.div
              className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-teal-400 to-teal-600"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to start a project or just want to chat? I'm always excited to connect with fellow developers and potential clients.
            </p>
          </motion.div>

          {/* Footer Content */}
          <motion.div
            className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AboutSection />
            <QuickLinks />
            <ContactInfo />
            <SocialLinks />
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="text-center pt-8 border-t border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm mb-2">
              &copy; 2025 Owen Nsofu. All Rights Reserved.
            </p>
            <p className="text-gray-500 text-xs flex items-center justify-center gap-1">
              Made with <FaHeart className="text-red-400" /> and <FaCode className="text-teal-400" />
            </p>
          </motion.div>
        </div>
      </footer>

      <ScrollToTop />
    </>
  );
};
