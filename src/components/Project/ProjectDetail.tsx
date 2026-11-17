import { Link, Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaApple, FaGooglePlay, FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa";

import { projectData } from "../Data/Data";
import { projectDetails, detailBySlug } from "../Data/projectDetails";
import { Section, Eyebrow, Reveal, buttonPrimary, buttonGhostDark } from "../ui/Section";
import { CtaBand } from "../ui/CtaBand";
import type { ProjectItem } from "./Project";
import { SITE_URL, OG_IMAGE } from "../../seo";

const projects = projectData as ProjectItem[];

/** External links for a project (store badges, live site, code) */
const actionLinks = (p: ProjectItem) => {
  const links: { href: string; label: string; icon: typeof FaApple }[] = [];
  if (p.iosLink) links.push({ href: p.iosLink, label: "App Store", icon: FaApple });
  if (p.iosLink && p.link) links.push({ href: p.link, label: "Google Play", icon: FaGooglePlay });
  if (!p.iosLink && p.link) {
    const isCode = p.link.includes("github.com");
    links.push({
      href: p.link,
      label: isCode ? "View code" : p.category === "Graphics" ? "Full-size design" : "Visit site",
      icon: isCode ? FaGithub : FaExternalLinkAlt,
    });
  }
  if (p.website) links.push({ href: p.website, label: "Website", icon: FaExternalLinkAlt });
  if (p.github) links.push({ href: p.github, label: "Code", icon: FaGithub });
  return links;
};

export const ProjectDetail = () => {
  const { slug = "" } = useParams();
  const found = detailBySlug(slug);
  const project = found && projects.find((p) => p.id === found.id);
  if (!found || !project) return <Navigate to="/projects" replace />;

  const { detail } = found;
  const links = actionLinks(project);
  const url = `${SITE_URL}/projects/${detail.slug}`;

  // Previous / next in the same order as the Projects page
  const ordered = projects.filter((p) => projectDetails[p.id]);
  const idx = ordered.findIndex((p) => p.id === project.id);
  const prev = ordered[(idx - 1 + ordered.length) % ordered.length];
  const next = ordered[(idx + 1) % ordered.length];

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": project.category === "Mobile" ? "SoftwareApplication" : "CreativeWork",
            name: detail.title,
            description: detail.tagline,
            url,
            image: OG_IMAGE,
            author: { "@type": "Person", name: "Owen Nsofu", url: SITE_URL },
            keywords: project.technologies.join(", "),
            ...(project.category === "Mobile" && {
              applicationCategory: "MobileApplication",
              operatingSystem: detail.platform,
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            }),
          })}
        </script>
      </Helmet>

      {/* Header */}
      <header className="px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pb-20 bg-teal-950 bg-dots-dark">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-10">
            <Link to="/projects" className="inline-flex items-center gap-2 hover:text-white transition-colors">
              <FaArrowLeft size={11} aria-hidden="true" /> All projects
            </Link>
          </nav>
          <Reveal>
            <Eyebrow dark>
              {project.category}
              {project.status ? ` · ${project.status}` : ""}
            </Eyebrow>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">{detail.title}</h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-300">{detail.tagline}</p>
            {links.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {links.map(({ href, label, icon: Icon }, i) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                     className={i === 0 ? buttonPrimary : buttonGhostDark}>
                    <Icon size={14} aria-hidden="true" /> {label}
                  </a>
                ))}
              </div>
            )}
          </Reveal>
        </div>
      </header>

      <Section>
        {/* Showcase image */}
        <Reveal>
          <div className="rounded-2xl border border-gray-200 bg-white p-2 shadow-xl shadow-gray-300/40">
            <div className="rounded-xl overflow-hidden bg-gray-100 flex justify-center">
              <img
                src={project.image}
                alt={`${detail.title} preview`}
                className={`w-full h-auto max-h-[560px] ${project.category === "Graphics" ? "object-contain" : "object-cover"}`}
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-16">
          {/* Story */}
          <div>
            <Reveal>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 mb-4">Overview</h2>
              <p className="text-lg leading-relaxed text-gray-700">{detail.overview}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 mb-5">Key features</h2>
              <ul className="space-y-3">
                {detail.features.map((f) => (
                  <li key={f} className="flex gap-3 text-gray-700">
                    <span className="mt-1 w-5 h-5 shrink-0 inline-flex items-center justify-center rounded-full bg-teal-50 text-teal-700">
                      <FaCheck size={9} aria-hidden="true" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Facts */}
          <Reveal delay={0.08}>
            <dl className="rounded-2xl border border-gray-200/80 bg-white/75 backdrop-blur-md p-6 space-y-5 lg:sticky lg:top-24">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">Role</dt>
                <dd className="mt-1 text-gray-900">{detail.role}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">Platform</dt>
                <dd className="mt-1 text-gray-900">{detail.platform}</dd>
              </div>
              {detail.year && (
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">Timeline</dt>
                  <dd className="mt-1 text-gray-900">{detail.year}</dd>
                </div>
              )}
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Built with</dt>
                <dd className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-teal-50 text-teal-800 text-xs font-medium">{t}</span>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        {/* Prev / next */}
        <nav aria-label="More projects" className="mt-20 pt-8 border-t border-gray-200 grid gap-4 sm:grid-cols-2">
          <Link to={`/projects/${projectDetails[prev.id].slug}`} className="group rounded-xl p-4 -m-4 hover:bg-white/60 transition-colors">
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
              <FaArrowLeft size={10} className="transition-transform group-hover:-translate-x-1" aria-hidden="true" /> Previous
            </span>
            <span className="mt-1 block font-semibold text-gray-900 group-hover:text-teal-700">{prev.title}</span>
          </Link>
          <Link to={`/projects/${projectDetails[next.id].slug}`} className="group rounded-xl p-4 -m-4 sm:text-right hover:bg-white/60 transition-colors">
            <span className="flex items-center sm:justify-end gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Next <FaArrowRight size={10} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
            <span className="mt-1 block font-semibold text-gray-900 group-hover:text-teal-700">{next.title}</span>
          </Link>
        </nav>
      </Section>

      <CtaBand />
    </>
  );
};
