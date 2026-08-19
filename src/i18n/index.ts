import { en } from './en';
import { fr } from './fr';
import { nl } from './nl';
import type { Locale, ServiceSlug, Translations } from './types';

export type { Locale, ServiceSlug, Translations };

export const locales: Locale[] = ['fr', 'nl', 'en'];

export const localeLabels: Record<Locale, string> = {
  fr: 'FR',
  nl: 'NL',
  en: 'EN',
};

export const translations: Record<Locale, Translations> = { fr, nl, en };

export const defaultLocale: Locale = 'fr';

export const serviceSlugs: ServiceSlug[] = [
  'gardiennage-statique',
  'inspection-magasin',
  'securite-evenementielle',
];

export function isValidLocale(value: string | null): value is Locale {
  return value === 'fr' || value === 'nl' || value === 'en';
}

export function getStoredLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale;
  const stored = localStorage.getItem('sirius-locale');
  return isValidLocale(stored) ? stored : defaultLocale;
}

export function getServiceTranslation(
  t: Translations,
  slug: string,
): Translations['services'][ServiceSlug] | undefined {
  if (slug in t.services) {
    return t.services[slug as ServiceSlug];
  }
  return undefined;
}
