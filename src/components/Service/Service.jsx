import React from "react";
import "./Service.css";
import { serviceData } from "../Data/Data";

export const Service = () => {
  return (
    <section className="service" id="service">
      <h1 className="title">Our Services</h1>
      <div className="service-section">
        {serviceData.map((service) => (
          <div className="card" key={service.id}>
            <img src={service.image} alt={service.title} />
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <h3 className="tech-title">Technologies:</h3>
            <ul className="tech-list">
              {service.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
