import { CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { RevealSection } from './RevealSection';
import { SectionHeader } from './SectionHeader';
import { SpotlightCard } from './SpotlightCard';

export function AboutSection() {
  const { about } = PORTFOLIO_DATA;

  return (
    <RevealSection id="about" className="border-b border-[var(--border-subtle)] py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="01"
          eyebrow="About"
          title="Practical full-stack development across desktop POS and ERP systems"
        />

        <p className="max-w-3xl text-sm leading-relaxed text-[var(--text-body)] sm:text-base">
          {about.bio}
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {about.highlights.map((item) => (
            <SpotlightCard key={item.title} className="p-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-text)]"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-heading)]">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
                    {item.detail}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
