import { motion } from "framer-motion";
import {
  FaMobile,
  FaLaptopCode,
  FaPalette,
  FaHeadset,
  FaBrain,
  FaCheckCircle
} from "react-icons/fa";
import type { IconType } from "react-icons";

import { serviceData } from "../Data/Data";

interface Service {
  id: number;
  title: string;
  description: string;
  color: string;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Icon components by service ID
const serviceIcons: Record<number, IconType> = {
  1: FaMobile,
  2: FaLaptopCode,
  3: FaPalette,
  4: FaHeadset,
  5: FaBrain,
};

// Features by service ID
const serviceFeatures: Record<number, string[]> = {
  1: ["Cross-platform development", "Native performance", "Custom UI/UX"],
  2: ["Responsive design", "Modern frameworks", "SEO optimization"],
  3: ["Brand identity", "Print & digital", "Creative concepts"],
  4: ["Network setup", "Troubleshooting", "System maintenance"],
  5: ["AI model development", "Data analysis", "Automation solutions"],
};

// Gradient color classes per service ID
const serviceColors: Record<number, string> = {
  1: "from-pink-500 to-pink-700",
  2: "from-blue-500 to-blue-700",
  3: "from-purple-500 to-purple-700",
  4: "from-yellow-500 to-yellow-700",
  5: "from-green-500 to-green-700",
};

const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = serviceIcons[service.id];
  const features = serviceFeatures[service.id] || [];
  const colorGradient = serviceColors[service.id];

  return (
    <motion.div
      className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700
                 hover:border-teal-400 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2"
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0
                   group-hover:opacity-100 transition-opacity duration-500"
      />
      <div className="relative z-10">
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorGradient} flex items-center justify-center
                      mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="text-white text-2xl" />
        </div>

        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed mb-6">{service.description}</p>

        <div className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <FaCheckCircle className="text-teal-400 text-sm flex-shrink-0" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Service = () => (
  <>
    <section id="services" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Services
          </h2>
          <motion.div
            className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-teal-400 to-teal-600"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions tailored to your business needs. From mobile apps to AI-powered systems.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:gap-8 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {serviceData.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
      </section>
    </>
  );
