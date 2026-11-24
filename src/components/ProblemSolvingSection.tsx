import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { RevealSection } from './RevealSection';
import { SectionHeader } from './SectionHeader';
import { SpotlightCard } from './SpotlightCard';

export function ProblemSolvingSection() {
  const cases = PORTFOLIO_DATA.problemSolvingCases;
  const [activeId, setActiveId] = useState(cases[0].id);

  const activeCase = cases.find((item) => item.id === activeId) ?? cases[0];

  const steps = [
    { label: 'Problem', text: activeCase.problem },
    { label: 'Cause', text: activeCase.whyItOccurred },
    { label: 'Analysis', text: activeCase.analysis },
    { label: 'Solution', text: activeCase.solution },
    { label: 'Result', text: activeCase.result },
  ];

  return (
    <RevealSection
      id="problem-solving"
      className="border-b border-[var(--border-subtle)] py-14 lg:py-16"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="05"
          eyebrow="Engineering"
          title="Technical Problem Solving"
        />

        <div className="grid gap-5 lg:grid-cols-12">
          <div className="space-y-2.5 lg:col-span-4" role="tablist" aria-label="Technical cases">
            {cases.map((item, idx) => {
              const selected = item.id === activeCase.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveId(item.id)}
                  className={`flex w-full items-center justify-between gap-3 rounded-xl border p-3.5 text-left transition ${
                    selected
                      ? 'border-[var(--accent-border)] bg-[var(--accent-soft)]'
                      : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-strong)]'
                  }`}
                >
                  <div>
                    <span className="font-mono text-[10px] text-[var(--accent-text)] uppercase">
                      0{idx + 1} · {item.projectRef}
                    </span>
                    <h3 className="mt-0.5 text-sm font-semibold text-[var(--text-heading)]">
                      {item.title}
                    </h3>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 shrink-0 ${
                      selected ? 'text-[var(--accent-text)]' : 'text-[var(--text-dim)]'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>

          <div role="tabpanel" aria-label={activeCase.title} className="lg:col-span-8">
            <SpotlightCard className="p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
                <h3 className="text-base font-semibold text-[var(--text-heading)]">
                  {activeCase.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {activeCase.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-[var(--border-subtle)] bg-[var(--bg-inset)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 space-y-2.5">
                {steps.map((step) => (
                  <div
                    key={step.label}
                    className="grid gap-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-inset)] px-3.5 py-2.5 sm:grid-cols-12 sm:items-baseline sm:gap-3"
                  >
                    <span className="font-mono text-[11px] font-semibold text-[var(--accent-text)] uppercase sm:col-span-2">
                      {step.label}
                    </span>
                    <p className="text-xs leading-relaxed text-[var(--text-body)] sm:col-span-10 sm:text-sm">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
