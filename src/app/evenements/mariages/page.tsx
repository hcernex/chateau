import { Metadata } from 'next';
import MariagesPage from './MariagesPage';

export const metadata: Metadata = {
  title: 'Mariages',
  description: 'Organisez votre mariage au Château de Beaujeu. Jusqu\'à 220 personnes assises, salle de réception 213m², caves voûtées et parc arboré.',
};

export default function Page() {
  return <MariagesPage />;
}
