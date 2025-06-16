import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../Data/Data";

const Skill = () => {
  // Group skills by category
  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section
      id="skills"
      className="skills-section py-20 px-10 sm:px-6 transition-colors duration-300 bg-gray-50 dark:bg-[#2c2d2d]"
    >
      <div className="skills-container max-w-4xl mx-auto">
        <h2 className="skills-title text-4xl font-bold text-[#0e8388] mb-12 text-center sm:text-3xl">
          My Skills
        </h2>

        {Object.entries(groupedSkills).map(([category, skills], catIndex) => (
          <div key={category} className="mb-12">
            <h3 className="category-title text-2xl font-semibold mb-6 text-[#0e8388]">
              {category}
            </h3>

            <div className="skills-grid grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {skills.map((skill, index) => (
                <motion.div
                  className="skill-card bg-white dark:bg-[#3a4f50] rounded-xl p-6 shadow-md dark:shadow-lg transition-transform duration-300"
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + catIndex * 0.3 }}
                  aria-label={`${skill.name} skill level: ${skill.level} percent`}
                >
                  <div className="skill-header flex justify-between font-semibold mb-3 text-gray-900 dark:text-gray-200">
                    <span>{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>

                  <div
                    className="progress-bar-container bg-gray-300 dark:bg-[#4e5e5e] rounded-md h-3 overflow-hidden"
                    aria-label={`${skill.name} skill level`}
                  >
                    <div
                      className="progress-bar-fill bg-[#0e8388] h-full rounded-md transform origin-left transition-[width] duration-[1500ms] ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
