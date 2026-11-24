interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: string;
}

export function SectionHeader({ index, eyebrow, title }: SectionHeaderProps) {
  return (
    <div className="mb-8 max-w-2xl sm:mb-10">
      <div className="mb-2 inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-[var(--accent-text)] uppercase">
        <span className="text-[var(--text-dim)]">{index}</span>
        <span className="h-px w-4 bg-[var(--accent-border)]" aria-hidden="true" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-xl font-semibold tracking-tight text-[var(--text-heading)] sm:text-2xl">
        {title}
      </h2>
    </div>
  );
}
