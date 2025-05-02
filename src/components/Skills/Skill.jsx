import React from "react";

import "./Skill.css";
import { skillsData } from "../Data/Data";

const Skill = () => {
  return (
    <section className="py-5 " id="skills">
      <div className="container">
        <h2 className="text-center mb-4 text-primary fw-bold">My Skills</h2>
        <div className="row g-4">
          {skillsData.map((skill, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="bg-white p-3 rounded shadow-sm">
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-semibold text-dark">{skill.name}</span>
                  <span className="text-muted">{skill.level}%</span>
                </div>
                <div className="progress" style={{ height: "10px" }}>
                  <div
                    className="progress-bar bg-info"
                    style={{ width: `${skill.level}%` }}
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
