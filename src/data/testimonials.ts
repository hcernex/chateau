import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    auteur: 'Marie & Pierre',
    source: 'Mariages.net',
    note: 5,
    texte: 'Un cadre magique pour notre mariage ! Le château et son parc ont offert un décor de conte de fées à notre union. L\'équipe a été aux petits soins et tous nos invités ont été émerveillés.',
    date: '2024-09',
    type: 'mariage',
  },
  {
    id: '2',
    auteur: 'François D.',
    source: 'Booking',
    note: 9.5,
    texte: 'Le charme du château, la passion qui anime les propriétaires... Un séjour hors du temps dans un monument historique authentique. Le petit-déjeuner dans la grande salle à manger est un moment privilégié.',
    date: '2024-10',
    type: 'chambre',
  },
  {
    id: '3',
    auteur: 'Sophie L.',
    source: 'Google',
    note: 5,
    texte: 'Expérience unique dans un monument historique. Les chambres sont décorées avec goût et le parc est magnifique. À seulement quelques minutes des vignobles de Sancerre, c\'est l\'endroit idéal pour un week-end romantique.',
    date: '2024-08',
    type: 'chambre',
  },
  {
    id: '4',
    auteur: 'Jean-Marc B.',
    source: 'Google',
    note: 5,
    texte: 'Nous avons organisé notre séminaire de direction au château. Le cadre inspirant et le calme absolu ont permis des échanges constructifs. L\'hébergement sur place a renforcé la cohésion de l\'équipe.',
    date: '2024-11',
    type: 'seminaire',
  },
  {
    id: '5',
    auteur: 'Claire & Thomas',
    source: 'Mariages.net',
    note: 5,
    texte: 'La salle de réception est sublime, les caves voûtées ont fait sensation pour notre cocktail. Nous avons pu privatiser le domaine tout le week-end, un vrai bonheur pour nos familles.',
    date: '2024-07',
    type: 'mariage',
  },
  {
    id: '6',
    auteur: 'Isabelle M.',
    source: 'Booking',
    note: 10,
    texte: 'La Suite La Tour est absolument magnifique ! Vue imprenable, décoration d\'époque, salle de bain avec baignoire... Un vrai voyage dans le temps avec tout le confort moderne.',
    date: '2024-06',
    type: 'chambre',
  },
];

export function getTestimonialsByType(type: Testimonial['type']): Testimonial[] {
  return testimonials.filter((t) => t.type === type);
}
