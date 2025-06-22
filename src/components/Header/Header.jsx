import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { COLORS } from "../../constants/colors";
import { 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaUser, 
  FaCogs, 
  FaProjectDiagram, 
  FaUsers, 
  FaEnvelope, 
  FaBlog,
  FaCode,
  FaRocket
} from "react-icons/fa";

import logo from "../../assets/LOGO.png";

// Animation variants
const containerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 20 
    } 
  }
};

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const mobileMenuVariants = {
  hidden: { 
    opacity: 0, 
    y: -50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100,
      damping: 20
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    scale: 0.95,
    transition: { duration: 0.3 },
  },
};

// Navigation items configuration
const navItems = [
  { name: "Home", icon: FaHome, href: "home", isScroll: true },
  { name: "About", icon: FaUser, href: "about", isScroll: true },
  { name: "Services", icon: FaCogs, href: "services", isScroll: true },
  { name: "Projects", icon: FaProjectDiagram, href: "projects", isScroll: true },
  { name: "Skills", icon: FaCode, href: "skills", isScroll: true },
  { name: "Client", icon: FaUsers, href: "client", isScroll: true },
  { name: "Blogs", icon: FaBlog, href: "blogs", isScroll: true },
  { name: "Contact", icon: FaEnvelope, href: "contact", isScroll: true }
];

// Logo Component
const Logo = () => (
  <Link to="/" className="flex items-center space-x-3 group">
    <motion.div
      className="relative"
      initial={{ opacity: 0, rotate: -90 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ delay: 0.4, type: "spring" }}
    >
      <img
        src={logo}
        alt="Logo"
        className="h-10 w-10 group-hover:scale-110 transition-transform duration-300"
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
    <div className="flex flex-col">
      <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Owenito
      </span>
      <span className="text-xs text-teal-400 font-medium">Developer</span>
    </div>
  </Link>
);

// Navigation Item Component
const NavItem = ({ item, index, isMobile = false, onClose }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (isMobile && onClose) {
      onClose();
    }
  };

  const content = (
    <motion.div
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer
                 ${isMobile ? 'text-left' : 'text-center'} group`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, x: isMobile ? 5 : 0 }}
      whileTap={{ scale: 0.95 }}
    >
      <item.icon 
        className={`text-sm ${isMobile ? 'text-teal-400' : 'text-gray-400 group-hover:text-teal-400'} 
                   transition-colors duration-300`} 
      />
      <span className={`font-medium ${isMobile ? 'text-white' : 'text-gray-300 group-hover:text-white'} 
                       transition-colors duration-300`}>
        {item.name}
      </span>
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );

  if (item.isScroll) {
    return (
      <ScrollLink 
        to={item.href} 
        smooth 
        duration={500} 
        onClick={handleClick}
        className="block"
      >
        {content}
      </ScrollLink>
    );
  }

  return (
    <Link to={item.href === "home" ? "/" : `/${item.href}`} onClick={handleClick}>
      {content}
    </Link>
  );
};

// Mobile Menu Component
const MobileMenu = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        key="mobile-menu"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={mobileMenuVariants}
        className="absolute top-full left-0 w-full bg-gradient-to-br from-gray-900 to-gray-800 border-t border-gray-700
                   shadow-2xl backdrop-blur-sm"
      >
        <div className="p-6">
          <div className="grid gap-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
                <NavItem item={item} index={index} isMobile={true} onClose={onClose} />
              </motion.div>
            ))}
          </div>
          
          {/* Mobile Menu Footer */}
          <motion.div
            className="mt-8 pt-6 border-t border-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-center space-x-4">
              <motion.a
                href="https://github.com/Owen123Nsofu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300
                           hover:bg-teal-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaCode size={16} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/owen-nsofu-93169b300"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300
                           hover:bg-teal-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaRocket size={16} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

// Hamburger Button Component
const HamburgerButton = ({ isOpen, onClick }) => (
  <motion.button
    onClick={onClick}
    className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg
               bg-gray-800 border border-gray-700 hover:border-teal-400 transition-all duration-300
               focus:outline-none focus:ring-2 focus:ring-teal-500"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      className="flex flex-col justify-center items-center space-y-1"
      animate={isOpen ? "open" : "closed"}
    >
      <motion.span
        className="block h-0.5 w-5 bg-current"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: 45, y: 6 }
        }}
        transition={{ duration: 0.3 }}
        style={{ backgroundColor: isOpen ? COLORS.accentTeal : COLORS.lightBlue }}
      />
      <motion.span
        className="block h-0.5 w-5 bg-current"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.3 }}
        style={{ backgroundColor: isOpen ? COLORS.accentTeal : COLORS.lightBlue }}
      />
      <motion.span
        className="block h-0.5 w-5 bg-current"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: -45, y: -6 }
        }}
        transition={{ duration: 0.3 }}
        style={{ backgroundColor: isOpen ? COLORS.accentTeal : COLORS.lightBlue }}
      />
    </motion.div>
  </motion.button>
);

// Main Header Component
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700 shadow-2xl' 
          : 'bg-gray-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
                <NavItem item={item} index={index} />
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </motion.nav>
  );
};
