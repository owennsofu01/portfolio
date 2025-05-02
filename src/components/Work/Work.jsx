import React from "react";
import { workData } from "../Data/Data";
import { motion } from "framer-motion";  // Import motion from framer-motion
import "./Work.css";

const Work = () => {
  return (
    <section className="work-container my-5">
      <h2>My Work Experience</h2>
      <div className="work-section row">
        {workData.map(
          (item) =>
            item.title &&
            item.description && (
              <motion.div
                key={item.id}
                className="col-md-4 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </div>
    </section>
  );
};

export default Work;
