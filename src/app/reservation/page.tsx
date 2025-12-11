import { Metadata } from 'next';
import ReservationPage from './ReservationPage';

export const metadata: Metadata = {
  title: 'Réservation',
  description: 'Réservez votre séjour au Château de Beaujeu. Chambres d\'hôtes, gîtes et appartement disponibles.',
};

export default function Page() {
  return <ReservationPage />;
}
