import { Metadata } from 'next';
import EnvironnementPage from './EnvironnementPage';

export const metadata: Metadata = {
  title: 'La Région',
  description: 'Découvrez la région autour du Château de Beaujeu : vignobles de Sancerre, Crottin de Chavignol, Bourges et les Châteaux de la Loire.',
};

export default function Page() {
  return <EnvironnementPage />;
}
