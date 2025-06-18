import React, { useRef } from "react";
import { motion } from "framer-motion";
import { workData } from "../Data/Data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, when: "beforeChildren" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Work = () => {
  // We'll track card ref and apply tilt based on mouse move inside card
  const handleMouseMove = (e, cardRef) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const cardX = rect.left + rect.width / 2;
    const cardY = rect.top + rect.height / 2;

    const deltaX = e.clientX - cardX;
    const deltaY = e.clientY - cardY;

    // Max tilt angle
    const maxTilt = 15;

    // Calculate tilt percentages
    const tiltX = (deltaY / (rect.height / 2)) * maxTilt;
    const tiltY = -(deltaX / (rect.width / 2)) * maxTilt;

    card.style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`;
  };

  const handleMouseLeave = (cardRef) => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section
      className="bg-gradient-to-b from-[#05161A] to-[#0A2B35] py-20 px-4 transition-colors duration-300"
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
          className="text-4xl text-center font-extrabold text-[#6DA5C0] mb-3 drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Work Experience
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-[#0F969C] mx-auto mb-12 rounded"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Work Cards */}
        <motion.div
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          variants={containerVariants}
        >
          {workData.map(
            (item) =>
              item.title &&
              item.description && (
                <TiltCard key={item.id} title={item.title} description={item.description} />
              )
          )}
        </motion.div>
      </motion.div>

      {/* Styles for glowing orbs and animations */}
      <style>{`
        .glow-orb {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          background-color: #0F969C;
          border-radius: 50%;
          filter: blur(3px);
          box-shadow: 0 0 15px 6px rgba(15,150,156,0.7);
          transform-origin: -60px 0;
          animation: orb-move 6s linear infinite, pulse 3s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes orb-move {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 15px 6px rgba(15,150,156,0.7);
          }
          50% {
            box-shadow: 0 0 25px 12px rgba(15,150,156,1);
          }
        }
      `}</style>
    </section>
  );
};

// Separate card component with tilt logic and orbs
const TiltCard = ({ title, description }) => {
  const cardRef = React.useRef(null);

  return (
    <motion.div
      ref={cardRef}
      className="relative bg-[#072E33] rounded-2xl p-8 border border-[#0F969C] shadow-[0_0_15px_4px_rgba(15,150,156,0.7)] cursor-pointer transition-transform duration-300 will-change-transform"
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
      whileHover={{ scale: 1.05 }}
    >
      {/* Floating orbs */}
      <span className="glow-orb" style={{ animationDelay: "0s" }} />
      <span
        className="glow-orb"
        style={{ animationDelay: "2.5s", width: 14, height: 14 }}
      />
      <span
        className="glow-orb"
        style={{ animationDelay: "5s", width: 18, height: 18 }}
      />

      <h5 className="text-xl font-semibold text-[#6DA5C0] mb-4 drop-shadow-sm">{title}</h5>
      <p className="text-[#EAEAEA] text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default Work;
