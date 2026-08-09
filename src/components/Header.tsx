import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { services } from '../data/content';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
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

  return (
    <header className={headerClass}>
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={close}>
          <img
            className="brand-logo"
            src="/img/logo-nav.png"
            alt="Sirius Security"
            width={180}
            height={60}
          />
        </Link>

        <button
          type="button"
          className={`menu-toggle${open ? ' is-open' : ''}`}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>

        <nav
          id="site-nav"
          className={`nav${open ? ' is-open' : ''}`}
          aria-label="Principal"
        >
          <NavLink to="/" end onClick={close}>
            Accueil
          </NavLink>
          <details className="nav-dropdown">
            <summary>Nos services</summary>
            <div className="nav-dropdown-panel">
              {services.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} onClick={close}>
                  {s.title}
                </Link>
              ))}
            </div>
          </details>
          <NavLink to="/a-propos" onClick={close}>
            À propos
          </NavLink>
          <NavLink to="/contact" onClick={close}>
            Contact
          </NavLink>
          <NavLink to="/postuler" onClick={close}>
            Postuler
          </NavLink>
          <Link
            className="btn btn-primary header-cta header-cta-mobile"
            to="/contact"
            onClick={close}
          >
            Demander une offre
          </Link>
        </nav>

        <Link
          className="btn btn-primary header-cta header-cta-desktop"
          to="/contact"
        >
          Demander une offre
        </Link>
      </div>
    </header>
  );
}
