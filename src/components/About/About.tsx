import type { ReactNode } from "react";
import { FaDownload, FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

import profileImg from "../../assets/opt/profile-cutout.png";
import cvPDF from "../../assets/ow.pdf";
import { workData, leadershipData } from "../Data/Data";
import { PageHero, Section, Reveal, buttonPrimary } from "../ui/Section";
import { CtaBand } from "../ui/CtaBand";

const education = [
  { degree: "BSc in Computer Science", institution: "Mulungushi University", period: "2020 – 2024" },
  { degree: "Grade 12 Certificate", institution: "Sathya Sai Trust School", period: "2017 – 2019" },
  { degree: "Grade 9 Certificate", institution: "Twatasha Primary School", period: "2015 – 2016" },
];

const certifications = [
  { name: "Cybersecurity Essentials (LFC108)", issuer: "The Linux Foundation", year: "2026" },
  { name: "Cloud Computing", issuer: "Huawei", year: "2024" },
  { name: "Internet of Things", issuer: "Huawei", year: "2024" },
  { name: "Introduction to IoT", issuer: "Cisco", year: "2024" },
];

const interests = ["Coding", "Graphic Design", "Gaming", "Soccer", "Music", "Reading"];

const contacts = [
  { icon: FaEnvelope, label: "owennsofu01@gmail.com", href: "mailto:owennsofu01@gmail.com" },
  { icon: FaPhone, label: "+260 764 670 944", href: "tel:+260764670944" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/owen-nsofu-93169b300" },
  { icon: FaMapMarkerAlt, label: "Lusaka, Zambia" },
];

/** Titled block in the main column */
const Block = ({ title, children }: { title: string; children: ReactNode }) => (
  <Reveal>
    <section className="py-10 first:pt-0 border-b border-gray-200 last:border-0">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 mb-6">{title}</h2>
      {children}
    </section>
  </Reveal>
);

/** Row with a title/subtitle on the left and a date on the right */
const Row = ({ title, subtitle, meta }: { title: string; subtitle: string; meta?: string }) => (
  <li className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-3">
    <div>
      <p className="font-semibold text-gray-900">{title}</p>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
    {meta && <p className="text-sm text-gray-500 shrink-0">{meta}</p>}
  </li>
);

export const About = () => (
  <>
    <PageHero
      eyebrow="About"
      title="Hi, I'm Owen"
      description="A software engineer with a Computer Science degree, building production apps for web and mobile. I care about clean interfaces, solid systems and shipping things people use."
    />

    <Section>
      <div className="grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
        {/* Profile */}
        <aside className="lg:sticky lg:top-24 self-start">
          <Reveal>
            <div className="rounded-2xl bg-teal-950 bg-dots-dark overflow-hidden flex justify-center pt-8">
              <img src={profileImg} alt="Owen Nsofu" width={520} height={890} loading="lazy" className="w-56 h-auto" />
            </div>
            <h2 className="mt-6 text-xl font-bold text-gray-900">Owen Nsofu</h2>
            <p className="text-sm font-medium text-teal-700">Software Engineer · Founder, Owenito Innovations</p>

            <ul className="mt-5 space-y-3 text-sm">
              {contacts.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-center gap-3 text-gray-600">
                  <Icon className="text-teal-700 shrink-0" aria-hidden="true" />
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                       className="hover:text-teal-700 break-all">{label}</a>
                  ) : label}
                </li>
              ))}
            </ul>

            <a href={cvPDF} target="_blank" rel="noopener noreferrer" className={`${buttonPrimary} mt-6 w-full`}>
              <FaDownload size={13} aria-hidden="true" /> Download CV
            </a>
          </Reveal>
        </aside>

        {/* Details */}
        <div>
          <Block title="Experience">
            <ol className="relative border-l border-gray-200 ml-1.5 space-y-8">
              {workData.map((job) => (
                <li key={job.id} className="pl-6 relative">
                  <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-teal-600 ring-4 ring-white" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-semibold text-gray-900">{job.title}</h3>
                    {job.period && <p className="text-sm text-gray-500 shrink-0">{job.period}</p>}
                  </div>
                  <p className="text-sm font-medium text-teal-700">{job.company}</p>
                  <ul className="mt-3 space-y-1.5 list-disc pl-4 marker:text-gray-300">
                    {job.points.map((point) => (
                      <li key={point} className="text-sm leading-relaxed text-gray-600">{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </Block>

          <Block title="Education">
            <ul className="divide-y divide-gray-100">
              {education.map((e) => <Row key={e.degree} title={e.degree} subtitle={e.institution} meta={e.period} />)}
            </ul>
          </Block>

          <Block title="Certifications">
            <ul className="divide-y divide-gray-100">
              {certifications.map((c) => <Row key={c.name} title={c.name} subtitle={c.issuer} meta={c.year} />)}
            </ul>
          </Block>

          <Block title="Leadership">
            <ul className="divide-y divide-gray-100">
              {leadershipData.map((l) => <Row key={l.role} title={l.role} subtitle={l.org} />)}
            </ul>
          </Block>

          <Block title="Interests">
            <ul className="flex flex-wrap gap-2">
              {interests.map((i) => (
                <li key={i} className="px-3 py-1.5 rounded-lg border border-gray-200/80 bg-white/80 backdrop-blur-sm text-sm text-gray-700">{i}</li>
              ))}
            </ul>
          </Block>
        </div>
      </div>
    </Section>

    <CtaBand />
  </>
);
