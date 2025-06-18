import React, { useEffect, useState } from "react";
import { clients } from "../Data/Data";
import { motion } from "framer-motion";

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

  // Motion variants for client cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 15px 4px rgba(15,150,156,0.8)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <>
      <section
        id="client"
        className="client-section py-10 px-5 text-center transition-colors duration-300"
        style={{ backgroundColor: "#08252CFF" }}
      >
      
              {/* Header */}
              <div className="text-center mb-12">
                <motion.h1
                  className="text-4xl font-extrabold text-[#6DA5C0] dark:text-white"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  What Client Say
                </motion.h1>
                <motion.div
                  className="w-24 h-1 bg-[#0F969C] mx-auto mt-3 rounded"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
        <p className="client-subtitle mb-8" style={{ color: "#6DA5C0" }}>
          Trusted by our partners and clients across industries.
        </p>

        <div className="slider-wrapper relative overflow-hidden flex items-center justify-center">
          {/* Navigation Arrows with glow on hover */}
          <button
            onClick={handlePrev}
            className="nav-arrow left absolute top-1/2 left-0 -translate-y-1/2 px-3 cursor-pointer z-10 bg-transparent border-none"
            aria-label="Previous Slide"
            style={{ color: "#0F969C", fontSize: "1.75rem", filter: "drop-shadow(0 0 5px #0F969C)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#0C7075";
              e.currentTarget.style.filter = "drop-shadow(0 0 15px #0C7075)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#0F969C";
              e.currentTarget.style.filter = "drop-shadow(0 0 5px #0F969C)";
            }}
          >
            &#8592;
          </button>

          <motion.div
            className="client-slider flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${totalSlides * 100}%`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const start = slideIndex * itemsPerPage;
              const group = clients.slice(start, start + itemsPerPage);

              return (
                <div
                  key={slideIndex}
                  className="client-group flex flex-wrap justify-center gap-5 flex-shrink-0 w-full"
                >
                  {group.map((client) => (
                    <motion.div
                      key={client.id}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      className="client-card rounded-lg p-5 w-48 sm:w-56 text-center shadow-md"
                      style={{
                        backgroundColor: "#0E393FFF",
                        border: "2px solid #294D61",
                        color: "#FFFFFF",
                      }}
                    >
                      <img
                        src={client.image}
                        alt={client.name}
                        className="client-image w-20 h-20 rounded-full object-cover mx-auto mb-3"
                        style={{ filter: "drop-shadow(0 0 8px #0F969C)" }}
                      />
                      <h5
                        className="client-name font-bold mb-1"
                        style={{ color: "#6DA5C0" }}
                      >
                        {client.name}
                      </h5>
                      <h6
                        className="client-position mb-2"
                        style={{ color: "#0F969C", fontWeight: "600" }}
                      >
                        {client.position}
                      </h6>
                      <p
                        className="client-description text-sm"
                        style={{ color: "#6DA5C0" }}
                      >
                        {client.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              );
            })}
          </motion.div>

          <button
            onClick={handleNext}
            className="nav-arrow right absolute top-1/2 right-0 -translate-y-1/2 px-3 cursor-pointer z-10 bg-transparent border-none"
            aria-label="Next Slide"
            style={{ color: "#0F969C", fontSize: "1.75rem", filter: "drop-shadow(0 0 5px #0F969C)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#0C7075";
              e.currentTarget.style.filter = "drop-shadow(0 0 15px #0C7075)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#0F969C";
              e.currentTarget.style.filter = "drop-shadow(0 0 5px #0F969C)";
            }}
          >
            &#8594;
          </button>
        </div>
      </section>

      <section
        className="reach-section h-48 flex items-center justify-center text-center px-5"
        style={{ backgroundColor: "#072E33" }}
      >
        <div className="reach max-w-xl">
          <h1
            className="font-semibold text-3xl mb-2"
            style={{ color: "#6DA5C0" }}
          >
            Reach Out On Us
          </h1>
          <p style={{ color: "#6DA5C0" }}>Let us make your ideas come true</p>
        </div>
      </section>
    </>
  );
};

export default Client;
