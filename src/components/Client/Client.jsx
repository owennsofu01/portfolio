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

  return (
    <>
      <section
      id="client"
        className="client-section py-10 px-5 text-center transition-colors duration-300"
        style={{ backgroundColor: "#05161A" }}
      >
        <h2
          className="client-title text-3xl font-semibold mb-2"
          style={{ color: "#6DA5C0" }}
        >
          What Clients Say
        </h2>
        <p
          className="client-subtitle mb-8"
          style={{ color: "#6DA5C0" }}
        >
          Trusted by our partners and clients across industries.
        </p>

        <div className="slider-wrapper relative overflow-hidden flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="nav-arrow left absolute top-1/2 left-0 -translate-y-1/2 px-3 cursor-pointer z-10 bg-transparent border-none"
            aria-label="Previous Slide"
            style={{ color: "#0F969C", fontSize: "1.75rem" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0C7075")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#0F969C")}
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
                      whileHover={{ scale: 1.05 }}
                      className="client-card rounded-lg p-5 w-48 sm:w-56 text-center shadow-md"
                      style={{
                        backgroundColor: "#072E33",
                        border: "2px solid #294D61",
                        color: "#FFFFFF",
                      }}
                    >
                      <img
                        src={client.image}
                        alt={client.name}
                        className="client-image w-20 h-20 rounded-full object-cover mx-auto mb-3"
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
            style={{ color: "#0F969C", fontSize: "1.75rem" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0C7075")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#0F969C")}
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
          <p style={{ color: "#6DA5C0" }}>
            Let us make your ideas come true
          </p>
        </div>
      </section>
    </>
  );
};

export default Client;
