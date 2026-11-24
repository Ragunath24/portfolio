import { Briefcase, Calendar, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { RevealSection } from './RevealSection';
import { SectionHeader } from './SectionHeader';
import { SpotlightCard } from './SpotlightCard';

export function ExperienceSection() {
  return (
    <RevealSection id="experience" className="border-b border-[var(--border-subtle)] py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader index="03" eyebrow="Experience" title="Production Engineering Timeline" />

        <div className="space-y-6">
          {PORTFOLIO_DATA.experiences.map((exp) => (
            <SpotlightCard key={exp.id} className="p-5 sm:p-7">
              <div className="flex flex-col justify-between gap-3 border-b border-[var(--border-subtle)] pb-4 md:flex-row md:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-[var(--accent-text)]">
                    <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{exp.company}</span>
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-[var(--text-heading)] sm:text-xl">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--accent-border)] bg-[var(--accent-soft)] px-3 py-1 font-mono text-xs font-medium text-[var(--accent-text)]">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {exp.duration}
                  </span>
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    {exp.experienceNote}
                  </span>
                </div>
              </div>

              <div className="mt-5 grid gap-6 lg:grid-cols-12">
                <ul className="space-y-2.5 lg:col-span-7">
                  {exp.contributions.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--text-body)]"
                    >
                      <Check
                        className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--accent-text)]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 lg:col-span-5">
                  {exp.moduleGroups.map((group) => (
                    <div
                      key={group.product}
                      className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-inset)] p-3.5"
                    >
                      <p className="font-mono text-[11px] font-semibold text-[var(--accent-text)] uppercase">
                        {group.product}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {group.modules.map((mod) => (
                          <span
                            key={mod}
                            className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-2 py-0.5 text-xs text-[var(--text-body)]"
                          >
                            {mod}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-[var(--border-subtle)] pt-4">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-inset)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
