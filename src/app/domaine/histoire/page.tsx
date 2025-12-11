import { Metadata } from 'next';
import HistoirePage from './HistoirePage';

export const metadata: Metadata = {
  title: 'Histoire du Château',
  description: 'Découvrez l\'histoire du Château de Beaujeu, demeure du XVIe siècle inscrite aux Monuments Historiques. Propriété de la famille de Pommereau depuis 1809.',
};

export default function Page() {
  return <HistoirePage />;
}
