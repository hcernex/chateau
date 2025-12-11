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
  { id: 1, category: 'chateau', alt: 'Façade du château' },
  { id: 2, category: 'chateau', alt: 'Vue aérienne' },
  { id: 3, category: 'chambres', alt: 'Suite La Tour' },
  { id: 4, category: 'chambres', alt: 'Chambre Louis XVI' },
  { id: 5, category: 'parc', alt: 'Jardin à la française' },
  { id: 6, category: 'parc', alt: 'Piscine' },
  { id: 7, category: 'evenements', alt: 'Mariage - Cérémonie' },
  { id: 8, category: 'evenements', alt: 'Salle de réception' },
  { id: 9, category: 'chateau', alt: 'Entrée principale' },
  { id: 10, category: 'chambres', alt: 'Suite Jaune' },
  { id: 11, category: 'parc', alt: 'Vue sur la vallée' },
  { id: 12, category: 'evenements', alt: 'Caves voûtées' },
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
        image="/images/domaine/galerie-hero.jpg"
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
                <div className="w-full h-full bg-gradient-to-br from-[var(--chateau-gold-light)] to-[var(--chateau-stone)] flex items-center justify-center relative">
                  <div className="text-center text-white p-4">
                    <svg className="w-10 h-10 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs opacity-70">{photo.alt}</p>
                  </div>
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
              className="max-w-4xl max-h-[80vh] w-full mx-8 aspect-video bg-gradient-to-br from-[var(--chateau-gold-light)] to-[var(--chateau-stone)] rounded-lg flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center text-white">
                <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-lg opacity-70">
                  {photos.find((p) => p.id === selectedPhoto)?.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
