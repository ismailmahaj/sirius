import { company } from '../../data/content';
import { trackPhoneClick, trackQuoteClick } from '../../lib/tracking';

type Props = {
  callLabel: string;
  quoteLabel: string;
  service: string;
};

export function AdsMobileStickyCTA({ callLabel, quoteLabel, service }: Props) {
  return (
    <div className="ads-mobile-sticky">
      <a
        href={company.phoneHref}
        className="btn btn-ghost"
        onClick={() => trackPhoneClick('mobile_sticky')}
      >
        {callLabel}
      </a>
      <a
        href="#ads-form"
        className="btn btn-primary"
        onClick={() => trackQuoteClick('mobile_sticky', service)}
      >
        {quoteLabel}
      </a>
    </div>
  );
}
