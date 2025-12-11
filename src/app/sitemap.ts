import { MetadataRoute } from 'next';
import { chambres } from '@/data/chambres';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chateau-de-beaujeu.com';

  // Pages statiques
  const staticPages: Array<{ path: string; freq: 'weekly' | 'monthly'; prio: number }> = [
    { path: '', freq: 'weekly', prio: 1 },
    { path: '/chambres', freq: 'monthly', prio: 0.9 },
    { path: '/hebergements', freq: 'monthly', prio: 0.8 },
    { path: '/hebergements/gites', freq: 'monthly', prio: 0.8 },
    { path: '/hebergements/appartement', freq: 'monthly', prio: 0.8 },
    { path: '/evenements/mariages', freq: 'monthly', prio: 0.8 },
    { path: '/evenements/seminaires', freq: 'monthly', prio: 0.8 },
    { path: '/domaine/histoire', freq: 'monthly', prio: 0.7 },
    { path: '/domaine/galerie', freq: 'monthly', prio: 0.7 },
    { path: '/domaine/environnement', freq: 'monthly', prio: 0.7 },
    { path: '/reservation', freq: 'weekly', prio: 0.9 },
    { path: '/contact', freq: 'monthly', prio: 0.8 },
    { path: '/mentions-legales', freq: 'monthly', prio: 0.3 },
    { path: '/politique-confidentialite', freq: 'monthly', prio: 0.3 },
    { path: '/cgv', freq: 'monthly', prio: 0.3 },
  ];

  const staticUrls: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.freq,
    priority: page.prio,
  }));

  // Pages dynamiques des chambres
  const chambreUrls: MetadataRoute.Sitemap = chambres.map((chambre) => ({
    url: `${baseUrl}/chambres/${chambre.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticUrls, ...chambreUrls];
}
