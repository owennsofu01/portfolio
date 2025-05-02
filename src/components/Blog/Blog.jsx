// src/components/Blog.jsx
import React from "react";
import "./Blog.css";
import { blogPosts } from "../Data/Data";

const Blog = () => {
  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        <h2 className="blog-title">Latest Blog Posts</h2>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.id}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
