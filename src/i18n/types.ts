export type Locale = 'fr' | 'nl' | 'en';

export type ServiceSlug =
  | 'gardiennage-statique'
  | 'inspection-magasin'
  | 'securite-evenementielle';

export type ServiceTranslation = {
  title: string;
  short: string;
  description: string;
};

export type LegalSection = {
  title: string;
  paragraphs: string[];
};

export type Translations = {
  meta: {
    title: string;
    description: string;
  };
  skipLink: string;
  nav: {
    label: string;
    home: string;
    services: string;
    about: string;
    contact: string;
    apply: string;
    quote: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
    language: string;
  };
  footer: {
    tagline: string;
    navigation: string;
    services: string;
    contact: string;
    allServices: string;
    vat: string;
    authorization: string;
    privacy: string;
    cookies: string;
    legal: string;
  };
  cookies: {
    bannerTitle: string;
    bannerText: string;
    accept: string;
    reject: string;
    manage: string;
    ariaLabel: string;
  };
  privacy: {
    eyebrow: string;
    title: string;
    lead: string;
    sections: LegalSection[];
  };
  cookiesPage: {
    eyebrow: string;
    title: string;
    lead: string;
    sections: LegalSection[];
  };
  common: {
    discover: string;
    required: string;
    requiredFields: string;
    send: string;
    contactUs: string;
    requestQuote: string;
    seeServices: string;
    otherRequest: string;
    selectService: string;
    select: string;
    since: string;
    tailoredSolutions: string;
    brussels: string;
    brusselsBelgium: string;
  };
  home: {
    heroAria: string;
    heroEyebrow: string;
    heroTitle1: string;
    heroTitle2: string;
    heroLead: string;
    discoverServices: string;
    trustBarAria: string;
    trustSince: string;
    trustAgents: string;
    trustTailored: string;
    trustRegion: string;
    servicesEyebrow: string;
    servicesTitle: string;
    servicesLead: string;
    pillarsEyebrow: string;
    pillarsTitle: string;
    sectorsEyebrow: string;
    sectorsTitle1: string;
    sectorsTitle2: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaLead: string;
    recruitEyebrow: string;
    recruitTitle1: string;
    recruitTitle2: string;
    recruitText: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    p1: string;
    teamEyebrow: string;
    teamTitle: string;
    teamP1: string;
    methodEyebrow: string;
    methodTitle: string;
    methodP1: string;
    methodP2: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    success: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    address: string;
    vat: string;
    sending: string;
    error: string;
  };
  quote: {
    eyebrow: string;
    title: string;
    lead: string;
    success: string;
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    phone: string;
    service: string;
    site: string;
    start: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    whyTitle: string;
    why1: string;
    why2: string;
    why3: string;
    nextTitle: string;
    next1: string;
    next2: string;
    next3: string;
  };
  apply: {
    eyebrow: string;
    title: string;
    lead: string;
    success: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
    cv: string;
    cvHint: string;
    message: string;
    messagePlaceholder: string;
    note: string;
    submit: string;
    whyJoin: string;
    why1: string;
    why2: string;
    why3: string;
    hrContact: string;
    roles: {
      gardiennage: string;
      inspection: string;
      evenementiel: string;
      other: string;
    };
  };
  serviceDetail: {
    eyebrow: string;
    extra: string;
    requestQuote: string;
    othersEyebrow: string;
    othersTitle: string;
  };
  pillars: Array<{ label: string; title: string; text: string }>;
  sectors: string[];
  services: Record<ServiceSlug, ServiceTranslation>;
};
