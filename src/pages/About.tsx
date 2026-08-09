import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { company } from '../data/content';

export function About() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Votre partenaire de sécurité fiable et engagé"
        lead={`Depuis ${company.founded}, Sirius Security s’impose comme une référence en sécurité professionnelle et personnalisée.`}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="prose">
              <p>
                Nous combinons expertise, innovation et proximité pour offrir
                des solutions sur mesure. En choisissant{' '}
                <strong>Sirius Security</strong>, vous choisissez un partenaire de
                confiance, engagé à protéger ce qui vous est cher.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="section-head" style={{ marginTop: '3.5rem' }}>
              <p className="eyebrow">Équipe</p>
              <h2>Experte, dédiée, à votre service</h2>
            </div>
            <div className="prose">
              <p>
                Chaque environnement a ses exigences. Nos équipes opèrent dans
                la protection des biens et des personnes, la sécurisation
                d’événements et la protection rapprochée — y compris en
                environnements diplomatiques et privés.
              </p>
              <p>
                Agents sélectionnés avec soin, formés en continu aux techniques
                avancées : gestion des conflits, urgences et risques
                spécifiques à votre contexte.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="section-head" style={{ marginTop: '3.5rem' }}>
              <p className="eyebrow">Méthode</p>
              <h2>Un service personnalisé, orienté résultats</h2>
            </div>
            <div className="prose">
              <p>
                Chaque mission commence par une analyse approfondie de vos
                besoins. Les agents sont choisis selon leurs compétences et
                leur adéquation. Inspecteurs et responsables de site assurent
                un suivi régulier pour une sécurité efficace et réactive.
              </p>
              <p>
                Transparence, respect des normes, flexibilité : nous construisons
                une relation de confiance durable grâce à un service
                irréprochable.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="btn-group" style={{ marginTop: '3rem' }}>
              <Link className="btn btn-primary" to="/contact">
                Contactez-nous
              </Link>
              <Link className="btn btn-ghost" to="/">
                Voir nos services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
