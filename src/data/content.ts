export const company = {
  name: 'Sirius Security',
  phone: '0491 07 65 23',
  phoneHref: 'tel:+32491076523',
  email: 'sales@siriussecurity.be',
  emailHref: 'mailto:sales@siriussecurity.be',
  address: 'Boulevard Emile Bockstael 155',
  city: '1020 Laeken',
  vat: 'BE1002.244.877',
  authorization: '',
  founded: 2025,
};

export type ServiceMeta = {
  id: string;
  slug: string;
  image: string;
};

export const servicesMeta: ServiceMeta[] = [
  {
    id: '1',
    slug: 'gardiennage-statique',
    image: '/img/agent-statique.png',
  },
  {
    id: '2',
    slug: 'inspection-magasin',
    image: '/img/inspecteur-magasin.png',
  },
  {
    id: '3',
    slug: 'securite-evenementielle',
    image: '/img/image-event.png',
  },
];

/** True when company.authorization looks like a real value (not a placeholder). */
export function hasRealAuthorization(): boolean {
  const value = company.authorization?.trim() ?? '';
  return value.length > 0 && !/^X+$/i.test(value);
}
