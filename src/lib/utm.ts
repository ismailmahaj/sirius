const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'gbraid',
  'wbraid',
] as const;

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

const STORAGE_KEY = 'sirius-utm';

export function captureUtmParams(): void {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  const captured: UtmParams = {};
  let hasAny = false;
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) {
      captured[key] = value;
      hasAny = true;
    }
  }
  if (hasAny) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(captured));
    } catch {
      /* quota exceeded */
    }
  }
}

export function getUtmParams(): UtmParams {
  if (typeof window === 'undefined') return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UtmParams) : {};
  } catch {
    return {};
  }
}
