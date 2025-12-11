import { Chambre } from '@/types';

export const chambres: Chambre[] = [
  {
    id: '1',
    slug: 'suite-la-tour',
    nom: 'Suite La Tour',
    type: 'suite',
    capacite: { min: 2, max: 4 },
    vue: 'Rivière et jardin (exposition Sud)',
    superficie: '~40m²',
    equipements: [
      'Salle de bains privée avec baignoire',
      'Bureau',
      'Armoire',
      'Wi-Fi gratuit',
      'Linge de maison',
      'Produits d\'accueil',
    ],
    particularite: 'Située dans la tour historique, décor authentique 1810',
    tarifParNuit: 180,
    images: ['/images/chambres/chambre-toile-jouy.jpg', '/images/salle-manger.jpg'],
    description: 'Nichée dans la tour historique du château, cette suite de caractère offre une vue imprenable sur la rivière et le jardin. Le décor authentique datant de 1810 vous transporte dans une autre époque, tout en bénéficiant du confort moderne. Composée de deux pièces communicantes, elle peut accueillir jusqu\'à 4 personnes.',
  },
  {
    id: '2',
    slug: 'chambre-louis-xvi',
    nom: 'Chambre Louis XVI',
    type: 'chambre',
    capacite: { min: 2, max: 2 },
    vue: 'Cour intérieure',
    equipements: [
      'Salle de bains privée',
      'Bureau',
      'Armoire',
      'Wi-Fi gratuit',
      'Linge de maison',
      'Produits d\'accueil',
    ],
    style: 'Mobilier Louis XVI d\'époque',
    tarifParNuit: 130,
    images: ['/images/chambres/chambre-toile-jouy.jpg', '/images/salle-petit-dejeuner.jpg'],
    description: 'Cette chambre élégante est meublée dans le plus pur style Louis XVI avec des pièces d\'époque soigneusement sélectionnées. La vue sur la cour intérieure offre un cadre paisible et intimiste. Une chambre idéale pour les amateurs d\'histoire et de raffinement.',
  },
  {
    id: '3',
    slug: 'chambre-jaune',
    nom: 'Chambre Jaune',
    type: 'chambre',
    capacite: { min: 2, max: 2 },
    vue: 'Jardin',
    equipements: [
      'Salle de bains privée',
      'Wi-Fi gratuit',
      'Linge de maison',
      'Produits d\'accueil',
    ],
    style: 'Tons jaunes, atmosphère lumineuse',
    tarifParNuit: 120,
    images: ['/images/chambres/chambre-toile-jouy.jpg', '/images/chateau-tours.jpg'],
    description: 'Baignée de lumière grâce à ses tons jaunes chaleureux, cette chambre offre une atmosphère joyeuse et apaisante. Sa vue sur le jardin vous permet de profiter du cadre verdoyant du domaine dès votre réveil.',
  },
  {
    id: '4',
    slug: 'suite-jaune',
    nom: 'Suite Jaune',
    type: 'suite',
    capacite: { min: 2, max: 4 },
    vue: 'Sud, rivière et jardin',
    equipements: [
      'Salle de bains privée',
      'Espace salon',
      'Wi-Fi gratuit',
      'Linge de maison',
      'Produits d\'accueil',
    ],
    tarifParNuit: 160,
    images: ['/images/chambres/chambre-toile-jouy.jpg', '/images/allee-arbres.jpg'],
    description: 'Cette suite familiale spacieuse combine un espace nuit confortable et un salon cosy. Son exposition plein sud offre une vue magnifique sur la rivière et le jardin, avec une luminosité exceptionnelle tout au long de la journée.',
  },
  {
    id: '5',
    slug: 'chambre-empire',
    nom: 'Chambre Empire',
    type: 'chambre',
    capacite: { min: 2, max: 2 },
    vue: 'Parc',
    equipements: [
      'Salle de bains privée',
      'Wi-Fi gratuit',
      'Linge de maison',
      'Produits d\'accueil',
    ],
    style: 'Décoration Empire (début XIXe)',
    tarifParNuit: 130,
    images: ['/images/chambres/chambre-toile-jouy.jpg', '/images/domaine/parc-pigeonnier.jpg'],
    description: 'Décorée dans le style Empire du début du XIXe siècle, cette chambre évoque l\'élégance et la grandeur de cette époque fastueuse. Sa vue sur le parc arboré offre un spectacle changeant au fil des saisons.',
  },
];

export function getChambreBySlug(slug: string): Chambre | undefined {
  return chambres.find((chambre) => chambre.slug === slug);
}

export function getAllChambresSlugs(): string[] {
  return chambres.map((chambre) => chambre.slug);
}
