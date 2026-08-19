import { company } from '../../data/content';
import { trackPhoneClick, trackQuoteClick } from '../../lib/tracking';

type Props = {
  eyebrow: string;
  h1: string;
  lead: string;
  image: string;
  ctaQuoteLabel: string;
  ctaCallLabel: string;
  trustLine: string[];
  service: string;
};

export function AdsHero({
  eyebrow,
  h1,
  lead,
  image,
  ctaQuoteLabel,
  ctaCallLabel,
  trustLine,
  service,
}: Props) {
  return (
    <section className="ads-hero">
      <div className="ads-hero-media" aria-hidden="true">
        <img src={image} alt="" width={1200} height={600} fetchPriority="high" decoding="async" />
      </div>
      <div className="ads-hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{h1}</h1>
        <p className="lead">{lead}</p>
        <div className="btn-group">
          <a
            href="#ads-form"
            className="btn btn-primary"
            onClick={() => trackQuoteClick('hero', service)}
          >
            {ctaQuoteLabel}
          </a>
          <a
            href={company.phoneHref}
            className="btn btn-ghost"
            onClick={() => trackPhoneClick('hero')}
          >
            {ctaCallLabel}
          </a>
        </div>
        <div className="ads-hero-trust">
          {trustLine.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
