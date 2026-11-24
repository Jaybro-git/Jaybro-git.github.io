"use client";

import { useState } from "react";

export default function CopyEmail({
  email,
  className = "",
}: {
  email: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className={`inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide transition-colors duration-200 ${className}`}
    >
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        {copied ? (
          <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <>
            <rect x="5" y="5" width="8.5" height="8.5" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M10.5 3.5V3a.5.5 0 00-.5-.5H3a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </>
        )}
      </svg>
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
