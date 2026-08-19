import type { Translations } from './types';

export const fr: Translations = {
  meta: {
    title: 'Sirius Security — Votre sécurité. Notre engagement.',
    description:
      'Sirius Security — gardiennage statique, inspection de magasin et sécurité événementielle en Belgique. Demandez une offre.',
  },
  skipLink: 'Aller au contenu',
  nav: {
    label: 'Principal',
    home: 'Accueil',
    services: 'Nos services',
    about: 'À propos',
    contact: 'Contact',
    apply: 'Postuler',
    quote: 'Devis',
    cta: 'Demander une offre',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    language: 'Langue',
  },
  footer: {
    tagline:
      'Expertise, innovation et proximité pour des solutions de sécurité sur mesure en Belgique.',
    navigation: 'Navigation',
    services: 'Services',
    contact: 'Contact',
    allServices: 'Tous les services',
    vat: 'TVA',
    authorization: 'N° d’autorisation ministériel',
    privacy: 'Politique de confidentialité',
    cookies: 'Politique cookies',
    legal: 'Mentions légales & RGPD',
  },
  cookies: {
    bannerTitle: 'Cookies & confidentialité',
    bannerText:
      'Nous utilisons des cookies essentiels pour le fonctionnement du site (langue, préférences). En continuant, vous acceptez notre utilisation des cookies conformément à notre politique.',
    accept: 'Tout accepter',
    reject: 'Refuser les non essentiels',
    manage: 'En savoir plus',
    ariaLabel: 'Bandeau de consentement cookies',
  },
  privacy: {
    eyebrow: 'RGPD',
    title: 'Politique de confidentialité',
    lead:
      'Sirius Security s’engage à protéger vos données personnelles conformément au Règlement général sur la protection des données (RGPD) et à la législation belge.',
    sections: [
      {
        title: '1. Responsable du traitement',
        paragraphs: [
          'Le responsable du traitement est {company}, {address}, {city}, Belgique.',
          'TVA : {vat}',
          'Contact : {email} — {phone}',
        ],
      },
      {
        title: '2. Données collectées',
        paragraphs: [
          'Via nos formulaires de contact et de candidature, nous pouvons collecter : nom, prénom, adresse e-mail, numéro de téléphone, objet de la demande, message libre et poste souhaité.',
          'Des données techniques peuvent également être enregistrées de manière limitée : adresse IP, type de navigateur, pages consultées, dans le cadre du bon fonctionnement et de la sécurité du site.',
          'Nous utilisons le stockage local de votre navigateur pour mémoriser votre langue et votre choix en matière de cookies.',
        ],
      },
      {
        title: '3. Finalités et base légale',
        paragraphs: [
          'Vos données sont traitées pour : répondre à vos demandes de contact ou de devis, traiter les candidatures, assurer le fonctionnement du site et respecter nos obligations légales.',
          'Les bases légales applicables sont : l’exécution de mesures précontractuelles (art. 6.1.b RGPD), votre consentement lorsque requis (art. 6.1.a RGPD), et notre intérêt légitime à sécuriser et améliorer nos services (art. 6.1.f RGPD).',
        ],
      },
      {
        title: '4. Durée de conservation',
        paragraphs: [
          'Les demandes de contact sont conservées pendant la durée nécessaire au traitement de la relation commerciale, puis archivées conformément aux obligations légales (maximum 5 ans sauf obligation contraire).',
          'Les candidatures sont conservées jusqu’à 12 mois après le dernier contact, sauf consentement explicite pour une durée plus longue.',
          'Les préférences cookies et de langue sont conservées localement dans votre navigateur jusqu’à suppression manuelle ou expiration.',
        ],
      },
      {
        title: '5. Destinataires et transferts',
        paragraphs: [
          'Vos données sont destinées aux services internes de Sirius Security habilités à les traiter.',
          'Nous ne vendons pas vos données. Aucun transfert hors de l’Espace économique européen n’est effectué sans garanties appropriées.',
          'Des sous-traitants techniques (hébergement, messagerie) peuvent intervenir dans le strict cadre de leurs missions et sous contrat conforme au RGPD.',
        ],
      },
      {
        title: '6. Vos droits',
        paragraphs: [
          'Conformément au RGPD, vous disposez des droits d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité de vos données.',
          'Lorsque le traitement repose sur votre consentement, vous pouvez le retirer à tout moment sans affecter la licéité du traitement antérieur.',
          'Pour exercer vos droits : {email}. Nous répondrons dans un délai d’un mois.',
        ],
      },
      {
        title: '7. Réclamation',
        paragraphs: [
          'Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de l’Autorité de protection des données (APD) : apd-gdp.be.',
        ],
      },
      {
        title: '8. Sécurité',
        paragraphs: [
          'Sirius Security met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre la perte, l’accès non autorisé ou la divulgation.',
          'Dernière mise à jour : août 2025.',
        ],
      },
    ],
  },
  cookiesPage: {
    eyebrow: 'Cookies',
    title: 'Politique cookies',
    lead:
      'Cette page explique comment Sirius Security utilise les cookies et technologies similaires sur son site web.',
    sections: [
      {
        title: '1. Qu’est-ce qu’un cookie ?',
        paragraphs: [
          'Un cookie est un petit fichier texte enregistré sur votre appareil lors de la visite d’un site. Il permet de mémoriser des informations pour améliorer votre expérience ou assurer le fonctionnement du site.',
        ],
      },
      {
        title: '2. Cookies utilisés sur ce site',
        paragraphs: [
          'Ce site utilise uniquement des cookies et stockages locaux strictement nécessaires au fonctionnement. Nous n’utilisons pas de cookies publicitaires ou de traceurs tiers à des fins marketing.',
        ],
      },
      {
        title: '3. Détail des cookies',
        paragraphs: [
          'sirius-locale — mémorise votre langue (FR/NL/EN). Durée : persistant (localStorage). Finalité : fonctionnement du site.',
          'sirius-cookie-consent — enregistre votre choix de consentement cookies. Durée : persistant (localStorage). Finalité : conformité RGPD.',
        ],
      },
      {
        title: '4. Gérer vos préférences',
        paragraphs: [
          'Lors de votre première visite, un bandeau vous permet d’accepter ou de refuser les cookies non essentiels. Vous pouvez à tout moment supprimer les cookies via les paramètres de votre navigateur.',
          'Le refus des cookies non essentiels n’empêche pas la navigation sur le site. Seuls les cookies strictement nécessaires resteront actifs.',
        ],
      },
      {
        title: '5. Contact',
        paragraphs: [
          'Pour toute question relative aux cookies ou à vos données : {email}.',
          'Consultez également notre politique de confidentialité pour plus d’informations sur le traitement de vos données personnelles.',
        ],
      },
    ],
  },
  common: {
    discover: 'Découvrir',
    required: '*',
    requiredFields: '* champs obligatoires',
    send: 'Envoyer',
    contactUs: 'Nous contacter',
    requestQuote: 'Demander une offre',
    seeServices: 'Voir nos services',
    otherRequest: 'Autre demande',
    selectService: 'Sélectionnez un service',
    select: 'Sélectionnez',
    since: 'Depuis',
    tailoredSolutions: 'Solutions sur mesure',
    brussels: 'Belgique',
    brusselsBelgium: 'Belgique',
  },
  home: {
    heroAria: 'Présentation',
    heroEyebrow: 'Sirius Security · Protection professionnelle',
    heroTitle1: 'Votre sécurité.',
    heroTitle2: 'Notre engagement.',
    heroLead:
      'Gardiennage, inspection de magasin et sécurité événementielle pour entreprises, commerces et institutions.',
    discoverServices: 'Découvrir nos services',
    trustBarAria: 'Points clés',
    trustSince: 'Depuis',
    trustAgents: 'Agents professionnels',
    trustTailored: 'Interventions sur mesure',
    trustRegion: 'Belgique',
    servicesEyebrow: 'Nos services',
    servicesTitle:
      'Votre partenaire de confiance pour des solutions de sécurité sur mesure',
    servicesLead:
      'Nous protégeons les personnes et les biens avec des services professionnels adaptés à chaque client. Approche humaine, technologies avancées, réactivité sur le terrain.',
    pillarsEyebrow: 'Pourquoi Sirius Security',
    pillarsTitle: 'Mission, vision et valeurs',
    sectorsEyebrow: 'Sur le terrain',
    sectorsTitle1: 'Des solutions adaptées',
    sectorsTitle2: 'à chaque environnement.',
    ctaEyebrow: 'Clients',
    ctaTitle: 'Un besoin en sécurité ?',
    ctaLead:
      'Parlez-nous de votre site, de votre événement ou de vos besoins. Notre équipe vous proposera une solution adaptée.',
    recruitEyebrow: 'Recrutement',
    recruitTitle1: 'Rejoignez',
    recruitTitle2: 'Sirius Security.',
    recruitText:
      'Vous souhaitez intégrer Sirius Security comme agent de gardiennage, d’inspection ou de sécurité événementielle ?',
  },
  about: {
    eyebrow: 'À propos',
    title: 'Votre partenaire de sécurité fiable et engagé',
    lead: 'Sirius Security s’impose comme une référence en sécurité professionnelle et personnalisée.',
    p1: 'Nous combinons expertise, innovation et proximité pour offrir des solutions sur mesure. En choisissant Sirius Security, vous choisissez un partenaire de confiance, engagé à protéger ce qui vous est cher.',
    teamEyebrow: 'Équipe',
    teamTitle: 'Experte, dédiée, à votre service',
    teamP1:
      'Chaque environnement a ses exigences. Nos équipes interviennent en gardiennage statique, inspection de magasin et sécurité événementielle, avec des agents formés en continu aux techniques avancées : gestion des conflits, urgences et risques spécifiques à votre contexte.',
    methodEyebrow: 'Méthode',
    methodTitle: 'Un service personnalisé, orienté résultats',
    methodP1:
      'Chaque mission commence par une analyse approfondie de vos besoins. Les agents sont choisis selon leurs compétences et leur adéquation. Inspecteurs et responsables de site assurent un suivi régulier pour une sécurité efficace et réactive.',
    methodP2:
      'Transparence, respect des normes, flexibilité : nous construisons une relation de confiance durable grâce à un service irréprochable.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Contactez-nous',
    lead: 'Une question, un devis ou un projet de sécurité ? Notre équipe vous répond rapidement.',
    success:
      'Merci. Votre message a bien été enregistré. Notre équipe vous répondra dans les plus brefs délais.',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'Email',
    phone: 'Téléphone',
    subject: 'Objet de votre demande',
    message: 'Message',
    address: 'Adresse',
    vat: 'TVA',
    sending: 'Envoi en cours…',
    error:
      'Le formulaire est temporairement indisponible. Appelez-nous au 0491 07 65 23 ou écrivez à sales@siriussecurity.be.',
  },
  quote: {
    eyebrow: 'Devis',
    title: 'Demander un devis',
    lead: 'Décrivez votre besoin. Nous vous proposons une offre adaptée, sans engagement.',
    success:
      'Merci. Votre demande de devis a bien été envoyée. Notre équipe vous recontacte rapidement.',
    firstName: 'Prénom',
    lastName: 'Nom',
    company: 'Société / organisation',
    email: 'Email',
    phone: 'Téléphone',
    service: 'Service souhaité',
    site: 'Lieu de la mission',
    start: 'Date de début souhaitée',
    message: 'Détails de votre besoin',
    messagePlaceholder:
      'Type de site, horaires, nombre d’agents, durée, contraintes particulières…',
    submit: 'Envoyer ma demande',
    whyTitle: 'Une offre sur mesure',
    why1: 'Analyse de vos besoins',
    why2: 'Proposition claire et adaptée',
    why3: 'Réponse rapide en Belgique',
    nextTitle: 'Après l’envoi',
    next1: 'Accusé de réception de votre demande',
    next2: 'Échange pour préciser la mission',
    next3: 'Devis personnalisé',
  },
  apply: {
    eyebrow: 'Carrières',
    title: 'Rejoignez notre équipe',
    lead: 'Agents de gardiennage, inspection et sécurité événementielle — développez votre carrière chez Sirius Security.',
    success:
      'Merci pour votre candidature. Nous l’examinerons et reviendrons vers vous si votre profil correspond à nos besoins.',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'Email',
    phone: 'Téléphone',
    role: 'Poste souhaité',
    cv: 'Curriculum vitae',
    cvHint: 'PDF, DOC ou DOCX — 5 Mo maximum',
    message: 'Présentez-vous',
    messagePlaceholder: 'Expérience, disponibilités, langues…',
    note: '* champs obligatoires — vous pouvez aussi écrire à',
    submit: 'Envoyer ma candidature',
    whyJoin: 'Pourquoi nous rejoindre',
    why1: 'Missions variées et formantes',
    why2: 'Équipe professionnelle et bienveillante',
    why3: 'Présence en Belgique',
    hrContact: 'Contact RH',
    roles: {
      gardiennage: 'Agent de gardiennage',
      inspection: 'Agent d’inspection de magasin',
      evenementiel: 'Agent de sécurité événementielle',
      other: 'Autre',
    },
  },
  serviceDetail: {
    eyebrow: 'Nos services',
    extra:
      'Chaque dispositif est conçu avec vous : analyse des risques, dimensionnement des effectifs, protocoles d’intervention et reporting clair.',
    requestQuote: 'Demander un devis',
    othersEyebrow: 'Autres expertises',
    othersTitle: 'Découvrez aussi',
  },
  pillars: [
    {
      label: 'Notre mission',
      title: 'Protection et fiabilité',
      text: 'Quels que soient vos besoins, nous apportons des solutions efficaces et personnalisées.',
    },
    {
      label: 'Notre vision',
      title: 'Efficacité et rigueur',
      text: 'Chaque mission est minutieusement analysée et planifiée, avec votre collaboration.',
    },
    {
      label: 'Nos valeurs',
      title: 'Intégrité et flexibilité',
      text: 'Nous anticipons les imprévus et restons flexibles pour répondre à chacune de vos demandes.',
    },
  ],
  sectors: [
    'Entreprises',
    'Commerces & retail',
    'Événementiel',
    'Institutions',
    'Sites professionnels',
  ],
  services: {
    'gardiennage-statique': {
      title: 'Gardiennage statique',
      short:
        'Nos agents surveillent en permanence vos sites sensibles, gèrent les accès et réagissent rapidement.',
      description:
        'Présence continue sur site, contrôle d’accès, rondes et gestion des situations d’urgence. Une protection visible et rassurante pour vos locaux, infrastructures et équipes.',
    },
    'inspection-magasin': {
      title: 'Inspection de magasin',
      short:
        'Dans la discrétion la plus totale, un agent qualifié agit de manière préventive contre les attitudes suspectes.',
      description:
        'Agents formés à la détection discrète, à la prévention du vol et à l’intervention mesurée. Une présence efficace sans perturber l’expérience client.',
    },
    'securite-evenementielle': {
      title: 'Sécurité événementielle',
      short:
        'Gestion de sécurité complète, adaptée à chaque rassemblement, pour une expérience sans faille.',
      description:
        'De la planification à la clôture : flux, accès, screening et coordination terrain. Concerts, salons, réceptions privées ou événements corporate.',
    },
  },
};
