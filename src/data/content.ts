export const company = {
  name: 'Sirius Security',
  phone: 'XXXXXXXXX',
  phoneHref: 'tel:XXXXXXXXX',
  email: 'XXXXXXXXX',
  emailHref: 'mailto:XXXXXXXXX',
  address: 'XXXXXXXXX',
  city: 'XXXXXXXXX',
  authorization: 'XXXXXXXXX',
  founded: 2017,
};

export type Service = {
  id: string;
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    id: '1',
    slug: 'gardiennage-statique',
    title: 'Gardiennage statique',
    short:
      'Nos agents surveillent en permanence vos sites sensibles, gèrent les accès et réagissent rapidement.',
    description:
      'Présence continue sur site, contrôle d’accès, rondes et gestion des situations d’urgence. Une protection visible et rassurante pour vos locaux, infrastructures et équipes.',
    image:
      'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '2',
    slug: 'inspection-magasin',
    title: 'Inspection de magasin',
    short:
      'Dans la discrétion la plus totale, un agent qualifié agit de manière préventive contre les attitudes suspectes.',
    description:
      'Agents formés à la détection discrète, à la prévention du vol et à l’intervention mesurée. Une présence efficace sans perturber l’expérience client.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '3',
    slug: 'securite-evenementielle',
    title: 'Sécurité événementielle',
    short:
      'Gestion de sécurité complète, adaptée à chaque rassemblement, pour une expérience sans faille.',
    description:
      'De la planification à la clôture : flux, accès, screening et coordination terrain. Concerts, salons, réceptions privées ou événements corporate.',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '4',
    slug: 'patrouille-mobile',
    title: 'Patrouille mobile',
    short:
      'Rondes stratégiques pour surveiller vos sites, dissuader les intrusions et intervenir à tout moment.',
    description:
      'Équipes mobiles réactives, rondes planifiées ou aléatoires, reports détaillés et intervention rapide sur alarme ou incident.',
    image:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '5',
    slug: 'accueil-reception',
    title: 'Accueil et réception',
    short:
      'Un accueil chaleureux et sécurisé : accès, orientation et image de marque soignée.',
    description:
      'Agents polyvalents, formés à l’accueil professionnel et à la sécurisation des flux visiteurs, pour une première impression impeccable.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '6',
    slug: 'protection-rapprochee',
    title: 'Protection rapprochée',
    short:
      'Protection personnalisée et discrète pour vos déplacements et événements sensibles.',
    description:
      'Agents qualifiés pour environnements diplomatiques et privés. Discrétion, anticipation des risques et accompagnement sur mesure.',
    image:
      'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1400&q=80',
  },
];

export const pillars = [
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
];

export const sectors = [
  'Entreprises',
  'Commerces & retail',
  'Événementiel',
  'Institutions',
  'Sites professionnels',
  'Accueil & réception',
];

/** True when company.authorization looks like a real value (not a placeholder). */
export function hasRealAuthorization(): boolean {
  const value = company.authorization?.trim() ?? '';
  return value.length > 0 && !/^X+$/i.test(value);
}
