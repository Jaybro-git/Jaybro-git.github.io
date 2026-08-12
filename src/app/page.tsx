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
            {person.name} · Built with Next.js
          </p>
        </footer>
      </main>
    </>
  );
}
