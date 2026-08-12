export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
      <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-ink">
        {children}
      </h2>
      <div className="h-px flex-1 bg-hairline" />
    </div>
  );
}
