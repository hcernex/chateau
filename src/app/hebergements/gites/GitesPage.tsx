'use client';

import Hero from '@/components/sections/Hero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { hebergements } from '@/data/hebergements';
import { motion } from 'framer-motion';

export default function GitesPage() {
  const gites = hebergements.filter((h) => h.type === 'gite');

  return (
    <>
      <Hero
        title="Nos Gîtes"
        subtitle="Maison du Jardin et Pigeonnier : des hébergements indépendants pour vos groupes et événements."
        badge="HÉBERGEMENT"
        image="/images/domaine/pigeonnier-exterieur.jpg"
        height="medium"
      />

      <Section background="cream">
        {gites.map((gite, index) => (
          <motion.div
            key={gite.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`grid lg:grid-cols-2 gap-12 items-center ${index > 0 ? 'mt-16 pt-16 border-t border-[var(--chateau-stone)]/20' : ''}`}
          >
            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={index === 0 ? '/images/hebergements/cuisine-gite.jpg' : '/images/domaine/pigeonnier-exterieur.jpg'}
                  alt={gite.nom}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              {gite.anneeRenovation && (
                <span className="text-[var(--chateau-gold)] font-accent tracking-wider text-sm">
                  RÉNOVÉ EN {gite.anneeRenovation}
                </span>
              )}
              <h2 className="font-heading text-3xl text-[var(--chateau-navy)] mt-2 mb-4">
                {gite.nom}
              </h2>
              <p className="text-[var(--chateau-stone)] leading-relaxed mb-6">
                {gite.description}
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg text-center">
                  <span className="text-2xl font-heading font-bold text-[var(--chateau-gold)]">
                    {gite.capacite}
                  </span>
                  <span className="block text-sm text-[var(--chateau-stone)]">personnes</span>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <span className="text-2xl font-heading font-bold text-[var(--chateau-gold)]">
                    {gite.chambres}
                  </span>
                  <span className="block text-sm text-[var(--chateau-stone)]">chambres</span>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <span className="text-2xl font-heading font-bold text-[var(--chateau-gold)]">
                    {gite.sallesDeBain}
                  </span>
                  <span className="block text-sm text-[var(--chateau-stone)]">salle(s) de bain</span>
                </div>
              </div>

              <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-3">
                Équipements
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                {gite.equipements.map((equip) => (
                  <li key={equip} className="flex items-center gap-2 text-[var(--chateau-stone)] text-sm">
                    <svg className="w-4 h-4 text-[var(--chateau-gold)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {equip}
                  </li>
                ))}
              </ul>

              <Button href="/contact" variant="primary">
                Demander un devis
              </Button>
            </div>
          </motion.div>
        ))}
      </Section>

      <Section background="gold-light">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl text-[var(--chateau-navy)] mb-4">
            Idéal pour vos événements
          </h2>
          <p className="text-[var(--chateau-stone)] mb-8">
            Nos gîtes sont parfaits pour héberger vos invités lors de mariages
            ou vos collaborateurs lors de séminaires.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/evenements/mariages" variant="secondary">
              Organiser un mariage
            </Button>
            <Button href="/evenements/seminaires" variant="outline">
              Organiser un séminaire
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
