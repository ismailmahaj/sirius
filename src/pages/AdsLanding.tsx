import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AdsHeader } from '../components/ads/AdsHeader';
import { AdsHero } from '../components/ads/AdsHero';
import { AdsBenefits } from '../components/ads/AdsBenefits';
import { AdsWhySirius } from '../components/ads/AdsWhySirius';
import { AdsProcess } from '../components/ads/AdsProcess';
import { AdsQuoteForm } from '../components/ads/AdsQuoteForm';
import { AdsFAQ } from '../components/ads/AdsFAQ';
import { AdsFinalCTA } from '../components/ads/AdsFinalCTA';
import { AdsMobileStickyCTA } from '../components/ads/AdsMobileStickyCTA';
import { AdsSEO } from '../components/ads/AdsSEO';
import { Footer } from '../components/Footer';
import { CookieConsent } from '../components/CookieConsent';
import { landingConfigs, adsSharedTexts } from '../data/landings';
import { captureUtmParams } from '../lib/utm';

export function AdsLanding() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, '').replace(/\/$/, '');
  const config = landingConfigs[slug];

  useEffect(() => {
    captureUtmParams();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!config) {
    return <Navigate to="/" replace />;
  }

  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <div className="ads-page">
      <AdsSEO
        title={config.seo.title}
        description={config.seo.description}
        canonical={`${origin}/${config.slug}`}
      />

      <AdsHeader
        service={config.serviceSlug}
        ctaLabel={adsSharedTexts.cta.requestQuote}
      />

      <main>
        <AdsHero
          eyebrow={config.hero.eyebrow}
          h1={config.hero.h1}
          lead={config.hero.lead}
          image={config.image}
          ctaQuoteLabel={adsSharedTexts.cta.requestQuote}
          ctaCallLabel={adsSharedTexts.cta.callUs}
          trustLine={config.hero.trustLine}
          service={config.serviceSlug}
        />

        <AdsBenefits
          title={config.problem.title}
          text={config.problem.text}
          points={config.problem.points}
          variant="problem"
        />

        <AdsBenefits
          title={config.needs.title}
          items={config.needs.items}
          variant="needs"
        />

        <AdsWhySirius
          title={adsSharedTexts.whySirius.title}
          items={adsSharedTexts.whySirius.items}
        />

        <AdsProcess
          title={adsSharedTexts.process.title}
          steps={adsSharedTexts.process.steps}
        />

        <AdsQuoteForm
          title={adsSharedTexts.form.title}
          lead={adsSharedTexts.form.lead}
          service={config.serviceSlug}
          fields={adsSharedTexts.form.fields}
          serviceOptions={adsSharedTexts.form.serviceOptions}
          submitLabel={adsSharedTexts.form.submit}
          privacyText={adsSharedTexts.form.privacy}
          successMessage={adsSharedTexts.form.success}
          errorMessage={adsSharedTexts.form.error}
          sendingLabel={adsSharedTexts.form.sending}
        />

        <AdsFAQ items={config.faq} />

        <AdsFinalCTA
          title={config.finalCta.title}
          text={config.finalCta.text}
          ctaQuoteLabel={adsSharedTexts.cta.requestQuote}
          ctaCallLabel={adsSharedTexts.cta.callSirius}
          service={config.serviceSlug}
        />
      </main>

      <Footer />
      <AdsMobileStickyCTA
        callLabel={adsSharedTexts.mobileSticky.call}
        quoteLabel={adsSharedTexts.mobileSticky.quote}
        service={config.serviceSlug}
      />
      <CookieConsent />
    </div>
  );
}
