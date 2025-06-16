import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../Data/Data";

const colors = {
  darkBg: "#05161A",
  darkBgSecondary: "#072E33",
  mediumTeal: "#0C7075",
  brightTeal: "#0F969C",
  lightBlueText: "#6DA5C0",
  mediumDarkBlueText: "#294D61",
  orangeAccent: "#F97316",
};

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === parseInt(id, 10));

  // State for dark mode detection
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Listen for system color scheme changes
  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(matchMedia.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    matchMedia.addEventListener("change", handleChange);
    return () => matchMedia.removeEventListener("change", handleChange);
  }, []);

  // Update document title and meta description for SEO
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | OwenitoTech Blog`;
      const metaDescription = document.querySelector("meta[name='description']");
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          post.fullDescription.slice(0, 150) + "..."
        );
      }
    } else {
      document.title = "Blog Post Not Found | OwenitoTech Blog";
    }
    return () => {
      document.title = "OwenitoTech Blog";
    };
  }, [post]);

  if (!post) {
    return (
      <main
        className="p-10 text-center"
        style={{ color: colors.orangeAccent }}
        role="alert"
        aria-live="assertive"
      >
        <h2 className="text-3xl font-semibold mb-6">Blog Post Not Found</h2>
        <button
          onClick={() => navigate("/blog")}
          className="inline-block px-5 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            backgroundColor: colors.mediumTeal,
            color: "white",
            outlineColor: colors.brightTeal,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.brightTeal)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.mediumTeal)}
          aria-label="Back to Blogs"
        >
          ← Back to Blogs
        </button>
      </main>
    );
  }

  // Compose dynamic classNames for dark/light mode styling
  const mainBgClass = isDarkMode ? "bg-[#05161A]" : "bg-gray-100";
  const textColorClass = isDarkMode ? "text-[#6DA5C0]" : "text-[#294D61]";
  const headerColorClass = isDarkMode ? "text-[#0F969C]" : "text-[#294D61]";
  const timeColorClass = isDarkMode ? "text-[#6DA5C0]" : "text-gray-600";
  const buttonBgClass = "bg-[#0C7075] hover:bg-[#0F969C] text-white";
  const buttonFocusRing = isDarkMode ? "focus:ring-[#0F969C]" : "focus:ring-[#0C7075]";

  return (
    <main
      className={`${mainBgClass} ${textColorClass} py-10 px-6 max-w-4xl mx-auto transition-colors duration-300`}
      role="main"
    >
      <button
        onClick={() => navigate("/blog")}
        className={`mb-8 px-4 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${buttonBgClass} ${buttonFocusRing}`}
        aria-label="Back to Blogs"
      >
        ← Back to Blogs
      </button>

      <article>
        <header>
          <h1 className={`text-4xl font-extrabold mb-3 ${headerColorClass}`}>
            {post.title}
          </h1>
          <time dateTime={post.date} className={`block mb-8 text-sm ${timeColorClass}`}>
            {new Date(post.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </header>

        {post.image && (
          <img
            src={post.image}
            alt={post.title || "Blog post image"}
            className="w-full max-h-96 object-cover rounded mb-8 shadow-lg"
            loading="lazy"
            style={{
              boxShadow: isDarkMode
                ? `0 4px 12px ${colors.darkBgSecondary}`
                : "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
        )}

        <section className="prose max-w-none text-lg whitespace-pre-line dark:prose-invert">
          {post.fullDescription}
        </section>
      </article>
    </main>
  );
};

export default BlogDetail;
