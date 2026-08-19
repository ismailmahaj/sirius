import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { servicesMeta } from '../data/content';
import { useTranslation } from '../i18n/LanguageProvider';
import { getServiceTranslation } from '../i18n';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const close = () => setOpen(false);

  const headerClass = [
    'site-header',
    isHome ? 'is-home' : '',
    scrolled || !isHome ? 'is-scrolled' : '',
    open ? 'is-menu-open' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const logoSrc = open
    ? '/img/logo-nav.png'
    : scrolled || !isHome
      ? '/img/logo.png'
      : '/img/logo-nav.png';

  return (
    <header className={headerClass}>
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={close}>
          <img
            className={`brand-logo${logoSrc === '/img/logo.png' ? ' brand-logo--light' : ''}`}
            src={logoSrc}
            alt="Sirius Security"
            width={180}
            height={60}
          />
        </Link>

        <nav
          id="site-nav"
          className={`nav${open ? ' is-open' : ''}`}
          aria-label={t.nav.label}
        >
          <NavLink to="/" end onClick={close}>
            {t.nav.home}
          </NavLink>
          <details className="nav-dropdown">
            <summary>{t.nav.services}</summary>
            <div className="nav-dropdown-panel">
              {servicesMeta.map((s) => {
                const service = getServiceTranslation(t, s.slug);
                return (
                  <Link key={s.slug} to={`/services/${s.slug}`} onClick={close}>
                    {service?.title ?? s.slug}
                  </Link>
                );
              })}
            </div>
          </details>
          <NavLink to="/a-propos" onClick={close}>
            {t.nav.about}
          </NavLink>
          <NavLink to="/contact" onClick={close}>
            {t.nav.contact}
          </NavLink>
          <NavLink to="/devis" onClick={close}>
            {t.nav.quote}
          </NavLink>
          <NavLink to="/postuler" onClick={close}>
            {t.nav.apply}
          </NavLink>
          <LanguageSwitcher compact className="lang-switcher-mobile" />
          <Link
            className="btn btn-primary header-cta header-cta-mobile"
            to="/devis"
            onClick={close}
          >
            {t.nav.cta}
          </Link>
        </nav>

        <LanguageSwitcher className="lang-switcher-desktop" />

        <button
          type="button"
          className={`menu-toggle${open ? ' is-open' : ''}`}
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>

        <Link
          className="btn btn-primary header-cta header-cta-desktop"
          to="/devis"
        >
          {t.nav.cta}
        </Link>
      </div>
    </header>
  );
}
