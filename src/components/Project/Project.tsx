import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import { FaApple, FaGooglePlay, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectData } from "../Data/Data";
import { projectDetails } from "../Data/projectDetails";
import { PageHero, Section, card } from "../ui/Section";

export type ProjectItem = (typeof projectData)[number] & {
  github?: string;
  iosLink?: string;
  website?: string;
  status?: string;
};

const linkStyle =
  "inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors";

const ProjectLinks = ({ project }: { project: ProjectItem }) => {
  const links: { href: string; label: string; icon: typeof FaApple }[] = [];
  if (project.iosLink) {
    if (project.link) links.push({ href: project.link, label: "Google Play", icon: FaGooglePlay });
    links.push({ href: project.iosLink, label: "App Store", icon: FaApple });
  } else if (project.link) {
    const label =
      project.category === "Web" ? "Visit site" : project.category === "Graphics" ? "View design" :
      project.link.includes("github.com") ? "View code" : "View project";
    links.push({ href: project.link, label, icon: project.link.includes("github.com") ? FaGithub : FaExternalLinkAlt });
  }
  if (project.website) links.push({ href: project.website, label: "Website", icon: FaExternalLinkAlt });
  if (project.github) links.push({ href: project.github, label: "Code", icon: FaGithub });

  return (
    <div className="mt-auto pt-5 flex flex-wrap gap-x-5 gap-y-2">
      {links.map(({ href, label, icon: Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={`${linkStyle} relative z-10`}
           aria-label={`${project.title}: ${label}`}>
          <Icon size={12} aria-hidden="true" />
          {label}
        </a>
      ))}
    </div>
  );
};

export const ProjectCard = ({ project }: { project: ProjectItem }) => (
  <article className={`${card} group relative h-full flex flex-col overflow-hidden hover:shadow-lg hover:shadow-gray-200/70`}>
    <div className="aspect-[16/10] overflow-hidden bg-gray-100">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
    <div className="flex-1 flex flex-col p-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
        {project.category}
        {project.status && <span className="ml-2 normal-case tracking-normal font-medium text-gray-500">· {project.status}</span>}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">
        {projectDetails[project.id] ? (
          <Link
            to={`/projects/${projectDetails[project.id].slug}`}
            className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-teal-600 focus-visible:after:rounded-2xl"
          >
            {project.title}
          </Link>
        ) : (
          project.title
        )}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">{project.description}</p>
      <p className="mt-4 text-xs text-gray-500">{project.technologies.join(" · ")}</p>
      <ProjectLinks project={project} />
    </div>
  </article>
);

export const Project = () => {
  const [selected, setSelected] = useState("All");
  const projects = projectData as ProjectItem[];
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const visible = selected === "All" ? projects : projects.filter((p) => p.category === selected);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: projects.map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "CreativeWork",
                name: project.title,
                description: project.description,
                url: project.iosLink || project.link,
                keywords: project.technologies.join(", "),
              },
            })),
          })}
        </script>
      </Helmet>

      <PageHero
        eyebrow="Projects"
        title="Selected work"
        description="Apps published on the App Store and Google Play, websites built for real businesses, and design work."
      />

      <Section>
        {/* Filter */}
        <div role="tablist" aria-label="Filter projects" className="mb-10 inline-flex flex-wrap gap-1 p-1 rounded-xl bg-gray-100">
          {categories.map((c) => {
            const count = c === "All" ? projects.length : projects.filter((p) => p.category === c).length;
            const active = selected === c;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={active}
                onClick={() => setSelected(c)}
                className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  active ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-lg bg-white shadow-sm"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative">
                  {c} <span className={active ? "text-teal-700" : "text-gray-400"}>{count}</span>
                </span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: Math.min(i, 8) * 0.03, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>
    </>
  );
};
