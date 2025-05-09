import React from "react";
import "./Service.css";
import { serviceData } from "../Data/Data";
import Work from "../Work/Work";
import { Recent } from "../Recent/Recent";
import { motion } from "framer-motion";

export const Service = () => {
  return (
    <>
      <section className="service" id="service">
        <h1 className="title">Our Services</h1>
        <div className="service-section">
          {serviceData.map((service, index) => (
            <motion.div
              className="card"
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={service.image} alt={service.title} />
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
             
            </motion.div>
          ))}
        </div>
      </section>
      <Work />
      <Recent />
    </>
  );
};
