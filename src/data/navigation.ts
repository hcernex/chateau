import { NavItem } from '@/types';

export const navigation: NavItem[] = [
  {
    label: 'Accueil',
    href: '/',
  },
  {
    label: 'Chambres',
    href: '/chambres',
    children: [
      { label: 'Toutes les chambres', href: '/chambres' },
      { label: 'Suite La Tour', href: '/chambres/suite-la-tour' },
      { label: 'Chambre Louis XVI', href: '/chambres/chambre-louis-xvi' },
      { label: 'Chambre Jaune', href: '/chambres/chambre-jaune' },
      { label: 'Suite Jaune', href: '/chambres/suite-jaune' },
      { label: 'Chambre Empire', href: '/chambres/chambre-empire' },
    ],
  },
  {
    label: 'Hébergements',
    href: '/hebergements',
    children: [
      { label: 'Vue d\'ensemble', href: '/hebergements' },
      { label: 'Gîtes', href: '/hebergements/gites' },
      { label: 'Appartement', href: '/hebergements/appartement' },
    ],
  },
  {
    label: 'Événements',
    href: '/evenements/mariages',
    children: [
      { label: 'Mariages', href: '/evenements/mariages' },
      { label: 'Séminaires', href: '/evenements/seminaires' },
    ],
  },
  {
    label: 'Le Domaine',
    href: '/domaine/histoire',
    children: [
      { label: 'Histoire', href: '/domaine/histoire' },
      { label: 'Galerie', href: '/domaine/galerie' },
      { label: 'La Région', href: '/domaine/environnement' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const footerLinks = {
  hebergements: [
    { label: 'Chambres d\'hôtes', href: '/chambres' },
    { label: 'Gîtes', href: '/hebergements/gites' },
    { label: 'Appartement', href: '/hebergements/appartement' },
    { label: 'Réserver', href: '/reservation' },
  ],
  evenements: [
    { label: 'Mariages', href: '/evenements/mariages' },
    { label: 'Séminaires', href: '/evenements/seminaires' },
    { label: 'Demander un devis', href: '/contact' },
  ],
  informations: [
    { label: 'Histoire du château', href: '/domaine/histoire' },
    { label: 'Galerie photos', href: '/domaine/galerie' },
    { label: 'La région', href: '/domaine/environnement' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
    { label: 'CGV', href: '/cgv' },
  ],
};

export const contactInfo = {
  nom: 'Château de Beaujeu',
  adresse: '18300 Sens-Beaujeu, France',
  telephone: '+33 2 48 79 07 95',
  email: 'annecharlotte@chateau-de-beaujeu.com',
  whatsapp: '+33248790795', // Format sans espaces pour le lien WhatsApp
  gps: {
    lat: 47.32482,
    lng: 2.70197,
  },
  horaires: {
    arrivee: '16h00',
    depart: '12h00',
  },
  reseauxSociaux: {
    facebook: 'https://www.facebook.com/chateaudebeaujeu',
    instagram: 'https://www.instagram.com/chateaudebeaujeu',
  },
};
