import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { COLORS } from "../../constants/colors";
import { 
  FaPhone, 
  FaEnvelope, 
  FaWhatsapp, 
  FaMapMarkerAlt,
  FaUser,
  FaCommentDots,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle
} from "react-icons/fa";

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

    const { username, email, message } = formData;

    emailjs
      .send(
        "service_cvkc1qi",
        "template_5zifk3f",
        {
          from_name: username,
          from_email: email,
          message: message,
        },
        "wLxZUcJrPF24nEeoR"
      )
      .then(() => {
        setStatus({ message: "Message sent successfully!", type: "success" });
        setFormData({ username: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus({
          message: "Something went wrong. Please try again later.",
          type: "error",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleContactAction = (type, value) => {
    switch (type) {
      case 'phone':
        window.open(`tel:${value}`, '_self');
        break;
      case 'email':
        window.open(`mailto:${value}`, '_self');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/${value.replace(/\s/g, '')}`, '_blank');
        break;
      case 'location':
        window.open(`https://maps.google.com/?q=${encodeURIComponent(value)}`, '_blank');
        break;
      default:
        break;
    }
  };

  const contactDetails = [
    { 
      icon: FaPhone, 
      label: "Phone", 
      value: "0764670944",
      type: "phone",
      color: "#25D366"
    },
    { 
      icon: FaEnvelope, 
      label: "Email", 
      value: "owennsofu01@gmail.com",
      type: "email",
      color: "#EA4335"
    },
    { 
      icon: FaWhatsapp, 
      label: "WhatsApp", 
      value: "0764670944",
      type: "whatsapp",
      color: "#25D366"
    },
    { 
      icon: FaMapMarkerAlt, 
      label: "Location", 
      value: "0096 Pamodzi, Ndola, Zambia",
      type: "location",
      color: "#FF6B6B"
    },
  ];

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: COLORS.primaryDark,
        color: COLORS.lightBlue,
      }}
    >
      <section
        className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
        style={{ color: COLORS.lightBlue }}
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
            Get In Touch
          </motion.h1>
          <motion.div
            className="w-16 sm:w-24 h-1 mx-auto mt-3 rounded"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: COLORS.accentTeal }}
          />
          <motion.p
            className="text-base sm:text-lg mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ color: COLORS.lightGray }}
          >
            Ready to start a project or have a question? Let's connect and bring your ideas to life.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col lg:flex-row gap-8 sm:gap-12"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {/* Contact Info with enhanced icons */}
          <motion.div
            className="flex-1 space-y-4 sm:space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{ color: COLORS.lightBlue }}
          >
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8"
              style={{ color: COLORS.accentTeal }}
            >
              Contact Details
            </h2>

            {contactDetails.map(({ icon: IconComponent, label, value, type, color }) => (
              <motion.div
                key={label}
                className="flex items-center gap-4 p-4 sm:p-5 rounded-xl cursor-pointer group"
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: `0 0 20px ${color}40`,
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => handleContactAction(type, value)}
                style={{
                  backgroundColor: COLORS.cardBg,
                  border: `2px solid ${COLORS.accentTeal}`,
                }}
              >
                <div 
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    backgroundColor: `${color}20`,
                    border: `2px solid ${color}`
                  }}
                >
                  <IconComponent 
                    size={window.innerWidth > 768 ? 24 : 20}
                    style={{ color: color }}
                  />
                </div>
                <div className="flex-1">
                  <h3
                    className="font-semibold text-base sm:text-lg group-hover:text-white transition-colors"
                    style={{ color: COLORS.lightBlue }}
                  >
                    {label}
                  </h3>
                  <p
                    className="text-xs sm:text-sm select-text group-hover:text-gray-300 transition-colors"
                    style={{ color: COLORS.lightGray }}
                  >
                    {value}
                  </p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaPaperPlane size={16} style={{ color: COLORS.accentTeal }} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            className="flex-1 p-6 sm:p-8 rounded-xl shadow-2xl border transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              backgroundColor: COLORS.primaryMedium,
              borderColor: COLORS.border,
              color: COLORS.white,
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <h2
                className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 flex items-center gap-3"
                style={{ color: COLORS.lightBlue }}
              >
                <FaCommentDots size={24} style={{ color: COLORS.accentTeal }} />
                Send a Message
              </h2>

              <div className="space-y-2">
                <label
                  htmlFor="username"
                  className="block font-medium text-sm sm:text-base flex items-center gap-2"
                  style={{ color: COLORS.lightBlue }}
                >
                  <FaUser size={16} style={{ color: COLORS.accentTeal }} />
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  style={{
                    backgroundColor: COLORS.primaryDark,
                    color: COLORS.white,
                    borderColor: COLORS.border,
                  }}
                  className="w-full p-3 sm:p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500 transition text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block font-medium text-sm sm:text-base flex items-center gap-2"
                  style={{ color: COLORS.lightBlue }}
                >
                  <FaEnvelope size={16} style={{ color: COLORS.accentTeal }} />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  style={{
                    backgroundColor: COLORS.primaryDark,
                    color: COLORS.white,
                    borderColor: COLORS.border,
                  }}
                  className="w-full p-3 sm:p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500 transition text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block font-medium text-sm sm:text-base flex items-center gap-2"
                  style={{ color: COLORS.lightBlue }}
                >
                  <FaCommentDots size={16} style={{ color: COLORS.accentTeal }} />
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  required
                  rows="5"
                  style={{
                    backgroundColor: COLORS.primaryDark,
                    color: COLORS.white,
                    borderColor: COLORS.border,
                  }}
                  className="w-full p-3 sm:p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500 transition text-sm sm:text-base resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 font-bold rounded-lg text-white transition-all duration-300 flex items-center justify-center gap-3 ${
                  isLoading
                    ? "cursor-not-allowed opacity-70"
                    : "hover:scale-105 hover:shadow-lg"
                }`}
                style={{
                  backgroundColor: isLoading ? COLORS.skeletonDark : COLORS.accentTeal,
                }}
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>

            {status && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 rounded-lg flex items-center gap-3"
                style={{ 
                  backgroundColor: status.type === "success" ? "#10B98120" : "#EF444420",
                  border: `1px solid ${status.type === "success" ? "#10B981" : "#EF4444"}`
                }}
              >
                {status.type === "success" ? (
                  <FaCheckCircle size={20} style={{ color: "#10B981" }} />
                ) : (
                  <FaExclamationCircle size={20} style={{ color: "#EF4444" }} />
                )}
                <p
                  className="text-sm sm:text-base font-medium"
                  style={{ 
                    color: status.type === "success" ? "#10B981" : "#EF4444"
                  }}
                >
                  {status.message}
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};
