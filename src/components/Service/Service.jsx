import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { COLORS } from "../../constants/colors";
import { serviceData } from "../Data/Data";
import Work from "../Work/Work";
import { 
  FaMobile, 
  FaLaptopCode, 
  FaPalette, 
  FaHeadset, 
  FaBrain 
} from "react-icons/fa";

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

// Icon mapping for services
const serviceIcons = {
  1: FaMobile,      // Mobile Development
  2: FaLaptopCode,  // Web Development
  3: FaPalette,     // Graphics Design
  4: FaHeadset,     // IT Support
  5: FaBrain,       // Machine Learning & AI
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
        className="py-20 px-6 transition-colors duration-300"
        style={{ backgroundColor: COLORS.cardBg }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl font-extrabold dark:text-white"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ color: COLORS.lightBlue }}
          >
            Our Services
          </motion.h1>
          <motion.div
            className="w-24 h-1 mx-auto mt-3 rounded"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: COLORS.accentTeal }}
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
          {serviceData.map((service) => {
            const IconComponent = serviceIcons[service.id];
            return (
              <motion.div
                key={service.id}
                className="service-card relative text-white rounded-xl p-6 border shadow-xl
                           hover:shadow-[0_0_15px_3px_rgba(15,150,156,0.7)] transition-transform transform
                           hover:-translate-y-2 flex flex-col items-center text-center overflow-visible"
                style={{ 
                  backgroundColor: COLORS.primaryMedium,
                  borderColor: COLORS.border
                }}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div 
                  className="w-20 h-20 rounded-full border-4 mb-4 flex items-center justify-center"
                  style={{ 
                    borderColor: COLORS.accentTeal,
                    backgroundColor: COLORS.cardBg
                  }}
                >
                  <IconComponent 
                    size={40} 
                    style={{ color: COLORS.accentTeal }}
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2" style={{ color: COLORS.lightBlue }}>{service.title}</h2>
                <p className="text-sm leading-relaxed" style={{ color: COLORS.lightGray }}>{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <Work />
    </>
  );
};
