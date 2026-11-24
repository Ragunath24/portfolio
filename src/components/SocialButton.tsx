import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import type { SocialLink } from '../data/portfolio';

interface SocialButtonProps {
  link: SocialLink;
  email: string;
  variant?: 'pill' | 'compact';
}

export function SocialButton({ link, email, variant = 'pill' }: SocialButtonProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  const Icon = link.label === 'GitHub' ? Github : Linkedin;
  const baseClass =
    variant === 'compact'
      ? 'inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-2 text-xs font-medium text-[var(--text-body)] transition hover:border-[var(--accent-border)] hover:text-[var(--text-heading)]'
      : 'inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3.5 py-2 text-xs font-medium text-[var(--text-body)] transition hover:border-[var(--accent-border)] hover:text-[var(--text-heading)]';

  if (link.url) {
    return (
      <a href={link.url} target="_blank" rel="noopener noreferrer" className={baseClass}>
        <Icon className="h-3.5 w-3.5 text-[var(--text-muted)]" aria-hidden="true" />
        <span>{link.label}</span>
        <ExternalLink className="h-3 w-3 text-[var(--text-dim)]" aria-hidden="true" />
      </a>
    );
  }

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className={baseClass}
      >
        <Icon className="h-3.5 w-3.5 text-[var(--text-muted)]" aria-hidden="true" />
        <span>{link.label}</span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label={`${link.label} link information`}
          className="fixed inset-x-4 bottom-4 z-50 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-4 text-left shadow-2xl sm:absolute sm:inset-x-auto sm:bottom-auto sm:left-0 sm:z-30 sm:mt-2 sm:w-68 sm:p-3.5"
        >
          <p className="text-xs font-semibold text-[var(--text-heading)]">{link.label} Profile</p>
          <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
            {link.placeholderNote}
          </p>
          <div className="mt-3 flex items-center gap-2">
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(`Requesting ${link.label} Link`)}`}
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1.5 rounded-md bg-[var(--accent-soft)] px-2.5 py-1.5 text-xs font-medium text-[var(--accent-text)] transition hover:opacity-90"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              Request Link
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-md px-2.5 py-1.5 text-xs text-[var(--text-muted)] transition hover:text-[var(--text-heading)]"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
