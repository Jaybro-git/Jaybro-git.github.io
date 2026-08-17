import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ScrollToTop from "@/components/ScrollToTop";
import SectionHeading from "@/components/SectionHeading";
import EntryBlock from "@/components/EntryBlock";
import {
  about,
  education,
  research,
  projects,
  competitions,
  certifications,
  experience,
  person,
} from "@/lib/cv-data";

export default function Home() {
  return (
    <>
      <Nav />
      <ScrollToTop />
      <main className="mx-auto max-w-page px-6 sm:px-10 lg:px-16 xl:px-24">
        <Hero />

        <section id="about" className="border-t border-hairline py-10">
          <SectionHeading>About</SectionHeading>
          <p className="text-sm leading-relaxed text-ink-secondary">
            {about}
          </p>
          <a
            href="/JanithM_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-accent underline decoration-accent/30 underline-offset-4 transition-colors duration-200 hover:text-ink hover:decoration-ink"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 2v8M8 10l-3.5-3.5M8 10l3.5-3.5M3 13.5h10"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            View CV
          </a>
        </section>

        <section id="education" className="border-t border-hairline py-14">
          <SectionHeading>Education</SectionHeading>
          <div className="divide-y divide-hairline">
            {education.map((e) => (
              <EntryBlock key={e.title} entry={e} />
            ))}
          </div>
        </section>

        <section id="research" className="border-t border-hairline py-14">
          <SectionHeading>Research Experience</SectionHeading>
          <div className="divide-y divide-hairline">
            {research.map((e) => (
              <EntryBlock key={e.title} entry={e} />
            ))}
          </div>
        </section>

        <section id="projects" className="border-t border-hairline py-14">
          <SectionHeading>Projects</SectionHeading>
          <div className="divide-y divide-hairline">
            {projects.map((e) => (
              <EntryBlock key={e.title} entry={e} />
            ))}
          </div>
        </section>

        <section id="competitions" className="border-t border-hairline py-14">
          <SectionHeading>Competitions</SectionHeading>
          <div className="divide-y divide-hairline">
            {competitions.map((e) => (
              <EntryBlock key={e.title} entry={e} />
            ))}
          </div>
        </section>

        <section
          id="certifications"
          className="border-t border-hairline py-14"
        >
          <SectionHeading>Certifications</SectionHeading>
          <ul className="space-y-2.5">
            {certifications.map((c) => (
              <li
                key={c}
                className="flex gap-2.5 text-sm leading-relaxed text-ink-secondary"
              >
                <span className="mt-[0.55em] h-[3px] w-[3px] shrink-0 rounded-full bg-accent/60" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="experience" className="border-t border-hairline py-14">
          <SectionHeading>Experience &amp; Extracurriculars</SectionHeading>
          <div className="divide-y divide-hairline">
            {experience.map((e) => (
              <EntryBlock key={e.title} entry={e} />
            ))}
          </div>
        </section>

        <footer className="border-t border-hairline py-10">
          <p className="text-xs text-ink-tertiary">
            {person.name} · Portfolio
          </p>
        </footer>
      </main>
    </>
  );
}
