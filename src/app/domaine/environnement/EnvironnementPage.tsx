'use client';

import Hero from '@/components/sections/Hero';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/sections/SectionHeading';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

const activites = [
  {
    categorie: 'Œnologie',
    items: [
      { nom: 'Vignobles de Sancerre', distance: '10 min', description: 'Dégustation de vins blancs, rouges et rosés AOC.' },
      { nom: 'Pouilly-sur-Loire', distance: '20 min', description: 'Découverte des vins Pouilly-Fumé.' },
      { nom: 'Caves viticoles', distance: 'Variable', description: 'Visites guidées et dégustations.' },
    ],
  },
  {
    categorie: 'Gastronomie',
    items: [
      { nom: 'Crottin de Chavignol', distance: '15 min', description: 'Le célèbre fromage de chèvre AOC.' },
      { nom: 'Marchés locaux', distance: 'Variable', description: 'Produits du terroir berrichon.' },
      { nom: 'Restaurants gastronomiques', distance: 'Variable', description: 'Tables étoilées de la région.' },
    ],
  },
  {
    categorie: 'Culture & Patrimoine',
    items: [
      { nom: 'Bourges', distance: '39 km', description: 'Cathédrale Saint-Étienne, classée UNESCO.' },
      { nom: 'Châteaux de la Loire', distance: '~1h', description: 'Chambord, Chenonceau, Amboise...' },
      { nom: 'Sancerre', distance: '10 min', description: 'Village pittoresque et panoramas.' },
    ],
  },
  {
    categorie: 'Nature & Sport',
    items: [
      { nom: 'Randonnées', distance: 'Sur place', description: 'Sentiers balisés dans le vignoble.' },
      { nom: 'Vélo', distance: 'Sur place', description: 'Routes cyclables pittoresques.' },
      { nom: 'Golf', distance: '30 min', description: 'Plusieurs parcours dans la région.' },
    ],
  },
];

const acces = [
  { mode: 'Depuis Paris', detail: 'A77 direction Nevers, sortie Cosne-sur-Loire', duree: '2h' },
  { mode: 'Depuis Bourges', detail: 'D955 direction Sancerre', duree: '30 min' },
  { mode: 'Gare la plus proche', detail: 'Cosne-sur-Loire', duree: '15 km' },
  { mode: 'Aéroport', detail: 'Bourges ou Paris Orly', duree: '39-200 km' },
];

export default function EnvironnementPage() {
  return (
    <>
      <Hero
        title="La Région"
        subtitle="Au cœur du Berry et du vignoble de Sancerre, une terre de traditions et de découvertes."
        badge="ENVIRONNEMENT"
        image="/images/allee-arbres.jpg"
        height="medium"
      />

      <Section background="white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-[var(--chateau-stone)] leading-relaxed">
            Le Château de Beaujeu bénéficie d&apos;une situation privilégiée au cœur du Berry,
            à la croisée des chemins entre vignobles prestigieux, patrimoine historique
            et nature préservée. À seulement 2 heures de Paris, découvrez une région
            riche en traditions et en saveurs.
          </p>
        </div>

        {activites.map((section, sectionIndex) => (
          <div key={section.categorie} className="mb-16 last:mb-0">
            <SectionHeading
              title={section.categorie}
              centered={false}
            />
            <div className="grid md:grid-cols-3 gap-6">
              {section.items.map((item, index) => (
                <motion.div
                  key={item.nom}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-[var(--chateau-cream)] p-6 rounded-lg"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading text-lg text-[var(--chateau-navy)]">
                      {item.nom}
                    </h3>
                    <span className="text-sm text-[var(--chateau-gold)] font-accent">
                      {item.distance}
                    </span>
                  </div>
                  <p className="text-[var(--chateau-stone)] text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section background="gold-light">
        <SectionHeading
          badge="ACCÈS"
          title="Comment venir"
          subtitle="Le château est facilement accessible depuis Paris et les grandes villes de la région."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {acces.map((item, index) => (
            <motion.div
              key={item.mode}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg text-center"
            >
              <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-2">
                {item.mode}
              </h3>
              <p className="text-[var(--chateau-stone)] text-sm mb-2">{item.detail}</p>
              <span className="text-[var(--chateau-gold)] font-semibold">{item.duree}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg max-w-2xl mx-auto">
          <h3 className="font-heading text-xl text-[var(--chateau-navy)] text-center mb-4">
            Adresse GPS
          </h3>
          <p className="text-center text-[var(--chateau-stone)]">
            Château de Beaujeu<br />
            18300 Sens-Beaujeu, France<br />
            <span className="text-[var(--chateau-gold)]">47.32482, 2.70197</span>
          </p>
        </div>
      </Section>

      <Section background="navy">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl text-white mb-4">
            Planifiez votre séjour
          </h2>
          <p className="text-white/80 mb-8">
            Profitez de votre séjour au château pour explorer les richesses de la région.
            Nous serons ravis de vous conseiller les meilleures adresses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/reservation" variant="primary" size="lg">
              Réserver
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[var(--chateau-navy)]">
              Nous contacter
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
