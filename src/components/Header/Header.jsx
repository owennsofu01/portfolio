import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  // Fixed dark theme colors from your palette
  const colors = {
    darkBg: "#05161A",
    darkBgSecondary: "#072E33",
    mediumTeal: "#0C7075",
    brightTeal: "#0F969C",
    lightBlueText: "#6DA5C0",
    mediumDarkBlueText: "#294D61",
    orangeAccent: "#F97316",
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 12 }}
      style={{
        backgroundColor: colors.darkBg,
        borderBottom: `1px solid ${colors.darkBgSecondary}`,
      }}
      className="sticky top-0 z-50 flex items-center justify-between px-5 py-3"
    >
      <Link
        to="/"
        className="flex items-center text-2xl font-bold"
        style={{
          color: colors.lightBlueText,
        }}
      >
        <img src={logo} alt="Logo" className="h-8 mr-2" />
        Owenito<span style={{ color: colors.orangeAccent }}>.</span>
      </Link>

      {/* Nav Links */}
      <div
        className={`fixed top-14 left-0 w-full transition-max-h duration-500 ease-in-out overflow-hidden md:static md:flex md:w-auto md:border-0 md:bg-transparent md:overflow-visible ${
          isOpen ? "max-h-60" : "max-h-0"
        } md:max-h-full`}
        style={{
          backgroundColor: colors.darkBg,
          borderTop: `1px solid ${colors.darkBgSecondary}`,
        }}
      >
        <ul
          className="flex flex-col md:flex-row md:space-x-6 px-4 py-3 md:p-0"
          style={{
            color: colors.lightBlueText,
          }}
        >
          {["Home", "About", "Services", "Projects","Client", "Contact", "Blogs"].map(
            (item, i) => (
              <motion.li
                key={item}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                className="mb-3 md:mb-0"
              >
                {["About", "Services", "Projects","Client", "Contact", "Blogs"].includes(
                  item
                ) ? (
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer transition-colors"
                    style={{
                      color: colors.lightBlueText,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = colors.brightTeal)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = colors.lightBlueText)
                    }
                  >
                    {item}
                  </ScrollLink>
                ) : (
                  <Link
                    to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="transition-colors"
                    style={{
                      color: colors.lightBlueText,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = colors.brightTeal)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = colors.lightBlueText)
                    }
                  >
                    {item}
                  </Link>
                )}
              </motion.li>
            )
          )}
        </ul>
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col md:hidden space-y-1 focus:outline-none"
        aria-label="Toggle menu"
      >
        {[...Array(3)].map((_, idx) => {
          const rotateClasses =
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
              className={`block h-1 w-6 transform transition duration-300 ease-in-out ${rotateClasses}`}
              style={{
                backgroundColor: colors.lightBlueText,
              }}
            ></span>
          );
        })}
      </button>
    </motion.nav>
  );
};
