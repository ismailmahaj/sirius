import { company } from '../../data/content';
import { trackPhoneClick, trackQuoteClick } from '../../lib/tracking';

type Props = {
  title: string;
  text: string;
  ctaQuoteLabel: string;
  ctaCallLabel: string;
  service: string;
};

export function AdsFinalCTA({ title, text, ctaQuoteLabel, ctaCallLabel, service }: Props) {
  return (
    <section className="ads-final-cta">
      <div className="ads-final-cta-content">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="btn-group">
          <a
            href="#ads-form"
            className="btn btn-primary"
            onClick={() => trackQuoteClick('final_cta', service)}
          >
            {ctaQuoteLabel}
          </a>
          <a
            href={company.phoneHref}
            className="btn btn-ghost"
            onClick={() => trackPhoneClick('final_cta')}
          >
            {ctaCallLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
