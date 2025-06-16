import React from "react";
import { Helmet } from "react-helmet";
import profileImg from "../../assets/2022_11_17_06_14_IMG_1551.JPG";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <>
      {/* ✅ SEO Metadata */}
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

      {/* 🔽 About Section */}
      <section id="about" className="w-full bg-[#05161A] text-white py-20 px-6 md:px-12 lg:px-20">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-[#6DA5C0] mb-16">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Profile Image & Contact */}
            <motion.div
              className="w-full md:w-1/3 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={profileImg}
                alt="Owen Nsofu"
                className="w-52 h-52 rounded-full mx-auto border-4 border-[#294D61] object-cover shadow-lg"
              />
              <div className="mt-8 text-sm text-[#EAEAEA] leading-7 space-y-2">
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
                    className="text-[#0F969C] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/owen-nsofu-93169b300
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Right side content */}
            <motion.div
              className="w-full md:w-2/3 flex flex-col gap-10"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Personal Profile Card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-md">
                <h3 className="text-2xl font-semibold text-[#6DA5C0] mb-4">
                  Personal Profile
                </h3>
                <p className="text-[#EAEAEA] leading-relaxed">
                  I am a proactive software developer with a solid foundation in
                  Computer Science and experience in building responsive, user-friendly
                  websites and applications. Skilled in front-end technologies such as
                  JavaScript and React.js, along with backend development using Python and PHP,
                  I enjoy solving technical challenges and optimizing digital experiences.
                  <br />
                  <br />
                  My technical proficiency extends to database design and management using
                  MySQL, and I am comfortable working with no-code and low-code tools
                  to accelerate development. I also have foundational knowledge of Technical
                  SEO principles, enabling me to create websites that are not only visually
                  appealing but also search-engine friendly.
                  <br />
                  <br />
                  I thrive in remote collaborative environments and am passionate about
                  delivering seamless web solutions that enhance user engagement and business growth.
                </p>
              </div>

              {/* Education Card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-md">
                <h3 className="text-2xl font-semibold text-[#6DA5C0] mb-4">Education</h3>
                <ul className="list-disc ml-6 text-[#EAEAEA] leading-relaxed space-y-2">
                  <li>Mulungushi University — BSc in Computer Science (2020 - 2024)</li>
                  <li>Sathya Sai Trust School — Grade 12 Certificate (2017 - 2019)</li>
                  <li>Twatasha Primary School — Grade 9 Certificate (2015 - 2016)</li>
                </ul>
              </div>

              {/* Hobbies */}
              <div>
                <h3 className="text-2xl font-semibold text-[#6DA5C0] mb-4">Hobbies</h3>
                <ul className="flex flex-wrap gap-4 text-[#EAEAEA]">
                  {["Gaming", "Music", "Soccer", "Coding", "Reading Books"].map(
                    (hobby) => (
                      <li
                        key={hobby}
                        className="bg-[#294D61] px-4 py-2 rounded-full text-sm"
                      >
                        {hobby}
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-wrap gap-6 mt-8">
                <a
                  href="../../assets/ow.pdf"
                  download
                  className="bg-[#0F969C] hover:bg-[#6DA5C0] text-white font-semibold py-3 px-7 rounded-md transition duration-300"
                >
                  Download CV
                </a>
                <a
                  href="#contact"
                  className="bg-[#0C7075] hover:bg-[#294D61] text-white font-semibold py-3 px-7 rounded-md transition duration-300"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};
