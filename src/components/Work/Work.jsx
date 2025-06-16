import React from "react";
import { motion } from "framer-motion";
import { workData } from "../Data/Data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Work = () => {
  return (
    <section className="bg-[#05161A] py-20 px-4 transition-colors duration-300">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.h2
          className="text-4xl text-center font-extrabold text-[#6DA5C0] mb-3"
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
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          variants={containerVariants}
        >
          {workData.map(
            (item) =>
              item.title &&
              item.description && (
                <motion.div
                  key={item.id}
                  className="bg-[#072E33] rounded-xl p-6 border border-[#294D61] shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 cursor-pointer"
                  variants={cardVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <h5 className="text-xl font-semibold text-[#6DA5C0] mb-3">
                    {item.title}
                  </h5>
                  <p className="text-[#EAEAEA] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Work;
