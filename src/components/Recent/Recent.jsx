import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Recent.css";
import { projectData } from "../Data/Data";

export const Recent = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    setVisibleProjects(projectData.slice(0, 4));

    const interval = setInterval(() => {
      setVisibleProjects((prevProjects) => {
        const updated = [...prevProjects];
        updated.push(updated.shift());
        return updated;
      });
    }, 120000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="recent" id="recent">
      <motion.h1 
        className="title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Projects
      </motion.h1>

      <motion.p 
        className="title-ps"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Here is a list of some of our amazing projects. Feel free to explore and see the technologies we used to build them!
      </motion.p>

      <div className="recent-section">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="recent-grid-item"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="recent-card">
              <img src={project.image} alt={project.title} className="recent-img"/>
              <h2 className="recent-title">{project.title}</h2>
              <p className="recent-description">{project.description}</p>
              <h3 className="tech-title">Technologies Used:</h3>
              <ul className="tech-list">
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <div className="recent-btn">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
