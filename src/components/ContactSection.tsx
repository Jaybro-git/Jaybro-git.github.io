import SectionHeading from "@/components/SectionHeading";
import CopyEmail from "@/components/CopyEmail";
import { person } from "@/lib/cv-data";

const inlineLink =
  "text-ink underline decoration-hairlineStrong underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent";

export default function ContactSection() {
  const github = person.links.find((l) => l.label === "GitHub");
  const linkedin = person.links.find((l) => l.label === "LinkedIn");

  return (
    <section id="contact" className="border-t border-hairline py-14">
      <SectionHeading>Contact</SectionHeading>
      <div className="max-w-[68ch]">
        <p className="text-sm leading-relaxed text-ink-secondary">
          For research, projects or opportunities, email{" "}
          <a href={`mailto:${person.email}`} className={inlineLink}>
            {person.email}
          </a>
          . You can also find me on{" "}
          {linkedin && (
            <a href={linkedin.href} target="_blank" rel="noopener noreferrer" className={inlineLink}>
              LinkedIn
            </a>
          )}{" "}
          and{" "}
          {github && (
            <a href={github.href} target="_blank" rel="noopener noreferrer" className={inlineLink}>
              GitHub
            </a>
          )}
          , or call{" "}
          <a href={`tel:${person.phone.replace(/\s/g, "")}`} className={inlineLink}>
            {person.phone}
          </a>
          .
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={`mailto:${person.email}`}
            className="inline-flex items-center gap-1.5 rounded border border-ink/80 px-4 py-2 text-xs font-medium uppercase tracking-wide text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
          >
            Send an email
          </a>
          <CopyEmail email={person.email} className="text-accent hover:text-ink" />
        </div>
      </div>
    </section>
  );
}
