import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { company, pillars, sectors, services } from '../data/content';

export function Home() {
  return (
    <>
      <section className="hero" aria-label="Présentation">
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
            <p className="hero-eyebrow">
              Sirius Security · Protection professionnelle
            </p>
            <h1>
              Votre sécurité.
              <br />
              Notre engagement.
            </h1>
            <p className="lead">
              Gardiennage, surveillance mobile et sécurité événementielle pour
              entreprises, commerces et institutions.
            </p>
            <div className="btn-group">
              <Link className="btn btn-primary" to="/contact">
                Demander une offre
              </Link>
              <a className="btn btn-ghost" href="#services">
                Découvrir nos services
              </a>
            </div>
            <p className="hero-trust">
              Depuis {company.founded}
              <span aria-hidden="true"> · </span>
              Solutions sur mesure
              <span aria-hidden="true"> · </span>
              Bruxelles
            </p>
          </div>
        </div>
      </section>

      <section className="trust-bar" aria-label="Points clés">
        <div className="container">
          <ul className="trust-bar-list">
            <li>
              <span className="trust-bar-label">Depuis {company.founded}</span>
            </li>
            <li>
              <span className="trust-bar-label">Agents professionnels</span>
            </li>
            <li>
              <span className="trust-bar-label">Interventions sur mesure</span>
            </li>
            <li>
              <span className="trust-bar-label">Bruxelles &amp; Belgique</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Nos services</p>
              <h2>
                Votre partenaire de confiance pour des solutions de sécurité
                sur mesure
              </h2>
              <p>
                Depuis {company.founded}, nous protégeons les personnes et les
                biens avec des services professionnels adaptés à chaque client.
                Approche humaine, technologies avancées, réactivité sur le
                terrain.
              </p>
            </div>
          </Reveal>

          <div className="services-grid">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 50}>
                <Link className="service-row" to={`/services/${service.slug}`}>
                  <h3>{service.title}</h3>
                  <p>{service.short}</p>
                  <span className="arrow">
                    Découvrir <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Pourquoi Sirius Security</p>
              <h2>Mission, vision et valeurs</h2>
            </div>
          </Reveal>
          <div className="pillars">
            {pillars.map((p, i) => (
              <Reveal key={p.label} delay={i * 90}>
                <article className="pillar">
                  <span className="pillar-index" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="label">{p.label}</p>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-sectors">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Sur le terrain</p>
              <h2>
                Des solutions adaptées
                <br />
                à chaque environnement.
              </h2>
            </div>
          </Reveal>
          <div className="sectors-grid" role="list">
            {sectors.map((sector, i) => (
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
            <p className="eyebrow">Clients</p>
            <h2>Un besoin en sécurité&nbsp;?</h2>
            <p className="lead-text">
              Parlez-nous de votre site, de votre événement ou de vos besoins.
              Notre équipe vous proposera une solution adaptée.
            </p>
            <div className="btn-group">
              <Link className="btn btn-primary" to="/contact">
                Demander une offre
              </Link>
              <Link className="btn btn-ghost" to="/contact">
                Nous contacter
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
            <p className="eyebrow">Recrutement</p>
            <h2>
              Rejoignez
              <br />
              Sirius Security.
            </h2>
            <p>
              Vous souhaitez intégrer Sirius Security comme agent de
              gardiennage, portier ou réceptionniste&nbsp;?
            </p>
            <Link className="btn btn-primary" to="/postuler">
              Postuler
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
