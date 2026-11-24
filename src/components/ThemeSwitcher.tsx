import { useEffect, useState } from 'react';
import { Palette } from 'lucide-react';

export type PortfolioTheme = 'emerald' | 'cobalt';

const THEMES: { id: PortfolioTheme; label: string; swatch: string }[] = [
  { id: 'emerald', label: 'Emerald', swatch: '#10B981' },
  { id: 'cobalt', label: 'Cobalt', swatch: '#38BDF8' },
];

const STORAGE_KEY = 'ragunath-portfolio-theme';

function getInitialTheme(): PortfolioTheme {
  if (typeof window === 'undefined') return 'emerald';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === 'emerald' || saved === 'cobalt') {
    return saved;
  }
  return 'emerald';
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<PortfolioTheme>(getInitialTheme);
  const activeTheme: PortfolioTheme = theme === 'cobalt' ? 'cobalt' : 'emerald';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', activeTheme);
    window.localStorage.setItem(STORAGE_KEY, activeTheme);
  }, [activeTheme]);

  return (
    <div
      role="group"
      aria-label="Color theme switcher"
      className="inline-flex items-center gap-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-1"
    >
      <Palette className="ml-1.5 h-3.5 w-3.5 text-[var(--text-dim)]" aria-hidden="true" />
      {THEMES.map((item) => {
        const active = activeTheme === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => setTheme(item.id)}
            aria-pressed={active}
            title={`${item.label} theme`}
            className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium transition ${
              active
                ? 'bg-[var(--accent-soft)] text-[var(--accent-text)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-heading)]'
            }`}
          >
            <span
              className="h-2 w-2 rounded-full border border-[var(--border-strong)]"
              style={{ backgroundColor: item.swatch }}
              aria-hidden="true"
            />
            <span className="hidden sm:inline">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
