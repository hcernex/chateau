'use client';

import Hero from '@/components/sections/Hero';
import Section from '@/components/ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const categories = [
  { id: 'all', label: 'Tout' },
  { id: 'chateau', label: 'Le Château' },
  { id: 'chambres', label: 'Chambres' },
  { id: 'parc', label: 'Parc & Jardins' },
  { id: 'evenements', label: 'Événements' },
];

const photos = [
  { id: 1, category: 'chateau', alt: 'Vue aérienne du château', src: '/images/hero-chateau.jpg' },
  { id: 2, category: 'chateau', alt: 'Château avec ses tours', src: '/images/chateau-tours.jpg' },
  { id: 3, category: 'chambres', alt: 'Chambre Toile de Jouy', src: '/images/chambres/chambre-toile-jouy.jpg' },
  { id: 4, category: 'chateau', alt: 'Salle à manger', src: '/images/salle-manger.jpg' },
  { id: 5, category: 'parc', alt: 'Allée bordée d\'arbres', src: '/images/allee-arbres.jpg' },
  { id: 6, category: 'parc', alt: 'Pigeonnier dans le parc', src: '/images/domaine/parc-pigeonnier.jpg' },
  { id: 7, category: 'evenements', alt: 'Mariage en extérieur', src: '/images/evenements/mariage-exterieur.jpg' },
  { id: 8, category: 'evenements', alt: 'Grande salle de réception', src: '/images/evenements/salle-reception.jpg' },
  { id: 9, category: 'chateau', alt: 'Dépendances et cour', src: '/images/domaine/dependances-cour.jpg' },
  { id: 10, category: 'chateau', alt: 'Salle du petit-déjeuner', src: '/images/salle-petit-dejeuner.jpg' },
  { id: 11, category: 'parc', alt: 'Pigeonnier extérieur', src: '/images/domaine/pigeonnier-exterieur.jpg' },
  { id: 12, category: 'evenements', alt: 'Réception de nuit', src: '/images/evenements/reception-nuit.jpg' },
  { id: 13, category: 'chambres', alt: 'Cuisine du gîte', src: '/images/hebergements/cuisine-gite.jpg' },
];

export default function GaleriePage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const filteredPhotos = activeCategory === 'all'
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  const handlePrev = () => {
    if (selectedPhoto === null) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredPhotos.length - 1;
    setSelectedPhoto(filteredPhotos[prevIndex].id);
  };

  const handleNext = () => {
    if (selectedPhoto === null) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto);
    const nextIndex = currentIndex < filteredPhotos.length - 1 ? currentIndex + 1 : 0;
    setSelectedPhoto(filteredPhotos[nextIndex].id);
  };

  return (
    <>
      <Hero
        title="Galerie Photos"
        subtitle="Découvrez le Château de Beaujeu et son domaine en images."
        badge="LE DOMAINE"
        image="/images/hero-chateau.jpg"
        height="medium"
      />

      <Section background="cream">
        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-accent text-sm transition-all ${
                activeCategory === cat.id
                  ? 'bg-[var(--chateau-gold)] text-white'
                  : 'bg-white text-[var(--chateau-stone)] hover:bg-[var(--chateau-gold-light)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grille de photos */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="aspect-square rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setSelectedPhoto(photo.id)}
              >
                <div className="w-full h-full relative">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[var(--chateau-navy)]/0 group-hover:bg-[var(--chateau-navy)]/20 transition-colors flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setSelectedPhoto(null)}
          >
            {/* Bouton fermer */}
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation */}
            <button
              className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={selectedPhoto}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl max-h-[80vh] w-full mx-8 rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos.find((p) => p.id === selectedPhoto)?.src}
                alt={photos.find((p) => p.id === selectedPhoto)?.alt}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
