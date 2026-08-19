import { Link, Navigate, useParams } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { servicesMeta } from '../data/content';
import { getServiceTranslation } from '../i18n';
import { useTranslation } from '../i18n/LanguageProvider';

export function ServiceDetail() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const meta = servicesMeta.find((s) => s.slug === slug);
  const service = slug ? getServiceTranslation(t, slug) : undefined;

  if (!meta || !service) {
    return <Navigate to="/" replace />;
  }

  const others = servicesMeta.filter((s) => s.slug !== meta.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={t.serviceDetail.eyebrow}
        title={service.title}
        lead={service.short}
      />

      <section className="section section-light" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="service-visual">
              <img
                src={meta.image}
                alt=""
                width={1400}
                height={900}
                loading="eager"
              />
              <div className="prose">
                <p>{service.description}</p>
                <p>{t.serviceDetail.extra}</p>
                <div className="btn-group" style={{ marginTop: '0.5rem' }}>
                  <Link className="btn btn-primary" to="/devis">
                    {t.serviceDetail.requestQuote}
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="section-head" style={{ marginTop: '4.5rem' }}>
              <p className="eyebrow">{t.serviceDetail.othersEyebrow}</p>
              <h2>{t.serviceDetail.othersTitle}</h2>
            </div>
          </Reveal>

          <div className="services-grid">
            {others.map((s, i) => {
              const copy = getServiceTranslation(t, s.slug)!;
              return (
                <Reveal key={s.id} delay={i * 60}>
                  <Link className="service-row" to={`/services/${s.slug}`}>
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
    </>
  );
}
