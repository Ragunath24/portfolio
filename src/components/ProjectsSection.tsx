import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Lock } from 'lucide-react';
import { PORTFOLIO_DATA, type ProjectItem } from '../data/portfolio';
import { ProjectModal } from './ProjectModal';
import { RevealSection } from './RevealSection';
import { SectionHeader } from './SectionHeader';
import { SpotlightCard } from './SpotlightCard';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <RevealSection id="projects" className="border-b border-[var(--border-subtle)] py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="04"
          eyebrow="Featured Projects"
          title="Production Applications"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {PORTFOLIO_DATA.projects.map((project) => (
            <SpotlightCard key={project.id} className="p-6">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[var(--accent-border)] bg-[var(--accent-soft)] px-2.5 py-0.5 font-mono text-[11px] font-medium text-[var(--accent-text)]">
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                        aria-hidden="true"
                      />
                      {project.badge}
                    </span>
                    <span className="font-mono text-xs text-[var(--text-dim)]">
                      {project.timeline}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-[var(--text-heading)] transition group-hover:text-[var(--accent-text)]">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[var(--text-muted)]">
                    {project.subtitle}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-body)]">
                    {project.shortOverview}
                  </p>

                  {/* Compact horizontal architecture flow */}
                  <div className="mt-5 flex flex-wrap items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-inset)] p-3">
                    {project.architectureNodes.map((node, idx) => (
                      <div key={node.layer} className="flex items-center gap-2">
                        <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-2.5 py-1.5">
                          <span className="block font-mono text-[9px] text-[var(--accent-text)] uppercase">
                            {node.layer}
                          </span>
                          <span className="text-xs font-medium text-[var(--text-heading)]">
                            {node.title}
                          </span>
                        </div>
                        {idx < project.architectureNodes.length - 1 && (
                          <ArrowRight
                            className="h-3.5 w-3.5 shrink-0 text-[var(--text-dim)]"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-[var(--border-subtle)] pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.allTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-inset)] px-2 py-0.5 font-mono text-[11px] text-[var(--text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs text-[var(--text-dim)]">
                      <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                      Enterprise Product
                    </span>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--accent-border)] bg-[var(--accent-soft)] px-3.5 py-2 text-xs font-semibold text-[var(--accent-text)] transition hover:opacity-90"
                    >
                      View Case Study
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </RevealSection>
  );
}
