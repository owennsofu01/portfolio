import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion"; // Import framer-motion
import "./Contact.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Client from "../Client/Client";

export const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // For success or error messages
  const [isLoading, setIsLoading] = useState(false); // For loading state
  const [theme, setTheme] = useState("light"); // State to toggle theme

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true

    const { username, email, message } = formData;

    // Send message using EmailJS
    emailjs
      .send(
        "service_cvkc1qi", // Replace with your EmailJS service ID
        "template_5zifk3f", // Replace with your EmailJS template ID
        {
          from_name: username,
          from_email: email,
          message: message,
        },
        "wLxZUcJrPF24nEeoR" // Replace with your EmailJS user ID
      )
      .then(
        () => {
          setStatus({
            message: "Message sent successfully!",
            type: "success", // Success message
          });
          setFormData({ username: "", email: "", message: "" }); // Clear the form
        },
        (error) => {
          setStatus({
            message: "Something went wrong. Please try again later.",
            type: "error", // Error message
          });
        }
      )
      .finally(() => {
        setIsLoading(false); // Stop loading when done
      });
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`contact-container ${theme}`} // Toggle class based on theme
    >
      <Client />
      <section className="contact" id="contact">
        <motion.h1
          className="contact-title"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Contact Us
        </motion.h1>

        <motion.div
          className="contact-section"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {/* Left Section - Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2>
              <i className="fas fa-phone-alt"></i> Phone:{" "}
              <span>0764670944</span>
            </h2>
            <h2>
              <i className="fas fa-envelope"></i> Email:{" "}
              <span>owennsofu01@gmail.com</span>
            </h2>
            <h2>
              <i className="fab fa-whatsapp"></i> WhatsApp:{" "}
              <span>0764670944</span>
            </h2>
            <h2>
              <i className="fas fa-map-marker-alt"></i> Location:{" "}
              <span>0096 Pamodzi, Ndola, Zambia</span>
            </h2>

            {/* Map Section */}
            <div className="map-container">
              <h2>Our Location</h2>
              <div className="map">
                <iframe
                  title="location-map"
                  src="https://www.google.com/maps/embed?pb=..."
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div
            className="contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <form onSubmit={handleSubmit}>
              <h2>Send a Message</h2>

              <label htmlFor="username">
                <i className="fas fa-user"></i> Username:
              </label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

              <label htmlFor="email">
                <i className="fas fa-envelope"></i> Email:
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

              <label htmlFor="message">
                <i className="fas fa-comment-dots"></i> Message:
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                required
              ></textarea>

              <button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <span className="spinner"></span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>

            {/* Show the status message */}
            {status && (
              <p className={`status-message ${status.type}`}>
                {status.message}
              </p>
            )}
          </motion.div>
        </motion.div>
      </section>

      
    </motion.div>
  );
};
