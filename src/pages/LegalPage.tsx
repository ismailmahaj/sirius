import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { company } from '../data/content';
import { useTranslation } from '../i18n/LanguageProvider';
import { interpolate } from '../lib/interpolate';
import type { LegalSection } from '../i18n/types';

type Props = {
  variant: 'privacy' | 'cookies';
};

const companyValues = {
  company: company.name,
  address: company.address,
  city: company.city,
  vat: company.vat,
  email: company.email,
  phone: company.phone,
};

function LegalSections({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="legal-content">
      {sections.map((section) => (
        <section key={section.title} className="legal-section">
          <h2>{interpolate(section.title, companyValues)}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{interpolate(paragraph, companyValues)}</p>
          ))}
        </section>
      ))}
    </div>
  );
}

export function LegalPage({ variant }: Props) {
  const { t } = useTranslation();
  const content = variant === 'privacy' ? t.privacy : t.cookiesPage;

  return (
    <>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        lead={content.lead}
      />

      <section className="section section-light" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <Reveal>
            <LegalSections sections={content.sections} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
