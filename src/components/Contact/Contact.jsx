import React, { useState } from "react";
import emailjs from "emailjs-com";

import "./Contact.css";
import Client from "../Client/Client";

export const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // For success or error messages
  const [isLoading, setIsLoading] = useState(false); // For loading state

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

  return (
    <>
   
      <section className="contact" id="contact">
        <h1 className="contact-title">Contact Us</h1>

        <div className="contact-section">
          {/* Left Section - Contact Info */}
          <div className="contact-info">
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
          </div>

          {/* Right Section - Contact Form */}
          <div className="contact-form">
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
                  <span className="spinner"></span> // Spinner while loading
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
          </div>
        </div>
      </section>
    </>
  );
};
