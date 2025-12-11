'use client';

import Hero from '@/components/sections/Hero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { hebergements } from '@/data/hebergements';
import { motion } from 'framer-motion';

export default function AppartementPage() {
  const appartement = hebergements.find((h) => h.type === 'appartement')!;

  return (
    <>
      <Hero
        title="Appartement dans le Château"
        subtitle="Un appartement indépendant de 3 chambres au cœur du monument historique."
        badge="HÉBERGEMENT"
        image="/images/salle-manger.jpg"
        height="medium"
      />

      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[var(--chateau-gold)] font-accent tracking-wider text-sm">
              DANS LE CHÂTEAU
            </span>
            <h2 className="font-heading text-3xl text-[var(--chateau-navy)] mt-2 mb-4">
              {appartement.nom}
            </h2>
            <p className="text-[var(--chateau-stone)] leading-relaxed mb-6">
              {appartement.description}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-[var(--chateau-cream)] p-4 rounded-lg text-center">
                <span className="text-3xl font-heading font-bold text-[var(--chateau-gold)]">
                  {appartement.capacite}
                </span>
                <span className="block text-sm text-[var(--chateau-stone)]">personnes</span>
              </div>
              <div className="bg-[var(--chateau-cream)] p-4 rounded-lg text-center">
                <span className="text-3xl font-heading font-bold text-[var(--chateau-gold)]">
                  {appartement.chambres}
                </span>
                <span className="block text-sm text-[var(--chateau-stone)]">chambres</span>
              </div>
              <div className="bg-[var(--chateau-cream)] p-4 rounded-lg text-center">
                <span className="text-3xl font-heading font-bold text-[var(--chateau-gold)]">
                  {appartement.sallesDeBain}
                </span>
                <span className="block text-sm text-[var(--chateau-stone)]">salles de bain</span>
              </div>
            </div>

            <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-3">
              Équipements & Services
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2 mb-8">
              {appartement.equipements.map((equip) => (
                <li key={equip} className="flex items-center gap-2 text-[var(--chateau-stone)]">
                  <svg className="w-5 h-5 text-[var(--chateau-gold)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {equip}
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <Button href="/contact" variant="primary">
                Demander un devis
              </Button>
              <Button href="/reservation" variant="outline">
                Vérifier les disponibilités
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src="/images/salle-manger.jpg" alt="Salle à manger de l'appartement" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src="/images/salle-petit-dejeuner.jpg" alt="Petit-déjeuner" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src="/images/chambres/chambre-toile-jouy.jpg" alt="Chambre de l'appartement" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src="/images/chateau-tours.jpg" alt="Vue du château" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section background="cream">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl text-[var(--chateau-navy)] mb-4">
            Pourquoi choisir l&apos;appartement ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              { icon: '🔑', title: 'Accès privatif', desc: 'Entrée indépendante pour plus d\'intimité' },
              { icon: '🏰', title: 'Dans le château', desc: 'Vivez au cœur du monument historique' },
              { icon: '👨‍👩‍👧‍👦', title: 'Idéal familles', desc: 'Espace et confort pour 6 personnes' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <span className="text-4xl block mb-3">{item.icon}</span>
                <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-2">{item.title}</h3>
                <p className="text-[var(--chateau-stone)] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
