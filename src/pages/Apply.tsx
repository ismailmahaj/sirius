import { useState, type FormEvent } from 'react';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { company } from '../data/content';
import { useTranslation } from '../i18n/LanguageProvider';

const MAX_CV_SIZE = 5 * 1024 * 1024;
const CV_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export function Apply() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [fileName, setFileName] = useState('');
  const { t } = useTranslation();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    if (String(data.get('_honey') ?? '').trim()) {
      return;
    }

    const cv = data.get('cv');
    if (!(cv instanceof File) || cv.size === 0) {
      setError(true);
      return;
    }
    if (cv.size > MAX_CV_SIZE) {
      setError(true);
      return;
    }
    if (cv.type && !CV_TYPES.includes(cv.type) && !/\.(pdf|doc|docx)$/i.test(cv.name)) {
      setError(true);
      return;
    }

    setSending(true);

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Apply form submission failed');
      }

      const result = (await response.json()) as { ok?: boolean };
      if (!result.ok) {
        throw new Error('Apply form submission failed');
      }

      setSent(true);
      form.reset();
      setFileName('');
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow={t.apply.eyebrow}
        title={t.apply.title}
        lead={t.apply.lead}
      />

      <section className="section section-light" style={{ paddingTop: 0 }}>
        <div className="container contact-layout">
          <Reveal>
            {sent ? (
              <div className="form-success" role="status">
                {t.apply.success}
              </div>
            ) : (
              <form className="form" onSubmit={onSubmit}>
                <input
                  type="text"
                  name="_honey"
                  className="field-honey"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="firstName">
                      {t.apply.firstName}{' '}
                      <span className="req">{t.common.required}</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      required
                      autoComplete="given-name"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="lastName">
                      {t.apply.lastName}{' '}
                      <span className="req">{t.common.required}</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      required
                      autoComplete="family-name"
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="email">
                    {t.apply.email}{' '}
                    <span className="req">{t.common.required}</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="field">
                  <label htmlFor="phone">
                    {t.apply.phone}{' '}
                    <span className="req">{t.common.required}</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                  />
                </div>
                <div className="field">
                  <label htmlFor="role">
                    {t.apply.role}{' '}
                    <span className="req">{t.common.required}</span>
                  </label>
                  <select id="role" name="role" required defaultValue="">
                    <option value="" disabled>
                      {t.common.select}
                    </option>
                    <option value="gardiennage">{t.apply.roles.gardiennage}</option>
                    <option value="inspection">{t.apply.roles.inspection}</option>
                    <option value="evenementiel">
                      {t.apply.roles.evenementiel}
                    </option>
                    <option value="autre">{t.apply.roles.other}</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="cv">
                    {t.apply.cv}{' '}
                    <span className="req">{t.common.required}</span>
                  </label>
                  <label className="file-input">
                    <input
                      id="cv"
                      name="cv"
                      type="file"
                      required
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={(event) => {
                        const file = event.currentTarget.files?.[0];
                        setFileName(file?.name ?? '');
                      }}
                    />
                    <span>{fileName || t.apply.cvHint}</span>
                  </label>
                </div>
                <div className="field">
                  <label htmlFor="message">
                    {t.apply.message}{' '}
                    <span className="req">{t.common.required}</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder={t.apply.messagePlaceholder}
                  />
                </div>
                {error ? (
                  <p className="form-error" role="alert">
                    {t.contact.error}
                  </p>
                ) : null}
                <p className="form-note">
                  {t.apply.note}{' '}
                  <a href={company.emailHref}>{company.email}</a>
                </p>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={sending}
                >
                  {sending ? t.contact.sending : t.apply.submit}
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={120}>
            <aside className="contact-aside">
              <div>
                <h3>{t.apply.whyJoin}</h3>
                <div className="meta">
                  <span>{t.apply.why1}</span>
                  <span>{t.apply.why2}</span>
                  <span>{t.apply.why3}</span>
                </div>
              </div>
              <div>
                <h3>{t.apply.hrContact}</h3>
                <div className="meta">
                  <a href={company.emailHref}>{company.email}</a>
                  <a href={company.phoneHref}>{company.phone}</a>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
