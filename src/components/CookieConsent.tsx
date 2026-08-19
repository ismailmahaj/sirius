import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageProvider';
import {
  getCookieConsent,
  setCookieConsent,
  type CookieConsent,
} from '../lib/cookies';

export function CookieConsent() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getCookieConsent() === null);
  }, []);

  const save = (value: CookieConsent) => {
    setCookieConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-label={t.cookies.ariaLabel}
      aria-live="polite"
    >
      <div className="container cookie-banner-inner">
        <div className="cookie-banner-text">
          <strong>{t.cookies.bannerTitle}</strong>
          <p>{t.cookies.bannerText}</p>
        </div>
        <div className="cookie-banner-actions">
          <Link className="btn btn-ghost cookie-banner-link" to="/politique-cookies">
            {t.cookies.manage}
          </Link>
          <button
            type="button"
            className="btn btn-ghost cookie-banner-reject"
            onClick={() => save('rejected')}
          >
            {t.cookies.reject}
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => save('accepted')}
          >
            {t.cookies.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
