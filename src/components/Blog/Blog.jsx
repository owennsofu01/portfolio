import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./Blog.css";
import { blogPosts } from "../Data/Data";

const Blog = () => {
  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        <motion.h2
          className="blog-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Latest Blog Posts
        </motion.h2>
        <motion.div
          className="blog-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, transition: { staggerChildren: 0.2 } },
            visible: { opacity: 1 },
          }}
        >
          {blogPosts.map((post) => (
            <motion.div
              className="blog-card"
              key={post.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="blog-image"
              />
              <div className="blog-content">
                <h5 className="blog-post-title">{post.title}</h5>
                <p className="blog-date">{post.date}</p>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href={post.link} className="blog-button">
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
