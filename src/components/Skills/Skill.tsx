import { FaCode, FaServer, FaCloud, FaDatabase, FaTools, FaPalette } from "react-icons/fa";
import type { IconType } from "react-icons";
import { skillsData } from "../Data/Data";
import { PageHero, Section, Reveal } from "../ui/Section";
import { CtaBand } from "../ui/CtaBand";

const categories: { name: string; label: string; icon: IconType; description: string }[] = [
  { name: "Frontend", label: "Frontend & Mobile", icon: FaCode, description: "Interfaces for web and mobile." },
  { name: "Backend", label: "Backend & APIs", icon: FaServer, description: "Servers, data and integrations." },
  { name: "Database", label: "Databases", icon: FaDatabase, description: "Relational and realtime storage." },
  { name: "Cloud", label: "Cloud & Hosting", icon: FaCloud, description: "Deployment and infrastructure." },
  { name: "Tools", label: "Tools & Workflow", icon: FaTools, description: "How I build, ship and collaborate." },
  { name: "Design", label: "Design", icon: FaPalette, description: "Visual and interface design." },
];

const Skill = () => (
  <>
    <PageHero
      eyebrow="Skills"
      title="Tools and technologies"
      description="The languages, frameworks and platforms I use to design, build and ship software."
    />

    <Section>
      <div className="divide-y divide-gray-200 border-y border-gray-200">
        {categories.map(({ name, label, icon: Icon, description }, i) => {
          const items = skillsData.filter((s) => s.category === name);
          if (!items.length) return null;
          return (
            <Reveal key={name} delay={i * 0.03}>
              <div className="grid gap-5 py-8 md:grid-cols-[260px_1fr] md:gap-10">
                <div className="flex gap-4">
                  <span className="w-10 h-10 shrink-0 inline-flex items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900">{label}</h2>
                    <p className="mt-1 text-sm text-gray-500">{description}</p>
                  </div>
                </div>
                <ul className="flex flex-wrap content-start gap-2">
                  {items.map((s) => (
                    <li
                      key={s.name}
                      className="px-3 py-1.5 rounded-lg border border-gray-200/80 bg-white/80 backdrop-blur-sm text-sm text-gray-700"
                    >
                      {s.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>

    <CtaBand />
  </>
);

export default Skill;
