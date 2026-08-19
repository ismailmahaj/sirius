import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { company, servicesMeta } from '../data/content';
import { getServiceTranslation } from '../i18n';
import { useTranslation } from '../i18n/LanguageProvider';

export function Home() {
  const { t } = useTranslation();

  return (
    <>
      <section className="hero" aria-label={t.home.heroAria}>
        <div className="hero-media" aria-hidden="true">
          <img
            src="/img/banner.png"
            alt=""
            width={1788}
            height={880}
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="hero-layout">
          <div className="hero-spacer" aria-hidden="true" />
          <div className="hero-content">
            <p className="hero-eyebrow">{t.home.heroEyebrow}</p>
            <h1>
              {t.home.heroTitle1}
              <br />
              {t.home.heroTitle2}
            </h1>
            <p className="lead">{t.home.heroLead}</p>
            <div className="btn-group">
              <Link className="btn btn-primary" to="/devis">
                {t.common.requestQuote}
              </Link>
              <a className="btn btn-ghost" href="#services">
                {t.home.discoverServices}
              </a>
            </div>
            <p className="hero-trust">
              {t.common.since} {company.founded}
              <span aria-hidden="true"> · </span>
              {t.common.tailoredSolutions}
              <span aria-hidden="true"> · </span>
              {t.common.brussels}
            </p>
          </div>
        </div>
      </section>

      <section className="trust-bar" aria-label={t.home.trustBarAria}>
        <div className="container">
          <ul className="trust-bar-list">
            <li>
              <span className="trust-bar-label">
                {t.home.trustSince} {company.founded}
              </span>
            </li>
            <li>
              <span className="trust-bar-label">{t.home.trustAgents}</span>
            </li>
            <li>
              <span className="trust-bar-label">{t.home.trustTailored}</span>
            </li>
            <li>
              <span className="trust-bar-label">{t.home.trustRegion}</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section-light" id="services">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">{t.home.servicesEyebrow}</p>
              <h2>{t.home.servicesTitle}</h2>
              <p>
                {t.common.since} {company.founded}, {t.home.servicesLead}
              </p>
            </div>
          </Reveal>

          <div className="services-grid">
            {servicesMeta.map((service, i) => {
              const copy = getServiceTranslation(t, service.slug)!;
              return (
                <Reveal key={service.id} delay={i * 50}>
                  <Link
                    className="service-row"
                    to={`/services/${service.slug}`}
                  >
                    <h3>{copy.title}</h3>
                    <p>{copy.short}</p>
                    <span className="arrow">
                      {t.common.discover} <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>{t.home.pillarsTitle}</h2>
            </div>
          </Reveal>
          <div className="pillars">
            {t.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <article className="pillar">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light section-sectors">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">{t.home.sectorsEyebrow}</p>
              <h2>
                {t.home.sectorsTitle1}
                <br />
                {t.home.sectorsTitle2}
              </h2>
            </div>
          </Reveal>
          <div className="sectors-grid" role="list">
            {t.sectors.map((sector, i) => (
              <Reveal key={sector} delay={i * 45}>
                <div className="sector-item" role="listitem">
                  <span className="sector-index" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="sector-name">{sector}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-commercial">
        <div className="cta-commercial-media" aria-hidden="true">
          <img
            src="/img/banner.png"
            alt=""
            width={1788}
            height={880}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="container cta-commercial-content">
          <Reveal>
            <p className="eyebrow">{t.home.ctaEyebrow}</p>
            <h2>{t.home.ctaTitle}</h2>
            <p className="lead-text">{t.home.ctaLead}</p>
            <div className="btn-group">
              <Link className="btn btn-primary" to="/devis">
                {t.common.requestQuote}
              </Link>
              <Link className="btn btn-ghost" to="/contact">
                {t.common.contactUs}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="band band-recruit">
        <div className="band-media" aria-hidden="true">
          <img
            src="/img/banner.png"
            alt=""
            width={1788}
            height={880}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="container band-content">
          <Reveal>
            <p className="eyebrow">{t.home.recruitEyebrow}</p>
            <h2>
              {t.home.recruitTitle1}
              <br />
              {t.home.recruitTitle2}
            </h2>
            <p>{t.home.recruitText}</p>
            <Link className="btn btn-primary" to="/postuler">
              {t.nav.apply}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
