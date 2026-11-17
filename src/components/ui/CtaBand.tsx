import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { Section, buttonPrimary, buttonGhostDark } from "./Section";
import cvPDF from "../../assets/ow.pdf";

// Facts taken from the CV
const stats = [
  { value: "3+", label: "Years building software" },
  { value: "15+", label: "Projects delivered" },
  { value: "8", label: "Apps published to the stores" },
];

/** Counts up to a value like "15+" the first time it scrolls into view */
const CountUp = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const target = parseInt(value, 10);
  const suffix = value.replace(/^\d+/, "");
  const [shown, setShown] = useState(reduce ? target : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, target, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setShown(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, target]);

  return <span ref={ref}>{shown}{suffix}</span>;
};

/** Dark closing band: key numbers + call to action */
export const CtaBand = ({ withStats = false }: { withStats?: boolean }) => (
  <Section tone="dark">
    {withStats && (
      <dl className="grid gap-8 sm:grid-cols-3 pb-14 mb-14 border-b border-white/10">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="sr-only">{s.label}</dt>
            <dd className="text-4xl font-bold text-white tabular-nums"><CountUp value={s.value} /></dd>
            <dd className="mt-1 text-sm text-gray-400">{s.label}</dd>
          </div>
        ))}
      </dl>
    )}
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
      <div className="max-w-xl">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Have a project in mind?</h2>
        <p className="mt-4 text-gray-300 leading-relaxed">
          I&apos;m available for freelance work and full-time roles. I usually reply within 24 hours.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link to="/contact" className={buttonPrimary}>Start a conversation</Link>
        <a href={cvPDF} target="_blank" rel="noopener noreferrer" className={buttonGhostDark}>Download CV</a>
      </div>
    </div>
  </Section>
);
