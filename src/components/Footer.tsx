import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-footer)] py-7">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 sm:flex-row sm:items-center sm:px-8">
        <p className="text-xs text-[var(--text-muted)]">
          © {year}{' '}
          <span className="font-medium text-[var(--text-heading)]">
            {PORTFOLIO_DATA.profile.name}
          </span>{' '}
          · {PORTFOLIO_DATA.profile.title}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.profile.resumePath}
            download={PORTFOLIO_DATA.profile.resumeFilename}
            className="text-xs text-[var(--text-muted)] transition hover:text-[var(--accent-text)]"
          >
            Resume PDF
          </a>
          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs text-[var(--text-body)] transition hover:border-[var(--accent-border)]"
          >
            Top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
