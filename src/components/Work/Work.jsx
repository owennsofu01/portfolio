import { useRef } from "react";
import { motion } from "framer-motion";
import { COLORS } from "../../constants/colors";
import { workData } from "../Data/Data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, when: "beforeChildren" },
  },
};

const Work = () => {
  // Separate work experience from statistics
  const workExperience = workData.filter(item => 
    item.title === "Freelancer" || item.title === "IT Support Intern"
  );
  
 

  return (
    <section
      className="py-20 px-4 transition-colors duration-300"
      style={{ 
        background: `linear-gradient(to bottom, ${COLORS.primaryDark}, ${COLORS.cardBg})`
      }}
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.h2
          className="text-4xl text-center font-extrabold mb-3 drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ color: COLORS.lightBlue }}
        >
          My Work Experience
        </motion.h2>
        <motion.div
          className="w-24 h-1 mx-auto mb-12 rounded"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          style={{ backgroundColor: COLORS.accentTeal }}
        />

        {/* Work Experience Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 
            className="text-2xl font-bold mb-8 text-center"
            style={{ color: COLORS.accentTeal }}
          >
            Professional Experience
          </h3>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            {workExperience.map((item) => (
              <ExperienceCard key={item.id} title={item.title} description={item.description} />
            ))}
          </div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
         
        </motion.div>
      </motion.div>

      {/* Styles for glowing orbs and animations */}
      <style>{`
        /* Removed floating orb animations for cleaner design */
      `}</style>
    </section>
  );
};

// Experience Card Component
const ExperienceCard = ({ title, description }) => {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-2xl p-8 border shadow-[0_0_15px_4px_rgba(15,150,156,0.7)] cursor-pointer transition-transform duration-300 will-change-transform h-full"
      style={{
        backgroundColor: COLORS.primaryMedium,
        borderColor: COLORS.accentTeal,
      }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      }}
      onMouseMove={(e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;

        const deltaX = e.clientX - cardX;
        const deltaY = e.clientY - cardY;

        const maxTilt = 15;

        const tiltX = (deltaY / (rect.height / 2)) * maxTilt;
        const tiltY = -(deltaX / (rect.width / 2)) * maxTilt;

        cardRef.current.style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`;
      }}
      onMouseLeave={() => {
        cardRef.current.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
      }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative z-10">
        <h5 className="text-2xl font-bold mb-4 drop-shadow-sm" style={{ color: COLORS.lightBlue }}>
          {title}
        </h5>
        <div className="space-y-3">
          {description.split('•').map((item, index) => (
            item.trim() && (
              <p key={index} className="text-sm leading-relaxed flex items-start" style={{ color: COLORS.lightGray }}>
                <span className="mr-2 mt-1" style={{ color: COLORS.accentTeal }}>•</span>
                <span>{item.trim()}</span>
              </p>
            )
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Statistics Card Component


export default Work;
