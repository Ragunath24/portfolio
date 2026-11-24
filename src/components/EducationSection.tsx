import { Award, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { RevealSection } from './RevealSection';
import { SectionHeader } from './SectionHeader';
import { SpotlightCard } from './SpotlightCard';

export function EducationSection() {
  return (
    <RevealSection id="education" className="border-b border-[var(--border-subtle)] py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader index="06" eyebrow="Credentials" title="Education & Certifications" />

        <div className="grid gap-5 lg:grid-cols-12">
          <div className="lg:col-span-5">
            {PORTFOLIO_DATA.education.map((edu) => (
              <SpotlightCard key={edu.degree} className="h-full p-5">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--accent-border)] bg-[var(--accent-soft)] text-[var(--accent-text)]">
                        <GraduationCap className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-xs text-[var(--accent-text)]">
                        {edu.duration}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-semibold text-[var(--text-heading)]">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-xs text-[var(--text-muted)]">{edu.institution}</p>
                  </div>

                  <div className="mt-4 border-t border-[var(--border-subtle)] pt-3">
                    <span className="inline-block rounded-md border border-[var(--accent-border)] bg-[var(--accent-soft)] px-2.5 py-1 font-mono text-xs font-semibold text-[var(--accent-text)]">
                      {edu.gradeLabel}: {edu.gradeValue}
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            {PORTFOLIO_DATA.certifications.map((cert) => (
              <SpotlightCard key={cert.title} className="p-4">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-inset)] text-[var(--secondary-text)]">
                      <Award className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <p className="mt-2.5 font-mono text-[10px] text-[var(--text-dim)] uppercase">
                      {cert.category}
                    </p>
                    <h3 className="mt-1 text-sm font-semibold text-[var(--text-heading)]">
                      {cert.title}
                    </h3>
                  </div>
                  <p className="mt-3 border-t border-[var(--border-subtle)] pt-2.5 font-mono text-[11px] text-[var(--text-muted)]">
                    {cert.focus}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
