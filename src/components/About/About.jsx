import "./About.css";
import profileImg from "../../assets/2022_11_17_06_14_IMG_1551.JPG";
import { skillsData } from "../Data/Data";

export const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <h1 className="section-title">About Me</h1>
          <div className="about-section">
            {/* Left: Image */}
            <div className="left">
              <img src={profileImg} alt="Owen Nsofu" />
            </div>

            {/* Right: Text Content */}
            <div className="right">
              <h2>Who I Am</h2>
              <p>
                I am a passionate Software Engineer with expertise in web
                development, mobile app development, and graphic design. My
                journey in tech is driven by a deep interest in creating
                innovative and user-friendly applications. I specialize in
                React.js, Flutter, Node.js, and UI/UX design, ensuring every
                project is both functional and visually appealing.
              </p>

              <h2>My Mission</h2>
              <p>
                My mission is to build efficient, scalable, and impactful
                software solutions that improve peoples lives. With experience
                in frontend and backend development, I create seamless digital
                experiences that prioritize user experience and accessibility.
              </p>

              <div className="about-buttons">
                <a href="../../assets/ow.pdf" download className="btn">
                  Download CV
                </a>
                <a href="#contact" className="btn contact-btn">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    </>
  );
};
