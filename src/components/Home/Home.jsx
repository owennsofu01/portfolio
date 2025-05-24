import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const Home = () => {
  return (
    <section className="home" id="home">
      <motion.div
        className="home-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="home-title" variants={itemVariants}>
          I'm Owen Nsofu
        </motion.h1>

       <motion.h3
  className="home-subtitle"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
>
  I’m a <span className="typing" />
</motion.h3>


        <motion.p className="home-description" variants={itemVariants}>
          Passionate about building innovative software solutions and creating
          visually appealing designs. I specialize in web and mobile development,
          ensuring seamless user experiences through modern technology and design
          principles.
        </motion.p>

        <motion.div className="home-buttons" variants={itemVariants}>
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
