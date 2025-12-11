import { Hebergement } from '@/types';

export const hebergements: Hebergement[] = [
  {
    id: '1',
    slug: 'maison-du-jardin',
    nom: 'Maison du Jardin',
    type: 'gite',
    capacite: 20,
    chambres: 10,
    sallesDeBain: 9,
    anneeRenovation: 2014,
    equipements: [
      '10 chambres séparées',
      '9 douches individuelles',
      'Salon commun',
      'Wi-Fi gratuit',
      'Chauffage',
      'Parking',
    ],
    description: 'Entièrement rénovée en 2014, la Maison du Jardin peut accueillir jusqu\'à 20 personnes dans 10 chambres séparées. Idéale pour les groupes lors de mariages ou d\'événements, elle dispose de 9 douches individuelles et d\'un grand salon commun pour les moments de convivialité.',
    images: ['/images/hebergements/maison-jardin-1.jpg', '/images/hebergements/maison-jardin-2.jpg'],
  },
  {
    id: '2',
    slug: 'maison-du-pigeonnier',
    nom: 'Maison du Pigeonnier',
    type: 'gite',
    capacite: 4,
    chambres: 2,
    sallesDeBain: 1,
    anneeRenovation: 2016,
    equipements: [
      '1 chambre double',
      '1 chambre twin',
      '1 salle de bain',
      'Cuisine indépendante équipée',
      'Wi-Fi gratuit',
      'Chauffage',
      'Parking',
    ],
    description: 'Charmant gîte rénové en 2016, la Maison du Pigeonnier est parfaite pour une famille ou un groupe d\'amis de 4 personnes. Elle dispose de 2 chambres (une double et une twin), d\'une salle de bain et d\'une cuisine indépendante entièrement équipée pour des séjours en toute autonomie.',
    images: ['/images/hebergements/pigeonnier-1.jpg', '/images/hebergements/pigeonnier-2.jpg'],
  },
  {
    id: '3',
    slug: 'appartement-chateau',
    nom: 'Appartement dans le Château',
    type: 'appartement',
    capacite: 6,
    chambres: 3,
    sallesDeBain: 2,
    equipements: [
      '3 chambres',
      '2 salles de bain',
      'Accès privatif',
      'Salon',
      'Wi-Fi gratuit',
      'Chauffage',
    ],
    description: 'Situé au sein même du château, cet appartement indépendant de 3 chambres peut accueillir jusqu\'à 6 personnes. Avec son accès privatif, il offre l\'intimité d\'un logement indépendant tout en bénéficiant du cadre exceptionnel du monument historique.',
    images: ['/images/hebergements/appartement-1.jpg', '/images/hebergements/appartement-2.jpg'],
  },
];

export function getHebergementBySlug(slug: string): Hebergement | undefined {
  return hebergements.find((h) => h.slug === slug);
}

export const capaciteTotale = {
  chambresHotes: 12, // 5 chambres dans le château
  appartement: 6,
  gites: 24, // Maison du Jardin (20) + Pigeonnier (4)
  total: 42,
};
