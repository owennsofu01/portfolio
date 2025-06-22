import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { COLORS } from "../../constants/colors";
import profileImg from "../../assets/profile.jpg";
import { hobbies, education, certifications } from "../Data/Data";

import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaDownload,
  FaUser,
  FaGraduationCap,
  FaCertificate,
} from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

export const About = () => {
  return (
    <>
      <Helmet>
        <title>About Me - Owen Nsofu | Software Developer Portfolio</title>
        <meta
          name="description"
          content="Learn more about Owen Nsofu, a proactive software developer with experience in web development, database design, and technical SEO."
        />
        <meta
          name="keywords"
          content="Owen Nsofu, About, Software Developer, Portfolio, Web Development, React, MySQL, Technical SEO, Zambia"
        />
        <meta name="author" content="Owen Nsofu" />
      </Helmet>

      <section
        id="about"
        className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
        style={{ backgroundColor: COLORS.primaryDark }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
        <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6" style={{ color: COLORS.lightBlue }}>
              About Me
            </h1>
            <motion.div
              className="w-24 h-1 mx-auto mb-6 rounded"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ backgroundColor: COLORS.accentTeal }}
              viewport={{ once: true }}
            />
            <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: COLORS.lightGray }}>
              Get to know me better - my journey, education, and what drives my passion for technology.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Profile Image */}
              <motion.div
                className="text-center mb-8 relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="w-64 h-64 rounded-full overflow-hidden border-4 shadow-2xl mx-auto"
                  style={{ borderColor: COLORS.accentTeal, boxShadow: `0 0 40px ${COLORS.accentTeal}30` }}
                >
                  <img src={profileImg} alt="Owen Nsofu" className="w-full h-full object-cover" />
              </div>
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: COLORS.accentTeal }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <FaUser className="text-white text-sm" />
                </motion.div>
              </motion.div>

              {/* Contact Info */}
              <div
                className="rounded-2xl p-6 mb-8"
                style={{
                  background: COLORS.secondaryDark,
                  boxShadow: `8px 8px 16px ${COLORS.primaryDark}, -8px -8px 16px ${COLORS.primaryLight}`,
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.lightBlue }}>
                  Contact Information
                </h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <FaPhone style={{ color: COLORS.accentTeal }} />
                    <span>+260 76 467 0944</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaEnvelope style={{ color: COLORS.accentTeal }} />
                    <span>owennsofu@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaLinkedin style={{ color: COLORS.accentTeal }} />
                    <span>LinkedIn Profile</span>
                  </div>
                </div>
              </div>

              {/* Hobbies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6" style={{ color: COLORS.lightBlue }}>
                  Hobbies & Interests
                </h2>
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: COLORS.secondaryDark,
                    boxShadow: `8px 8px 16px ${COLORS.primaryDark}, -8px -8px 16px ${COLORS.primaryLight}`,
                  }}
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {hobbies.map((hobby, i) => (
                      <motion.div
                        key={i}
                        className="text-center p-4 rounded-xl"
                        style={{
                          backgroundColor: COLORS.primaryDark,
                          boxShadow: `inset 6px 6px 12px #1a1a1e, inset -6px -6px 12px #2c2c30`,
                        }}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <hobby.icon className="text-3xl mb-2 mx-auto" style={{ color: hobby.color }} />
                        <p className="text-sm font-medium" style={{ color: COLORS.lightGray }}>
                          {hobby.name}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Download CV Button */}
              <motion.button
                className="w-full py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2"
                style={{ backgroundColor: COLORS.accentTeal, color: COLORS.primaryDark }}
                whileHover={{ boxShadow: `0 0 20px ${COLORS.accentTeal}50`, scale: 1.05 }}
                onClick={() => window.open("/path-to-cv.pdf", "_blank")}
              >
                <FaDownload />
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            {/* Right Column */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Profile */}
              <div className="mb-12 border-2 bg-gradient-to-br ${colorGradient}">
                <h2 className="text-3xl font-bold mb-6" style={{ color: COLORS.lightBlue }}>
                  Profile
                </h2>
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: COLORS.secondaryDark,
                    boxShadow: `8px 8px 16px ${COLORS.primaryDark}, -8px -8px 16px ${COLORS.primaryLight}`,
                  }}
                >
                  <p className="text-lg leading-relaxed" style={{ color: COLORS.lightGray }}>
                    I am a proactive software developer with a strong foundation in web development, database
                    design, and technical SEO. My passion lies in creating innovative solutions that solve real-world
                    problems.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="mb-12 border-2 bg-gradient-to-br ${colorGradient}">
                <h2 className="text-3xl font-bold mb-6" style={{ color: COLORS.lightBlue }}>
                  Education
                </h2>
                <div className="space-y-4">
                  {education.map((item, i) => (
                    <motion.div
                      key={i}
                      className="rounded-2xl p-6"
                      style={{
                        background: COLORS.secondaryDark,
                        boxShadow: `8px 8px 16px ${COLORS.primaryDark}, -8px -8px 16px ${COLORS.primaryLight}`,
                      }}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      custom={i}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: COLORS.accentTeal }}
                        >
                          <FaGraduationCap className="text-white text-xl" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.lightBlue }}>
                            {item.degree}
                </h3>
                          <p className="text-lg font-semibold mb-1" style={{ color: COLORS.accentTeal }}>
                            {item.institution}
                          </p>
                          <p className="text-sm mb-2" style={{ color: COLORS.lightGray }}>
                            {item.period}
                          </p>
                          <p className="text-base" style={{ color: COLORS.lightGray }}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-12 border-2 bg-gradient-to-br ${colorGradient}">
                <h2 className="text-3xl font-bold mb-6" style={{ color: COLORS.lightBlue }}>
                  Certifications
                </h2>
                <div className="space-y-4">
                  {certifications.map((cert, i) => (
                    <motion.div
                      key={i}
                      className="rounded-2xl p-6"
                      style={{
                        background: COLORS.secondaryDark,
                        boxShadow: `8px 8px 16px ${COLORS.primaryDark}, -8px -8px 16px ${COLORS.primaryLight}`,
                      }}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      custom={i}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: COLORS.accentTeal }}
                        >
                          <FaCertificate className="text-white text-xl" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.lightBlue }}>
                            {cert.name}
                          </h3>
                          <p className="text-lg font-semibold mb-1" style={{ color: COLORS.accentTeal }}>
                            {cert.issuer}
                          </p>
                          <p className="text-sm mb-2" style={{ color: COLORS.lightGray }}>
                            {cert.year}
                          </p>
                          <p className="text-base" style={{ color: COLORS.lightGray }}>
                            {cert.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
