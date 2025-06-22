/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import  { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { clients } from "../Data/Data";
import { 
  FaStar, 
  FaChevronLeft, 
  FaChevronRight,
  FaUserTie,
  FaAward,
  FaHandshake,
  FaTimes,
  FaPlay,
  FaPause} from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

// Statistics data
const statsData = [
  { icon: FaUserTie, value: "4+", label: "Happy Clients", color: "#3B82F6" },
  { icon: FaAward, value: "5+", label: "Projects Completed", color: "#10B981" },
  { icon: FaHandshake, value: "1+", label: "Years Experience", color: "#F59E0B" },
  { icon: FaStar, value: "4.9", label: "Average Rating", color: "#EF4444" }
];

// Stat Card Component (matching Skills card style)
const StatCard = ({ stat, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700
                 hover:border-teal-400 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/20
                 hover:-translate-y-1"
      variants={cardVariants}
      custom={index}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      
      <div className="relative z-10">
        {/* Stat Header */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
            {stat.label}
          </h3>
          <div className="flex items-center space-x-1">
            <FaStar className="text-xs text-teal-400" />
            <span className="text-xs font-medium text-teal-400">Active</span>
          </div>
        </div>

        {/* Stat Value */}
        <div className="mb-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Achievement</span>
            <span className="text-sm font-semibold text-teal-400">Current</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-600"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
        </div>

        {/* Stat Description */}
        <div className="text-xs text-gray-400 leading-relaxed mb-3">
          Consistent delivery of high-quality results
        </div>

        {/* Stat Value */}
        <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
        
        {/* Icon */}
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: `${stat.color}20` }}
        >
          <stat.icon size={24} style={{ color: stat.color }} />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-3 right-3 w-2 h-2 bg-teal-400 rounded-full opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

// Testimonial Card Component (matching Skills card style)
const TestimonialCard = ({ client, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border-2 p-6 
                 transition-all duration-500 cursor-pointer ${
                   isActive ? 'border-teal-400 shadow-2xl shadow-teal-500/20' : 'border-gray-700 hover:border-teal-400/50'
                 }`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      
      <div className="relative z-10">
        {/* Testimonial Header */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
            {client.name}
          </h3>
          <div className="flex items-center space-x-1">
            <FaStar className="text-xs text-teal-400" />
            <span className="text-xs font-medium text-teal-400">Verified</span>
          </div>
        </div>

        {/* Client Info */}
        <div className="mb-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Position</span>
            <span className="text-sm font-semibold text-teal-400">Client</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-600"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
        </div>

        {/* Client Description */}
        <div className="text-xs text-gray-400 leading-relaxed mb-4">
          Professional collaboration and exceptional results
        </div>

        {/* Client Position */}
        <div className="text-white font-medium text-sm mb-3">{client.position}</div>

        {/* Rating */}
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={12} className="text-yellow-400" />
          ))}
        </div>

        {/* Quote */}
        <div className="text-gray-300 text-sm leading-relaxed">
          "{client.description}"
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-3 right-3 w-2 h-2 bg-teal-400 rounded-full opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

// Navigation Controls Component
const NavigationControls = ({ currentIndex, totalClients, onPrev, onNext, onDotClick, isAutoPlaying, onToggleAutoPlay }) => (
  <motion.div 
    className="flex flex-col items-center gap-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    {/* Navigation Buttons */}
    <div className="flex justify-center items-center gap-4">
      <motion.button
        onClick={onPrev}
        className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-800 border-2 border-teal-400 
                   text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaChevronLeft size={18} />
      </motion.button>

      {/* Dots */}
      <div className="flex gap-2">
        {Array.from({ length: totalClients }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => onDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-teal-400 scale-125' : 'bg-gray-600'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>

      <motion.button
        onClick={onNext}
        className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-800 border-2 border-teal-400 
                   text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaChevronRight size={18} />
      </motion.button>
    </div>

    {/* Auto-play Toggle */}
    <motion.button
      onClick={onToggleAutoPlay}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2
                 ${isAutoPlaying ? 'bg-teal-500 text-white' : 'bg-gray-800 text-gray-300 border border-teal-400'}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isAutoPlaying ? <FaPause size={12} /> : <FaPlay size={12} />}
      {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
    </motion.button>
  </motion.div>
);

// Testimonial Modal Component
const TestimonialModal = ({ client, isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="max-w-2xl w-full p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 
                     border-2 border-teal-400 shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-teal-400">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/150/1F2937/FFFFFF?text=${client.name.charAt(0)}`;
                  }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{client.name}</h3>
                <p className="text-sm font-medium text-teal-400">{client.position}</p>
              </div>
            </div>
            <motion.button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-700 text-gray-300 
                         hover:bg-gray-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes size={16} />
            </motion.button>
          </div>
          
          {/* Content */}
          <div className="text-lg leading-relaxed mb-6 text-white">
            "{client.fullDescription || client.description}"
          </div>
          
          {/* Footer */}
          <div className="flex justify-end">
            <motion.button
              onClick={onClose}
              className="px-6 py-2 rounded-lg font-medium bg-teal-500 text-white hover:bg-teal-600 
                         transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Close
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// Call to Action Component
const CallToAction = () => (
  <motion.div 
    className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
      Join our satisfied clients and let's create something amazing together.
    </p>
    <motion.button
      className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl
                 font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300
                 hover:shadow-lg hover:shadow-teal-500/25"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
    >
      Get Started Today
    </motion.button>
  </motion.div>
);

// Main Client Component
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

  return (
    <>
      <Helmet>
        <title>Client Testimonials - Owen Nsofu | Success Stories</title>
        <meta
          name="description"
          content="Read testimonials from satisfied clients about their experience working with Owen Nsofu on web development and design projects."
        />
        <meta name="keywords" content="Testimonials, Client Reviews, Success Stories, Owen Nsofu" />
        <meta name="author" content="Owen Nsofu" />
      </Helmet>

      <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Client Testimonials
            </h1>
            <motion.div
              className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-teal-400 to-teal-600"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover what our valued clients have to say about their experience working with us. 
              We're proud to have built lasting relationships and delivered exceptional results.
            </p>
          </motion.div>

          {/* Statistics */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {statsData.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </motion.div>

          {/* Testimonials */}
          <div className="relative mb-12">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <TestimonialCard 
                client={clients[currentIndex]}
                isActive={true}
                onClick={() => openTestimonialModal(clients[currentIndex])}
              />
            </motion.div>

            {/* Navigation */}
            <NavigationControls
              currentIndex={currentIndex}
              totalClients={clients.length}
              onPrev={handlePrev}
              onNext={handleNext}
              onDotClick={handleDotClick}
              isAutoPlaying={isAutoPlaying}
              onToggleAutoPlay={() => setIsAutoPlaying(!isAutoPlaying)}
            />
          </div>

          {/* Call to Action */}
          <CallToAction />
        </div>
      </section>

      {/* Testimonial Modal */}
      <TestimonialModal
        client={selectedClient}
        isOpen={!!selectedClient}
        onClose={closeTestimonialModal}
      />
    </>
  );
};

export default Client;