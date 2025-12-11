// Types pour les chambres
export interface Chambre {
  id: string;
  slug: string;
  nom: string;
  type: 'chambre' | 'suite';
  capacite: {
    min: number;
    max: number;
  };
  vue: string;
  superficie?: string;
  equipements: string[];
  particularite?: string;
  style?: string;
  tarifParNuit: number;
  images: string[];
  description: string;
}

// Types pour les hébergements
export interface Hebergement {
  id: string;
  slug: string;
  nom: string;
  type: 'gite' | 'appartement';
  capacite: number;
  chambres: number;
  sallesDeBain: number;
  anneeRenovation?: number;
  equipements: string[];
  description: string;
  images: string[];
}

// Types pour les témoignages
export interface Testimonial {
  id: string;
  auteur: string;
  source: 'Booking' | 'Mariages.net' | 'Google' | 'Autre';
  note?: number;
  texte: string;
  date?: string;
  type: 'chambre' | 'mariage' | 'seminaire' | 'general';
}

// Types pour la navigation
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Types pour les événements
export interface Evenement {
  id: string;
  type: 'mariage' | 'seminaire';
  titre: string;
  description: string;
  capacite: {
    assis: number;
    cocktail: number;
  };
  espaces: string[];
  prestations: string[];
  images: string[];
}

// Types pour les formulaires
export interface ContactFormData {
  nom: string;
  email: string;
  telephone: string;
  objet: 'chambres' | 'mariages' | 'seminaires' | 'autre';
  message: string;
}

export interface ReservationFormData {
  hebergement: string;
  dateArrivee: string;
  dateDepart: string;
  adultes: number;
  enfants: number;
  nom: string;
  email: string;
  telephone: string;
  message?: string;
  tableDhotes: boolean;
  animaux: boolean;
}

export interface DevisFormData {
  type: 'mariage' | 'seminaire';
  nom: string;
  email: string;
  telephone: string;
  date: string;
  nombrePersonnes: number;
  message: string;
}

// Types pour les équipements/services
export interface Equipement {
  id: string;
  nom: string;
  icone: string;
  description?: string;
}

// Types pour les activités régionales
export interface Activite {
  id: string;
  nom: string;
  description: string;
  distance?: string;
  icone: string;
}
