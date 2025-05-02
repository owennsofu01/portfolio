import React from "react";
import "./Project.css";
import { projectData } from "../Data/Data";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export const Project = () => {
  return (
    <motion.section
      className="project"
      id="project"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h1 className="title" variants={cardVariants}>
        Our Projects
      </motion.h1>
      <motion.p variants={cardVariants}>
        Here is a list of some of our amazing projects. Feel free to explore and see the technologies we used to build them!
      </motion.p>
      <div className="project-section">
        {projectData.map((project) => (
          <motion.div
            className="project-card"
            key={project.id}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={project.image} alt={project.title} />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <h3 className="tech-title">Technologies Used:</h3>
            <ul className="tech-list">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <div className="project-btn">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
