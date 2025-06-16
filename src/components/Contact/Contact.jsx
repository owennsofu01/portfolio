import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import Client from "../Client/Client";

export const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Example toggle for dark mode; adapt as needed
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
        setStatus({ message: "Something went wrong. Please try again later.", type: "error" });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
        <motion.h1
          className="text-4xl font-extrabold mb-10"
          style={{ color: "#0F969C" }}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Contact Us
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row gap-12"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {/* Contact Info */}
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{ color: darkMode ? "#6DA5C0" : "#231F20" }}
          >
            <h2 className="text-lg flex items-center gap-3">
              <i className="fas fa-phone-alt"></i> Phone:{" "}
              <span className="font-semibold ml-2" style={{ color: "#0F969C" }}>
                0764670944
              </span>
            </h2>
            <h2 className="text-lg flex items-center gap-3">
              <i className="fas fa-envelope"></i> Email:{" "}
              <span className="font-semibold ml-2" style={{ color: "#0F969C" }}>
                owennsofu01@gmail.com
              </span>
            </h2>
            <h2 className="text-lg flex items-center gap-3">
              <i className="fab fa-whatsapp"></i> WhatsApp:{" "}
              <span className="font-semibold ml-2" style={{ color: "#0F969C" }}>
                0764670944
              </span>
            </h2>
            <h2 className="text-lg flex items-center gap-3">
              <i className="fas fa-map-marker-alt"></i> Location:{" "}
              <span className="font-semibold ml-2" style={{ color: "#0F969C" }}>
                0096 Pamodzi, Ndola, Zambia
              </span>
            </h2>

            <div>
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: "#6DA5C0" }}
              >
                Our Location
              </h2>
              <div
                className="rounded-lg overflow-hidden shadow-lg"
                style={{ border: `2px solid ${darkMode ? "#294D61" : "#AD974F"}` }}
              >
                <iframe
                  title="location-map"
                  src="https://www.google.com/maps/embed?pb=..."
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
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
              <h2 className="text-2xl font-semibold mb-6" style={{ color: "#6DA5C0" }}>
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
                  status.type === "success" ? "text-green-500" : "text-red-500"
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
