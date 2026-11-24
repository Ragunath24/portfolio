import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { ThemeSwitcher } from './ThemeSwitcher';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'problem-solving', label: 'Engineering' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('hero');

  useEffect(() => {
    const sections = ['hero', ...NAV_ITEMS.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0 || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-subtle)] bg-[var(--bg-header)] backdrop-blur-md">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8"
      >
        <a
          href="#hero"
          className="group inline-flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[var(--text-heading)]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--accent-border)] bg-[var(--accent-soft)] font-mono text-xs font-semibold text-[var(--accent-text)] transition group-hover:scale-105">
            {PORTFOLIO_DATA.profile.initials}
          </span>
          <span className="leading-none">{PORTFOLIO_DATA.profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
                  isActive
                    ? 'bg-[var(--accent-soft)] text-[var(--accent-text)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-heading)]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />

          <a
            href={PORTFOLIO_DATA.profile.resumePath}
            download={PORTFOLIO_DATA.profile.resumeFilename}
            className="hidden items-center gap-1.5 rounded-lg border border-[var(--accent-border)] bg-[var(--accent-soft)] px-3 py-1.5 text-xs font-medium text-[var(--accent-text)] transition hover:opacity-90 sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            Resume
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-body)] lg:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-5 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm transition ${
                    isActive
                      ? 'bg-[var(--accent-soft)] font-medium text-[var(--accent-text)]'
                      : 'text-[var(--text-body)]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={PORTFOLIO_DATA.profile.resumePath}
              download={PORTFOLIO_DATA.profile.resumeFilename}
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--accent-border)] bg-[var(--accent-soft)] px-4 py-2 text-sm font-medium text-[var(--accent-text)]"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
