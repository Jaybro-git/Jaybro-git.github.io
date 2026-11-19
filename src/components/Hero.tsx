import { person } from "@/lib/cv-data";
import Grainient from "@/components/Grainient";

const HERO_GRAIN: [string, string, string, string] = ["#3A2116", "#B4512F", "#D97757", "#8A7A68"];

const linkClass =
  "underline decoration-paper/40 underline-offset-4 transition-colors duration-200 hover:decoration-paper";

const nameWords =person.name.split(" ");
const firstName = nameWords[0];
const lastName = nameWords[nameWords.length - 1];

export default function Hero() {
  return (
    <header className="flex min-h-[100svh] flex-col pb-6 pt-24 sm:pb-8">
      <div className="relative isolate flex min-h-[20rem] flex-1 flex-col justify-end overflow-hidden -mx-4 rounded-2xl p-4 text-paper [text-shadow:0_1px_2px_rgba(36,28,20,0.35),0_2px_16px_rgba(36,28,20,0.3)] [container-type:inline-size] sm:-mx-8 sm:p-8 lg:-mx-12 lg:p-12">
        <Grainient colors={HERO_GRAIN} seed={1.7} className="-z-20" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/55 via-ink/20 to-transparent"
        />

        <h1
          className="text-[17cqw] font-semibold leading-[0.95] tracking-[-0.04em] lg:text-[12.5cqw]"
          aria-label={person.name}
        >
          <span className="block whitespace-nowrap lg:inline" aria-hidden>{firstName}</span>{" "}
          <span className="block whitespace-nowrap lg:inline" aria-hidden>{lastName}</span>
        </h1>

        <div className="mt-4 flex flex-col gap-y-2 xl:flex-row xl:flex-nowrap xl:items-baseline xl:gap-x-10">
          <p className="text-base text-paper/90 xl:whitespace-nowrap">{person.tagline}</p>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[0.8125rem] text-paper/90 sm:gap-x-3 sm:text-sm xl:flex-nowrap xl:whitespace-nowrap">
            <span>{person.phone}</span>
            <span className="text-paper/60">·</span>
            <a href={`mailto:${person.email}`} className={linkClass}>
              {person.email}
            </a>
            {person.links.map((l) => (
              <span key={l.href} className="contents">
                <span className="text-paper/60">·</span>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {l.label}
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
