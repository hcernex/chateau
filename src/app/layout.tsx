import type { Metadata } from 'next';
import { Playfair_Display, Source_Serif_4, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import CookieBanner from '@/components/ui/CookieBanner';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-accent',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Château de Beaujeu | Chambres d\'hôtes de charme à Sancerre',
    template: '%s | Château de Beaujeu',
  },
  description:
    'Demeure historique du XVIe siècle au cœur du vignoble de Sancerre. Chambres d\'hôtes de charme, mariages et séminaires dans un cadre exceptionnel. À 2h de Paris.',
  keywords: [
    'château',
    'Beaujeu',
    'Sancerre',
    'chambres d\'hôtes',
    'mariage',
    'séminaire',
    'Loire',
    'monument historique',
    'hébergement',
    'vignoble',
  ],
  authors: [{ name: 'Château de Beaujeu' }],
  creator: 'Château de Beaujeu',
  metadataBase: new URL('https://www.chateau-de-beaujeu.com'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.chateau-de-beaujeu.com',
    siteName: 'Château de Beaujeu',
    title: 'Château de Beaujeu | Chambres d\'hôtes de charme à Sancerre',
    description:
      'Demeure historique du XVIe siècle au cœur du vignoble de Sancerre. Chambres d\'hôtes, mariages et séminaires.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Château de Beaujeu - Vue aérienne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Château de Beaujeu | Chambres d\'hôtes de charme à Sancerre',
    description:
      'Demeure historique du XVIe siècle au cœur du vignoble de Sancerre.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.chateau-de-beaujeu.com',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Château de Beaujeu',
  description: 'Demeure historique du XVIe siècle au cœur du vignoble de Sancerre. Chambres d\'hôtes de charme, mariages et séminaires.',
  url: 'https://www.chateau-de-beaujeu.com',
  telephone: '+33248790795',
  email: 'annecharlotte@chateau-de-beaujeu.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Château de Beaujeu',
    addressLocality: 'Sens-Beaujeu',
    postalCode: '18300',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.32482,
    longitude: 2.70197,
  },
  image: 'https://www.chateau-de-beaujeu.com/images/og-image.jpg',
  priceRange: '€€',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'WiFi gratuit' },
    { '@type': 'LocationFeatureSpecification', name: 'Parking gratuit' },
    { '@type': 'LocationFeatureSpecification', name: 'Petit-déjeuner inclus' },
    { '@type': 'LocationFeatureSpecification', name: 'Parc de 4 hectares' },
  ],
  sameAs: [
    'https://www.facebook.com/ChateaudeBeaujeu',
    'https://www.instagram.com/chateaudebeaujeu',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${sourceSerif.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
