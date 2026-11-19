import type { Entry } from "@/lib/cv-data";
import Grainient from "@/components/Grainient";
import ProjectDialog from "@/components/ProjectDialog";

type Palette = [string, string, string, string];
type Slot = {
  match: string;
  span: string;
  size: "lg" | "md" | "sm";
  grain?: { colors: Palette; seed: number };
};

const GRAIN_A: Palette = ["#3A2116", "#B4512F", "#D97757", "#8A7A68"];
const GRAIN_B: Palette = ["#2E1D14", "#C9603F", "#E08A68", "#6D5F4F"];
const GRAIN_C: Palette = ["#33201A", "#A84A2C", "#D97757", "#9C8B76"];

// Order and size of each card; unmatched projects fall in after these as small cards.
const SLOTS: Slot[] = [
  { match: "AudioLens", span: "md:col-span-12 lg:col-span-8", size: "lg", grain: { colors: GRAIN_A, seed: 0 } },
  { match: "Earth Jukebox", span: "md:col-span-6 lg:col-span-4", size: "md" },
  { match: "Smart Waste", span: "md:col-span-6 lg:col-span-4", size: "md" },
  { match: "Pharma", span: "md:col-span-12 lg:col-span-8", size: "lg", grain: { colors: GRAIN_B, seed: 7.3 } },
  { match: "Physics-Informed", span: "md:col-span-6 xl:col-span-3", size: "sm", grain: { colors: GRAIN_C, seed: 3.1 } },
];
const SMALL = "md:col-span-6 xl:col-span-3";

function split(entry: Entry) {
  const texts = entry.bullets.filter((b): b is string => typeof b === "string");
  const techLine = texts.find((t) => t.startsWith("Tech:"));
  const tech = techLine
    ? techLine
        .replace(/^Tech:\s*/, "")
        .replace(/\.$/, "")
        .split(/,\s*(?![^()]*\))/)
    : [];
  const body = texts.filter((t) => t !== techLine);
  return { tech, body };
}

function Card({
  entry,
  index,
  slot,
}: {
  entry: Entry;
  index: number;
  slot: Omit<Slot, "match">;
}) {
  const { tech, body } = split(entry);
  const dark = !!slot.grain;
  const maxTags = slot.size === "lg" ? tech.length : slot.size === "md" ? 4 : 3;
  const shown = tech.slice(0, maxTags);
  const hidden = tech.length - shown.length;

  return (
    <article
      className={`relative isolate flex flex-col overflow-hidden rounded-2xl ${slot.span} ${
        dark
          ? "text-paper shadow-[0_1px_2px_rgba(36,28,20,0.08)]"
          : "border border-hairline bg-ink/[0.025]"
      } ${slot.size === "lg" ? "p-7 sm:p-9 lg:min-h-[22rem]" : "p-6 sm:p-7"}`}
    >
      {slot.grain && (
        <Grainient colors={slot.grain.colors} seed={slot.grain.seed} className="-z-10" />
      )}

      <div
        className={`flex items-baseline justify-between gap-4 font-mono text-xs ${
          dark ? "text-paper/70" : "text-ink-tertiary"
        }`}
      >
        <span>{String(index + 1).padStart(2, "0")}</span>
        {entry.meta && <span>{entry.meta}</span>}
      </div>

      <h3
        className={`mt-4 font-semibold tracking-[-0.02em] ${
          slot.size === "lg"
            ? "max-w-[22ch] text-2xl leading-tight sm:text-[1.75rem]"
            : dark
              ? "text-[1.375rem] leading-tight"
              : "text-[1.25rem] leading-snug"
        } ${dark ? "text-paper" : "text-ink"}`}
      >
        {entry.title}
      </h3>

      {body[0] && (
        <p
          className={`mt-3 text-sm leading-relaxed ${
            slot.size === "lg" ? "max-w-[60ch] line-clamp-4" : "line-clamp-5"
          } ${dark ? "text-paper/85" : "text-ink-secondary"}`}
        >
          {body[0]}
        </p>
      )}

      <div className="mt-auto pt-6">
        {shown.length > 0 && (
          <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
            {shown.map((t) => (
              <li
                key={t}
                className={`rounded border px-1.5 py-0.5 font-mono text-[0.6875rem] ${
                  dark
                    ? "border-paper/25 bg-ink/10 text-paper/90"
                    : "border-hairline text-ink-secondary"
                }`}
              >
                {t}
              </li>
            ))}
            {hidden > 0 && (
              <li
                className={`px-1 py-0.5 font-mono text-[0.6875rem] ${
                  dark ? "text-paper/70" : "text-ink-tertiary"
                }`}
              >
                +{hidden}
              </li>
            )}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
          {entry.links?.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs font-medium uppercase tracking-wide underline underline-offset-4 transition-colors duration-200 ${
                dark
                  ? "text-paper decoration-paper/40 hover:decoration-paper"
                  : "text-accent decoration-accent/30 hover:text-ink hover:decoration-ink"
              }`}
            >
              {l.label} ↗
            </a>
          ))}
          <span className="ml-auto">
            <ProjectDialog
              title={entry.title}
              meta={entry.meta}
              links={entry.links}
              tech={tech}
              bullets={body}
              image={entry.image}
              onDark={dark}
            />
          </span>
        </div>
      </div>
    </article>
  );
}

export default function ProjectBento({ projects }: { projects: Entry[] }) {
  const placed = SLOTS.flatMap((slot) => {
    const entry = projects.find((p) => p.title.includes(slot.match));
    return entry ? [{ entry, slot }] : [];
  });
  const rest = projects
    .filter((p) => !placed.some((x) => x.entry === p))
    .map((entry) => ({ entry, slot: { span: SMALL, size: "sm" as const } }));

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
      {[...placed, ...rest].map(({ entry, slot }, i) => (
        <Card key={entry.title} entry={entry} index={i} slot={slot} />
      ))}
    </div>
  );
}
