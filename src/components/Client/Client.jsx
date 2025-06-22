import React, { useEffect, useState } from "react";
import { COLORS } from "../../constants/colors";
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
      boxShadow: `0 0 15px 4px ${COLORS.accentTeal}66`,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <>
      <section
        id="client"
        className="client-section py-10 px-5 text-center transition-colors duration-300"
        style={{ backgroundColor: COLORS.cardBg }}
      >
      
              {/* Header */}
              <div className="text-center mb-12">
                <motion.h1
                  className="text-4xl font-extrabold dark:text-white"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ color: COLORS.lightBlue }}
                >
                  What Client Say
                </motion.h1>
                <motion.div
                  className="w-24 h-1 mx-auto mt-3 rounded"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ backgroundColor: COLORS.accentTeal }}
                />
              </div>
        <p className="client-subtitle mb-8" style={{ color: COLORS.lightBlue }}>
          Trusted by our partners and clients across industries.
        </p>

        <div className="slider-wrapper relative overflow-hidden flex items-center justify-center">
          {/* Navigation Arrows with glow on hover */}
          <button
            onClick={handlePrev}
            className="nav-arrow left absolute top-1/2 left-0 -translate-y-1/2 px-3 cursor-pointer z-10 bg-transparent border-none"
            aria-label="Previous Slide"
            style={{ color: COLORS.accentTeal, fontSize: "1.75rem", filter: `drop-shadow(0 0 5px ${COLORS.accentTeal})` }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = COLORS.primaryTeal;
              e.currentTarget.style.filter = `drop-shadow(0 0 15px ${COLORS.primaryTeal})`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = COLORS.accentTeal;
              e.currentTarget.style.filter = `drop-shadow(0 0 5px ${COLORS.accentTeal})`;
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
                        backgroundColor: COLORS.primaryDark,
                        border: `2px solid ${COLORS.border}`,
                        color: COLORS.white,
                      }}
                    >
                      <img
                        src={client.image}
                        alt={client.name}
                        className="client-image w-20 h-20 rounded-full object-cover mx-auto mb-3"
                        style={{ filter: `drop-shadow(0 0 8px ${COLORS.accentTeal})` }}
                      />
                      <h5
                        className="client-name font-bold mb-1"
                        style={{ color: COLORS.lightBlue }}
                      >
                        {client.name}
                      </h5>
                      <h6
                        className="client-position mb-2"
                        style={{ color: COLORS.accentTeal, fontWeight: "600" }}
                      >
                        {client.position}
                      </h6>
                      <p
                        className="client-description text-sm"
                        style={{ color: COLORS.lightBlue }}
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
            style={{ color: COLORS.accentTeal, fontSize: "1.75rem", filter: `drop-shadow(0 0 5px ${COLORS.accentTeal})` }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = COLORS.primaryTeal;
              e.currentTarget.style.filter = `drop-shadow(0 0 15px ${COLORS.primaryTeal})`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = COLORS.accentTeal;
              e.currentTarget.style.filter = `drop-shadow(0 0 5px ${COLORS.accentTeal})`;
            }}
          >
            &#8594;
          </button>
        </div>
      </section>

      <section
        className="reach-section h-48 flex items-center justify-center text-center px-5"
        style={{ backgroundColor: COLORS.primaryMedium }}
      >
        <div className="reach max-w-xl">
          <h1
            className="font-semibold text-3xl mb-2"
            style={{ color: COLORS.lightBlue }}
          >
            Reach Out On Us
          </h1>
          <p style={{ color: COLORS.lightBlue }}>Let us make your ideas come true</p>
        </div>
      </section>
    </>
  );
};

export default Client;
