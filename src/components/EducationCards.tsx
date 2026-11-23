import { education, type Stat } from "@/lib/cv-data";

const card =
  "flex flex-col rounded-2xl border border-hairline bg-ink/[0.025] p-7 sm:p-9";

function StatRow({ label, stats }: { label: string; stats: Stat[] }) {
  return (
    <div>
      <div className="text-xs text-ink-tertiary">{label}</div>
      <div className="mt-2 flex gap-2">
        {stats.map((s) => (
          <div
            key={s.label}
            className="min-w-0 flex-1 rounded-lg border border-hairline px-2 py-2 text-center sm:px-3"
          >
            <div className="font-mono text-[0.6875rem] leading-tight text-ink-tertiary">
              {s.label}
            </div>
            <div className="text-sm font-semibold text-ink">{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CardMeta({ years, place }: { years: string; place: string }) {
  return (
    <div className="flex justify-between gap-4 font-mono text-xs text-ink-tertiary">
      <span>{years}</span>
      <span>{place}</span>
    </div>
  );
}

export default function EducationCards() {
  const { university: uni, school } = education;

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <article className={`${card} lg:col-span-7`}>
        <CardMeta years={uni.years} place={uni.place} />
        <h3 className="mt-4 text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] text-ink">
          {uni.title}
        </h3>
        <p className="mt-1 text-sm text-ink-secondary">{uni.degree}</p>
        <p className="text-sm text-ink-tertiary">Stream: {uni.stream}</p>

        <div className="mt-auto flex flex-wrap items-end gap-x-12 gap-y-6 pt-8">
          <div>
            <div className="text-5xl font-semibold tracking-[-0.03em] text-ink">
              {uni.cgpa}
            </div>
            <div className="mt-1 text-xs text-ink-tertiary">CGPA / {uni.cgpaScale}</div>
          </div>
          <StatRow label={uni.statsLabel} stats={uni.stats} />
        </div>
      </article>

      <article className={`${card} lg:col-span-5`}>
        <CardMeta years={school.years} place={school.place} />
        <h3 className="mt-4 text-[1.375rem] font-semibold leading-snug tracking-[-0.02em] text-ink">
          {school.title}
        </h3>
        <p className="mt-1 text-sm text-ink-secondary">{school.subtitle}</p>

        <div className="mt-auto space-y-5 pt-8">
          <StatRow label={school.statsLabel} stats={school.stats} />
          <p className="text-xs text-ink-tertiary">{school.footnote}</p>
        </div>
      </article>
    </div>
  );
}
