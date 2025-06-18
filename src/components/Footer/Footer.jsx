import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const colors = {
  background: "#05161A",
  primaryText: "#6DA5C0",
  accent: "#0F969C",
  accentHover: "#0C7075",
  white: "#FFFFFF",
  substackBg: "#072E33",
  border: "#294D61",
};

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.3, when: "beforeChildren" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconHover = {
  scale: 1.3,
  color: colors.accent,
  textShadow: `0 0 8px ${colors.accent}, 0 0 15px ${colors.accent}`,
  rotate: [0, 10, -10, 10, -10, 0],
  transition: { type: "spring", stiffness: 300 },
};

const linkHover = {
  color: colors.accentHover,
  textShadow: `0 0 6px ${colors.accentHover}`,
  transition: { duration: 0.3, ease: "easeInOut" },
};

export const Footer = () => {
  return (
    <footer
      className="py-12 px-6 sm:px-10"
      style={{ backgroundColor: colors.background, color: colors.primaryText }}
    >
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* About */}
        <motion.div
          className="flex-1 min-w-[250px] mb-10 md:mb-0"
          variants={itemVariants}
          style={{ color: colors.primaryText }}
        >
          <h2 className="text-3xl font-bold mb-3" style={{ color: colors.accent }}>
            Owen Nsofu
          </h2>
          <p className="text-base leading-relaxed max-w-sm">
            Passionate Software Engineer specializing in{" "}
            <strong style={{ color: colors.white }}>
              web development, mobile apps, and UI/UX design
            </strong>
            .
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.nav
          className="flex-1 min-w-[200px] mb-10 md:mb-0"
          variants={itemVariants}
          aria-label="Quick navigation links"
          style={{ color: colors.primaryText }}
        >
          <h3 className="text-xl font-semibold mb-4" style={{ color: colors.accent }}>
            Quick Links
          </h3>
          <ul className="space-y-3 text-base">
            {["home", "about", "services", "projects", "contact"].map((link) => (
              <motion.li
                key={link}
                whileHover={linkHover}
                className="cursor-pointer"
              >
                <a
                  href={`#${link}`}
                  style={{ color: colors.primaryText, textDecoration: "none" }}
                  className="transition-colors duration-300"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* Social Media */}
        <motion.div
          className="flex-1 min-w-[200px]"
          variants={itemVariants}
          style={{ color: colors.primaryText }}
        >
          <h3 className="text-xl font-semibold mb-4" style={{ color: colors.accent }}>
            Follow Me
          </h3>
          <div
            className="flex items-center space-x-7 text-3xl"
            style={{ color: colors.primaryText }}
          >
            <motion.a
              href="https://web.facebook.com/profile.php?id=100078009960924"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={iconHover}
              className="cursor-pointer"
              aria-label="Facebook"
              initial={{ scale: 1, rotate: 0 }}
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/owen-nsofu-93169b300"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={iconHover}
              className="cursor-pointer"
              aria-label="LinkedIn"
              initial={{ scale: 1, rotate: 0 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/Owen123Nsofu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={iconHover}
              className="cursor-pointer"
              aria-label="GitHub"
              initial={{ scale: 1, rotate: 0 }}
            >
              <FaGithub />
            </motion.a>
          </div>

          {/* Substack Embed */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="rounded-lg shadow-lg overflow-hidden mt-10"
            style={{ border: `1px solid ${colors.border}`, borderRadius: "12px" }}
          >
            <iframe
              src="https://owennsofu.substack.com/embed"
              width="100%"
              height="220"
              frameBorder="0"
              scrolling="no"
              title="Subscribe to Owen Nsofu's Newsletter"
              style={{
                borderRadius: "12px",
                backgroundColor: colors.substackBg,
                maxWidth: "100%",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        className="mt-14 pt-6 border-t text-sm text-center"
        style={{ borderColor: colors.border, color: colors.primaryText }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <p>&copy; {new Date().getFullYear()} Owen Nsofu | All Rights Reserved</p>
      </motion.div>
    </footer>
  );
};
