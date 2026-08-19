import type { ReactNode } from 'react';
import { Footer } from '../Footer';
import { CookieConsent } from '../CookieConsent';
import { AdsHeader } from './AdsHeader';
import { AdsMobileStickyCTA } from './AdsMobileStickyCTA';

type Props = {
  service: string;
  ctaLabel: string;
  mobileCallLabel: string;
  mobileQuoteLabel: string;
  children: ReactNode;
};

export function AdsLayout({
  service,
  ctaLabel,
  mobileCallLabel,
  mobileQuoteLabel,
  children,
}: Props) {
  return (
    <>
      <AdsHeader service={service} ctaLabel={ctaLabel} />
      <main>{children}</main>
      <Footer />
      <AdsMobileStickyCTA
        callLabel={mobileCallLabel}
        quoteLabel={mobileQuoteLabel}
        service={service}
      />
      <CookieConsent />
    </>
  );
}
