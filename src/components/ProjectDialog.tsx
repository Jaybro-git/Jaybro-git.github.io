"use client";

import { useRef, useState } from "react";
import type { Link } from "@/lib/cv-data";

export default function ProjectDialog({
  title,
  meta,
  links,
  tech,
  bullets,
  image,
  onDark = false,
}: {
  title: string;
  meta?: string;
  links?: Link[];
  tech: string[];
  bullets: string[];
  image?: { src: string; alt: string };
  onDark?: boolean;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  // Mount the image on first open so closed dialogs don't download it.
  const [loaded, setLoaded] = useState(false);

  const open = () => {
    setLoaded(true);
    ref.current?.showModal();
    document.documentElement.style.overflow = "hidden";
  };
  const close = () => ref.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        className={`inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide underline underline-offset-4 transition-colors duration-200 ${
          onDark
            ? "text-paper decoration-paper/40 hover:decoration-paper"
            : "text-accent decoration-accent/30 hover:text-ink hover:decoration-ink"
        }`}
      >
        {image ? "Details & overview" : "Details"}
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M6 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <dialog
        ref={ref}
        aria-label={title}
        onClose={() => (document.documentElement.style.overflow = "")}
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-2xl border border-hairline bg-paper p-0 text-ink shadow-[0_24px_64px_-16px_rgba(36,28,20,0.35)] backdrop:bg-ink/40 backdrop:backdrop-blur-sm"
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              {meta && (
                <span className="font-mono text-xs text-ink-tertiary">{meta}</span>
              )}
              <h3 className="mt-1 text-xl font-semibold leading-snug tracking-[-0.02em]">
                {title}
              </h3>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="-mr-2 -mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-tertiary transition-colors duration-200 hover:bg-ink/5 hover:text-ink"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {links && links.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium uppercase tracking-wide text-accent underline decoration-accent/30 underline-offset-4 transition-colors duration-200 hover:text-ink hover:decoration-ink"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}

          {tech.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
              {tech.map((t) => (
                <li
                  key={t}
                  className="rounded border border-hairline px-1.5 py-0.5 font-mono text-[0.6875rem] text-ink-secondary"
                >
                  {t}
                </li>
              ))}
            </ul>
          )}

          <ul className="mt-5 space-y-2.5">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink-secondary">
                <span className="mt-[0.6em] h-[3px] w-[3px] shrink-0 rounded-full bg-accent/60" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {image && loaded && (
            <figure className="mt-6">
              <img
                src={image.src}
                alt=""
                decoding="async"
                className="h-auto w-full rounded-lg border border-hairline"
              />
              <figcaption className="mt-2 text-xs text-ink-tertiary">{image.alt}</figcaption>
            </figure>
          )}
        </div>
      </dialog>
    </>
  );
}
