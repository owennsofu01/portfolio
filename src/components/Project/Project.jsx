import React from "react";
import "./Project.css";
import { projectData } from "../Data/Data";

export const Project = () => {
  return (
    <section className="project" id="project">
      <h1 className="title">Our Projects</h1>
      <p>
        Here is a list of some of our amazing projects. Feel free to explore and see the technologies we used to build them!
      </p>
      <div className="project-section">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
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
          </div>
        ))}
      </div>
    </section>
  );
};
