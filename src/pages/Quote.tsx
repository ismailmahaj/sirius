import { useState, type FormEvent } from 'react';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { company, servicesMeta } from '../data/content';
import { getServiceTranslation } from '../i18n';
import { useTranslation } from '../i18n/LanguageProvider';
import { submitContactForm } from '../lib/submitContactForm';

export function Quote() {
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

    const serviceValue = String(data.get('service') ?? '');
    const serviceMeta = servicesMeta.find((s) => s.slug === serviceValue);
    const serviceLabel =
      serviceValue === 'autre'
        ? t.common.otherRequest
        : serviceMeta
          ? getServiceTranslation(t, serviceMeta.slug)?.title ?? serviceValue
          : serviceValue;

    const companyName = String(data.get('company') ?? '').trim();
    const site = String(data.get('site') ?? '').trim();
    const start = String(data.get('start') ?? '').trim();
    const details = String(data.get('message') ?? '').trim();

    const message = [
      `Société : ${companyName || '—'}`,
      `Lieu : ${site || '—'}`,
      `Date de début : ${start || '—'}`,
      '',
      details,
    ].join('\n');

    setSending(true);

    try {
      await submitContactForm({
        name: `${String(data.get('firstName') ?? '').trim()} ${String(data.get('lastName') ?? '').trim()}`.trim(),
        email: String(data.get('email') ?? ''),
        phone: String(data.get('phone') ?? ''),
        subject: `Devis — ${serviceLabel}`,
        message,
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
        eyebrow={t.quote.eyebrow}
        title={t.quote.title}
        lead={t.quote.lead}
      />

      <section className="section section-light" style={{ paddingTop: 0 }}>
        <div className="container contact-layout">
          <Reveal>
            {sent ? (
              <div className="form-success" role="status">
                {t.quote.success}
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
                    <label htmlFor="quote-firstName">
                      {t.quote.firstName}{' '}
                      <span className="req">{t.common.required}</span>
                    </label>
                    <input
                      id="quote-firstName"
                      name="firstName"
                      required
                      autoComplete="given-name"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="quote-lastName">
                      {t.quote.lastName}{' '}
                      <span className="req">{t.common.required}</span>
                    </label>
                    <input
                      id="quote-lastName"
                      name="lastName"
                      required
                      autoComplete="family-name"
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="quote-company">{t.quote.company}</label>
                  <input
                    id="quote-company"
                    name="company"
                    autoComplete="organization"
                  />
                </div>
                <div className="field">
                  <label htmlFor="quote-email">
                    {t.quote.email}{' '}
                    <span className="req">{t.common.required}</span>
                  </label>
                  <input
                    id="quote-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="field">
                  <label htmlFor="quote-phone">
                    {t.quote.phone}{' '}
                    <span className="req">{t.common.required}</span>
                  </label>
                  <input
                    id="quote-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                  />
                </div>
                <div className="field">
                  <label htmlFor="quote-service">
                    {t.quote.service}{' '}
                    <span className="req">{t.common.required}</span>
                  </label>
                  <select
                    id="quote-service"
                    name="service"
                    required
                    defaultValue=""
                  >
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
                  <label htmlFor="quote-site">
                    {t.quote.site}{' '}
                    <span className="req">{t.common.required}</span>
                  </label>
                  <input
                    id="quote-site"
                    name="site"
                    required
                    autoComplete="street-address"
                  />
                </div>
                <div className="field">
                  <label htmlFor="quote-start">{t.quote.start}</label>
                  <input id="quote-start" name="start" type="date" />
                </div>
                <div className="field">
                  <label htmlFor="quote-message">
                    {t.quote.message}{' '}
                    <span className="req">{t.common.required}</span>
                  </label>
                  <textarea
                    id="quote-message"
                    name="message"
                    required
                    placeholder={t.quote.messagePlaceholder}
                  />
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
                  {sending ? t.contact.sending : t.quote.submit}
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={120}>
            <aside className="contact-aside">
              <div>
                <h3>{t.quote.whyTitle}</h3>
                <div className="meta">
                  <span>{t.quote.why1}</span>
                  <span>{t.quote.why2}</span>
                  <span>{t.quote.why3}</span>
                </div>
              </div>
              <div>
                <h3>{t.quote.nextTitle}</h3>
                <div className="meta">
                  <span>{t.quote.next1}</span>
                  <span>{t.quote.next2}</span>
                  <span>{t.quote.next3}</span>
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
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
