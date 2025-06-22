import { motion } from "framer-motion";
import { COLORS } from "../../constants/colors";
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
      className="skills-section py-20 px-10 sm:px-6 transition-colors duration-300"
      style={{ backgroundColor: COLORS.primaryDark }}
    >
      <div className="skills-container max-w-4xl mx-auto">
        <h2 className="skills-title text-4xl font-bold mb-12 text-center sm:text-3xl" style={{ color: COLORS.accentTeal }}>
          My Skills
        </h2>

        {Object.entries(groupedSkills).map(([category, skills], catIndex) => (
          <div key={category} className="mb-12">
            <h3 className="category-title text-2xl font-semibold mb-6" style={{ color: COLORS.accentTeal }}>
              {category}
            </h3>

            <div className="skills-grid grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {skills.map((skill, index) => (
                <motion.div
                  className="skill-card rounded-xl p-6 shadow-md dark:shadow-lg transition-transform duration-300"
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + catIndex * 0.3 }}
                  aria-label={`${skill.name} skill level: ${skill.level} percent`}
                  style={{ backgroundColor: COLORS.cardBg }}
                >
                  <div className="skill-header flex justify-between font-semibold mb-3" style={{ color: COLORS.white }}>
                    <span>{skill.name}</span>
                    <span style={{ color: COLORS.lightGray }}>{skill.level}%</span>
                  </div>
                  <div className="skill-bar bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="skill-progress rounded-full h-2"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + catIndex * 0.3 }}
                      style={{ backgroundColor: COLORS.accentTeal }}
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
