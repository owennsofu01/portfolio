import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export const Home = () => {
  // Define brand colors
  const colors = {
    primary: "#0F969C", // teal-ish
    secondary: "#294D61", // dark slate
    accent: "#FFD700", // gold
    textLight: "#EAEAEA",
    bgDark: "#121212",
    bgLight: "#F9F9F9",
  };

  return (
    <>
      <Helmet>
        <title>Owen Nsofu - Software Engineer | Full Stack Developer</title>
        <meta
          name="description"
          content="Owen Nsofu is a passionate software engineer specializing in web and mobile development. View portfolio and contact details."
        />
        <meta
          name="keywords"
          content="Owen Nsofu, software engineer, full stack developer, web developer, mobile developer, portfolio"
        />
        <meta name="author" content="Owen Nsofu" />
      </Helmet>

      <main
        className="min-h-screen flex items-center justify-center px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#0F969C] via-[#167B7F] to-[#294D61]"
        style={{ color: colors.textLight }}
      >
        <motion.section
          className="max-w-4xl bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-white/20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          aria-label="Home Introduction Section"
        >
          {/* Heading */}
          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-4"
            variants={itemVariants}
          >
            Owen Nsofu
          </motion.h1>

          {/* Subtitle with typing effect */}
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold mb-6 min-h-[3rem] relative"
            variants={itemVariants}
          >
            <span className="mr-2">I’m a</span>
            <TypingRoles />
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg max-w-3xl leading-relaxed mb-8"
            variants={itemVariants}
          >
            Passionate software engineer specializing in building scalable web and mobile applications. 
            Skilled in modern technologies, with a focus on clean design, user experience, and performance. 
            Dedicated to turning ideas into real-world solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 max-w-md mx-auto justify-center"
            variants={itemVariants}
          >
            <a
              href="../../assets/ow.pdf"
              download
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#0F969C] to-[#167B7F] text-white font-semibold shadow-lg hover:brightness-110 transition"
              aria-label="Download CV"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-[#167B7F] transition"
              aria-label="Contact Me"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center mt-12 space-x-10"
            variants={itemVariants}
          >
            <SocialIcon
              href="https://linkedin.com/in/owennsofu"
              label="LinkedIn"
              svgPath="M4.983 3.5c0 1.381-1.115 2.5-2.492 2.5S0 4.881 0 3.5 1.115 1 2.491 1s2.492 1.119 2.492 2.5zM0 8.5h5v12h-5v-12zm7 0h4.785v1.645h.069c.666-1.263 2.293-2.59 4.717-2.59 5.041 0 5.977 3.318 5.977 7.628v8.317h-5v-7.352c0-1.756-.031-4.017-2.448-4.017-2.448 0-2.822 1.91-2.822 3.881v7.488h-5v-12z"
            />
            <SocialIcon
              href="https://facebook.com/owennsofu"
              label="Facebook"
              svgPath="M22.675 0H1.325C.593 0 0 .592 0 1.324v21.352C0 23.408.593 24 1.325 24h11.49v-9.294H9.691v-3.622h3.124V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.505 0-1.797.717-1.797 1.77v2.32h3.59l-.467 3.622h-3.123V24h6.116C23.408 24 24 23.408 24 22.676V1.324C24 .592 23.408 0 22.675 0z"
            />
            <SocialIcon
              href="https://twitter.com/owennsofu"
              label="Twitter"
              svgPath="M24 4.557a9.827 9.827 0 01-2.828.775 4.94 4.94 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.924 4.924 0 00-8.384 4.49A13.978 13.978 0 011.671 3.149a4.916 4.916 0 001.523 6.574 4.9 4.9 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.925 4.925 0 004.6 3.417A9.874 9.874 0 010 19.54a13.934 13.934 0 007.548 2.212c9.142 0 14.307-7.721 14.307-14.416 0-.22-.004-.438-.015-.654A10.254 10.254 0 0024 4.557z"
            />
          </motion.div>
        </motion.section>
      </main>
    </>
  );
};

const TypingRoles = () => {
  // Cycling between two roles with CSS animation for simplicity
  return (
    <span className="relative text-accent font-semibold">
      <span className="role-fullstack">Full Stack Developer</span>
      <span className="role-mobile">Mobile Application Developer</span>

      <style>{`
        .text-accent {
          color: #FFD700;
        }

        .role-fullstack,
        .role-mobile {
          position: absolute;
          top: 0;
          left: 0;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid #FFD700;
          animation: typing 3s steps(24) 0s forwards, blinkCaret 0.75s step-end infinite;
        }

        .role-mobile {
          animation: none;
          opacity: 0;
        }

        @keyframes typing {
          0% { width: 0 }
          50% { width: 100% }
          60% { opacity: 1 }
          100% { opacity: 0 }
        }

        @keyframes blinkCaret {
          0%, 100% { border-color: transparent }
          50% { border-color: #FFD700 }
        }

        /* Animate switching roles */
        @keyframes cycleRoles {
          0%, 49% { opacity: 1 }
          50%, 100% { opacity: 0 }
        }

        @keyframes cycleRoles2 {
          0%, 49% { opacity: 0 }
          50%, 100% { opacity: 1 }
        }

        .role-fullstack {
          animation: typing 3s steps(24) 0s forwards, blinkCaret 0.75s step-end infinite, cycleRoles 6s infinite;
          animation-fill-mode: forwards;
        }
        .role-mobile {
          animation: typing 3s steps(28) 3s forwards, blinkCaret 0.75s step-end infinite 3s, cycleRoles2 6s infinite;
          animation-fill-mode: forwards;
        }
      `}</style>
    </span>
  );
};

const SocialIcon = ({ href, label, svgPath }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-white hover:text-yellow-400 transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-8 h-8"
      role="img"
      aria-hidden="true"
    >
      <path d={svgPath} />
    </svg>
  </a>
);
