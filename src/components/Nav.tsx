"use client";

import { useEffect, useRef, useState } from "react";
import { sections } from "@/lib/cv-data";

export default function Nav() {
  const [active, setActive] = useState<string>(sections[0].id);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    let ticking = false;
    const updateActive = () => {
      ticking = false;
      const triggerLine = window.scrollY + 120;

      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(sections[sections.length - 1].id);
        return;
      }

      let current: string = sections[0].id;
      for (let i = 0; i < els.length; i++) {
        if (els[i].offsetTop <= triggerLine) {
          current = sections[i].id;
        }
      }
      setActive(current);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    linkRefs.current[active]?.scrollIntoView({
      block: "nearest",
      inline: "center",
      behavior: "smooth",
    });
  }, [active]);

  return (
    <nav className="fixed left-1/2 top-[calc(1rem+env(safe-area-inset-top))] z-40 w-[calc(100%-2rem-env(safe-area-inset-left)-env(safe-area-inset-right))] max-w-fit -translate-x-1/2">
      <div className="flex items-center gap-1 overflow-x-auto rounded-full border border-hairline/70 bg-paper/70 px-2 py-2 shadow-[0_1px_2px_rgba(36,28,20,0.06),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-xl backdrop-saturate-150 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {sections.map((s) => (
          <a
            key={s.id}
            ref={(el) => {
              linkRefs.current[s.id] = el;
            }}
            href={`#${s.id}`}
            className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.06em] transition-colors duration-200 ${
              active === s.id
                ? "bg-accent/10 text-accent"
                : "text-ink-tertiary hover:text-ink-secondary"
            }`}
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
