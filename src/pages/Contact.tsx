import { useState, type FormEvent } from 'react';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { company, servicesMeta } from '../data/content';
import { getServiceTranslation } from '../i18n';
import { useTranslation } from '../i18n/LanguageProvider';
import { submitContactForm } from '../lib/submitContactForm';

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    if (String(data.get('_honey') ?? '').trim()) {
      return;
    }

    const subjectValue = String(data.get('subject') ?? '');
    const service = servicesMeta.find((s) => s.slug === subjectValue);
    const subjectLabel =
      subjectValue === 'autre'
        ? t.common.otherRequest
        : service
          ? getServiceTranslation(t, service.slug)?.title ?? subjectValue
          : subjectValue;

    setSending(true);

    try {
      await submitContactForm({
        name: `${String(data.get('firstName') ?? '').trim()} ${String(data.get('lastName') ?? '').trim()}`.trim(),
        email: String(data.get('email') ?? ''),
        phone: String(data.get('phone') ?? ''),
        subject: subjectLabel,
        message: String(data.get('message') ?? ''),
        honey: String(data.get('_honey') ?? ''),
      });
      setSent(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHero
        title={t.contact.title}
        lead={t.contact.lead}
      />

      <section className="section section-light" style={{ paddingTop: '2rem' }}>
        <div className="container contact-layout">
          <Reveal>
            {sent ? (
              <div className="form-success" role="status">
                {t.contact.success}
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
                      {t.contact.firstName}{' '}
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
                      {t.contact.lastName}{' '}
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
                    {t.contact.email}{' '}
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
                  <label htmlFor="phone">{t.contact.phone}</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                  />
                </div>
                <div className="field">
                  <label htmlFor="subject">
                    {t.contact.subject}{' '}
                    <span className="req">{t.common.required}</span>
                  </label>
                  <select id="subject" name="subject" required defaultValue="">
                    <option value="" disabled>
                      {t.common.selectService}
                    </option>
                    {servicesMeta.map((s) => {
                      const service = getServiceTranslation(t, s.slug);
                      return (
                        <option key={s.slug} value={s.slug}>
                          {service?.title ?? s.slug}
                        </option>
                      );
                    })}
                    <option value="autre">{t.common.otherRequest}</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">
                    {t.contact.message}{' '}
                    <span className="req">{t.common.required}</span>
                  </label>
                  <textarea id="message" name="message" required />
                </div>
                {error ? (
                  <p className="form-error" role="alert">
                    {t.contact.error}
                  </p>
                ) : null}
                <p className="form-note">{t.common.requiredFields}</p>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={sending}
                >
                  {sending ? t.contact.sending : t.common.send}
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={120}>
            <aside className="contact-aside">
              <div>
                <h3>{t.contact.address}</h3>
                <div className="meta">
                  <span>{company.address}</span>
                  <span>{company.city}</span>
                </div>
              </div>
              <div>
                <h3>{t.contact.phone}</h3>
                <div className="meta">
                  <a href={company.phoneHref}>{company.phone}</a>
                </div>
              </div>
              <div>
                <h3>{t.contact.email}</h3>
                <div className="meta">
                  <a href={company.emailHref}>{company.email}</a>
                </div>
              </div>
              <div>
                <h3>{t.contact.vat}</h3>
                <div className="meta">
                  <span>{company.vat}</span>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
