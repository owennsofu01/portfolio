import "./About.css";
import profileImg from "../../assets/2022_11_17_06_14_IMG_1551.JPG";
import { skillsData } from "../Data/Data";
import Skill from "../Skills/Skill";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <>
      <section className="about" id="about">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="section-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            About Me
          </motion.h1>

          <motion.div
            className="about-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Left: Image */}
            <motion.div
              className="left"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={profileImg} alt="Owen Nsofu" />
            </motion.div>

            {/* Right: Text */}
            <motion.div
              className="right"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Who I Am</h2>
              <p>
                I am a passionate Software Engineer with expertise in web
                development, mobile app development, and graphic design...
              </p>

              <h2>My Mission</h2>
              <p>
                My mission is to build efficient, scalable, and impactful
                software solutions that improve people’s lives...
              </p>

              <motion.div
                className="about-buttons"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <a href="../../assets/ow.pdf" download className="btn">
                  Download CV
                </a>
                <a href="#contact" className="btn contact-btn">
                  Contact Me
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <Skill />
    </>
  );
};
