import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { projectData } from "../Data/Data";
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaPlay,
  FaCode,
  FaMobile,
  FaPalette
} from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Icon and color mappings for categories
const categoryIcons = {
  Web: FaCode,
  Mobile: FaMobile,
  Graphics: FaPalette,
};

const categoryColors = {
  Web: "#3B82F6",
  Mobile: "#10B981",
  Graphics: "#8B5CF6",
};

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const CategoryIcon = categoryIcons[project.category] || FaCode;
  const categoryColor = categoryColors[project.category] || "#6B7280";

  return (
      <motion.div
      ref={cardRef}
      className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden
                 border border-gray-700 hover:border-teal-400 transition-all duration-500
                 hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2"
        variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      custom={index}
    >
      <div className="relative h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div 
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1"
          style={{ backgroundColor: categoryColor, color: "white" }}
        >
          <CategoryIcon className="text-xs" />
          <span>{project.category}</span>
            </div>

        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
              href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center
                       hover:bg-white/30 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaExternalLinkAlt className="text-white text-sm" />
          </motion.a>
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center
                         hover:bg-white/30 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="text-white text-sm" />
            </motion.a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-700 text-gray-200 text-xs rounded-full font-medium
                         hover:bg-teal-500 hover:text-white transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600
                     text-white rounded-lg font-semibold hover:from-teal-600 hover:to-teal-700
                     transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teal-500/25"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>View Project</span>
          <FaPlay className="text-xs" />
        </motion.a>
      </div>
    </motion.div>
  );
};

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => (
  <motion.div 
    className="flex flex-wrap justify-center gap-3 mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    {categories.map((category) => (
      <motion.button
        key={category}
        onClick={() => onCategoryChange(category)}
        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 border-2
                   ${selectedCategory === category 
                     ? "bg-teal-500 border-teal-500 text-white shadow-lg shadow-teal-500/25" 
                     : "bg-transparent border-gray-600 text-gray-300 hover:border-teal-400 hover:text-teal-400"
                   }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {category}
      </motion.button>
    ))}
  </motion.div>
);

export const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(projectData.map((p) => p.category))];

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Projects - Owen Nsofu | Portfolio Showcase</title>
        <meta
          name="description"
          content="Explore our portfolio of web development, mobile apps, and design projects showcasing modern technology solutions."
        />
        <meta
          name="keywords"
          content="Projects, Portfolio, Web Development, Mobile Apps, Design, Owen Nsofu"
        />
        <meta name="author" content="Owen Nsofu" />
      </Helmet>

      <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Projects
            </h1>
            <motion.div
              className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-teal-400 to-teal-600"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of innovative projects demonstrating our expertise in modern web and mobile development.
              Each project represents our commitment to quality, creativity, and technical excellence.
            </p>
          </motion.div>

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">📁</div>
              <h3 className="text-2xl font-bold text-white mb-2">No Projects Found</h3>
              <p className="text-gray-300">
                No projects available in the {selectedCategory} category at the moment.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};
