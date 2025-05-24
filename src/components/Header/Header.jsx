import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "../../assets/LOGO.png";
import { Link as ScrollLink } from "react-scroll";
import "./Header.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply theme to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 12 }}
      className={`navbar ${theme}`}
    >
      <Link className="logo" to="/">
        <img src={logo} alt="Logo" style={{ height: "30px", marginRight: "10px" }} />
        Owenito<span>.</span>
      </Link>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
          {["Home", "About", "Services", "Projects", "Blogs", "Contact"].map((item, i) => (
            <motion.li
              key={item}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              {item === "About" || item === "service" || item === "Contact" ? (
                <ScrollLink to={item.toLowerCase()} smooth={true} duration={500}>
                  {item}
                </ScrollLink>
              ) : (
                <Link to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}>
                  {item}
                </Link>
              )}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </div>

      <motion.button
        whileTap={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        onClick={toggleTheme}
        className="theme-toggle-btn"
        aria-label="Toggle theme"
      >
        {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
      </motion.button>
    </motion.nav>
  );
};
