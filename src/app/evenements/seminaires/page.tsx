import { Metadata } from 'next';
import SeminairesPage from './SeminairesPage';

export const metadata: Metadata = {
  title: 'Séminaires',
  description: 'Organisez vos séminaires et événements d\'entreprise au Château de Beaujeu. Cadre inspirant à 2h de Paris, hébergement sur place.',
};

export default function Page() {
  return <SeminairesPage />;
}
