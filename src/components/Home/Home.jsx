import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { COLORS } from "../../constants/colors";
import profileImg from "../../assets/2022_11_17_06_14_IMG_1551.JPG";

const roles = ["Full Stack Developer", "Mobile Application Developer"];

export const Home = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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

      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-animate" />

      <main
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-6 text-gray-100 relative"
      >
        {/* Profile Image with Spinning Ring */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-8"
        >
          {/* Outer spinning glow ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute -inset-3 rounded-full border-4 opacity-30 blur-md"
            style={{ borderColor: COLORS.lightBlue }}
          />
          {/* Profile image */}
          <div
            className="w-52 h-52 rounded-full mx-auto border-4 shadow-lg overflow-hidden relative z-10"
            style={{ borderColor: COLORS.mediumBlue }}
          >
            <img
              src={profileImg}
              alt="Owen Nsofu"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4" style={{ color: COLORS.white }}>
          Owen Nsofu
        </h1>

        {/* Role */}
        <h2
          className={`text-2xl sm:text-3xl font-semibold mb-6 min-h-[3rem] transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          style={{ color: COLORS.lightBlue }}
        >
          I'm a {roles[currentRoleIndex]}
        </h2>

        {/* Description */}
        <p className="text-lg max-w-2xl text-center leading-relaxed mb-10" style={{ color: COLORS.lightGray }}>
          Passionate software engineer specializing in building scalable web and mobile
          applications. Skilled in modern technologies, focusing on clean design, user
          experience, and performance. Dedicated to turning ideas into real-world solutions.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-6 mb-12 justify-center">
          <motion.a
            href="../../assets/ow.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-semibold py-3 px-7 rounded-md transition duration-300"
            style={{ backgroundColor: COLORS.accentTeal, color: COLORS.white }}
          >
            Download CV
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-semibold py-3 px-7 rounded-md transition duration-300"
            style={{ backgroundColor: COLORS.primaryTeal, color: COLORS.white }}
          >
            Contact Me
          </motion.a>
        </div>

        {/* Social Icons */}
        <nav className="flex justify-center gap-10" aria-label="Social media links">
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
        </nav>
      </main>
    </>
  );
};

const SocialIcon = ({ href, label, svgPath }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.95 }}
    style={{ color: COLORS.white }}
  >
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-8 h-8"
      aria-hidden="true"
      whileHover={{
        rotate: [0, 15, -15, 0],
        transition: { duration: 0.6 },
      }}
    >
      <path d={svgPath} />
    </motion.svg>
  </motion.a>
);
