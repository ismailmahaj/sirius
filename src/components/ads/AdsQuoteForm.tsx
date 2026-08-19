import { useRef, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { submitContactForm } from '../../lib/submitContactForm';
import { trackFormStart, trackGenerateLead } from '../../lib/tracking';
import { getUtmParams } from '../../lib/utm';

type Props = {
  title: string;
  lead: string;
  service: string;
  fields: {
    name: string;
    company: string;
    phone: string;
    email: string;
    city: string;
    service: string;
    message: string;
  };
  serviceOptions: Array<{ value: string; label: string }>;
  submitLabel: string;
  privacyText: string;
  successMessage: string;
  errorMessage: string;
  sendingLabel: string;
};

export function AdsQuoteForm({
  title,
  lead,
  service,
  fields,
  serviceOptions,
  submitLabel,
  privacyText,
  successMessage,
  errorMessage,
  sendingLabel,
}: Props) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const formStarted = useRef(false);

  const handleFocus = () => {
    if (!formStarted.current) {
      formStarted.current = true;
      trackFormStart(service);
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    if (String(data.get('_honey') ?? '').trim()) return;

    const serviceValue = String(data.get('service') ?? '');
    const serviceLabel =
      serviceOptions.find((o) => o.value === serviceValue)?.label ?? serviceValue;

    const companyName = String(data.get('company') ?? '').trim();
    const city = String(data.get('city') ?? '').trim();
    const messageBody = String(data.get('message') ?? '').trim();

    const utm = getUtmParams();
    const utmLines = Object.entries(utm)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n');

    const message = [
      `Entreprise : ${companyName || '—'}`,
      `Ville : ${city || '—'}`,
      '',
      messageBody || '—',
      utmLines ? `\n--- Acquisition ---\n${utmLines}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    setSending(true);

    try {
      await submitContactForm({
        name: String(data.get('name') ?? '').trim(),
        email: String(data.get('email') ?? '').trim(),
        phone: String(data.get('phone') ?? '').trim(),
        subject: `Offre — ${serviceLabel}`,
        message,
        honey: String(data.get('_honey') ?? ''),
      });
      setSent(true);
      trackGenerateLead(service);
      form.reset();
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="ads-form-section" id="ads-form">
      <div className="container">
        <div className="ads-form-header">
          <h2>{title}</h2>
          <p>{lead}</p>
        </div>

        {sent ? (
          <div className="ads-form-success" role="status">
            {successMessage}
          </div>
        ) : (
          <form className="ads-form" onSubmit={onSubmit} onFocus={handleFocus}>
            <input
              type="text"
              name="_honey"
              className="ads-field-honey"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="ads-field">
              <label htmlFor="ads-name">
                {fields.name} <span className="req">*</span>
              </label>
              <input id="ads-name" name="name" required autoComplete="name" />
            </div>

            <div className="ads-form-row">
              <div className="ads-field">
                <label htmlFor="ads-company">
                  {fields.company} <span className="req">*</span>
                </label>
                <input id="ads-company" name="company" required autoComplete="organization" />
              </div>
              <div className="ads-field">
                <label htmlFor="ads-city">
                  {fields.city} <span className="req">*</span>
                </label>
                <input id="ads-city" name="city" required autoComplete="address-level2" />
              </div>
            </div>

            <div className="ads-form-row">
              <div className="ads-field">
                <label htmlFor="ads-phone">
                  {fields.phone} <span className="req">*</span>
                </label>
                <input id="ads-phone" name="phone" type="tel" required autoComplete="tel" />
              </div>
              <div className="ads-field">
                <label htmlFor="ads-email">
                  {fields.email} <span className="req">*</span>
                </label>
                <input id="ads-email" name="email" type="email" required autoComplete="email" />
              </div>
            </div>

            <div className="ads-field">
              <label htmlFor="ads-service">
                {fields.service} <span className="req">*</span>
              </label>
              <select id="ads-service" name="service" required defaultValue={service}>
                {serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="ads-field">
              <label htmlFor="ads-message">{fields.message}</label>
              <textarea id="ads-message" name="message" />
            </div>

            {error && (
              <div className="ads-form-error" role="alert">
                {errorMessage}
              </div>
            )}

            <button type="submit" className="btn btn-primary" disabled={sending}>
              {sending ? sendingLabel : submitLabel}
            </button>

            <p className="ads-form-privacy">
              {privacyText}{' '}
              <Link to="/politique-confidentialite">Politique de confidentialité</Link>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
