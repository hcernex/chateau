import { Metadata } from 'next';
import ChambresPage from './ChambresPage';

export const metadata: Metadata = {
  title: 'Chambres d\'hôtes',
  description: 'Découvrez nos 5 chambres d\'hôtes de charme au Château de Beaujeu. Mobilier d\'époque, salle de bains privative et petit-déjeuner inclus.',
};

export default function Page() {
  return <ChambresPage />;
}
