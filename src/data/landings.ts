export type LandingFAQItem = {
  question: string;
  answer: string;
};

export type LandingConfig = {
  slug: string;
  serviceSlug: string;
  image: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    trustLine: string[];
  };
  problem: {
    title: string;
    text: string;
    points: string[];
  };
  needs: {
    title: string;
    items: string[];
  };
  faq: LandingFAQItem[];
  finalCta: {
    title: string;
    text: string;
  };
};

export type LandingOverrides = {
  location?: string;
  h1?: string;
  seo?: Partial<LandingConfig['seo']>;
  faq?: LandingFAQItem[];
};

export const landingConfigs: Record<string, LandingConfig> = {
  'gardiennage-statique': {
    slug: 'gardiennage-statique',
    serviceSlug: 'gardiennage-statique',
    image: '/img/agent-statique.png',
    seo: {
      title: 'Entreprise de gardiennage en Belgique | Sirius Security',
      description:
        "Besoin d'agents de gardiennage pour votre entreprise ou votre site ? Découvrez les solutions Sirius Security en Belgique et demandez une offre.",
    },
    hero: {
      eyebrow: 'GARDIENNAGE PROFESSIONNEL',
      h1: 'Agents de gardiennage pour entreprises partout en Belgique',
      lead: 'Sécurisez vos locaux, vos accès et vos installations avec une solution de gardiennage adaptée à votre activité et à votre site.',
      trustLine: [
        'Intervention en Belgique',
        'Solution adaptée à votre site',
        'Contact direct',
      ],
    },
    problem: {
      title: 'Une présence de sécurité adaptée à votre environnement',
      text: 'Chaque entreprise présente des contraintes différentes. Sirius Security adapte le dispositif de gardiennage aux spécificités de votre site.',
      points: [
        'Accès et visiteurs',
        'Horaires et plannings',
        'Zones sensibles',
        'Équipements et marchandises',
        'Flux de personnes',
        'Contraintes réglementaires',
      ],
    },
    needs: {
      title: 'Pour quels besoins ?',
      items: [
        'Entreprises',
        'Bureaux',
        'Sites professionnels',
        'Entrepôts',
        'Sites industriels',
        'Bâtiments',
        'Contrôle des accès',
        'Surveillance de zones sensibles',
      ],
    },
    faq: [
      {
        question: 'Quels types de sites pouvez-vous sécuriser ?',
        answer:
          'Sirius Security intervient sur tous types de sites professionnels en Belgique : entreprises, bureaux, entrepôts, sites industriels et bâtiments. Le dispositif est adapté à chaque environnement.',
      },
      {
        question: 'Intervenez-vous partout en Belgique ?',
        answer:
          "Oui, Sirius Security propose ses services de gardiennage sur l'ensemble du territoire belge.",
      },
      {
        question: 'Comment déterminez-vous le dispositif nécessaire ?',
        answer:
          'Nous analysons votre besoin, les caractéristiques de votre site et vos contraintes afin de proposer une solution de gardiennage adaptée.',
      },
      {
        question: 'Comment obtenir une offre de gardiennage ?',
        answer:
          'Remplissez le formulaire sur cette page ou appelez-nous directement. Nous vous recontactons rapidement pour étudier votre besoin.',
      },
    ],
    finalCta: {
      title: 'Vous recherchez une solution de gardiennage ?',
      text: 'Expliquez-nous votre besoin et recevez une proposition adaptée à votre site et à votre activité.',
    },
  },

  'inspection-magasin': {
    slug: 'inspection-magasin',
    serviceSlug: 'inspection-magasin',
    image: '/img/inspecteur-magasin.png',
    seo: {
      title: 'Sécurité et gardiennage magasin en Belgique | Sirius Security',
      description:
        'Sécurité, surveillance et prévention pour commerces et magasins en Belgique. Découvrez Sirius Security et demandez une offre adaptée.',
    },
    hero: {
      eyebrow: 'SÉCURITÉ POUR COMMERCES',
      h1: 'Protégez votre commerce contre le vol et les incidents',
      lead: "Des agents de gardiennage pour contribuer à la prévention, à la surveillance et à la sécurité de votre établissement en Belgique.",
      trustLine: [
        'Présence professionnelle',
        'Prévention',
        'Solution adaptée à votre établissement',
      ],
    },
    problem: {
      title: 'Une présence professionnelle dans votre commerce',
      text: "La sécurité d'un commerce repose sur une présence adaptée et des protocoles éprouvés. Sirius Security vous accompagne avec des agents formés.",
      points: [
        'Détection discrète',
        'Prévention du vol',
        'Intervention mesurée',
        'Expérience client préservée',
        'Analyse des risques',
        'Reporting',
      ],
    },
    needs: {
      title: 'Une solution adaptée à votre établissement',
      items: [
        'Magasins',
        'Boutiques',
        'Retail',
        'Supermarchés',
        'Espaces commerciaux',
        'Showrooms',
      ],
    },
    faq: [
      {
        question: "Quel est le rôle d'un agent de sécurité en magasin ?",
        answer:
          "L'agent assure une présence préventive, contribue à la surveillance de l'espace de vente et intervient de manière mesurée en cas d'incident.",
      },
      {
        question:
          'La solution peut-elle être adaptée à la taille du commerce ?',
        answer:
          'Oui, le dispositif est dimensionné en fonction de la surface, de la fréquentation et des besoins spécifiques de votre commerce.',
      },
      {
        question: 'Intervenez-vous pour les commerces en Belgique ?',
        answer:
          "Sirius Security propose ses services de sécurité pour les commerces sur l'ensemble du territoire belge.",
      },
      {
        question: 'Comment demander une offre ?',
        answer:
          'Remplissez le formulaire sur cette page ou contactez-nous par téléphone. Nous étudions votre besoin et vous transmettons une proposition.',
      },
    ],
    finalCta: {
      title:
        'Vous recherchez une solution de sécurité pour votre commerce ?',
      text: 'Décrivez-nous votre établissement et vos besoins. Nous vous proposons une solution adaptée.',
    },
  },

  'securite-evenementielle': {
    slug: 'securite-evenementielle',
    serviceSlug: 'securite-evenementielle',
    image: '/img/image-event.png',
    seo: {
      title: 'Sécurité événementielle en Belgique | Sirius Security',
      description:
        "Besoin d'agents de sécurité pour un événement en Belgique ? Découvrez les solutions de Sirius Security et demandez votre offre.",
    },
    hero: {
      eyebrow: 'SÉCURITÉ ÉVÉNEMENTIELLE',
      h1: 'Des agents de sécurité pour vos événements en Belgique',
      lead: "Une solution de sécurité adaptée à votre événement, à votre public, à votre site et à vos besoins d'accès et de surveillance.",
      trustLine: [
        'Événements professionnels',
        'Gestion des accès',
        'Présence de sécurité',
      ],
    },
    problem: {
      title: 'Une sécurité adaptée à votre événement',
      text: 'Chaque événement présente des enjeux de sécurité spécifiques. Sirius Security adapte le dispositif à votre contexte.',
      points: [
        'Gestion des accès',
        'Surveillance',
        'Présence préventive',
        'Gestion des flux',
        'Sécurisation des zones',
        'Contrôle des accès',
      ],
    },
    needs: {
      title: 'Pour quels événements ?',
      items: [
        "Événements d'entreprise",
        'Conférences',
        'Salons professionnels',
        'Événements publics',
        'Événements privés',
        'Réceptions',
      ],
    },
    faq: [
      {
        question:
          "Pour quels types d'événements proposez-vous vos services ?",
        answer:
          'Sirius Security intervient sur des événements professionnels, salons, conférences, événements publics et privés, partout en Belgique.',
      },
      {
        question: "Pouvez-vous gérer les accès d'un événement ?",
        answer:
          'Oui, nos agents peuvent assurer le contrôle des accès, la vérification des invitations et la gestion des flux de visiteurs.',
      },
      {
        question: "Comment déterminer le nombre d'agents nécessaires ?",
        answer:
          "Le dimensionnement dépend du type d'événement, du nombre de participants, du lieu et des missions souhaitées. Nous analysons votre besoin pour proposer un dispositif adapté.",
      },
      {
        question: 'Comment demander une offre pour un événement ?',
        answer:
          'Remplissez le formulaire sur cette page en précisant les détails de votre événement, ou appelez-nous directement.',
      },
    ],
    finalCta: {
      title: 'Vous organisez un événement ?',
      text: 'Décrivez-nous votre projet et vos besoins en sécurité. Nous vous proposons une solution adaptée.',
    },
  },
};

