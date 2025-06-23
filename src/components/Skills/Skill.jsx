/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { skillsData } from "../Data/Data";
import { 
  FaCode, 
  FaServer, 
  FaCloud, 
  FaDatabase, 
  FaTools, 
  FaPalette,
  FaStar,
  FaRocket,
  FaLightbulb
} from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const skillVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const progressVariants = {
  hidden: { width: 0 },
  visible: (level) => ({ 
    width: `${level}%`, 
    transition: { duration: 1.5, ease: "easeOut" } 
  })
};

// Category configuration
const categoryConfig = {
  Frontend: {
    icon: FaCode,
    color: "#3B82F6",
    description: "Modern frontend technologies and frameworks"
  },
  Backend: {
    icon: FaServer,
    color: "#10B981",
    description: "Server-side development and APIs"
  },
  Cloud: {
    icon: FaCloud,
    color: "#F59E0B",
    description: "Cloud platforms and infrastructure"
  },
  Database: {
    icon: FaDatabase,
    color: "#8B5CF6",
    description: "Database management and optimization"
  },
  Tools: {
    icon: FaTools,
    color: "#EF4444",
    description: "Development tools and version control"
  },
  Design: {
    icon: FaPalette,
    color: "#EC4899",
    description: "Design tools and creative software"
  }
};

// Skill Level Badge Component
const SkillLevelBadge = ({ level }) => {
  const getLevelInfo = (level) => {
    if (level >= 90) return { text: "Expert", color: "#10B981", icon: FaStar };
    if (level >= 80) return { text: "Advanced", color: "#3B82F6", icon: FaRocket };
    if (level >= 70) return { text: "Intermediate", color: "#F59E0B", icon: FaLightbulb };
    return { text: "Beginner", color: "#6B7280", icon: FaLightbulb };
  };

  const { text, color, icon: Icon } = getLevelInfo(level);

  return (
    <div className="flex items-center space-x-1">
      <Icon className="text-xs" style={{ color }} />
      <span className="text-xs font-medium" style={{ color }}>
        {text}
      </span>
    </div>
  );
};

// Skill Card Component
const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700
                 hover:border-teal-400 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/20
                 hover:-translate-y-1"
      variants={skillVariants}
      custom={index}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      
      <div className="relative z-10">
        {/* Skill Header */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
            {skill.name}
          </h3>
          <SkillLevelBadge level={skill.level} />
        </div>

        {/* Progress Bar */}
        <div className="mb-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Proficiency</span>
            <span className="text-sm font-semibold text-teal-400">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-600"
              variants={progressVariants}
              custom={skill.level}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          </div>
        </div>

        {/* Skill Description */}
        <div className="text-xs text-gray-400 leading-relaxed">
          {skill.level >= 90 && "Expert level proficiency with extensive experience"}
          {skill.level >= 80 && skill.level < 90 && "Advanced skills with strong practical experience"}
          {skill.level >= 70 && skill.level < 80 && "Good working knowledge and hands-on experience"}
          {skill.level < 70 && "Basic understanding with learning in progress"}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-3 right-3 w-2 h-2 bg-teal-400 rounded-full opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

// Category Section Component
const CategorySection = ({ category, skills, index }) => {
  const config = categoryConfig[category];
  const Icon = config?.icon || FaCode;

  return (
    <motion.div
      className="mb-12"
      variants={categoryVariants}
      custom={index}
    >
      {/* Category Header */}
      <div className="flex items-center space-x-4 mb-8">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: config?.color }}
        >
          <Icon className="text-white text-xl" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{category}</h3>
          <p className="text-gray-400 text-sm">{config?.description}</p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, skillIndex) => (
          <SkillCard key={skill.name} skill={skill} index={skillIndex} />
        ))}
      </div>
    </motion.div>
  );
};

// Skills Overview Component
const SkillsOverview = () => {
  const totalSkills = skillsData.length;
  const categories = Object.keys(categoryConfig);
  const averageLevel = Math.round(skillsData.reduce((sum, skill) => sum + skill.level, 0) / totalSkills);

  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {[
        { value: totalSkills, label: "Total Skills", icon: FaCode },
        { value: categories.length, label: "Categories", icon: FaPalette },
        { value: `${averageLevel}%`, label: "Avg. Proficiency", icon: FaStar },
        { value: "1+", label: "Years Experience", icon: FaRocket }
      ].map((stat, index) => (
        <div key={index} className="text-center p-4 rounded-xl bg-gray-800/50 border border-gray-700">
          <stat.icon className="text-2xl text-teal-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-sm text-gray-300">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  );
};

// Main Skills Component
const Skill = () => {
  // Group skills by category
  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <>
      <Helmet>
        <title>Skills - Owen Nsofu | Technical Expertise</title>
        <meta
          name="description"
          content="Explore my technical skills across frontend, backend, cloud, database, tools, and design technologies."
        />
        <meta name="keywords" content="Skills, Technical Skills, Programming, Development, Owen Nsofu" />
        <meta name="author" content="Owen Nsofu" />
      </Helmet>

      <section id="skills" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Technical Skills
            </h1>
            <motion.div
              className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-teal-400 to-teal-600"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical expertise across various domains. 
              Each skill represents years of hands-on experience and continuous learning.
            </p>
          </motion.div>

          {/* Skills Overview */}
          <SkillsOverview />

          {/* Skills by Category */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {Object.entries(groupedSkills).map(([category, skills], index) => (
              <CategorySection 
                key={category} 
                category={category} 
                skills={skills} 
                index={index} 
              />
            ))}
          </motion.div>

          {/* Call to Action */}
                <motion.div
            className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600"
                  initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Collaborate?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life using cutting-edge technologies and best practices.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl
                         font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300
                         hover:shadow-lg hover:shadow-teal-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
                </motion.div>
      </div>
    </section>
    </>
  );
};

export default Skill;
