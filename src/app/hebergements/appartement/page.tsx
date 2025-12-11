import { Metadata } from 'next';
import AppartementPage from './AppartementPage';

export const metadata: Metadata = {
  title: 'Appartement',
  description: 'Appartement indépendant de 3 chambres au sein du Château de Beaujeu. Accès privatif pour 6 personnes.',
};

export default function Page() {
  return <AppartementPage />;
}
