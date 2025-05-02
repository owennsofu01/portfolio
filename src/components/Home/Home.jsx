import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

export const Home = () => {
  return (
    <section className="home" id="home">
      <motion.div
        className="home-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          className="home-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          I'm Owen Nsofu
        </motion.h1>

        <motion.h3
          className="home-subtitle typing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Software Engineer & Graphic Designer
        </motion.h3>

        <motion.p
          className="home-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Passionate about building innovative software solutions and creating
          visually appealing designs. I specialize in web and mobile
          development, ensuring seamless user experiences through modern
          technology and design principles.
        </motion.p>

        <motion.div
          className="home-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <a href="../../assets/ow.pdf" download className="btn btn-primary">
            Download CV
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
