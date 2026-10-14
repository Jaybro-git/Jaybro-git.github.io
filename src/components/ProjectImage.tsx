"use client";

import { useId, useState } from "react";

export default function ProjectImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [open, setOpen] = useState(false);
  // Mount the image on first open so collapsed entries don't download it.
  const [loaded, setLoaded] = useState(false);
  const panelId = useId();

  const toggle = () => {
    setLoaded(true);
    setOpen((o) => !o);
  };

  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-accent underline decoration-accent/30 underline-offset-4 transition-colors duration-200 hover:text-ink hover:decoration-ink"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className={`transition-transform duration-300 motion-reduce:transition-none ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {open ? "Hide overview" : "View overview"}
      </button>

      <div
        id={panelId}
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {loaded && (
            <img
              src={src}
              alt={alt}
              decoding="async"
              className="mt-3 h-auto w-full rounded-xl border border-hairline lg:max-w-3xl"
            />
          )}
        </div>
      </div>
    </div>
  );
}
