import React, { useEffect, useState } from "react";
import { clients } from "../Data/Data";
import { motion } from "framer-motion";
import "./Client.css";
import Blog from "../Blog/Blog";

const Client = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  const totalSlides = Math.ceil(clients.length / itemsPerPage);

  function getItemsPerPage() {
    return window.innerWidth < 768 ? 1 : window.innerWidth < 992 ? 2 : 4;
  }

  useEffect(() => {
    const handleResize = () => setItemsPerPage(getItemsPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <>
      <section className="client-section">
        <h2 className="client-title">What Clients Say</h2>
        <p className="client-subtitle">Trusted by our partners and clients across industries.</p>

        <div className="slider-wrapper">
          <button className="nav-arrow left" onClick={handlePrev}>
            &#8592;
          </button>
          <motion.div
            className="client-slider"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${totalSlides * 100}%`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const start = slideIndex * itemsPerPage;
              const group = clients.slice(start, start + itemsPerPage);

              return (
                <div className="client-group" key={slideIndex}>
                  {group.map((client) => (
                    <motion.div
                      className="client-card"
                      key={client.id}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img src={client.image} alt={client.name} className="client-image" />
                      <h5 className="client-name">{client.name}</h5>
                      <h6 className="client-position">{client.position}</h6>
                      <p className="client-description">{client.description}</p>
                    </motion.div>
                  ))}
                </div>
              );
            })}
          </motion.div>
          <button className="nav-arrow right" onClick={handleNext}>
            &#8594;
          </button>
        </div>
      </section>

      <Blog />
    </>
  );
};

export default Client;
