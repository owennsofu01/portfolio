/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaUser,
  FaCommentDots,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaClock,
  FaGlobe,
  FaStar,
  FaRocket,
} from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Contact details configuration
const contactDetails = [
  {
    icon: FaPhone,
    label: "Phone",
    value: "+260 764 670 944",
    type: "phone",
    color: "#25D366",
    description: "Call me directly",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "owennsofu01@gmail.com",
    type: "email",
    color: "#EA4335",
    description: "Send me an email",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+260764670944",
    type: "whatsapp",
    color: "#25D366",
    description: "Message me on WhatsApp",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "0096 Pamodzi, Ndola, Zambia",
    type: "location",
    color: "#FF6B6B",
    description: "View on Google Maps",
  },
];

const additionalInfo = [
  {
    icon: FaClock,
    label: "Response Time",
    value: "Within 24 hours",
    color: "#8B5CF6",
  },
  {
    icon: FaGlobe,
    label: "Timezone",
    value: "GMT+2 (CAT)",
    color: "#F59E0B",
  },
];

const ContactCard = ({ contact, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700
      hover:border-teal-400 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/20
      hover:-translate-y-1 cursor-pointer"
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 
        group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
            {contact.label}
          </h3>
          <div className="flex items-center space-x-1">
            <FaStar className="text-xs text-teal-400" />
            <span className="text-xs font-medium text-teal-400">Available</span>
          </div>
        </div>
        <div className="mb-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Contact</span>
            <span className="text-sm font-semibold text-teal-400">{contact.type}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-600"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
        </div>
        <div className="text-xs text-gray-400 leading-relaxed mb-3">
          {contact.description}
        </div>
        <div className="text-white font-medium break-all text-sm">
          {contact.value}
        </div>
      </div>
      <div className="absolute top-3 right-3 w-2 h-2 bg-teal-400 rounded-full opacity-0 
        group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const InfoCard = ({ info }) => (
  <motion.div
    className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700
      hover:border-teal-400 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/20
      hover:-translate-y-1"
    variants={cardVariants}
    whileHover={{ scale: 1.02 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 
      group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
          {info.label}
        </h3>
        <div className="flex items-center space-x-1">
          <FaRocket className="text-xs text-teal-400" />
          <span className="text-xs font-medium text-teal-400">Active</span>
        </div>
      </div>
      <div className="mb-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Status</span>
          <span className="text-sm font-semibold text-teal-400">Ready</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-600"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
      </div>
      <div className="text-xs text-gray-400 leading-relaxed mb-3">
        Current availability and response time
      </div>
      <div className="text-white font-medium text-sm">
        {info.value}
      </div>
    </div>
    <div className="absolute top-3 right-3 w-2 h-2 bg-teal-400 rounded-full opacity-0 
      group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);

const FormField = ({
  id,
  label,
  icon: Icon,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  rows = 1,
}) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block font-medium text-sm flex items-center gap-2 text-white">
      <Icon size={16} className="text-teal-400" />
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="w-full p-4 rounded-lg bg-gray-800 border border-gray-600 text-white 
          focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent
          transition-all duration-300 resize-none"
      />
    ) : (
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full p-4 rounded-lg bg-gray-800 border border-gray-600 text-white 
          focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent
          transition-all duration-300"
      />
    )}
  </div>
);

const StatusMessage = ({ status }) => {
  if (!status) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`mt-6 p-4 rounded-lg flex items-center gap-3 ${
        status.type === "success"
          ? "bg-green-500/20 border border-green-500"
          : "bg-red-500/20 border border-red-500"
      }`}
    >
      {status.type === "success" ? (
        <FaCheckCircle size={20} className="text-green-500" />
      ) : (
        <FaExclamationCircle size={20} className="text-red-500" />
      )}
      <p
        className={`text-sm font-medium ${
          status.type === "success" ? "text-green-500" : "text-red-500"
        }`}
      >
        {status.message}
      </p>
    </motion.div>
  );
};

