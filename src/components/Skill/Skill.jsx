import "./Skill.css";
import { skillsData } from "../Data/Data";

const Skill = () => {
  return (
    <section className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-section">
        {skillsData.map((skillCategory) => (
          <div key={skillCategory.id} className="skill-category">
            <h3>{skillCategory.category}</h3>
            {skillCategory.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-name">
                  <span>{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
