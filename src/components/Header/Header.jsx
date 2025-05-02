import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
      className={`navbar ${theme}`}
    >
      <Link className="logo" to="/">
        <img src={logo} alt="Logo" style={{ height: "30px", marginRight: "10px" }} />
        Owenito<span>.</span>
      </Link>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
<li><ScrollLink to="service" smooth={true} duration={500}>Services</ScrollLink></li>

          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/blog">Blogs</Link></li>
          <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
        </ul>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </div>

      {/* Theme toggle button with icon */}
      <button onClick={toggleTheme} className="theme-toggle-btn">
        {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
      </button>
    </motion.nav>
  );
};
