import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { COLORS } from "../../constants/colors";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://owennsofu.substack.com/feed"
        );
        const data = await response.json();
        setPosts(data.items || []);
      } catch (error) {
        console.error("Error fetching blog feed:", error);
        setPosts([]);
      }
    };

    fetchFeed();
  }, []);

  const duplicatedPosts = [...posts, ...posts]; // ✅ Duplicate for infinite loop

  return (
    <section
      id="blogs"
      className="py-16 px-6 sm:px-10 overflow-hidden"
      style={{ backgroundColor: COLORS.cardBg, color: COLORS.lightGray }}
    >
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-4" style={{ color: COLORS.lightBlue }}>
          My Substack Blog
        </h1>
        <p className="text-lg" style={{ color: COLORS.lightGray }}>
          Latest thoughts, stories, and updates from Owen Nsofu.
        </p>
      </div>

      {/* ✅ Infinite Horizontal Scrolling Container */}
      <div className="relative overflow-hidden group">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedPosts.map((post, index) => (
            <div
              key={index}
              className="min-w-[320px] max-w-sm rounded-lg p-6 shadow-md text-left cursor-pointer flex-shrink-0"
              style={{ backgroundColor: COLORS.primaryMedium }}
            >
              {/* Show thumbnail only if available from Substack */}
              {post.thumbnail && (
                <img
                  src={post.thumbnail}
                  alt={post.title || "Blog Post"}
                  className="w-full h-48 object-cover rounded-md mb-4 shadow-lg"
                />
              )}
              <h2 className="text-2xl font-semibold mb-2" style={{ color: COLORS.lightGray }}>
                {post.title}
              </h2>
              <p className="text-sm mb-2" style={{ color: COLORS.lightGray }}>
                {post.pubDate ? 
                  new Date(post.pubDate).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }) : 
                  "Recent"
                }{" "}
                • by {post.author || "Owen Nsofu"}
              </p>
              <p className="mb-4" style={{ color: COLORS.lightGray }}>
                {post.contentSnippet?.slice(0, 120)}...
              </p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium"
                style={{ color: COLORS.lightBlue }}
              >
                Read More →
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
