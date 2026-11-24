import { useState, type FormEvent } from 'react';
import { Check, Copy, Download, Mail, MapPin, Phone, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { RevealSection } from './RevealSection';
import { SectionHeader } from './SectionHeader';
import { SocialButton } from './SocialButton';
import { SpotlightCard } from './SpotlightCard';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection() {
  const { profile } = PORTFOLIO_DATA;

  const [copiedField, setCopiedField] = useState<'email' | 'phone' | 'draft' | null>(null);
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    subject: 'Hiring / Technical Interview',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedDraft, setSubmittedDraft] = useState<FormValues | null>(null);

  const handleCopy = async (text: string, field: 'email' | 'phone' | 'draft') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      window.setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Clipboard access unavailable
    }
  };

  const validate = (next: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    if (next.name.trim().length < 2) nextErrors.name = 'Enter your name (min 2 chars).';
    if (!EMAIL_REGEX.test(next.email.trim())) nextErrors.email = 'Enter a valid email address.';
    if (next.message.trim().length < 15) nextErrors.message = 'Enter at least 15 characters.';
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setSubmittedDraft({ ...values });
  };

  const updateField = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    const updated = { ...values, [key]: value };
    setValues(updated);
    if (key in errors) {
      const nextErrors = { ...errors };
      delete nextErrors[key as keyof FormErrors];
      setErrors(nextErrors);
    }
  };

  const buildMailtoHref = (draft: FormValues) => {
    const body = `Hi Ragunath,\n\n${draft.message.trim()}\n\nBest,\n${draft.name.trim()} (${draft.email.trim()})`;
    return `mailto:${profile.email}?subject=${encodeURIComponent(
      `[Portfolio] ${draft.subject}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <RevealSection id="contact" className="py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader index="07" eyebrow="Contact" title="Get in Touch" />

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SpotlightCard className="h-full p-5 sm:p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-inset)] px-3.5 py-2.5">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex min-w-0 items-center gap-2.5 text-sm text-[var(--text-heading)] transition hover:text-[var(--accent-text)]"
                  >
                    <Mail
                      className="h-4 w-4 shrink-0 text-[var(--accent-text)]"
                      aria-hidden="true"
                    />
                    <span className="truncate">{profile.email}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(profile.email, 'email')}
                    aria-label="Copy email address"
                    className="inline-flex shrink-0 items-center gap-1 rounded border border-[var(--border-subtle)] px-2 py-1 text-[11px] text-[var(--text-muted)] transition hover:text-[var(--text-heading)]"
                  >
                    {copiedField === 'email' ? (
                      <>
                        <Check className="h-3 w-3 text-[var(--accent-text)]" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        Copy
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-inset)] px-3.5 py-2.5">
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2.5 text-sm text-[var(--text-heading)] transition hover:text-[var(--accent-text)]"
                  >
                    <Phone
                      className="h-4 w-4 shrink-0 text-[var(--accent-text)]"
                      aria-hidden="true"
                    />
                    <span>{profile.phone}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(profile.phone, 'phone')}
                    aria-label="Copy phone number"
                    className="inline-flex shrink-0 items-center gap-1 rounded border border-[var(--border-subtle)] px-2 py-1 text-[11px] text-[var(--text-muted)] transition hover:text-[var(--text-heading)]"
                  >
                    {copiedField === 'phone' ? (
                      <>
                        <Check className="h-3 w-3 text-[var(--accent-text)]" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        Copy
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-inset)] px-3.5 py-2.5 text-sm text-[var(--text-body)]">
                  <MapPin
                    className="h-4 w-4 shrink-0 text-[var(--accent-text)]"
                    aria-hidden="true"
                  />
                  <span>{profile.location}</span>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-[var(--border-subtle)] pt-4">
                {profile.socialLinks.map((link) => (
                  <SocialButton
                    key={link.label}
                    link={link}
                    email={profile.email}
                    variant="compact"
                  />
                ))}
                <a
                  href={profile.resumePath}
                  download={profile.resumeFilename}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--accent-border)] bg-[var(--accent-soft)] px-3 py-2 text-xs font-medium text-[var(--accent-text)] transition hover:opacity-90"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                  Resume PDF
                </a>
              </div>
            </SpotlightCard>
          </div>

          <div className="lg:col-span-7">
            <SpotlightCard className="p-5 sm:p-6">
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-[var(--text-body)]"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={values.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      placeholder="Your name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      className={`mt-1 w-full rounded-lg border bg-[var(--bg-inset)] px-3 py-2 text-sm text-[var(--text-heading)] placeholder-[var(--text-dim)] transition ${
                        errors.name
                          ? 'border-rose-500/70'
                          : 'border-[var(--border-subtle)] focus:border-[var(--accent)] focus:outline-none'
                      }`}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="mt-1 text-xs text-rose-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-[var(--text-body)]"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={values.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="you@company.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      className={`mt-1 w-full rounded-lg border bg-[var(--bg-inset)] px-3 py-2 text-sm text-[var(--text-heading)] placeholder-[var(--text-dim)] transition ${
                        errors.email
                          ? 'border-rose-500/70'
                          : 'border-[var(--border-subtle)] focus:border-[var(--accent)] focus:outline-none'
                      }`}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="mt-1 text-xs text-rose-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-medium text-[var(--text-body)]"
                  >
                    Topic
                  </label>
                  <select
                    id="contact-subject"
                    value={values.subject}
                    onChange={(e) => updateField('subject', e.target.value)}
                    className="mt-1 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-inset)] px-3 py-2 text-sm text-[var(--text-heading)] focus:border-[var(--accent)] focus:outline-none"
                  >
                    <option value="Hiring / Technical Interview">Hiring / Technical Interview</option>
                    <option value="Full-Stack Developer Role">Full-Stack Developer Role</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-[var(--text-body)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={values.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    placeholder="Role details or message..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    className={`mt-1 w-full rounded-lg border bg-[var(--bg-inset)] px-3 py-2 text-sm text-[var(--text-heading)] placeholder-[var(--text-dim)] transition ${
                      errors.message
                        ? 'border-rose-500/70'
                        : 'border-[var(--border-subtle)] focus:border-[var(--accent)] focus:outline-none'
                    }`}
                  />
                  {errors.message && (
                    <p id="contact-message-error" className="mt-1 text-xs text-rose-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent-contrast)] transition hover:bg-[var(--accent-hover)]"
                >
                  <Send className="h-3.5 w-3.5" aria-hidden="true" />
                  Prepare Email
                </button>
              </form>

              {submittedDraft && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[var(--accent-border)] bg-[var(--accent-soft)] p-3.5"
                >
                  <span className="text-xs font-medium text-[var(--accent-text)]">
                    Ready — open in your email client or copy draft.
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={buildMailtoHref(submittedDraft)}
                      className="inline-flex items-center gap-1.5 rounded-md bg-[var(--accent)] px-3 py-1.5 text-xs font-semibold text-[var(--accent-contrast)]"
                    >
                      <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                      Open Email App
                    </a>
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(
                          `To: ${profile.email}\nSubject: ${submittedDraft.subject}\nFrom: ${submittedDraft.name} (${submittedDraft.email})\n\n${submittedDraft.message}`,
                          'draft',
                        )
                      }
                      className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs font-medium text-[var(--text-heading)]"
                    >
                      {copiedField === 'draft' ? 'Copied' : 'Copy Draft'}
                    </button>
                  </div>
                </div>
              )}
            </SpotlightCard>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
