import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { COLORS } from "../../constants/colors";

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

  const contactDetails = [
    { icon: "fas fa-phone-alt", label: "Phone", value: "0764670944" },
    { icon: "fas fa-envelope", label: "Email", value: "owennsofu01@gmail.com" },
    { icon: "fab fa-whatsapp", label: "WhatsApp", value: "0764670944" },
    { icon: "fas fa-map-marker-alt", label: "Location", value: "0096 Pamodzi, Ndola, Zambia" },
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
        className="max-w-5xl mx-auto px-6 py-16"
        style={{ color: COLORS.lightBlue }}
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
                   Contact Us
                 </motion.h1>
                 <motion.div
                   className="w-24 h-1 mx-auto mt-3 rounded"
                   initial={{ scaleX: 0 }}
                   animate={{ scaleX: 1 }}
                   transition={{ duration: 0.5 }}
                   style={{ backgroundColor: COLORS.accentTeal }}
                 />
               </div>

        <motion.div
          className="flex flex-col md:flex-row gap-12"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {/* Contact Info with icons and glow */}
          <motion.div
            className="flex-1 space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{ color: COLORS.lightBlue }}
          >
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: COLORS.accentTeal }}
            >
              Contact Details
            </h2>

            {contactDetails.map(({ icon, label, value }) => (
              <motion.div
                key={label}
                className="flex items-center gap-4 p-3 rounded-lg cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: `0 0 12px ${COLORS.accentTeal}` }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  backgroundColor: COLORS.cardBg,
                  border: `1.5px solid ${COLORS.accentTeal}`,
                }}
              >
                <i
                  className={`${icon} text-2xl`}
                  style={{
                    color: COLORS.accentTeal,
                    textShadow: `0 0 6px ${COLORS.accentTeal}, 0 0 12px ${COLORS.accentTeal}`,
                  }}
                ></i>
                <div>
                  <h3
                    className="font-semibold text-lg"
                    style={{ color: COLORS.lightBlue }}
                  >
                    {label}
                  </h3>
                  <p
                    className="text-sm select-text"
                    style={{ color: COLORS.lightGray }}
                  >
                    {value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="flex-1 p-8 rounded-lg shadow-lg border transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              backgroundColor: COLORS.primaryMedium,
              borderColor: COLORS.border,
              color: COLORS.white,
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2
                className="text-2xl font-semibold mb-6"
                style={{ color: COLORS.lightBlue }}
              >
                Send a Message
              </h2>

              <label
                htmlFor="username"
                className="block font-medium mb-1"
                style={{ color: COLORS.lightBlue }}
              >
                <i className="fas fa-user mr-2"></i> Username:
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
                className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />

              <label
                htmlFor="email"
                className="block font-medium mb-1"
                style={{ color: COLORS.lightBlue }}
              >
                <i className="fas fa-envelope mr-2"></i> Email:
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
                className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />

              <label
                htmlFor="message"
                className="block font-medium mb-1"
                style={{ color: COLORS.lightBlue }}
              >
                <i className="fas fa-comment-dots mr-2"></i> Message:
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
                className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              ></textarea>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 font-bold rounded text-white transition ${
                  isLoading
                    ? "cursor-not-allowed"
                    : ""
                }`}
                style={{
                  backgroundColor: isLoading ? COLORS.skeletonDark : COLORS.accentTeal,
                }}
              >
                {isLoading ? (
                  <svg
                    className="animate-spin h-6 w-6 mx-auto text-white"
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
                ) : (
                  "Send Message"
                )}
              </button>
            </form>

            {status && (
              <p
                className="mt-6 text-center text-lg font-semibold"
                style={{ 
                  color: status.type === "success" ? COLORS.status.success : COLORS.status.error 
                }}
              >
                {status.message}
              </p>
            )}
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};
