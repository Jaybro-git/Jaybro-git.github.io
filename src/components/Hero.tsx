import { person } from "@/lib/cv-data";

export default function Hero() {
  return (
    <header className="relative overflow-hidden pb-14 pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[28rem] w-[42rem] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(217,119,87,0.20), rgba(217,119,87,0) 65%)",
        }}
      />

      <span className="relative inline-block text-xs font-medium uppercase tracking-[0.14em] text-accent">
        Portfolio
      </span>

      <h1 className="relative mt-4 break-words text-display font-semibold text-ink">
        {person.name}
      </h1>
      <p className="relative mt-3 text-base text-ink-secondary">
        {person.tagline}
      </p>

      <div className="relative mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink-secondary">
        <span>{person.phone}</span>
        <span className="text-ink-tertiary">·</span>
        <a
          href={`mailto:${person.email}`}
          className="underline decoration-hairlineStrong underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
        >
          {person.email}
        </a>
        {person.links.map((l) => (
          <span key={l.href} className="contents">
            <span className="text-ink-tertiary">·</span>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-hairlineStrong underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
            >
              {l.label}
            </a>
          </span>
        ))}
      </div>
    </header>
  );
}
