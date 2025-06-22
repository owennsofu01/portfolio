import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useRef } from "react";
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
        className="py-12 sm:py-20 px-4 sm:px-6 transition-colors duration-300"
        style={{ backgroundColor: COLORS.cardBg }}
      >
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ color: COLORS.lightBlue }}
          >
            Our Services
          </motion.h1>
          <motion.div
            className="w-16 sm:w-24 h-1 mx-auto mt-3 rounded"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: COLORS.accentTeal }}
          />
        </div>

        {/* Services */}
        <motion.div
          className="grid gap-4 sm:gap-6 max-w-[1200px] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {serviceData.map((service) => {
            const IconComponent = serviceIcons[service.id];
            return (
              <ServiceCard key={service.id} service={service} IconComponent={IconComponent} />
            );
          })}
        </motion.div>
      </section>

      <Work />
    </>
  );
};

// Service Card Component with 3D effects
const ServiceCard = ({ service, IconComponent }) => {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      className="service-card relative text-white rounded-xl p-4 sm:p-6 border shadow-xl
                 hover:shadow-[0_0_15px_3px_rgba(15,150,156,0.7)] transition-transform duration-300
                 hover:-translate-y-2 flex flex-col items-center text-center overflow-visible will-change-transform"
      style={{ 
        backgroundColor: COLORS.primaryMedium,
        borderColor: COLORS.border
      }}
      variants={cardVariants}
      onMouseMove={(e) => {
        if (window.innerWidth > 768) { // Only apply 3D on desktop
          const rect = cardRef.current.getBoundingClientRect();
          const cardX = rect.left + rect.width / 2;
          const cardY = rect.top + rect.height / 2;

          const deltaX = e.clientX - cardX;
          const deltaY = e.clientY - cardY;

          const maxTilt = 10;

          const tiltX = (deltaY / (rect.height / 2)) * maxTilt;
          const tiltY = -(deltaX / (rect.width / 2)) * maxTilt;

          cardRef.current.style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
        }
      }}
      onMouseLeave={() => {
        if (window.innerWidth > 768) {
          cardRef.current.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
        }
      }}
      whileHover={{ scale: window.innerWidth > 768 ? 1.05 : 1.02 }}
    >
      <div 
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 mb-3 sm:mb-4 flex items-center justify-center"
        style={{ 
          borderColor: COLORS.accentTeal,
          backgroundColor: COLORS.cardBg
        }}
      >
        <IconComponent 
          size={window.innerWidth > 768 ? 40 : 32} 
          style={{ color: COLORS.accentTeal }}
        />
      </div>
      <h2 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: COLORS.lightBlue }}>{service.title}</h2>
      <p className="text-xs sm:text-sm leading-relaxed" style={{ color: COLORS.lightGray }}>{service.description}</p>
    </motion.div>
  );
};
