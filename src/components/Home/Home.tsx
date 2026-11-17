import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../constants/colors";
import profileImg from "../../assets/opt/profile-cutout.png";
import cvPDF from "../../assets/ow.pdf";
import {
  FaArrowRight,
  FaDownload,
  FaFacebook,
  FaGithub,
  FaGlobeAfrica,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiFirebase, SiFlutter, SiNodedotjs, SiReact } from "react-icons/si";

const roles = [
  "Full Stack Developer",
  "Mobile Application Developer",
  "Graphic Design",
  "Software Engineer",
];

// Same profiles as the footer
const socials = [
  { href: "https://www.linkedin.com/in/owen-nsofu-93169b300", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://github.com/Owen123Nsofu", icon: FaGithub, label: "GitHub" },
  { href: "https://web.facebook.com/profile.php?id=100078009960924", icon: FaFacebook, label: "Facebook" },
];

const stack = [
  { icon: SiReact, label: "React" },
  { icon: SiFlutter, label: "Flutter" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiFirebase, label: "Firebase" },
];

// Hero entrance: each line rises in, one after another
const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const heroItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export const Home = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();


  return (
    <>

      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-28 pb-16 bg-dots-dark"
        style={{ backgroundColor: COLORS.primaryDark }}
      >
        {/* Vertical tagline (left edge) */}
        <div
          className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 items-center gap-3 text-[11px] font-semibold tracking-[0.35em] uppercase"
          style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)", color: COLORS.lightBlue }}
        >
          Building tomorrow. Today.
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
        </div>

        {/* Vertical social links (right edge) */}
        <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-3">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 flex items-center justify-center rounded-full text-gray-300 hover:text-teal-400 hover:bg-white/5 transition-colors duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-8 items-center">
          {/* ── Left: intro ── */}
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            className="text-center lg:text-left"
          >
            <motion.p variants={heroItem} className="text-lg sm:text-xl text-gray-300 mb-3">Hello, I&apos;m</motion.p>

            <motion.h1 variants={heroItem} className="text-5xl sm:text-6xl xl:text-7xl font-extrabold uppercase tracking-tight leading-none mb-5">
              <span className="text-white">Owen </span>
              <span className="text-teal-400">Nsofu</span>
            </motion.h1>

            <motion.div variants={heroItem}>
            <p
              className={`text-sm sm:text-base font-medium uppercase tracking-[0.3em] text-gray-300 min-h-[1.5rem] transition-opacity duration-300 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
              aria-live="polite"
            >
              {roles[currentRoleIndex]}
            </p>
            <motion.span
              className="block w-12 h-0.5 bg-teal-500 mt-4 mb-8 mx-auto lg:mx-0 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            />
            </motion.div>

            <motion.p variants={heroItem} className="text-base sm:text-lg leading-relaxed text-gray-300 max-w-md mx-auto lg:mx-0 mb-10">
              I build scalable web and mobile applications that pair clean design
              with great user experience and solid performance.
            </motion.p>

            {/* Actions */}
            <motion.div variants={heroItem} className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start mb-12">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/projects")}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-md bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold uppercase tracking-wider shadow-lg shadow-black/30 transition-colors duration-200"
              >
                View my work
                <FaArrowRight size={12} aria-hidden="true" />
              </motion.button>
              <a
                href={cvPDF}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-gray-200 hover:text-teal-400 transition-colors duration-200"
              >
                Download CV
                <span className="w-8 h-8 rounded-full border border-gray-500 group-hover:border-teal-400 flex items-center justify-center transition-colors duration-200">
                  <FaDownload size={11} aria-hidden="true" />
                </span>
              </a>
            </motion.div>

            {/* Availability + stack */}
            <motion.div variants={heroItem} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {stack.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    title={label}
                    className="w-10 h-10 rounded-full flex items-center justify-center border-2 text-teal-300"
                    style={{ backgroundColor: COLORS.cardBg, borderColor: COLORS.primaryDark }}
                  >
                    <Icon size={16} aria-label={label} />
                  </span>
                ))}
              </div>
              <div className="text-center sm:text-left">
                <p className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  Available for projects
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-teal-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex w-2 h-2 rounded-full bg-teal-400" />
                  </span>
                </p>
                <p className="text-xs text-gray-400 mt-1">React · Flutter · Node.js · Firebase</p>
              </div>
            </motion.div>
            {/* Social links (phones; desktop shows them on the right edge) */}
            <div className="lg:hidden flex justify-center gap-2 mt-8">
              {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 flex items-center justify-center rounded-full text-gray-300 hover:text-teal-400"
            >
              <Icon size={18} />
            </a>
          ))}
            </div>
          </motion.div>

          {/* ── Right: portrait ── */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end self-end -mb-16"
          >
            <div className="relative w-[290px] sm:w-[360px]">
              {/* Soft glow + accent circle + slowly turning dashed orbit */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full bg-teal-500/25 blur-3xl" />
              <div
                className="absolute top-6 left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full border border-teal-400/20"
                style={{ backgroundColor: COLORS.primaryMedium }}
              />
              <motion.div
                aria-hidden="true"
                className="absolute -top-3 left-1/2 w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-full border border-dashed border-teal-300/25"
                style={{ x: "-50%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />

              {/* Cut-out portrait; fades into the background at the bottom */}
              <img
                src={profileImg}
                alt="Owen Nsofu, software engineer"
                width={520}
                height={890}
                fetchPriority="high"
                decoding="async"
                className="relative w-full h-auto"
                style={{
                  filter: "drop-shadow(0 24px 40px rgba(0,0,0,0.45)) saturate(1.05) contrast(1.04)",
                  WebkitMaskImage: "linear-gradient(to bottom, #000 78%, transparent 100%)",
                  maskImage: "linear-gradient(to bottom, #000 78%, transparent 100%)",
                }}
              />

              {/* Floating fact badge (from CV) */}
              <motion.div
                className="absolute top-40 -right-3 sm:top-16 sm:-right-12 flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 backdrop-blur-md shadow-xl"
                style={{ backgroundColor: `${COLORS.cardBg}E6` }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-2xl font-bold text-white leading-none">8</span>
                <span className="text-[11px] leading-tight text-gray-300">Apps on the<br />App Store &amp; Play</span>
              </motion.div>

              {/* Location card */}
              <div
                className="absolute bottom-20 -left-4 sm:bottom-28 sm:-left-20 lg:-left-24 w-44 rounded-xl border border-white/10 p-4 backdrop-blur-md shadow-xl"
                style={{ backgroundColor: `${COLORS.cardBg}E6` }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">Based in</p>
                <p className="text-sm text-white mt-1 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-teal-400" size={12} aria-hidden="true" />
                  Lusaka, Zambia
                </p>
                <div className="h-px bg-white/10 my-3" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">Available</p>
                <p className="text-sm text-white mt-1 flex items-center gap-2">
                  <FaGlobeAfrica className="text-teal-400" size={12} aria-hidden="true" />
                  Worldwide
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </section>
    </>
  );
};
