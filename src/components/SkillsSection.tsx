import { useState } from 'react';
import { Code2, Database, Layers, Layout, Server, Settings2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { RevealSection } from './RevealSection';
import { SectionHeader } from './SectionHeader';
import { SpotlightCard } from './SpotlightCard';

type SkillFilter = 'all' | 'production' | 'foundation';

const CATEGORY_ICONS: Record<string, typeof Code2> = {
  languages: Code2,
  frontend: Layout,
  backend: Server,
  database: Database,
  frameworks: Layers,
  tools: Settings2,
};

export function SkillsSection() {
  const [filter, setFilter] = useState<SkillFilter>('all');

  const visibleCategories = PORTFOLIO_DATA.skillCategories
    .map((category) => ({
      ...category,
      items:
        filter === 'all'
          ? category.items
          : category.items.filter((item) => item.tier === filter),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <RevealSection id="skills" className="border-b border-[var(--border-subtle)] py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeader index="02" eyebrow="Skills" title="Core Technical Stack" />

          <div
            role="group"
            aria-label="Filter skills by usage context"
            className="mb-8 inline-flex flex-wrap gap-1 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-1 sm:mb-10"
          >
            {(
              [
                { key: 'all', label: 'All' },
                { key: 'production', label: 'Production' },
                { key: 'foundation', label: 'Certified' },
              ] as const
            ).map((option) => {
              const active = filter === option.key;
              return (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => setFilter(option.key)}
                  aria-pressed={active}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                    active
                      ? 'bg-[var(--accent)] text-[var(--accent-contrast)]'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-heading)]'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCategories.map((category) => {
            const Icon = CATEGORY_ICONS[category.id] ?? Code2;
            return (
              <SpotlightCard key={category.id} className="p-4 sm:p-5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-inset)] text-[var(--accent-text)]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--text-heading)]">
                    {category.title}
                  </h3>
                </div>

                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {category.items.map((skill) => {
                    const isProd = skill.tier === 'production';
                    return (
                      <span
                        key={`${category.id}-${skill.name}`}
                        className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-xs ${
                          isProd
                            ? 'border-[var(--accent-border)] bg-[var(--accent-soft)] text-[var(--accent-text)]'
                            : 'border-[var(--secondary-border)] bg-[var(--secondary-soft)] text-[var(--secondary-text)]'
                        }`}
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-current"
                          aria-hidden="true"
                        />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}
