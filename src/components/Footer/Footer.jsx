import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

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
  color: "#0F969C", // primary button color on hover
  transition: { type: "spring", stiffness: 300 },
};

export const Footer = () => {
  return (
    <footer
      className="py-10 px-6"
      style={{ backgroundColor: "#05161A", color: "#FFFFFF" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <motion.div
          className="flex flex-wrap justify-between gap-8 text-left md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* About */}
          <motion.div
            className="flex-1 min-w-[250px]"
            variants={itemVariants}
            style={{ color: "#6DA5C0" }}
          >
            <h2
              className="text-2xl font-bold mb-2"
              style={{ color: "#0F969C" }}
            >
              Owen Nsofu
            </h2>
            <p className="text-sm leading-relaxed">
              Passionate Software Engineer specializing in{" "}
              <strong style={{ color: "#FFFFFF" }}>
                web development, mobile apps, and UI/UX design
              </strong>
              .
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="flex-1 min-w-[200px]"
            variants={itemVariants}
            style={{ color: "#6DA5C0" }}
          >
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: "#0F969C" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {["home", "about", "services", "projects", "contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link}`}
                      style={{ color: "#6DA5C0" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#0C7075")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#6DA5C0")
                      }
                      className="transition-colors duration-300"
                    >
                      {link.charAt(0).toUpperCase() + link.slice(1)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className="flex-1 min-w-[200px]"
            variants={itemVariants}
            style={{ color: "#6DA5C0" }}
          >
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: "#0F969C" }}
            >
              Follow Me
            </h3>
            <div className="flex items-center space-x-6 text-xl" style={{ color: "#6DA5C0" }}>
              <motion.a
                href="https://web.facebook.com/profile.php?id=100078009960924"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={iconHover}
                className="cursor-pointer"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/owen-nsofu-93169b300"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={iconHover}
                className="cursor-pointer"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com/Owen123Nsofu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={iconHover}
                className="cursor-pointer"
              >
                <FaGithub />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-10 pt-5 border-t text-sm text-center"
          style={{ borderColor: "#294D61", color: "#6DA5C0" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p>&copy; {new Date().getFullYear()} Owen Nsofu | All Rights Reserved</p>
        </motion.div>
      </div>
    </footer>
  );
};
