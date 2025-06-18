import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://owennsofu.substack.com/feed"
        );
        const data = await response.json();
        setPosts(data.items.slice(0, 4)); // show top 4 posts
      } catch (error) {
        console.error("Error fetching blog feed:", error);
      }
    };

    fetchFeed();
  }, []);

  return (
    <section id="blogs"
      className="py-16 px-6 sm:px-10"
      style={{ backgroundColor: "#08252C", color: "#EAEAEA" }}
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <motion.h1
          className="text-4xl font-bold mb-6 text-[#6DA5C0]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Substack Blog
        </motion.h1>

        <motion.p
          className="text-lg mb-10 text-[#A3C0C9]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Latest thoughts, stories, and updates from Owen Nsofu.
        </motion.p>

        {posts.map((post, index) => (
          <motion.div
            key={index}
            className="mb-8 p-6 bg-[#0B3C49] rounded-lg shadow-md text-left cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            viewport={{ once: true }}
          >
            {post.thumbnail && (
              <img
                src={post.thumbnail}
                alt="Post Thumbnail"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            <h2 className="text-2xl font-semibold mb-2 text-[#A3C0C9]">
              {post.title}
            </h2>
            <p className="text-sm text-[#88A9B5] mb-2">
              {new Date(post.pubDate).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              • by {post.author}
            </p>
            <p className="text-[#BCD6E4] mb-4">
              {post.contentSnippet?.slice(0, 180)}...
            </p>
            <motion.a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6DA5C0] underline font-medium"
              whileHover={{ scale: 1.05, color: "#91B6D0" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Read More →
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Blog;
