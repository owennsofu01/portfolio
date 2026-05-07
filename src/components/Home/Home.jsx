/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { COLORS } from "../../constants/colors";
import profileImg from "../../assets/profile.jpg";
import cvPDF from "../../assets/ow.pdf";
import {
  FaDownload,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaCode,
  FaMobile,
  FaPalette,
  FaServer,
  FaParagraph,
} from "react-icons/fa";

const roles = [
  "Full Stack Developer",
  "Mobile Application Developer",
  "Graphic Design",
  "Software Engineer",
];

const skills = [
  { icon: FaCode, name: "Web Development", color: "#3B82F6" },
  { icon: FaMobile, name: "Mobile Apps", color: "#10B981" },
  { icon: FaPalette, name: "Graphics Design", color: "#F59E0B" },
  { icon: FaServer, name: "Backend Systems", color: "#EF4444" },
];

export const Home = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const siteUrl = "https://owennsofu.com"; // ✅ update to your real domain
  const pageUrl = `${siteUrl}/`;
  const ogImage = `${siteUrl}/og-image.jpg`; // ✅ place og-image.jpg in /public

  return (
    <>
      <Helmet>
        {/* ── Basic ── */}
        <title>Owen Nsofu | Full Stack & Mobile Developer</title>
        <meta
          name="description"
          content="Owen Nsofu is a passionate software engineer specializing in scalable web and mobile applications, clean design, and great user experiences."
        />
        <meta
          name="keywords"
          content="Owen Nsofu, software engineer, full stack developer, web developer, mobile developer, React, Node.js, portfolio, Zambia"
        />
        <meta name="author" content="Owen Nsofu" />
        <link rel="canonical" href={pageUrl} />

        {/* ── Open Graph ── */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Owen Nsofu" />
        <meta property="og:title" content="Owen Nsofu | Full Stack & Mobile Developer" />
        <meta
          property="og:description"
          content="Owen Nsofu is a passionate software engineer specializing in scalable web and mobile applications, clean design, and great user experiences."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@owennsofu" />
        <meta name="twitter:creator" content="@owennsofu" />
        <meta name="twitter:title" content="Owen Nsofu | Full Stack & Mobile Developer" />
        <meta
          name="twitter:description"
          content="Owen Nsofu is a passionate software engineer specializing in scalable web and mobile applications, clean design, and great user experiences."
        />
        <meta name="twitter:image" content={ogImage} />

        {/* ── Structured Data (JSON-LD) ── */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Owen Nsofu",
            url: siteUrl,
            image: ogImage,
            sameAs: [
              "https://linkedin.com/in/owennsofu",
              "https://github.com/owennsofu",
              "https://twitter.com/owennsofu",
            ],
            jobTitle: "Full Stack Developer",
            description:
              "Passionate software engineer specializing in web and mobile development.",
          })}
        </script>
      </Helmet>

      {/* ── Animated Background ── */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <main
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="max-w-6xl mx-auto w-full">
          {/* ── Hero Section ── */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-4"
              >
                <span
                  className="text-lg sm:text-xl font-medium px-4 py-2 rounded-full border"
                  style={{
                    color: COLORS.accentTeal,
                    borderColor: COLORS.accentTeal,
                    backgroundColor: `${COLORS.accentTeal}10`,
                  }}
                >
                  👋 Hello, I'm
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight"
                style={{ color: COLORS.white }}
              >
                Owen Nsofu
              </motion.h1>

              {/* Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-8"
              >
                <h2
                  className={`text-xl sm:text-2xl lg:text-3xl font-semibold min-h-[3rem] transition-all duration-300 ${
                    fade ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ color: COLORS.lightBlue }}
                >
                  {" "}
                  <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                    {roles[currentRoleIndex]}
                  </span>
                </h2>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10"
                style={{ color: COLORS.lightGray }}
              >
                Passionate software engineer specializing in building scalable web and
                mobile applications. Skilled in modern technologies, focusing on clean
                design, user experience, and performance. Dedicated to turning ideas into
                real-world solutions.
              </motion.p>

              {/* Skills Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="grid grid-cols-2 gap-4 mb-10 max-w-md mx-auto lg:mx-0"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg"
                    style={{
                      backgroundColor: COLORS.cardBg,
                      border: `1px solid ${COLORS.border}`,
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${skill.color}20` }}
                    >
                      <skill.icon size={16} style={{ color: skill.color }} />
                    </div>
                    <span
                      className="text-sm font-medium"
                      style={{ color: COLORS.lightBlue }}
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              >
                <motion.a
                  href={cvPDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg"
                  style={{
                    backgroundColor: COLORS.accentTeal,
                    color: COLORS.white,
                    boxShadow: `0 4px 20px ${COLORS.accentTeal}40`,
                  }}
                >
                  <FaDownload size={18} />
                  Download CV
                </motion.a>
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 font-semibold py-4 px-8 rounded-xl transition-all duration-300 border-2"
                  style={{
                    borderColor: COLORS.accentTeal,
                    color: COLORS.accentTeal,
                    backgroundColor: "transparent",
                  }}
                >
                  <FaEnvelope size={18} />
                  Contact Me
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="flex justify-center lg:justify-start gap-6"
              >
                <SocialIcon
                  href="https://linkedin.com/in/owennsofu"
                  icon={FaLinkedin}
                  label="LinkedIn"
                  color="#0077B5"
                />
                <SocialIcon
                  href="https://github.com/owennsofu"
                  icon={FaGithub}
                  label="GitHub"
                  color="#333"
                />
                <SocialIcon
                  href="https://twitter.com/owennsofu"
                  icon={FaTwitter}
                  label="Twitter"
                  color="#1DA1F2"
                />
              </motion.div>
            </motion.div>

            {/* Right Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Animated rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  className="absolute -inset-4 rounded-full border-2 opacity-30"
                  style={{ borderColor: COLORS.accentTeal }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                  className="absolute -inset-8 rounded-full border border-dashed opacity-20"
                  style={{ borderColor: COLORS.lightBlue }}
                />

                {/* Profile image */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="relative z-10"
                >
                  <div
                    className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 shadow-2xl"
                    style={{
                      borderColor: COLORS.accentTeal,
                      boxShadow: `0 0 40px ${COLORS.accentTeal}30`,
                    }}
                  >
                    <img
                      src={profileImg}
                      alt="Owen Nsofu - Full Stack Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: COLORS.accentTeal,
                    boxShadow: `0 4px 20px ${COLORS.accentTeal}40`,
                  }}
                >
                  <FaCode size={20} style={{ color: COLORS.white }} />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: COLORS.primaryTeal,
                    boxShadow: `0 4px 20px ${COLORS.primaryTeal}40`,
                  }}
                >
                  <FaParagraph size={20} style={{ color: COLORS.white }} />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: COLORS.primaryTeal,
                    boxShadow: `0 4px 20px ${COLORS.primaryTeal}40`,
                  }}
                >
                  <FaMobile size={20} style={{ color: COLORS.white }} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
};

const SocialIcon = ({ href, icon: Icon, label, color }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ scale: 1.1, y: -3 }}
    whileTap={{ scale: 0.9 }}
    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
    style={{
      backgroundColor: COLORS.cardBg,
      border: `1px solid ${COLORS.border}`,
      color: color,
    }}
  >
    <Icon size={20} />
  </motion.a>
);