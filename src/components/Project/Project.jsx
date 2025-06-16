import React from "react";
import { motion } from "framer-motion";
import { projectData } from "../Data/Data";

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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export const Project = () => {
  return (
    <motion.section
      id="projects"
      className="bg-[#05161A] py-20 px-4 text-white transition-colors duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        variants={cardVariants}
      >
        <h1 className="text-4xl font-extrabold mb-4 text-[#6DA5C0]">Our Projects</h1>
        <div className="w-24 h-1 bg-[#0F969C] mx-auto mb-10 rounded" />
        <p className="text-lg text-[#EAEAEA] max-w-3xl mx-auto mb-14 leading-relaxed">
          A showcase of projects demonstrating our expertise in modern web and mobile development.
          Explore the tech stacks behind each solution.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        variants={containerVariants}
      >
        {projectData.map((project) => (
          <motion.div
            key={project.id}
            className="bg-[#072E33] border border-[#294D61] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            variants={cardVariants}
            whileHover={{ scale: 1.04 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-xl mb-5"
            />
            <h2 className="text-xl font-semibold text-[#6DA5C0] mb-2">{project.title}</h2>
            <p className="text-sm text-[#EAEAEA] mb-4">{project.description}</p>

            <h3 className="text-sm font-bold text-white mb-2">Technologies:</h3>
            <ul className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <li
                  key={index}
                  className="bg-[#0F969C] text-white text-xs px-3 py-1 rounded-md"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="text-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#6DA5C0] text-black font-semibold px-5 py-2 rounded-md hover:bg-[#0F969C] hover:text-white transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
