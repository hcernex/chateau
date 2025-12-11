import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { chambres, getChambreBySlug, getAllChambresSlugs } from '@/data/chambres';
import ChambreDetailPage from './ChambreDetailPage';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllChambresSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const chambre = getChambreBySlug(slug);

  if (!chambre) {
    return { title: 'Chambre non trouvée' };
  }

  return {
    title: chambre.nom,
    description: chambre.description,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const chambre = getChambreBySlug(slug);

  if (!chambre) {
    notFound();
  }

  // Trouver les autres chambres pour les suggestions
  const autresChambres = chambres.filter((c) => c.slug !== slug).slice(0, 2);

  return <ChambreDetailPage chambre={chambre} autresChambres={autresChambres} />;
}
