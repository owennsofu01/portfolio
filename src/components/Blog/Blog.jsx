import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { blogPosts } from "../Data/Data";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 15px 25px rgba(15, 150, 156, 0.3)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const imageVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const Blog = () => {
  return (
    <>
      {/* ✅ SEO Tags */}
      <Helmet>
        <title>Blog - Latest Posts | Owen Nsofu</title>
        <meta name="description" content="Explore the latest blog posts from Owen on web development, tech insights, and project highlights." />
        <meta name="keywords" content="Owen Nsofu, blog, web development, react, javascript, frontend, portfolio" />
        <meta name="author" content="Owen Nsofu" />
        <meta property="og:title" content="Latest Blog Posts - Owen Nsofu" />
        <meta property="og:description" content="Explore the latest blog posts from Owen on web development, tech insights, and project highlights." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/blog" />
        <meta property="og:image" content="https://yourdomain.com/preview-image.jpg" />
        <link rel="canonical" href="https://yourdomain.com/blog" />
      </Helmet>

      <section
        id="blogs"
        className="blog-section py-10 px-5 sm:px-10 transition-colors duration-300"
        style={{ backgroundColor: "#05161A", color: "#FFFFFF" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="blog-title text-3xl font-bold mb-8 text-center"
            style={{ backgroundColor: "#072E33", color: "#6DA5C0" }}
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Latest Blog Posts
          </motion.h2>

          <motion.div
            className="blog-grid grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                className="blog-card rounded-lg overflow-hidden flex flex-col h-full cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
                style={{
                  backgroundColor: "#072E33",
                  color: "#6DA5C0",
                  border: "2px solid #294D61",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                }}
              >
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="blog-image w-full h-48 object-cover"
                  variants={imageVariants}
                />
                <div className="blog-content p-4 flex flex-col flex-grow">
                  <h5
                    className="blog-post-title text-xl font-semibold mb-2"
                    style={{ color: "#0F969C" }}
                  >
                    {post.title}
                  </h5>
                  <p
                    className="blog-date text-sm mb-3"
                    style={{ color: "#6DA5C0" }}
                  >
                    {post.date}
                  </p>
                  <p
                    className="blog-excerpt flex-grow mb-4"
                    style={{ color: "#FFFFFF" }}
                  >
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="blog-button inline-block self-start px-4 py-2 rounded-md transition-colors duration-300"
                    style={{
                      border: "2px solid #0F969C",
                      color: "#0F969C",
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#0F969C";
                      e.currentTarget.style.color = "#FFFFFF";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#0F969C";
                    }}
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
