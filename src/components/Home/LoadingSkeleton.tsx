import React from "react";
import { motion } from "framer-motion";
import { 
  FaCode, 
  FaRocket, 
  FaStar, 
  FaHeart,
  FaCircle
} from "react-icons/fa";

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

const shimmerVariants = {
  hidden: { x: "-100%" },
  visible: { 
    x: "100%",
    transition: { 
      duration: 1.5, 
      repeat: Infinity, 
      ease: "linear" 
    }
  }
};

// Skeleton Card Component (matching Skills card style)
const SkeletonCard = ({ type = "default", index }) => {
  const getCardContent = () => {
    switch (type) {
      case "title":
        return (
          <>
            <div className="flex justify-between items-start mb-4">
              <div className="h-6 bg-gray-700 rounded w-32 animate-pulse" />
              <div className="flex items-center space-x-1">
                <FaStar className="text-xs text-teal-400" />
                <span className="text-xs font-medium text-teal-400">Loading</span>
              </div>
            </div>
            <div className="h-8 bg-gray-700 rounded w-full animate-pulse mb-3" />
            <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse" />
          </>
        );
      
      case "content":
        return (
          <>
            <div className="flex justify-between items-start mb-4">
              <div className="h-5 bg-gray-700 rounded w-24 animate-pulse" />
              <div className="flex items-center space-x-1">
                <FaCode className="text-xs text-teal-400" />
                <span className="text-xs font-medium text-teal-400">Loading</span>
              </div>
            </div>
            <div className="space-y-2 mb-3">
              <div className="h-3 bg-gray-700 rounded w-full animate-pulse" />
              <div className="h-3 bg-gray-700 rounded w-5/6 animate-pulse" />
              <div className="h-3 bg-gray-700 rounded w-4/6 animate-pulse" />
            </div>
            <div className="h-4 bg-gray-700 rounded w-1/2 animate-pulse" />
          </>
        );
      
      case "stats":
        return (
          <>
            <div className="flex justify-between items-start mb-4">
              <div className="h-5 bg-gray-700 rounded w-20 animate-pulse" />
              <div className="flex items-center space-x-1">
                <FaRocket className="text-xs text-teal-400" />
                <span className="text-xs font-medium text-teal-400">Loading</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-8 bg-gray-700 rounded w-16 mx-auto animate-pulse mb-2" />
              <div className="h-3 bg-gray-700 rounded w-20 mx-auto animate-pulse" />
            </div>
          </>
        );
      
      default:
        return (
          <>
            <div className="flex justify-between items-start mb-4">
              <div className="h-5 bg-gray-700 rounded w-28 animate-pulse" />
              <div className="flex items-center space-x-1">
                <FaHeart className="text-xs text-teal-400" />
                <span className="text-xs font-medium text-teal-400">Loading</span>
              </div>
            </div>
            <div className="h-4 bg-gray-700 rounded w-full animate-pulse mb-3" />
            <div className="h-3 bg-gray-700 rounded w-3/4 animate-pulse" />
          </>
        );
    }
  };

  return (
    <motion.div
      className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700
                 hover:border-teal-400 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/20
                 hover:-translate-y-1 overflow-hidden"
      variants={cardVariants}
      custom={index}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        variants={shimmerVariants}
        initial="hidden"
        animate="visible"
      />
      
      <div className="relative z-10">
        {getCardContent()}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-3 right-3 w-2 h-2 bg-teal-400 rounded-full opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

// Loading Stats Component
const LoadingStats = () => (
  <motion.div 
    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {[1, 2, 3, 4].map((index) => (
      <div key={index} className="text-center p-4 rounded-xl bg-gray-800/50 border border-gray-700">
        <div className="w-8 h-8 bg-gray-700 rounded-full mx-auto mb-2 animate-pulse" />
        <div className="h-6 bg-gray-700 rounded w-12 mx-auto mb-1 animate-pulse" />
        <div className="h-3 bg-gray-700 rounded w-16 mx-auto animate-pulse" />
      </div>
    ))}
  </motion.div>
);

// Loading Header Component
const LoadingHeader = () => (
  <motion.div 
    className="text-center mb-16"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="h-16 bg-gray-700 rounded-lg w-64 mx-auto mb-6 animate-pulse" />
    <div className="h-1 bg-gray-700 rounded w-24 mx-auto mb-6 animate-pulse" />
    <div className="h-6 bg-gray-700 rounded w-96 mx-auto animate-pulse" />
  </motion.div>
);

// Main LoadingSkeleton Component
export const LoadingSkeleton = () => {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Loading Header */}
        <LoadingHeader />

        {/* Loading Stats */}
        <LoadingStats />

        {/* Loading Content Grid */}
        <motion.div
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title Card */}
          <SkeletonCard type="title" index={0} />
          
          {/* Content Cards */}
          <SkeletonCard type="content" index={1} />
          <SkeletonCard type="content" index={2} />
          <SkeletonCard type="content" index={3} />
          <SkeletonCard type="content" index={4} />
          <SkeletonCard type="content" index={5} />
          
          {/* Stats Card */}
          <SkeletonCard type="stats" index={6} />
        </motion.div>

        {/* Loading Call to Action */}
        <motion.div 
          className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="h-8 bg-gray-700 rounded w-64 mx-auto mb-4 animate-pulse" />
          <div className="h-4 bg-gray-700 rounded w-96 mx-auto mb-6 animate-pulse" />
          <div className="h-12 bg-gray-700 rounded w-48 mx-auto animate-pulse" />
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          className="fixed bottom-6 right-6 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaCircle className="text-white text-2xl" />
        </motion.div>
      </div>
    </section>
  );
};
