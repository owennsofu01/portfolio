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
        <h1 className="text-4xl font-extrabold mb-4 text-[#6DA5C0] drop-shadow-md">
          Our Projects
        </h1>
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
            className="relative bg-[#072E33] border border-[#0F969C] rounded-2xl p-4 shadow-[0_0_15px_4px_rgba(15,150,156,0.7)] cursor-pointer transition-transform transform hover:-translate-y-2 hover:shadow-[0_0_30px_8px_rgba(15,150,156,1)] flex items-center gap-4"
            variants={cardVariants}
            whileHover={{ scale: 1.04 }}
          >
            {/* Floating glowing orbs */}
            <span
              className="glow-orb"
              style={{ animationDelay: "0s", top: "10%", left: "90%" }}
            />
            <span
              className="glow-orb"
              style={{ animationDelay: "2.5s", top: "85%", left: "10%", width: 14, height: 14 }}
            />
            <span
              className="glow-orb"
              style={{ animationDelay: "5s", top: "50%", left: "50%", width: 18, height: 18 }}
            />

            {/* Icon on left */}
            <img
              src={project.image}
              alt={project.title}
              className="w-16 h-16 object-cover rounded-md flex-shrink-0"
            />

            {/* Text content */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-[#6DA5C0] mb-1 drop-shadow-sm">
                {project.title}
              </h2>
              <p className="text-sm text-[#EAEAEA] mb-2">{project.description}</p>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-[#0F969C] text-white text-xs px-3 py-1 rounded-md"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Icon link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6DA5C0] hover:text-[#0F969C] transition-colors duration-300"
              aria-label={`View project ${project.title}`}
            >
              {/* External Link SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 3h7v7m0 0L10 21l-7-7 11-11z"
                />
              </svg>
            </a>

            {/* Glow & orb styles */}
            <style>{`
              .glow-orb {
                position: absolute;
                width: 20px;
                height: 20px;
                background-color: #0F969C;
                border-radius: 50%;
                filter: blur(3px);
                box-shadow: 0 0 15px 6px rgba(15,150,156,0.7);
                animation: orb-move 6s linear infinite, pulse 3s ease-in-out infinite;
                pointer-events: none;
                opacity: 0.75;
              }
              @keyframes orb-move {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              @keyframes pulse {
                0%, 100% {
                  box-shadow: 0 0 15px 6px rgba(15,150,156,0.7);
                }
                50% {
                  box-shadow: 0 0 25px 12px rgba(15,150,156,1);
                }
              }
            `}</style>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
