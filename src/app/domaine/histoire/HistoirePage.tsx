'use client';

import Hero from '@/components/sections/Hero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

const timeline = [
  { annee: '1566', titre: 'Construction du château', description: 'Le château est édifié au XVIe siècle dans le style Renaissance.' },
  { annee: '1809', titre: 'Acquisition par la famille de Pommereau', description: 'Le château devient la propriété de la famille de Pommereau qui en prend soin depuis plus de 200 ans.' },
  { annee: 'XIXe', titre: 'Restaurations', description: 'D\'importants travaux de restauration préservent l\'authenticité du monument.' },
  { annee: '2014', titre: 'Rénovation de la Maison du Jardin', description: 'Le gîte est entièrement rénové pour accueillir les groupes.' },
  { annee: '2016', titre: 'Rénovation du Pigeonnier', description: 'Le Pigeonnier est transformé en charmant gîte indépendant.' },
  { annee: 'Aujourd\'hui', titre: 'Chambres d\'hôtes et événements', description: 'Le château accueille des hôtes du monde entier et célèbre mariages et événements.' },
];

export default function HistoirePage() {
  return (
    <>
      <Hero
        title="L'Histoire du Château"
        subtitle="Un monument vivant depuis 1566, gardien de plus de quatre siècles d'histoire."
        badge="LE DOMAINE"
        image="/images/domaine/histoire-hero.jpg"
        height="medium"
      />

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg mx-auto"
          >
            <p className="text-xl text-[var(--chateau-stone)] leading-relaxed mb-8">
              Le Château de Beaujeu, demeure de caractère du XVIe siècle, est niché
              au cœur du vignoble de Sancerre, dans le Berry. Inscrit à l&apos;Inventaire
              Supplémentaire des Monuments Historiques, il témoigne de la richesse
              architecturale de la Renaissance française.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-[var(--chateau-gold-light)] to-[var(--chateau-stone)] flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="text-sm opacity-70">Photo historique</p>
                </div>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
                  Un héritage familial
                </h2>
                <p className="text-[var(--chateau-stone)] leading-relaxed">
                  Propriété de la famille de Pommereau depuis 1809, le château a traversé
                  les siècles en conservant son âme et son authenticité. Chaque génération
                  a contribué à préserver et embellir ce patrimoine exceptionnel.
                </p>
                <p className="text-[var(--chateau-stone)] leading-relaxed mt-4">
                  Aujourd&apos;hui, Anne-Charlotte de Pommereau perpétue cette tradition
                  d&apos;hospitalité en ouvrant les portes du château aux visiteurs du monde entier.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section background="cream">
        <h2 className="font-heading text-3xl text-[var(--chateau-navy)] text-center mb-12">
          Chronologie
        </h2>

        <div className="max-w-3xl mx-auto">
          {timeline.map((event, index) => (
            <motion.div
              key={event.annee}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 mb-8"
            >
              <div className="flex-shrink-0 w-24 text-right">
                <span className="font-heading text-xl font-bold text-[var(--chateau-gold)]">
                  {event.annee}
                </span>
              </div>
              <div className="relative pl-8 border-l-2 border-[var(--chateau-gold-light)] pb-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--chateau-gold)]" />
                <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-1">
                  {event.titre}
                </h3>
                <p className="text-[var(--chateau-stone)]">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[var(--chateau-navy)] text-center mb-8">
            Le patrimoine architectural
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { titre: 'Boiseries d\'époque', desc: 'Les boiseries originales ornent les salles du château.' },
              { titre: 'Cheminées monumentales', desc: 'Des cheminées Renaissance dans les pièces principales.' },
              { titre: 'Mobilier de style', desc: 'Une collection de meubles d\'époque soigneusement entretenus.' },
            ].map((item, index) => (
              <motion.div
                key={item.titre}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-2">{item.titre}</h3>
                <p className="text-[var(--chateau-stone)] text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="navy">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl text-white mb-4">
            Vivez l&apos;histoire
          </h2>
          <p className="text-white/80 mb-8">
            Séjournez dans un monument historique et laissez-vous transporter
            dans une autre époque.
          </p>
          <Button href="/chambres" variant="primary" size="lg">
            Réserver une chambre
          </Button>
        </div>
      </Section>
    </>
  );
}
