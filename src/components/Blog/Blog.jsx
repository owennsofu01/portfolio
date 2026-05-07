/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  FaCalendar,
  FaUser,
  FaExternalLinkAlt,
  FaBookOpen,
  FaClock,
  FaGlobe,
  FaStar,
} from "react-icons/fa";

// ── Animation Variants ──────────────────────────────────────────────────────
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

// ── BlogCard ────────────────────────────────────────────────────────────────
const BlogCard = ({ post, index }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "Recent";
    return new Date(dateString).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getReadingTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content?.split(" ").length || 0;
    return `${Math.ceil(wordCount / wordsPerMinute)} min read`;
  };

  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      tabIndex={0}
    >
      <motion.div
        className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-teal-400 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/20 hover:-translate-y-2 cursor-pointer overflow-hidden"
        variants={cardVariants}
        custom={index}
        whileHover={{ scale: 1.02 }}
      >
        {post.thumbnail && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={post.thumbnail}
              alt={post.title || "Blog Post"}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}

        <div className="relative z-10 p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors duration-300 line-clamp-2">
              {post.title}
            </h3>
            <div className="flex items-center space-x-1">
              <FaStar className="text-xs text-teal-400" />
              <span className="text-xs font-medium text-teal-400">New</span>
            </div>
          </div>

          <div className="mb-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Published</span>
              <span className="text-sm font-semibold text-teal-400">
                {getReadingTime(post.contentSnippet)}
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-600"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          <div className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-3">
            {post.contentSnippet?.slice(0, 150)}...
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-xs text-gray-400">
              <div className="flex items-center space-x-1">
                <FaCalendar size={12} />
                <span>{formatDate(post.pubDate)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaUser size={12} />
                <span>{post.author || "Owen Nsofu"}</span>
              </div>
            </div>
            <FaExternalLinkAlt className="text-teal-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </motion.div>
    </a>
  );
};

// ── BlogStats ───────────────────────────────────────────────────────────────
const BlogStats = ({ posts }) => {
  const totalPosts = posts.length;
  const totalWords = posts.reduce(
    (sum, post) => sum + (post.contentSnippet?.split(" ").length || 0),
    0
  );
  const averageReadingTime =
    Math.ceil(totalWords / 200 / totalPosts) || 3;

  const stats = [
    { value: totalPosts, label: "Total Posts", icon: FaBookOpen },
    { value: `${averageReadingTime}min`, label: "Avg. Read Time", icon: FaClock },
    { value: "100%", label: "Original Content", icon: FaStar },
    { value: "24/7", label: "Always Available", icon: FaGlobe },
  ];

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center p-4 rounded-xl bg-gray-800/50 border border-gray-700"
        >
          <stat.icon className="text-2xl text-teal-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-sm text-gray-300">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  );
};

// ── Blog ────────────────────────────────────────────────────────────────────
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://owennsofu.substack.com/feed"
        );
        const data = await res.json();
        if (data.status === "ok" && data.items) setPosts(data.items);
        else setError("Failed to fetch blog posts");
      } catch {
        setError("Failed to fetch blog posts");
      } finally {
        setIsLoading(false);
      }
    };
    fetchFeed();
  }, []);

  const siteUrl = "https://owennsofu.com"; // ✅ update to your real domain
  const pageUrl = `${siteUrl}/blog`;
  const ogImage = `${siteUrl}/og-image.jpg`; // ✅ place og-image.jpg in /public

  return (
    <>
      <Helmet>
        {/* ── Basic ── */}
        <title>Blog | Owen Nsofu — Web Development & Tech Insights</title>
        <meta
          name="description"
          content="Read the latest articles, insights, and stories from Owen Nsofu on web development, mobile apps, and software engineering."
        />
        <meta
          name="keywords"
          content="Owen Nsofu blog, web development articles, software engineering, React, Node.js, mobile development, tech insights"
        />
        <meta name="author" content="Owen Nsofu" />
        <link rel="canonical" href={pageUrl} />

        {/* ── Open Graph ── */}
        <meta property="og:type" content="blog" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Owen Nsofu" />
        <meta property="og:title" content="Blog | Owen Nsofu — Web Development & Tech Insights" />
        <meta
          property="og:description"
          content="Read the latest articles, insights, and stories from Owen Nsofu on web development, mobile apps, and software engineering."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@owennsofu" />
        <meta name="twitter:creator" content="@owennsofu" />
        <meta name="twitter:title" content="Blog | Owen Nsofu — Web Development & Tech Insights" />
        <meta
          name="twitter:description"
          content="Read the latest articles, insights, and stories from Owen Nsofu on web development, mobile apps, and software engineering."
        />
        <meta name="twitter:image" content={ogImage} />

        {/* ── Structured Data (JSON-LD) ── */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Owen Nsofu's Blog",
            url: pageUrl,
            description:
              "Articles and insights on web development, mobile apps, and software engineering by Owen Nsofu.",
            author: {
              "@type": "Person",
              name: "Owen Nsofu",
              url: siteUrl,
              sameAs: [
                "https://linkedin.com/in/owennsofu",
                "https://github.com/owennsofu",
                "https://twitter.com/owennsofu",
                "https://owennsofu.substack.com",
              ],
            },
            publisher: {
              "@type": "Person",
              name: "Owen Nsofu",
              url: siteUrl,
            },
          })}
        </script>
      </Helmet>

      <section
        id="blogs"
        className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              My Blog
            </h1>
            <motion.div
              className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-teal-400 to-teal-600"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Latest thoughts, insights, and stories from my journey in web
              development and technology. Sharing knowledge and experiences to
              help others grow.
            </p>
          </motion.div>

          {/* Stats */}
          <BlogStats posts={posts} />

          {/* Posts Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {isLoading ? (
              <p className="text-center text-white">Loading...</p>
            ) : error ? (
              <div className="text-center text-red-500">{error}</div>
            ) : posts.length === 0 ? (
              <div className="text-center text-white">No posts available</div>
            ) : (
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, index) => (
                  <BlogCard
                    key={`${post.title}-${index}`}
                    post={post}
                    index={index}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;