import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { company } from '../data/content';
import { useTranslation } from '../i18n/LanguageProvider';

export function About() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        lead={`${t.common.since} ${company.founded}, ${t.about.lead}`}
      />

      <section className="section section-light" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="prose">
              <p>{t.about.p1}</p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="section-head" style={{ marginTop: '3.5rem' }}>
              <h2>{t.about.teamTitle}</h2>
            </div>
            <div className="prose">
              <p>{t.about.teamP1}</p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="section-head" style={{ marginTop: '3.5rem' }}>
              <h2>{t.about.methodTitle}</h2>
            </div>
            <div className="prose">
              <p>{t.about.methodP1}</p>
              <p>{t.about.methodP2}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="btn-group" style={{ marginTop: '3rem' }}>
              <Link className="btn btn-primary" to="/contact">
                {t.contact.title}
              </Link>
              <Link className="btn btn-ghost" to="/">
                {t.common.seeServices}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
