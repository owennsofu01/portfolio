import "./Footer.css";

import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Top Section */}
        <div className="footer-top">
          {/* About */}
          <div className="footer-about">
            <h2>Owen Nsofu</h2>
            <p>
              Passionate Software Engineer specializing in **web development,
              mobile apps, and UI/UX design**.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-social">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <a
                href="https://web.facebook.com/profile.php?id=100078009960924"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Owen123Nsofu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Owen Nsofu | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
