type TrackParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params?: TrackParams): void {
  if (window.dataLayer) {
    window.dataLayer.push({ event: name, ...params });
  } else if (window.gtag) {
    window.gtag('event', name, params);
  }
}

export function trackGenerateLead(service: string): void {
  trackEvent('generate_lead', { service });
}

let formStartTracked = false;

export function trackFormStart(service: string): void {
  if (formStartTracked) return;
  formStartTracked = true;
  trackEvent('form_start', { service });
}

export function resetFormStartTracking(): void {
  formStartTracked = false;
}

export function trackPhoneClick(location: string): void {
  trackEvent('click_phone', { location });
}

export function trackQuoteClick(location: string, service: string): void {
  trackEvent('click_quote', { location, service });
}
