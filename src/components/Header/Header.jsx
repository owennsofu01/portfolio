import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.png";
import "./Header.css";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link className="logo" to="/" onClick={() => setIsOpen(false)}>
        <img src={logo} alt="Logo" style={{ height: "30px", marginRight: "10px" }} />
        LOGO<span>.</span>
      </Link>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#service" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blogs</Link></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </div>
    </nav>
  );
};
