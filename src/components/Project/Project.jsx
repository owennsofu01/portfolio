import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { COLORS } from "../../constants/colors";
import { projectData } from "../Data/Data";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(projectData.map(project => project.category))];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projectData 
    : projectData.filter(project => project.category === selectedCategory);

  return (
    <motion.section
      id="projects"
      className="py-12 sm:py-20 px-4 sm:px-6 text-white transition-colors duration-300"
      style={{ backgroundColor: COLORS.primaryDark }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        variants={cardVariants}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 drop-shadow-md" style={{ color: COLORS.lightBlue }}>
          Our Projects
        </h1>
        <div className="w-16 sm:w-24 h-1 mx-auto mb-6 sm:mb-10 rounded" style={{ backgroundColor: COLORS.accentTeal }} />
        <p className="text-base sm:text-lg max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4" style={{ color: COLORS.lightGray }}>
          A showcase of projects demonstrating our expertise in modern web and mobile development.
          Explore the tech stacks behind each solution.
        </p>

        {/* Category Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <CategoryButton 
              key={category} 
              category={category} 
              isSelected={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <motion.div
          className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4"
          variants={containerVariants}
          key={selectedCategory} // Force re-render when category changes
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="text-center py-8 sm:py-12 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-base sm:text-lg" style={{ color: COLORS.lightGray }}>
            No projects found in the {selectedCategory} category.
          </p>
        </motion.div>
      )}
    </motion.section>
  );
};

// Project Card Component with 3D effects
const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      className="relative border rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-[0_0_15px_4px_rgba(15,150,156,0.7)] cursor-pointer transition-transform duration-300 will-change-transform flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
      style={{ 
        backgroundColor: COLORS.primaryMedium,
        borderColor: COLORS.accentTeal
      }}
      variants={cardVariants}
      onMouseMove={(e) => {
        if (window.innerWidth > 768) { // Only apply 3D on desktop
          const rect = cardRef.current.getBoundingClientRect();
          const cardX = rect.left + rect.width / 2;
          const cardY = rect.top + rect.height / 2;

          const deltaX = e.clientX - cardX;
          const deltaY = e.clientY - cardY;

          const maxTilt = 12;

          const tiltX = (deltaY / (rect.height / 2)) * maxTilt;
          const tiltY = -(deltaX / (rect.width / 2)) * maxTilt;

          cardRef.current.style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
        }
      }}
      onMouseLeave={() => {
        if (window.innerWidth > 768) {
          cardRef.current.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
        }
      }}
      whileHover={{ scale: window.innerWidth > 768 ? 1.04 : 1.02 }}
    >
      {/* Icon on left */}
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-md flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: COLORS.cardBg }}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-md"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div 
          className="w-full h-full flex items-center justify-center text-lg sm:text-2xl font-bold rounded-md"
          style={{ 
            backgroundColor: COLORS.accentTeal,
            color: COLORS.primaryDark,
            display: project.image ? 'none' : 'flex'
          }}
        >
          {project.title.charAt(0)}
        </div>
      </div>

      {/* Text content */}
      <div className="flex-1 min-w-0">
        <h2 className="text-lg sm:text-xl font-semibold mb-1 drop-shadow-sm" style={{ color: COLORS.lightBlue }}>
          {project.title}
        </h2>
        <p className="text-xs sm:text-sm mb-2" style={{ color: COLORS.lightGray }}>{project.description}</p>
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
          <span 
            className="text-xs px-2 py-1 rounded-md font-medium"
            style={{ 
              backgroundColor: COLORS.cardBg,
              color: COLORS.accentTeal,
              border: `1px solid ${COLORS.accentTeal}`
            }}
          >
            {project.category}
          </span>
        </div>
        <ul className="flex flex-wrap gap-1 sm:gap-2">
          {project.technologies.map((tech, index) => (
            <li
              key={index}
              className="text-white text-xs px-2 sm:px-3 py-1 rounded-md"
              style={{ backgroundColor: COLORS.accentTeal }}
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Icon link */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-300 flex-shrink-0"
        style={{ color: COLORS.lightBlue }}
        aria-label={`View project ${project.title}`}
      >
        {/* External Link SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 sm:h-8 sm:w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 3h7v7m0 0L10 21l-7-7 11-11z"
          />
        </svg>
      </a>
    </motion.div>
  );
};

// Category Button Component with 3D effects
const CategoryButton = ({ category, isSelected, onClick }) => {
  const buttonRef = useRef(null);

  return (
    <motion.button
      ref={buttonRef}
      onClick={onClick}
      className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 border-2 will-change-transform ${
        isSelected
          ? "shadow-lg transform scale-105"
          : "hover:scale-105"
      }`}
      style={{
        backgroundColor: isSelected ? COLORS.accentTeal : "transparent",
        borderColor: COLORS.accentTeal,
        color: isSelected ? COLORS.primaryDark : COLORS.accentTeal,
      }}
      onMouseMove={(e) => {
        if (window.innerWidth > 768) { // Only apply 3D on desktop
          const rect = buttonRef.current.getBoundingClientRect();
          const buttonX = rect.left + rect.width / 2;
          const buttonY = rect.top + rect.height / 2;

          const deltaX = e.clientX - buttonX;
          const deltaY = e.clientY - buttonY;

          const maxTilt = 8;

          const tiltX = (deltaY / (rect.height / 2)) * maxTilt;
          const tiltY = -(deltaX / (rect.width / 2)) * maxTilt;

          buttonRef.current.style.transform = `perspective(400px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${isSelected ? 1.05 : 1.02})`;
        }
      }}
      onMouseLeave={() => {
        if (window.innerWidth > 768) {
          buttonRef.current.style.transform = `perspective(400px) rotateX(0deg) rotateY(0deg) scale(${isSelected ? 1.05 : 1})`;
        }
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {category}
    </motion.button>
  );
};
