'use client';

import Hero from '@/components/sections/Hero';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/sections/SectionHeading';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

const typesEvenements = [
  'Séminaires de direction (CODIR)',
  'Réunions stratégiques',
  'Team building',
  'Lancements de produit',
  'Incentives',
  'Assemblées générales',
];

const activitesTeamBuilding = [
  { icon: '🍷', nom: 'Dégustation de vins de Sancerre' },
  { icon: '🏰', nom: 'Visite de caves et domaines viticoles' },
  { icon: '🧀', nom: 'Découverte du Crottin de Chavignol' },
  { icon: '🥾', nom: 'Randonnées dans le vignoble' },
  { icon: '👨‍🍳', nom: 'Cours de cuisine régionale' },
];

const capacites = [
  { format: 'Théâtre', personnes: 150 },
  { format: 'U', personnes: 60 },
  { format: 'Classe', personnes: 80 },
  { format: 'Réunion', personnes: 40 },
];

export default function SeminairesPage() {
  return (
    <>
      <Hero
        title="Séminaires & Événements Pro"
        subtitle="Un cadre inspirant à 2h de Paris pour vos réunions et événements d'entreprise. Privatisation possible avec hébergement sur place."
        badge="SÉMINAIRES"
        image="/images/evenements/salle-reception.jpg"
        primaryCTA={{ label: 'Demander un devis', href: '/contact' }}
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
              UN CADRE D&apos;EXCEPTION
            </span>
            <h2 className="font-heading text-3xl text-[var(--chateau-navy)] mt-2 mb-4">
              Pourquoi choisir le Château de Beaujeu ?
            </h2>
            <div className="space-y-4 text-[var(--chateau-stone)] leading-relaxed">
              <p>
                Offrez à vos équipes un cadre d&apos;exception pour vos réunions, séminaires
                de direction et événements corporate. Le Château de Beaujeu combine le
                prestige d&apos;un monument historique avec les équipements nécessaires à
                la réussite de vos événements professionnels.
              </p>
              <ul className="space-y-2">
                {[
                  'Cadre inspirant et dépaysant, à 2h de Paris',
                  'Privatisation totale possible',
                  'Hébergement sur place (jusqu\'à 42 personnes)',
                  'Calme absolu pour la concentration',
                  'Wi-Fi haut débit',
                  'Restauration sur place ou traiteur',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--chateau-gold)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-[4/3] rounded-lg overflow-hidden"
          >
            <img
              src="/images/evenements/salle-reception.jpg"
              alt="Salle de réception pour séminaires"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </Section>

      <Section background="cream">
        <SectionHeading
          badge="TYPES D'ÉVÉNEMENTS"
          title="Pour tous vos besoins professionnels"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {typesEvenements.map((type, index) => (
            <motion.div
              key={type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white p-4 rounded-lg text-center"
            >
              <span className="text-[var(--chateau-navy)]">{type}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="white">
        <SectionHeading
          badge="CAPACITÉS"
          title="Espaces modulables"
          subtitle="Nos salles s'adaptent à tous les formats de réunion."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {capacites.map((cap, index) => (
            <motion.div
              key={cap.format}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6 bg-[var(--chateau-cream)] rounded-lg"
            >
              <span className="text-3xl font-heading font-bold text-[var(--chateau-gold)]">
                {cap.personnes}
              </span>
              <span className="block text-[var(--chateau-stone)] text-sm mt-1">
                {cap.format}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <h3 className="font-heading text-xl text-[var(--chateau-navy)] text-center mb-6">
            Équipements sur demande
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Vidéoprojecteur', 'Écran', 'Paperboard', 'Sonorisation', 'Microphone'].map((equip) => (
              <span
                key={equip}
                className="px-4 py-2 bg-white rounded-full text-sm text-[var(--chateau-stone)] shadow-sm"
              >
                {equip}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section background="gold-light">
        <SectionHeading
          badge="TEAM BUILDING"
          title="Activités pour renforcer vos équipes"
          subtitle="Profitez de la région pour des activités uniques."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {activitesTeamBuilding.map((activite, index) => (
            <motion.div
              key={activite.nom}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white p-6 rounded-lg text-center"
            >
              <span className="text-4xl block mb-3">{activite.icon}</span>
              <span className="text-sm text-[var(--chateau-navy)]">{activite.nom}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="navy">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl text-white mb-4">
            Demandez votre devis personnalisé
          </h2>
          <p className="text-white/80 mb-8">
            Journée d&apos;étude, séminaire résidentiel ou privatisation complète :
            nous adaptons notre offre à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Demander un devis
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[var(--chateau-navy)]">
              Organiser une visite
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
