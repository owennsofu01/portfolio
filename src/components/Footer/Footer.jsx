import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Top Section */}
        <motion.div
          className="footer-top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* About */}
          <motion.div
            className="footer-about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Owen Nsofu</h2>
            <p>
              Passionate Software Engineer specializing in <strong>web development, mobile apps, and UI/UX design</strong>.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="footer-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
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
          </motion.div>

          {/* Social Media */}
          <motion.div
            className="footer-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
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
                href="https://www.linkedin.com/in/owen-nsofu-93169b300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
          </motion.div>
        </motion.div>

        {/* Footer Bottom Section */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>
            &copy; {new Date().getFullYear()} Owen Nsofu | All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
