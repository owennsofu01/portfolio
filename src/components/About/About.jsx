import React from "react";
import { Helmet } from "react-helmet";
import profileImg from "../../assets/2022_11_17_06_14_IMG_1551.JPG";
import { motion } from "framer-motion";

const GlowKeyframes = () => (
  <style>
    {`
      @keyframes spinRing {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      @keyframes animatedGradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      .animated-bg {
        background: linear-gradient(-45deg, #05161A, #0F969C, #294D61, #05161A);
        background-size: 400% 400%;
        animation: animatedGradient 20s ease infinite;
      }

      .profile-pic-wrapper {
        position: relative;
        width: 208px;
        height: 208px;
        margin: 0 auto;
      }

      .profile-pic {
        width: 208px;
        height: 208px;
        border-radius: 50%;
        border: 4px solid #294D61;
        object-fit: cover;
        box-shadow: 0 0 12px rgba(47, 109, 138, 0.6);
        position: relative;
        z-index: 2;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .profile-pic-wrapper:hover .profile-pic {
        transform: scale(1.05);
        box-shadow: 0 0 15px #0F969C, 0 0 30px #6DA5C0;
      }

      .spinning-ring {
        position: absolute;
        top: -12px;
        left: -12px;
        width: 232px;
        height: 232px;
        border-radius: 50%;
        border: 4px solid transparent;
        border-top: 4px solid #0F969C;
        border-right: 4px solid #6DA5C0;
        animation: spinRing 4s linear infinite;
        box-shadow: 0 0 10px #0F969C, 0 0 20px #6DA5C0;
        z-index: 1;
      }

      .btn-animated {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .btn-animated:hover, .btn-animated:focus {
        transform: scale(1.05);
        box-shadow: 0 0 12px #0F969C, 0 0 24px #6DA5C0;
        outline: none;
      }

      .hobby-chip:hover {
        background-color: #0F969C;
        box-shadow: 0 0 8px #6DA5C0;
        cursor: pointer;
      }

      .card-hover {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .card-hover:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(13, 148, 136, 0.3);
      }

      .glow-link {
        position: relative;
      }

      .glow-link::after {
        content: '';
        position: absolute;
        width: 0%;
        height: 2px;
        left: 0;
        bottom: -2px;
        background: #0F969C;
        transition: width 0.3s ease;
      }

      .glow-link:hover::after {
        width: 100%;
      }
    `}
  </style>
);


export const About = () => {
  return (
    <>
      <GlowKeyframes />
      <Helmet>
        <title>About Me - Owen Nsofu | Software Developer Portfolio</title>
        <meta
          name="description"
          content="Learn more about Owen Nsofu, a proactive software developer with experience in web development, database design, and technical SEO."
        />
        <meta
          name="keywords"
          content="Owen Nsofu, About, Software Developer, Portfolio, Web Development, React, MySQL, Technical SEO, Zambia"
        />
        <meta name="author" content="Owen Nsofu" />
        <meta property="og:title" content="About Owen Nsofu - Software Developer" />
        <meta
          property="og:description"
          content="Get to know Owen Nsofu, a dedicated software developer passionate about building responsive and user-friendly web solutions."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://yourdomain.com/preview-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com/about" />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Helmet>

      <section
        id="about"
        className="w-full bg-[#05161A] text-white py-20 px-6 md:px-12 lg:px-20"
      >
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.h1
              className="text-4xl font-extrabold text-[#6DA5C0] dark:text-white"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Us
            </motion.h1>
            <motion.div
              className="w-24 h-1 bg-[#0F969C] mx-auto mt-3 rounded"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <motion.div
              className="w-full md:w-1/3 flex flex-col items-center text-center gap-8"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="profile-pic-wrapper">
                <img src={profileImg} alt="Owen Nsofu" className="profile-pic" />
                <div className="spinning-ring"></div>
              </div>

              <div className="text-sm text-[#EAEAEA] leading-7 space-y-2">
                <p>
                  <strong>Phone:</strong> 076-467-0944 / 097-373-2106
                </p>
                <p>
                  <strong>Email:</strong> owennsofu01@gmail.com
                </p>
                <p>
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://linkedin.com/in/owen-nsofu-93169b300"
                    className="glow-link text-[#0F969C]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/owen-nsofu-93169b300
                  </a>
                </p>
              </div>

              <div className="w-full">
                <h3 className="text-2xl font-semibold text-[#6DA5C0] mb-4 text-left">
                  Hobbies
                </h3>
                <ul className="flex flex-wrap gap-4 text-[#EAEAEA] justify-start">
                  {["Gaming", "Music", "Soccer", "Coding", "Reading Books"].map(
                    (hobby) => (
                      <li
                        key={hobby}
                        className="hobby-chip bg-[#294D61] px-4 py-2 rounded-full text-sm transition duration-300"
                      >
                        {hobby}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="flex flex-wrap gap-6 mt-4 justify-start w-full">
                <a
                  href="../../assets/ow.pdf"
                  download
                  className="btn-animated bg-[#0F969C] hover:bg-[#6DA5C0] text-white font-semibold py-3 px-7 rounded-md transition duration-300"
                >
                  Download CV
                </a>
                <a
                  href="#contact"
                  className="btn-animated bg-[#0C7075] hover:bg-[#294D61] text-white font-semibold py-3 px-7 rounded-md transition duration-300"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-2/3 flex flex-col gap-10"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="card-hover bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-md">
                <h3 className="text-2xl font-semibold text-[#6DA5C0] mb-4">
                  Personal Profile
                </h3>
                <p className="text-[#EAEAEA] leading-relaxed">
                  Proactive software developer with a solid foundation in Computer Science, 
                  specializing in building responsive web and mobile applications. Skilled in 
                  JavaScript, React.js, Python, and PHP with expertise in database design 
                  and Technical SEO. Passionate about delivering seamless digital solutions 
                  that drive user engagement and business growth.
                </p>
              </div>

              <div className="card-hover bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-md">
                <h3 className="text-2xl font-semibold text-[#6DA5C0] mb-4">Education</h3>
                <ul className="list-disc ml-6 text-[#EAEAEA] leading-relaxed space-y-2">
                  <li>Mulungushi University — BSc in Computer Science (2020 - 2024)</li>
                  <li>Sathya Sai Trust School — Grade 12 Certificate (2017 - 2019)</li>
                  <li>Twatasha Primary School — Grade 9 Certificate (2015 - 2016)</li>
                </ul>
              </div>

              <div className="card-hover bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-md">
                <h3 className="text-2xl font-semibold text-[#6DA5C0] mb-4">Certifications</h3>
                <ul className="list-disc ml-6 text-[#EAEAEA] leading-relaxed space-y-2">
                  <li>Certificate in Cloud Computing, Huawei, 2024</li>
                  <li>Certificate in Internet of Things, Huawei, 2024</li>
                  <li>Certificate in Introduction to Internet of Things, Cisco, 2024</li>
                  <li>BSc in Computer Science Degree Certificate, Mulungushi University, 2024</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};