export const adsSharedTexts = {
  whySirius: {
    title: 'Pourquoi faire appel à Sirius Security ?',
    items: [
      {
        title: 'Une approche adaptée',
        text: 'Le dispositif est pensé en fonction du site et du besoin.',
      },
      {
        title: 'Une présence professionnelle',
        text: "Une solution de sécurité intégrée à l'environnement du client.",
      },
      {
        title: 'Une couverture en Belgique',
        text: 'Sirius Security propose ses services sur le territoire belge.',
      },
      {
        title: 'Un contact direct',
        text: 'Expliquez votre besoin et obtenez une proposition adaptée.',
      },
    ],
  },
  process: {
    title: 'Votre solution de sécurité en 3 étapes',
    steps: [
      {
        number: '01',
        title: 'Expliquez-nous votre besoin',
        text: 'Type de site, localisation, horaires et missions recherchées.',
      },
      {
        number: '02',
        title: 'Analyse de votre demande',
        text: "Sirius étudie le besoin afin d'identifier une solution adaptée.",
      },
      {
        number: '03',
        title: 'Recevez votre offre',
        text: 'Une proposition est préparée en fonction des informations communiquées.',
      },
    ],
  },
  form: {
    title: 'Demandez votre offre',
    lead: 'Décrivez-nous votre besoin. Nous vous recontactons pour étudier la solution adaptée à votre situation.',
    fields: {
      name: 'Nom et prénom',
      company: 'Entreprise',
      phone: 'Téléphone',
      email: 'Email',
      city: 'Ville / commune',
      service: 'Service recherché',
      message: 'Message / besoin',
    },
    serviceOptions: [
      { value: 'gardiennage-statique', label: 'Gardiennage statique' },
      { value: 'inspection-magasin', label: 'Inspection de magasin' },
      {
        value: 'securite-evenementielle',
        label: 'Sécurité événementielle',
      },
      { value: 'autre', label: 'Autre' },
    ],
    submit: 'DEMANDER MON OFFRE',
    privacy:
      'Vos informations sont utilisées uniquement pour traiter votre demande.',
    success: 'Merci. Votre demande a bien été envoyée.',
    error:
      'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.',
    sending: 'Envoi en cours…',
  },
  cta: {
    requestQuote: 'DEMANDER UNE OFFRE',
    callUs: 'NOUS APPELER',
    callSirius: 'APPELER SIRIUS SECURITY',
  },
  mobileSticky: {
    call: 'APPELER',
    quote: 'DEMANDER UNE OFFRE',
  },
};
