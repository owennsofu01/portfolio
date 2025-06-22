import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COLORS } from "../../constants/colors";
import { clients, statsData } from "../Data/Data";
import { 
  FaQuoteLeft, 
  FaStar, 
  FaChevronLeft, 
  FaChevronRight,
  FaUserTie,
  FaAward,
  FaHandshake,
  FaTimes
} from "react-icons/fa";

const Client = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedClient, setSelectedClient] = useState(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
    setIsAutoPlaying(false);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const openTestimonialModal = (client) => {
    setSelectedClient(client);
  };

  const closeTestimonialModal = () => {
    setSelectedClient(null);
  };

  // Statistics data
  const stats = [
    { icon: FaUserTie, value: "50+", label: "Happy Clients", color: "#3B82F6" },
    { icon: FaAward, value: "100+", label: "Projects Completed", color: "#10B981" },
    { icon: FaHandshake, value: "5+", label: "Years Experience", color: "#F59E0B" },
    { icon: FaStar, value: "4.9", label: "Average Rating", color: "#EF4444" },
  ];

  return (
    <>
      <section
        id="client"
        className="min-h-screen py-16 px-4 sm:px-6 transition-colors duration-300"
        style={{ backgroundColor: COLORS.primaryDark }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6"
              style={{ color: COLORS.lightBlue }}
            >
              Client Testimonials
            </h1>
            <motion.div
              className="w-24 h-1 mx-auto mb-6 rounded"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ backgroundColor: COLORS.accentTeal }}
            />
            <p
              className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: COLORS.lightGray }}
            >
              Discover what our valued clients have to say about their experience working with us. 
              We're proud to have built lasting relationships and delivered exceptional results.
            </p>
          </motion.div>

          {/* Statistics Section */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  backgroundColor: COLORS.cardBg,
                  border: `2px solid ${COLORS.border}`,
                }}
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <stat.icon size={28} style={{ color: stat.color }} />
                </div>
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: COLORS.lightBlue }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: COLORS.lightGray }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials Section */}
          <div className="relative">
            {/* Main Testimonial */}
            <motion.div
              className="max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div
                className="relative p-8 sm:p-12 rounded-2xl shadow-2xl"
                style={{
                  backgroundColor: COLORS.primaryMedium,
                  border: `2px solid ${COLORS.accentTeal}`,
                }}
              >
                {/* Quote Icon */}
                <div
                  className="absolute -top-4 left-8 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: COLORS.accentTeal }}
                >
                  <FaQuoteLeft size={20} style={{ color: COLORS.white }} />
                </div>

                {/* Client Info */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                  <div className="relative">
                    <div
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4"
                      style={{ borderColor: COLORS.accentTeal }}
                    >
                      <img
                        src={clients[currentIndex].image}
                        alt={clients[currentIndex].name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/150/1F2937/FFFFFF?text=" + clients[currentIndex].name.charAt(0);
                        }}
                      />
                    </div>
                    <div
                      className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: COLORS.accentTeal }}
                    >
                      <FaStar size={12} style={{ color: COLORS.white }} />
                    </div>
                  </div>
                  
                  <div className="text-center sm:text-left">
                    <h3
                      className="text-xl sm:text-2xl font-bold mb-2"
                      style={{ color: COLORS.lightBlue }}
                    >
                      {clients[currentIndex].name}
                    </h3>
                    <p
                      className="text-sm sm:text-base font-medium mb-3"
                      style={{ color: COLORS.accentTeal }}
                    >
                      {clients[currentIndex].position}
                    </p>
                    <div className="flex justify-center sm:justify-start gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          size={16}
                          style={{ color: "#FBBF24" }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="relative">
                  <p
                    className="text-lg sm:text-xl leading-relaxed mb-6"
                    style={{ color: COLORS.lightBlue }}
                  >
                    "{clients[currentIndex].description}"
                  </p>
                  
                  <button
                    onClick={() => openTestimonialModal(clients[currentIndex])}
                    className="text-sm font-medium hover:underline transition-colors"
                    style={{ color: COLORS.accentTeal }}
                  >
                    Read full testimonial →
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <motion.button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  backgroundColor: COLORS.cardBg,
                  border: `2px solid ${COLORS.accentTeal}`,
                  color: COLORS.accentTeal,
                }}
              >
                <FaChevronLeft size={18} />
              </motion.button>

              {/* Dots */}
              <div className="flex gap-2">
                {clients.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "scale-125" : ""
                    }`}
                    style={{
                      backgroundColor: index === currentIndex ? COLORS.accentTeal : COLORS.border,
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={handleNext}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  backgroundColor: COLORS.cardBg,
                  border: `2px solid ${COLORS.accentTeal}`,
                  color: COLORS.accentTeal,
                }}
              >
                <FaChevronRight size={18} />
              </motion.button>
            </div>

            {/* Auto-play Toggle */}
            <div className="text-center">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isAutoPlaying ? "opacity-100" : "opacity-60"
                }`}
                style={{
                  backgroundColor: isAutoPlaying ? COLORS.accentTeal : COLORS.cardBg,
                  color: isAutoPlaying ? COLORS.white : COLORS.lightGray,
                  border: `1px solid ${COLORS.accentTeal}`,
                }}
              >
                {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
              </button>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4"
              style={{ color: COLORS.lightBlue }}
            >
              Ready to Start Your Project?
            </h2>
            <p
              className="text-lg mb-8 max-w-2xl mx-auto"
              style={{ color: COLORS.lightGray }}
            >
              Join our satisfied clients and let's create something amazing together.
            </p>
            <motion.button
              className="px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
              style={{
                backgroundColor: COLORS.accentTeal,
                color: COLORS.white,
              }}
              whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${COLORS.accentTeal}40` }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Modal */}
      <AnimatePresence>
        {selectedClient && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeTestimonialModal}
          >
            <motion.div
              className="max-w-2xl w-full p-6 sm:p-8 rounded-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: COLORS.primaryMedium,
                border: `2px solid ${COLORS.accentTeal}`,
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full overflow-hidden border-3"
                    style={{ borderColor: COLORS.accentTeal }}
                  >
                    <img
                      src={selectedClient.image}
                      alt={selectedClient.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/150/1F2937/FFFFFF?text=" + selectedClient.name.charAt(0);
                      }}
                    />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold"
                      style={{ color: COLORS.lightBlue }}
                    >
                      {selectedClient.name}
                    </h3>
                    <p
                      className="text-sm font-medium"
                      style={{ color: COLORS.accentTeal }}
                    >
                      {selectedClient.position}
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeTestimonialModal}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: COLORS.cardBg,
                    color: COLORS.lightGray,
                  }}
                >
                  <FaTimes size={16} />
                </button>
              </div>
              
              <div
                className="text-lg leading-relaxed mb-6"
                style={{ color: COLORS.lightBlue }}
              >
                "{selectedClient.fullDescription || selectedClient.description}"
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={closeTestimonialModal}
                  className="px-6 py-2 rounded-lg font-medium transition-colors"
                  style={{
                    backgroundColor: COLORS.accentTeal,
                    color: COLORS.white,
                  }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Client; 