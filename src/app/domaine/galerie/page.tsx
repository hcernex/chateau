import { Metadata } from 'next';
import GaleriePage from './GaleriePage';

export const metadata: Metadata = {
  title: 'Galerie Photos',
  description: 'Découvrez le Château de Beaujeu en images : façade, chambres, parc, salles de réception et événements.',
};

export default function Page() {
  return <GaleriePage />;
}