const ContactForm = ({ formData, handleChange, handleSubmit, isLoading, status }) => (
  <motion.div
    className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700
      hover:border-teal-400 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/20
      hover:-translate-y-1"
    variants={cardVariants}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 
      group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl font-semibold text-white group-hover:text-teal-400 transition-colors duration-300 flex items-center gap-3">
          <FaCommentDots size={20} className="text-teal-400" />
          Send a Message
        </h2>
        <div className="flex items-center space-x-1">
          <FaStar className="text-xs text-teal-400" />
          <span className="text-xs font-medium text-teal-400">Active</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField
          id="username"
          label="Name"
          icon={FaUser}
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />

        <FormField
          id="email"
          label="Email"
          icon={FaEnvelope}
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          required
        />

        <FormField
          id="message"
          label="Message"
          icon={FaCommentDots}
          type="textarea"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project or question..."
          required
          rows={5}
        />

        <motion.button
          type="submit"
          disabled={isLoading}
          className={`w-full py-4 font-semibold rounded-lg text-white transition-all duration-300 
            flex items-center justify-center gap-3 ${
              isLoading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700"
            }`}
          whileHover={!isLoading ? { scale: 1.02 } : {}}
          whileTap={!isLoading ? { scale: 0.98 } : {}}
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <FaPaperPlane size={18} />
              <span>Send Message</span>
            </>
          )}
        </motion.button>
      </form>

      <StatusMessage status={status} />
    </div>
    <div className="absolute top-3 right-3 w-2 h-2 bg-teal-400 rounded-full opacity-0 
      group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);

const ContactOverview = () => (
  <motion.div
    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {[
      { value: "24/7", label: "Availability", icon: FaClock },
      { value: "24h", label: "Response Time", icon: FaRocket },
      { value: "100%", label: "Client Satisfaction", icon: FaStar },
      { value: "1+", label: "Years Experience", icon: FaGlobe },
    ].map((stat, index) => (
      <div key={index} className="text-center p-4 rounded-xl bg-gray-800/50 border border-gray-700">
        <stat.icon className="text-2xl text-teal-400 mx-auto mb-2" />
        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
        <div className="text-sm text-gray-300">{stat.label}</div>
      </div>
    ))}
  </motion.div>
);

export const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_9oes4ie",
        "template_5zifk3f",
        {
          from_name: formData.username,
          from_email: formData.email,
          message: formData.message,
        },
        "-csR0AF5EU7tBjFom"
      )
      .then(() => {
        setStatus({
          message: "Message sent successfully! I'll get back to you soon.",
          type: "success",
        });
        setFormData({ username: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus({
          message: "Something went wrong. Please try again or contact me directly.",
          type: "error",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleContactAction = (type, value) => {
    switch (type) {
      case "phone":
        window.open(`tel:${value}`, "_self");
        break;
      case "email":
        window.open(`mailto:${value}`, "_self");
        break;
      case "whatsapp":
        window.open(`https://wa.me/${value.replace(/\s/g, "")}`, "_blank");
        break;
      case "location":
        window.open(`https://maps.google.com/?q=${encodeURIComponent(value)}`, "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact - Owen Nsofu | Get In Touch</title>
        <meta name="description" content="Get in touch with Owen Nsofu for web development, mobile apps, and design projects. Available for freelance work and collaborations." />
        <meta name="keywords" content="Contact, Get In Touch, Owen Nsofu, Web Development, Freelance" />
        <meta name="author" content="Owen Nsofu" />
      </Helmet>

      <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <motion.div
              className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-teal-400 to-teal-600"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to start a project or have a question? Let's connect and bring your ideas to life. I'm always excited to discuss new opportunities and collaborations.
            </p>
          </motion.div>

          <ContactOverview />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactDetails.map((contact, index) => (
              <ContactCard
                key={index}
                contact={contact}
                onClick={() => handleContactAction(contact.type, contact.value)}
              />
            ))}

            {additionalInfo.map((info, index) => (
              <InfoCard key={index} info={info} />
            ))}

            <ContactForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
              status={status}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};
