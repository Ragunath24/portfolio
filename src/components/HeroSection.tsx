import { ArrowDownRight, Building2, Download, Mail, MapPin, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { SocialButton } from './SocialButton';
import { SpotlightCard } from './SpotlightCard';

export function HeroSection() {
  const { profile, heroSnapshot } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-[var(--border-subtle)] bg-engineering-grid"
    >
      <div className="hero-radial-glow pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="relative shrink-0">
                <img
                  src={profile.avatarPath}
                  alt={`${profile.name} — ${profile.title}`}
                  width={96}
                  height={96}
                  loading="eager"
                  decoding="async"
                  className="h-20 w-20 rounded-2xl border border-[var(--accent-border)] object-cover shadow-lg sm:h-24 sm:w-24"
                />
                <span
                  className="absolute -right-1 -bottom-1 h-3.5 w-3.5 rounded-full border-2 border-[var(--bg-canvas)] bg-[var(--accent)]"
                  aria-hidden="true"
                />
              </div>

              <div className="min-w-0">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--accent-text)] sm:px-3 sm:py-1 sm:text-xs">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                  <span className="truncate">{profile.experienceDurationBadge}</span>
                </div>

                <h1 className="mt-2.5 text-3xl font-bold tracking-tight text-[var(--text-heading)] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.06]">
                  {profile.name}
                </h1>
              </div>
            </div>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--text-body)] sm:text-lg">
              {profile.headline}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-2.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-[var(--accent-contrast)] transition hover:bg-[var(--accent-hover)]"
              >
                View Projects
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={profile.resumePath}
                download={profile.resumeFilename}
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] px-4 py-2.5 text-sm font-medium text-[var(--text-heading)] transition hover:border-[var(--accent-border)]"
              >
                <Download className="h-4 w-4 text-[var(--accent-text)]" aria-hidden="true" />
                Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] px-4 py-2.5 text-sm font-medium text-[var(--text-body)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-heading)]"
              >
                <Mail className="h-4 w-4 text-[var(--text-muted)]" aria-hidden="true" />
                Contact
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              {profile.socialLinks.map((link) => (
                <SocialButton key={link.label} link={link} email={profile.email} />
              ))}
              <span className="inline-flex items-center gap-1.5 px-2 text-xs text-[var(--text-muted)]">
                <MapPin className="h-3.5 w-3.5 text-[var(--text-dim)]" aria-hidden="true" />
                {profile.location}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <SpotlightCard className="p-5 sm:p-6">
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--accent-border)] bg-[var(--accent-soft)] text-[var(--accent-text)]">
                    <Terminal className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium tracking-wide text-[var(--text-dim)] uppercase">
                      Production Profile
                    </p>
                    <p className="text-sm font-semibold text-[var(--text-heading)]">
                      {heroSnapshot.currentRole}
                    </p>
                  </div>
                </div>
                <span className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-inset)] px-2 py-1 font-mono text-[11px] text-[var(--text-muted)]">
                  {heroSnapshot.period}
                </span>
              </div>

              <div className="mt-4 space-y-2.5">
                <div className="flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-inset)] px-3 py-2 text-xs">
                  <Building2
                    className="h-3.5 w-3.5 shrink-0 text-[var(--accent-text)]"
                    aria-hidden="true"
                  />
                  <span className="font-medium text-[var(--text-heading)]">
                    {heroSnapshot.company}
                  </span>
                </div>

                {heroSnapshot.architectureStack.map((row) => (
                  <div
                    key={row.layer}
                    className="flex items-center justify-between gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-inset)] px-3 py-2 text-xs"
                  >
                    <span className="font-mono text-[var(--text-dim)]">{row.layer}</span>
                    <span className="text-right font-medium text-[var(--text-body)]">
                      {row.tech}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2 border-t border-[var(--border-subtle)] pt-3.5">
                {heroSnapshot.productionSystems.map((sys) => (
                  <span
                    key={sys}
                    className="rounded-md border border-[var(--accent-border)] bg-[var(--accent-soft)] px-2.5 py-1 font-mono text-[11px] font-medium text-[var(--accent-text)]"
                  >
                    {sys}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
