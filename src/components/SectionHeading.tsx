export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <h2 className="min-w-0 font-sans text-2xl font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-[1.75rem]">
        {children}
      </h2>
      <div className="h-px flex-1 bg-hairline" />
    </div>
  );
}
