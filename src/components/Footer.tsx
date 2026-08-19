import { Link } from 'react-router-dom';
import { company, hasRealAuthorization, servicesMeta } from '../data/content';
import { getServiceTranslation } from '../i18n';
import { useTranslation } from '../i18n/LanguageProvider';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img
                src="/img/logo-nav.png"
                alt="Sirius Security"
                width={180}
                height={60}
              />
            </div>
            <p>{t.footer.tagline}</p>
          </div>

          <div>
            <div className="footer-title">{t.footer.navigation}</div>
            <ul>
              <li>
                <Link to="/">{t.nav.home}</Link>
              </li>
              <li>
                <Link to="/a-propos">{t.nav.about}</Link>
              </li>
              <li>
                <Link to="/contact">{t.nav.contact}</Link>
              </li>
              <li>
                <Link to="/devis">{t.nav.quote}</Link>
              </li>
              <li>
                <Link to="/postuler">{t.nav.apply}</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-title">{t.footer.services}</div>
            <ul>
              {servicesMeta.map((s) => {
                const service = getServiceTranslation(t, s.slug);
                return (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`}>
                      {service?.title ?? s.slug}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link to={{ pathname: '/', hash: 'services' }}>
                  {t.footer.allServices}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-title">{t.footer.contact}</div>
            <ul>
              <li>
                <a href={company.phoneHref}>{company.phone}</a>
              </li>
              <li>
                <a href={company.emailHref}>{company.email}</a>
              </li>
              <li>
                {company.address}
                <br />
                {company.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            {company.name} © {new Date().getFullYear()}
          </span>
          <span>
            {t.footer.vat} : {company.vat}
          </span>
          {hasRealAuthorization() ? (
            <span>
              {t.footer.authorization} : {company.authorization}
            </span>
          ) : null}
        </div>

        <div className="footer-legal">
          <Link to="/politique-confidentialite">{t.footer.privacy}</Link>
          <span aria-hidden="true">·</span>
          <Link to="/politique-cookies">{t.footer.cookies}</Link>
        </div>
      </div>
    </footer>
  );
}
