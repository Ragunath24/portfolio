import { useEffect, useRef } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Database,
  ExternalLink,
  Github,
  Layers,
  Lock,
  Server,
  UserCheck,
  Users,
  X,
} from 'lucide-react';
import type { ProjectItem } from '../data/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-6 shadow-2xl sm:p-7"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-[var(--accent-border)] bg-[var(--accent-soft)] px-2.5 py-0.5 font-mono text-[11px] font-medium text-[var(--accent-text)]">
                {project.badge}
              </span>
              <span className="font-mono text-xs text-[var(--text-dim)]">
                {project.company} · {project.timeline}
              </span>
            </div>
            <h3
              id="project-modal-title"
              className="mt-2 text-xl font-semibold text-[var(--text-heading)]"
            >
              {project.name}
            </h3>
            <p className="mt-0.5 text-xs text-[var(--text-muted)]">{project.subtitle}</p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-inset)] text-[var(--text-muted)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-heading)]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-5 space-y-5">
          <p className="text-sm leading-relaxed text-[var(--text-body)]">{project.overview}</p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-inset)] p-4">
              <h4 className="text-[11px] font-semibold tracking-wider text-[var(--text-dim)] uppercase">
                Problem
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-[var(--text-body)]">
                {project.businessProblem}
              </p>
            </div>
            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-inset)] p-4">
              <h4 className="text-[11px] font-semibold tracking-wider text-[var(--text-dim)] uppercase">
                Solution
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-[var(--text-body)]">
                {project.solutionDeveloped}
              </p>
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-12">
            <div className="rounded-xl border border-[var(--accent-border)] bg-[var(--accent-soft)] p-4 lg:col-span-8">
              <h4 className="flex items-center gap-2 text-[11px] font-semibold tracking-wider text-[var(--accent-text)] uppercase">
                <UserCheck className="h-3.5 w-3.5" aria-hidden="true" />
                My Individual Contributions
              </h4>
              <ul className="mt-2.5 space-y-1.5">
                {project.individualContributions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs leading-relaxed text-[var(--text-heading)]"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent-text)]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-inset)] p-4 lg:col-span-4">
              <h4 className="flex items-center gap-2 text-[11px] font-semibold tracking-wider text-[var(--text-dim)] uppercase">
                <Users className="h-3.5 w-3.5 text-[var(--secondary-text)]" aria-hidden="true" />
                System Scope
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                {project.systemScope}
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-inset)] p-3.5">
              <div className="flex items-center gap-1.5 text-xs font-medium text-[var(--accent-text)]">
                <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                Frontend
              </div>
              <p className="mt-2 font-mono text-xs text-[var(--text-body)]">
                {project.techStack.frontend.join(' · ')}
              </p>
            </div>
            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-inset)] p-3.5">
              <div className="flex items-center gap-1.5 text-xs font-medium text-[var(--secondary-text)]">
                <Server className="h-3.5 w-3.5" aria-hidden="true" />
                Backend
              </div>
              <p className="mt-2 font-mono text-xs text-[var(--text-body)]">
                {project.techStack.backend.join(' · ')}
              </p>
            </div>
            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-inset)] p-3.5">
              <div className="flex items-center gap-1.5 text-xs font-medium text-[var(--text-heading)]">
                <Database className="h-3.5 w-3.5" aria-hidden="true" />
                Database
              </div>
              <p className="mt-2 font-mono text-xs text-[var(--text-body)]">
                {project.techStack.database.join(' · ')}
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-[11px] font-semibold tracking-wider text-[var(--text-dim)] uppercase">
              Modules &amp; Architecture Flow
            </h4>
            <div className="mb-3 flex flex-wrap gap-1.5">
              {project.modules.map((mod) => (
                <span
                  key={mod}
                  className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-inset)] px-2.5 py-1 text-xs font-medium text-[var(--text-body)]"
                >
                  {mod}
                </span>
              ))}
            </div>
            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {project.architectureNodes.map((node, idx) => (
                <div
                  key={node.layer}
                  className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-inset)] p-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[var(--accent-text)] uppercase">
                      0{idx + 1} · {node.layer}
                    </span>
                    {idx < project.architectureNodes.length - 1 && (
                      <ArrowRight
                        className="hidden h-3 w-3 text-[var(--text-dim)] lg:block"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <p className="mt-1 text-xs font-semibold text-[var(--text-heading)]">
                    {node.title}
                  </p>
                  <p className="mt-0.5 font-mono text-[11px] text-[var(--text-muted)]">
                    {node.tech}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-inset)] px-4 py-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
              <Lock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{project.repositoryNote}</span>
            </div>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-strong)] px-3 py-1.5 text-xs font-medium text-[var(--text-heading)]"
                >
                  <Github className="h-3.5 w-3.5" aria-hidden="true" />
                  Repo
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--accent)] px-3 py-1.5 text-xs font-semibold text-[var(--accent-contrast)]"
                >
                  Live
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
