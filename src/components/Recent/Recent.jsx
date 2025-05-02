import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";  // Import framer-motion for animation
import "./Recent.css";
import { projectData } from "../Data/Data";

export const Recent = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    // Show the first 4 projects initially
    setVisibleProjects(projectData.slice(0, 4));

    // Set interval to update the visible projects every 2 minutes
    const interval = setInterval(() => {
      // Rotate the projects by shifting the first one to the end of the array
      setVisibleProjects((prevProjects) => {
        const updatedProjects = [...prevProjects];
        updatedProjects.push(updatedProjects.shift()); // Move the first project to the end
        return updatedProjects;
      });
    }, 120000); // 2 minutes

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="recent" id="recent">
      <h1 className="title">Our Projects</h1>
      <p>
        Here is a list of some of our amazing projects. Feel free to explore and see the technologies we used to build them!
      </p>
      <div className="recent-section">
        {visibleProjects.map((project) => (
          <motion.div
            key={project.id}
            className="col-md-4 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="recent-card">
              <img src={project.image} alt={project.title} />
              <h2 className="recent-title">{project.title}</h2>
              <p className="recent-description">{project.description}</p>
              <h3 className="tech-title">Technologies Used:</h3>
              <ul className="tech-list">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
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
