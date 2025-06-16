import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { serviceData } from "../Data/Data";
import Work from "../Work/Work";

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
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Service = () => {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Services - Owen Nsofu | Web & Software Solutions</title>
        <meta
          name="description"
          content="Explore the services offered by Owen Nsofu, including web development, mobile app creation, UI/UX design, and technical consulting."
        />
        <meta
          name="keywords"
          content="Web Development, App Development, UI/UX, Technical Consulting, Owen Nsofu, Software Services"
        />
        <meta name="author" content="Owen Nsofu" />
        <meta property="og:title" content="Our Services - Owen Nsofu" />
        <meta
          property="og:description"
          content="Discover professional services ranging from responsive websites to full-stack app development tailored to your business needs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/services" />
        <meta property="og:image" content="https://yourdomain.com/service-preview.jpg" />
        <link rel="canonical" href="https://yourdomain.com/services" />
      </Helmet>

      {/* 🔽 Main Section */}
      <section
        id="services"
        className="py-20 px-6 bg-[#05161A] transition-colors duration-300"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl font-extrabold text-[#6DA5C0] dark:text-white"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-[#0F969C] mx-auto mt-3 rounded"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Services */}
        <motion.div
          className="grid gap-6 max-w-[1200px] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {serviceData.map((service) => (
            <motion.div
              className="bg-[#072E33] text-white rounded-xl p-6 border border-[#294D61] shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 flex flex-col items-center text-center"
              key={service.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-20 h-20 rounded-full border-4 border-[#0F969C] mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold text-[#6DA5C0] mb-2">
                {service.title}
              </h2>
              <p className="text-sm text-[#EAEAEA] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Work />
    </>
  );
};
