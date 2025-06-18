
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import BlogFeed from "../Blog/BlogFeed"; // ✅ import here

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Subscribe to My Newsletter | Owen Nsofu</title>
        <meta
          name="description"
          content="Subscribe to Owen Nsofu's newsletter for the latest updates on web development, projects, and tech insights."
        />
        <meta name="author" content="Owen Nsofu" />
        <meta property="og:title" content="Subscribe to Owen Nsofu's Newsletter" />
        <meta property="og:description" content="Get the latest updates from Owen Nsofu." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/newsletter" />
        <meta property="og:image" content="https://yourdomain.com/preview-image.jpg" />
        <link rel="canonical" href="https://yourdomain.com/newsletter" />
      </Helmet>

      <section
        id="newsletter"
        className="py-16 px-6 sm:px-10"
        style={{ backgroundColor: "#08252CFF", color: "#072E33" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl font-extrabold mb-6"
            style={{ color: "#6DA5C0" }}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            Subscribe to My Newsletter
          </motion.h1>

          <motion.p
            className="mb-10 text-lg leading-relaxed"
            style={{ color: "#A3C0C9" }}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ delay: 0.2 }}
          >
            Stay updated with my latest tech tips, web projects, and resources via Substack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="rounded-lg shadow-lg overflow-hidden mb-16"
          >
            <iframe
              src="https://owennsofu.substack.com/embed"
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              title="Subscribe to Owen Nsofu's Newsletter"
              style={{
                borderRadius: "12px",
                border: "1px solid #294D61",
                backgroundColor: "#072E33",
                maxWidth: "100%",
              }}
            />
          </motion.div>

          {/* 🔥 BlogFeed Component */}
          <BlogFeed />
        </div>
      </section>
    </>
  );
};

export default Blog;
