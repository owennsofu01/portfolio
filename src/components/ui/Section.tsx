import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { LightBackdrop } from "./Backdrop";

/*
 * Shared layout primitives so every page uses the same spacing,
 * heading style and surfaces:
 *   light  – white (default content)
 *   muted  – faint brand tint (alternate band)
 *   dark   – hero colour (page headers, call-to-action bands, footer)
 */
type Tone = "light" | "muted" | "dark";

const toneClass: Record<Tone, string> = {
  light: "bg-white",
  muted: "bg-teal-50/60",
  dark: "bg-teal-950 bg-dots-dark text-white",
};

export const Section = ({
  id,
  tone = "light",
  className = "",
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) => (
  <section
    id={id}
    className={`relative isolate overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24 ${toneClass[tone]} ${className}`}
  >
    {tone !== "dark" && <LightBackdrop />}
    <div className="relative max-w-6xl mx-auto">{children}</div>
  </section>
);

export const Eyebrow = ({ children, dark = false }: { children: ReactNode; dark?: boolean }) => (
  <p className={`text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${dark ? "text-teal-300" : "text-teal-700"}`}>
    {children}
  </p>
);

/** Section heading with optional "see all" link on the right */
export const SectionHeader = ({
  eyebrow,
  title,
  description,
  action,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: { label: string; to: string };
  dark?: boolean;
}) => (
  <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
    <div className="max-w-2xl">
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${dark ? "text-white" : "text-gray-900"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? "text-gray-300" : "text-gray-600"}`}>
          {description}
        </p>
      )}
    </div>
    {action && <TextLink to={action.to} dark={dark}>{action.label}</TextLink>}
  </div>
);

/** Dark page header used at the top of every inner page (matches the home hero) */
export const PageHero = ({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) => (
  <header className="px-4 sm:px-6 lg:px-8 pt-16 pb-16 sm:pt-20 sm:pb-20 bg-teal-950 bg-dots-dark">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      >
        {[
          <Eyebrow key="e" dark>{eyebrow}</Eyebrow>,
          <h1 key="t" className="text-4xl sm:text-5xl font-bold tracking-tight text-white">{title}</h1>,
          description && (
            <p key="d" className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-300">{description}</p>
          ),
          children,
        ]
          .filter(Boolean)
          .map((node, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              {node}
            </motion.div>
          ))}
      </motion.div>
    </div>
  </header>
);

/** Subtle fade-up on first view */
export const Reveal = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const TextLink = ({ to, children, dark = false }: { to: string; children: ReactNode; dark?: boolean }) => (
  <Link
    to={to}
    className={`group inline-flex items-center gap-2 text-sm font-semibold shrink-0 ${
      dark ? "text-teal-300 hover:text-white" : "text-teal-700 hover:text-teal-900"
    }`}
  >
    {children}
    <FaArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
  </Link>
);

export const buttonPrimary =
  "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold transition-colors duration-200";
export const buttonGhostDark =
  "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 text-white text-sm font-semibold transition-colors duration-200";
export const card =
  "rounded-2xl border border-gray-200/80 bg-white/75 backdrop-blur-md transition-[transform,border-color,box-shadow] duration-300 hover:border-teal-300 hover:-translate-y-1 motion-reduce:hover:translate-y-0";
