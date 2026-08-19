import { localeLabels, locales, type Locale } from '../i18n';
import { useTranslation } from '../i18n/LanguageProvider';

type Props = {
  className?: string;
  compact?: boolean;
};

export function LanguageSwitcher({ className = '', compact = false }: Props) {
  const { locale, setLocale, t } = useTranslation();

  return (
    <div
      className={`lang-switcher${compact ? ' lang-switcher--compact' : ''}${className ? ` ${className}` : ''}`}
      role="group"
      aria-label={t.nav.language}
    >
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          className={`lang-switcher-btn${locale === code ? ' is-active' : ''}`}
          aria-pressed={locale === code}
          aria-label={localeLabels[code]}
          onClick={() => setLocale(code as Locale)}
        >
          {localeLabels[code]}
        </button>
      ))}
    </div>
  );
}
