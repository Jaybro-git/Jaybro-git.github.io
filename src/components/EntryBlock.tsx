import type { Entry } from "@/lib/cv-data";

export default function EntryBlock({ entry }: { entry: Entry }) {
  return (
    <div className="py-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-[0.95rem] font-semibold text-ink">{entry.title}</h3>
        {entry.meta && (
          <span className="shrink-0 font-mono text-xs text-ink-tertiary">
            {entry.meta}
          </span>
        )}
      </div>

      {(entry.subtitle || entry.subtitleRight) && (
        <div className="mt-0.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          {entry.subtitle && (
            <p className="text-sm italic text-ink-secondary">{entry.subtitle}</p>
          )}
          {entry.subtitleRight && (
            <span className="shrink-0 text-xs italic text-ink-tertiary">
              {entry.subtitleRight}
            </span>
          )}
        </div>
      )}

      {entry.links && entry.links.length > 0 && (
        <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
          {entry.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium uppercase tracking-wide text-accent underline decoration-accent/30 underline-offset-4 transition-colors duration-200 hover:text-ink hover:decoration-ink"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <ul className="mt-2.5 space-y-1.5">
        {entry.bullets.map((b, i) => {
          const item = typeof b === "string" ? { text: b } : b;
          return (
            <li
              key={i}
              className="flex gap-2.5 text-sm leading-relaxed text-ink-secondary"
            >
              <span className="mt-[0.55em] h-[3px] w-[3px] shrink-0 rounded-full bg-accent/60" />
              <div>
                <span
                  className={
                    item.emphasis ? "font-semibold text-ink" : undefined
                  }
                >
                  {item.text}
                </span>
                {item.items && item.items.length > 0 && (
                  <ul className="mt-1.5 space-y-1 border-l border-hairline pl-3">
                    {item.items.map((sub, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-sm leading-relaxed text-ink-tertiary"
                      >
                        <span className="mt-[0.5em] h-[3px] w-[3px] shrink-0 rounded-full bg-ink-tertiary/50" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
