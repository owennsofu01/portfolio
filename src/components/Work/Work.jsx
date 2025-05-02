import React from "react";
import { workData } from "../Data/Data";
import "./Work.css";

const Work = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-5">My Work Experience</h2>
      <div className="row">
        {workData.map(
          (item) =>
            item.title &&
            item.description && (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default Work;
