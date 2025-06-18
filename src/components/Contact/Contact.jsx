import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Example dark mode toggle state (you can remove if you don't want)
  const [darkMode, setDarkMode] = useState(true);

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
        backgroundColor: darkMode ? "#05161A" : "#FFFFFF",
        color: darkMode ? "#6DA5C0" : "#231F20",
      }}
    >
      <section
        className="max-w-5xl mx-auto px-6 py-16"
        style={{ color: darkMode ? "#6DA5C0" : "#231F20" }}
      >
       
               {/* Header */}
               <div className="text-center mb-12">
                 <motion.h1
                   className="text-4xl font-extrabold text-[#6DA5C0] dark:text-white"
                   initial={{ opacity: 0, y: -30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6 }}
                 >
                   Contact Us
                 </motion.h1>
                 <motion.div
                   className="w-24 h-1 bg-[#0F969C] mx-auto mt-3 rounded"
                   initial={{ scaleX: 0 }}
                   animate={{ scaleX: 1 }}
                   transition={{ duration: 0.5 }}
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
            style={{ color: darkMode ? "#6DA5C0" : "#231F20" }}
          >
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: darkMode ? "#0FF" : "#0F969C" }}
            >
              Contact Details
            </h2>

            {contactDetails.map(({ icon, label, value }) => (
              <motion.div
                key={label}
                className="flex items-center gap-4 p-3 rounded-lg cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: `0 0 12px #0FF` }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  backgroundColor: darkMode ? "#0B2E35" : "#F0F9FA",
                  border: `1.5px solid ${darkMode ? "#0FF" : "#0F969C"}`,
                }}
              >
                <i
                  className={`${icon} text-2xl`}
                  style={{
                    color: "#0FF",
                    textShadow:
                      "0 0 6px #0FF, 0 0 12px #0FF, 0 0 18px #00ffffbb",
                  }}
                ></i>
                <div>
                  <h3
                    className="font-semibold text-lg"
                    style={{ color: darkMode ? "#6DFEFF" : "#0F969C" }}
                  >
                    {label}
                  </h3>
                  <p
                    className="text-sm select-text"
                    style={{ color: darkMode ? "#A6F0F0" : "#333" }}
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
              backgroundColor: darkMode ? "#072E33" : "#FFFFFF",
              borderColor: darkMode ? "#294D61" : "#AD974F",
              color: darkMode ? "#FFFFFF" : "#231F20",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2
                className="text-2xl font-semibold mb-6"
                style={{ color: "#6DA5C0" }}
              >
                Send a Message
              </h2>

              <label
                htmlFor="username"
                className="block font-medium mb-1"
                style={{ color: darkMode ? "#6DA5C0" : "#231F20" }}
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
                  backgroundColor: darkMode ? "#05161A" : "#EAEAEA",
                  color: darkMode ? "#FFFFFF" : "#231F20",
                  borderColor: darkMode ? "#294D61" : "#AD974F",
                }}
                className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />

              <label
                htmlFor="email"
                className="block font-medium mb-1"
                style={{ color: darkMode ? "#6DA5C0" : "#231F20" }}
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
                  backgroundColor: darkMode ? "#05161A" : "#EAEAEA",
                  color: darkMode ? "#FFFFFF" : "#231F20",
                  borderColor: darkMode ? "#294D61" : "#AD974F",
                }}
                className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />

              <label
                htmlFor="message"
                className="block font-medium mb-1"
                style={{ color: darkMode ? "#6DA5C0" : "#231F20" }}
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
                  backgroundColor: darkMode ? "#05161A" : "#EAEAEA",
                  color: darkMode ? "#FFFFFF" : "#231F20",
                  borderColor: darkMode ? "#294D61" : "#AD974F",
                }}
                className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              ></textarea>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 font-bold rounded text-white transition ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-teal-600 hover:bg-teal-700"
                }`}
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
                className={`mt-6 text-center text-lg font-semibold ${
                  status.type === "success"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
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
