import { FaMobileAlt, FaLaptopCode, FaPalette, FaHeadset, FaBrain, FaCheck, FaArrowRight } from "react-icons/fa";
import type { IconType } from "react-icons";
import { Link } from "react-router-dom";

import { serviceData } from "../Data/Data";
import { PageHero, Section, Reveal, card } from "../ui/Section";
import { CtaBand } from "../ui/CtaBand";

const serviceIcons: Record<number, IconType> = {
  1: FaMobileAlt,
  2: FaLaptopCode,
  3: FaPalette,
  4: FaHeadset,
  5: FaBrain,
};

const serviceFeatures: Record<number, string[]> = {
  1: ["iOS and Android from one codebase", "Firebase backends", "Store publishing"],
  2: ["Responsive, accessible UI", "APIs and databases", "SEO-ready pages"],
  3: ["Brand assets", "Print and social", "Promotional visuals"],
  4: ["Network setup", "Troubleshooting", "Maintenance"],
  5: ["Image classification", "AI assistants", "Automation"],
};

/** Grid of services. `detailed` adds feature bullets (Services page). */
export const ServiceGrid = ({ detailed = false }: { detailed?: boolean }) => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {serviceData.map((service, i) => {
      const Icon = serviceIcons[service.id] ?? FaLaptopCode;
      return (
        <Reveal key={service.id} delay={i * 0.05}>
          <article className={`${card} h-full p-7`}>
            <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
              <Icon size={20} aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-gray-900">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{service.description}</p>
            {detailed && (
              <ul className="mt-5 space-y-2">
                {serviceFeatures[service.id]?.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCheck size={11} className="text-teal-600 shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            )}
          </article>
        </Reveal>
      );
    })}

    {/* Sixth tile keeps the grid even and gives a next step */}
    <Reveal delay={serviceData.length * 0.05}>
      <Link
        to="/contact"
        className="group h-full sm:min-h-[220px] flex flex-col justify-between gap-6 rounded-2xl border border-dashed border-teal-300 p-7 hover:bg-teal-50/60 transition-colors"
      >
        <p className="text-lg font-semibold text-gray-900">Need something else?</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
          Tell me about your project
          <FaArrowRight size={11} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </Link>
    </Reveal>
  </div>
);

export const Service = () => (
  <>
    <PageHero
      eyebrow="Services"
      title="What I can build for you"
      description="From a mobile app in the stores to a company website or an AI feature, I handle design, development and launch."
    />
    <Section>
      <ServiceGrid detailed />
    </Section>
    <CtaBand />
  </>
);
