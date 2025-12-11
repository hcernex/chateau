import { Metadata } from 'next';
import GitesPage from './GitesPage';

export const metadata: Metadata = {
  title: 'Gîtes',
  description: 'Découvrez nos gîtes au Château de Beaujeu : Maison du Jardin (20 personnes) et Pigeonnier (4 personnes). Idéal pour les groupes et événements.',
};

export default function Page() {
  return <GitesPage />;
}
