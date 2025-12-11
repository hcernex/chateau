import { Metadata } from 'next';
import HebergementsPage from './HebergementsPage';

export const metadata: Metadata = {
  title: 'Hébergements',
  description: 'Découvrez tous nos hébergements au Château de Beaujeu : chambres d\'hôtes, gîtes et appartement. Jusqu\'à 42 couchages sur le domaine.',
};

export default function Page() {
  return <HebergementsPage />;
}
