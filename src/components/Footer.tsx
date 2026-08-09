import { Link } from 'react-router-dom';
import { company, hasRealAuthorization, services } from '../data/content';

export function Footer() {
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
            <p>
              Expertise, innovation et proximité pour des solutions de sécurité
              sur mesure à Bruxelles et en Belgique.
            </p>
          </div>

          <div>
            <div className="footer-title">Navigation</div>
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/a-propos">À propos</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/postuler">Postuler</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-title">Services</div>
            <ul>
              {services.slice(0, 4).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
              <li>
                <Link to={{ pathname: '/', hash: 'services' }}>
                  Tous les services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-title">Contact</div>
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
          {hasRealAuthorization() ? (
            <span>
              N° d’autorisation ministériel : {company.authorization}
            </span>
          ) : (
            <span>Informations réglementaires à compléter</span>
          )}
        </div>
      </div>
    </footer>
  );
}
