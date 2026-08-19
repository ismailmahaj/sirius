import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageProvider';
import { CookieConsent } from './CookieConsent';
import { Footer } from './Footer';
import { Header } from './Header';

export function Layout() {
  const { pathname, hash } = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <a className="skip-link" href="#contenu">
        {t.skipLink}
      </a>
      <Header />
      <main id="contenu">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
