import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../assets/LOGO.png";
import { Link as ScrollLink } from "react-scroll";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.3, ease: "easeOut" },
    }),
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  const colors = {
    darkBg: "#05161A",
    darkBgSecondary: "#072E33",
    mediumTeal: "#0C7075",
    brightTeal: "#0F969C",
    lightBlueText: "#6DA5C0",
    mediumDarkBlueText: "#294D61",
    orangeAccent: "#F97316",
  };

  const navItems = ["Home", "About", "Services", "Projects", "Client", "Contact", "Blogs"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 12 }}
      style={{
        backgroundColor: colors.darkBg,
        borderBottom: `1px solid ${colors.darkBgSecondary}`,
      }}
      className="sticky top-0 z-50 flex items-center justify-between px-5 py-4 shadow-lg"
    >
      <Link to="/" className="flex items-center text-2xl font-bold" style={{ color: colors.lightBlueText }}>
        <motion.img
          src={logo}
          alt="Logo"
          className="h-8 mr-2"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 0.4, type: "spring" }}
        />
        Owenito<span style={{ color: colors.orangeAccent }}>.</span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        {navItems.map((item, i) => {
          const isScrollLink = ["Home","About", "Services", "Projects", "Client", "Contact", "Blogs"].includes(item);
          const linkStyle = {
            color: colors.lightBlueText,
            fontWeight: "500",
          };
          const hoverStyle = { scale: 1.1, color: colors.brightTeal };

          return (
            <motion.div
              key={item}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              whileHover={hoverStyle}
              className="cursor-pointer transition"
            >
              {isScrollLink ? (
                <ScrollLink to={item.toLowerCase()} smooth duration={500} className="cursor-pointer" style={linkStyle}>
                  {item}
                </ScrollLink>
              ) : (
                <Link to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`} style={linkStyle}>
                  {item}
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Hamburger Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-center items-center space-y-1 focus:outline-none"
      >
        {[...Array(3)].map((_, idx) => {
          const rotateClass =
            isOpen && idx === 0
              ? "rotate-45 translate-y-2.5"
              : isOpen && idx === 1
              ? "opacity-0"
              : isOpen && idx === 2
              ? "-rotate-45 -translate-y-2.5"
              : "";
          return (
            <span
              key={idx}
              className={`block h-1 w-6 bg-current transform transition duration-300 ease-in-out ${rotateClass}`}
              style={{ backgroundColor: colors.lightBlueText }}
            ></span>
          );
        })}
      </button>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="absolute top-16 left-0 w-full bg-[#05161A] px-6 py-4 shadow-xl md:hidden z-40"
          >
            <ul className="flex flex-col space-y-4 text-left">
              {navItems.map((item, i) => {
                const isScrollLink = ["About", "Services", "Projects", "Client", "Contact", "Blogs"].includes(item);
                const baseStyle = { color: colors.lightBlueText, fontWeight: "500" };

                return (
                  <motion.li key={item} custom={i} initial="hidden" animate="visible" variants={navItemVariants}>
                    {isScrollLink ? (
                      <ScrollLink
                        to={item.toLowerCase()}
                        smooth
                        duration={500}
                        className="block"
                        onClick={() => setIsOpen(false)}
                        style={baseStyle}
                      >
                        {item}
                      </ScrollLink>
                    ) : (
                      <Link
                        to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                        onClick={() => setIsOpen(false)}
                        style={baseStyle}
                      >
                        {item}
                      </Link>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
