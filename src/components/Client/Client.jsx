import React, { useEffect, useState } from "react";
import { clients } from "../Data/Data";
import { motion } from "framer-motion";
import "./Client.css";
import Blog from "../Blog/Blog";

const itemsPerPage = 2; // Display 2 items per slide

const Client = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(clients.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000); // every 5 seconds for smoother transition
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <>
      <section className="client-section py-5 text-center">
        <div className="container">
          <h2 className="client-title">What Clients Say</h2>
          <p className="client-subtitle">Trusted by our partners and clients across industries.</p>

          <div className="overflow-hidden">
            <motion.div
              className="client-slider"
              style={{
                display: "flex",
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: "transform 0.8s ease-in-out",
                width: `${totalSlides * 100}%`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const start = slideIndex * itemsPerPage;
                const group = clients.slice(start, start + itemsPerPage);

                return (
                  <motion.div
                    className="client-group"
                    key={slideIndex}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {group.map((client) => (
                      <motion.div
                        className="client-card"
                        key={client.id}
                        whileHover={{ scale: 1.05 }}
                      >
                        <img
                          src={client.image}
                          alt={client.name}
                          className="client-image"
                        />
                        <h5 className="client-name">{client.name}</h5>
                        <h6 className="client-position">{client.position}</h6>
                        <p className="client-description">{client.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <Blog />
    </>
  );
};

export default Client;
