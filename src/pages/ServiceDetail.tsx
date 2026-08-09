import { Link, Navigate, useParams } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { services } from '../data/content';

export function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title={service.title}
        lead={service.short}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="service-visual">
              <img
                src={service.image}
                alt=""
                width={1400}
                height={900}
                loading="eager"
              />
              <div className="prose">
                <p>{service.description}</p>
                <p>
                  Chaque dispositif est conçu avec vous : analyse des risques,
                  dimensionnement des effectifs, protocoles d’intervention et
                  reporting clair.
                </p>
                <div className="btn-group" style={{ marginTop: '0.5rem' }}>
                  <Link className="btn btn-primary" to="/contact">
                    Demander un devis
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="section-head" style={{ marginTop: '4.5rem' }}>
              <p className="eyebrow">Autres expertises</p>
              <h2>Découvrez aussi</h2>
            </div>
          </Reveal>

          <div className="services-grid">
            {others.map((s, i) => (
              <Reveal key={s.id} delay={i * 60}>
                <Link className="service-row" to={`/services/${s.slug}`}>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <span className="arrow">Découvrir →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
