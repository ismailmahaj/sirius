export const COOKIE_CONSENT_KEY = 'sirius-cookie-consent';

export type CookieConsent = 'accepted' | 'rejected';

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  const value = localStorage.getItem(COOKIE_CONSENT_KEY);
  return value === 'accepted' || value === 'rejected' ? value : null;
}

export function setCookieConsent(value: CookieConsent) {
  localStorage.setItem(COOKIE_CONSENT_KEY, value);
}
