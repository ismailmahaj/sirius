import { useState, type FormEvent } from 'react';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { company, services } from '../data/content';

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contactez-nous"
        lead="Une question ou un projet de sécurité ? Parlons-en."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-layout">
          <Reveal>
            {sent ? (
              <div className="form-success" role="status">
                Merci. Votre message a bien été enregistré. Notre équipe vous
                répondra dans les plus brefs délais.
              </div>
            ) : (
              <form className="form" onSubmit={onSubmit}>
                <div className="field">
                  <label htmlFor="name">
                    Nom, prénom <span className="req">*</span>
                  </label>
                  <input id="name" name="name" required autoComplete="name" />
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
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                  />
                </div>
                <div className="field">
                  <label htmlFor="subject">
                    Objet de votre demande <span className="req">*</span>
                  </label>
                  <select id="subject" name="subject" required defaultValue="">
                    <option value="" disabled>
                      Sélectionnez un service
                    </option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                    <option value="autre">Autre demande</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">
                    Message <span className="req">*</span>
                  </label>
                  <textarea id="message" name="message" required />
                </div>
                <p className="form-note">* champs obligatoires</p>
                <button type="submit" className="btn btn-primary">
                  Envoyer
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={120}>
            <aside className="contact-aside">
              <div>
                <h3>Adresse</h3>
                <div className="meta">
                  <span>{company.address}</span>
                  <span>{company.city}</span>
                </div>
              </div>
              <div>
                <h3>Téléphone</h3>
                <div className="meta">
                  <a href={company.phoneHref}>{company.phone}</a>
                </div>
              </div>
              <div>
                <h3>Email</h3>
                <div className="meta">
                  <a href={company.emailHref}>{company.email}</a>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
