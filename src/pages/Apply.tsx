import { useState, type FormEvent } from 'react';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { company } from '../data/content';

export function Apply() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Carrières"
        title="Rejoignez notre équipe"
        lead="Agent de gardiennage, portier ou réceptionniste — intégrez Sirius Security."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-layout">
          <Reveal>
            {sent ? (
              <div className="form-success" role="status">
                Merci pour votre candidature. Nous l’examinerons et reviendrons
                vers vous si votre profil correspond à nos besoins.
              </div>
            ) : (
              <form className="form" onSubmit={onSubmit}>
                <div className="field">
                  <label htmlFor="fullname">
                    Nom, prénom <span className="req">*</span>
                  </label>
                  <input id="fullname" name="fullname" required autoComplete="name" />
                </div>
                <div className="field">
                  <label htmlFor="email">
                    Email <span className="req">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="field">
                  <label htmlFor="phone">
                    Téléphone <span className="req">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                  />
                </div>
                <div className="field">
                  <label htmlFor="role">
                    Poste souhaité <span className="req">*</span>
                  </label>
                  <select id="role" name="role" required defaultValue="">
                    <option value="" disabled>
                      Sélectionnez
                    </option>
                    <option value="gardiennage">Agent de gardiennage</option>
                    <option value="portier">Portier</option>
                    <option value="reception">Réceptionniste</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">
                    Présentez-vous <span className="req">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Expérience, disponibilités, langues…"
                  />
                </div>
                <p className="form-note">
                  * champs obligatoires — vous pouvez aussi écrire à{' '}
                  <a href={company.emailHref}>{company.email}</a>
                </p>
                <button type="submit" className="btn btn-primary">
                  Envoyer ma candidature
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={120}>
            <aside className="contact-aside">
              <div>
                <h3>Pourquoi nous rejoindre</h3>
                <div className="meta">
                  <span>Missions variées et formantes</span>
                  <span>Équipe professionnelle et bienveillante</span>
                  <span>Présence à Bruxelles et en Belgique</span>
                </div>
              </div>
              <div>
                <h3>Contact RH</h3>
                <div className="meta">
                  <a href={company.emailHref}>{company.email}</a>
                  <a href={company.phoneHref}>{company.phone}</a>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
