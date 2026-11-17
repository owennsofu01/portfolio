import { projectData } from "../Data/Data";
import { Section, SectionHeader, Reveal } from "../ui/Section";
import { ServiceGrid } from "../Service/Service";
import { ProjectCard } from "../Project/Project";
import type { ProjectItem } from "../Project/Project";
export { CtaBand } from "../ui/CtaBand";

const featuredTitles = ["Hush TMS", "CarLynk", "EstateEase"];

export const ServicesPreview = () => (
  <Section>
    <SectionHeader
      eyebrow="What I do"
      title="Services"
      description="Mobile apps, websites and AI features, designed and built end to end."
      action={{ label: "All services", to: "/services" }}
    />
    <ServiceGrid />
  </Section>
);

export const FeaturedProjects = () => {
  const featured = featuredTitles
    .map((t) => (projectData as ProjectItem[]).find((p) => p.title === t))
    .filter((p): p is ProjectItem => Boolean(p));

  return (
    <Section tone="muted">
      <SectionHeader
        eyebrow="Selected work"
        title="Recent projects"
        description="A few things I've built and shipped recently."
        action={{ label: "View all projects", to: "/projects" }}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.05}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

