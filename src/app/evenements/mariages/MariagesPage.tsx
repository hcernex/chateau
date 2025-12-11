'use client';

import Hero from '@/components/sections/Hero';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/sections/SectionHeading';
import Button from '@/components/ui/Button';
import TestimonialSlider from '@/components/sections/TestimonialSlider';
import { motion } from 'framer-motion';

const espaces = [
  { nom: 'Salle de réception principale', superficie: '130m²', capacite: '150 personnes' },
  { nom: 'Salle annexe', superficie: '83m²', capacite: '70 personnes' },
  { nom: 'Caves voûtées', superficie: '102m²', capacite: 'Cocktail, animations' },
  { nom: 'Parc et jardins', superficie: 'Plusieurs hectares', capacite: 'Cérémonie laïque' },
];

const prestations = [
  'Privatisation du domaine (vendredi 8h au dimanche 20h)',
  'Tables rondes et rectangulaires',
  'Chaises incluses',
  'Accès office traiteur indépendant',
  'Parking sécurisé',
  'Vestiaires et toilettes',
  'Cour intérieure avec possibilité de tente',
  'Éclairage du parc',
];

const surDemande = [
  'Liste de prestataires partenaires (traiteur, photographe, DJ, fleuriste)',
  'Feux d\'artifice',
  'Service de sécurité',
  'Décoration florale',
  'Hébergement complémentaire à proximité',
];

export default function MariagesPage() {
  return (
    <>
      <Hero
        title="Votre Mariage au Château"
        subtitle="Dites 'oui' dans un cadre d'exception. Monument vivant de l'histoire, sublime parc arboré et vignobles à perte de vue."
        badge="MARIAGES & RÉCEPTIONS"
        image="/images/mariages/hero.jpg"
        primaryCTA={{ label: 'Demander un devis', href: '/contact' }}
        secondaryCTA={{ label: 'Visiter le château', href: '/contact' }}
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
              UN CADRE FÉERIQUE
            </span>
            <h2 className="font-heading text-3xl text-[var(--chateau-navy)] mt-2 mb-4">
              Le lieu de tous vos rêves
            </h2>
            <p className="text-[var(--chateau-stone)] leading-relaxed mb-6">
              Le Château de Beaujeu vous offre un écrin féerique pour célébrer votre union.
              Au cœur du vignoble de Sancerre, notre demeure historique du XVIe siècle
              combine le charme de l&apos;ancien avec le confort moderne pour faire de votre
              mariage un moment inoubliable.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[var(--chateau-cream)] p-4 rounded-lg text-center">
                <span className="text-3xl font-heading font-bold text-[var(--chateau-gold)]">220</span>
                <span className="block text-sm text-[var(--chateau-stone)]">personnes assises</span>
              </div>
              <div className="bg-[var(--chateau-cream)] p-4 rounded-lg text-center">
                <span className="text-3xl font-heading font-bold text-[var(--chateau-gold)]">400</span>
                <span className="block text-sm text-[var(--chateau-stone)]">en cocktail</span>
              </div>
              <div className="bg-[var(--chateau-cream)] p-4 rounded-lg text-center">
                <span className="text-3xl font-heading font-bold text-[var(--chateau-gold)]">213m²</span>
                <span className="block text-sm text-[var(--chateau-stone)]">salle de réception</span>
              </div>
              <div className="bg-[var(--chateau-cream)] p-4 rounded-lg text-center">
                <span className="text-3xl font-heading font-bold text-[var(--chateau-gold)]">42</span>
                <span className="block text-sm text-[var(--chateau-stone)]">couchages sur place</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-[4/5] rounded-lg overflow-hidden bg-gradient-to-br from-[var(--chateau-wine)] to-[var(--chateau-gold)] flex items-center justify-center"
          >
            <div className="text-center text-white p-8">
              <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <p className="text-lg opacity-70">Photo de mariage</p>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section background="cream">
        <SectionHeading
          badge="NOS ESPACES"
          title="Des lieux uniques pour chaque moment"
          subtitle="De la cérémonie au dîner, en passant par le cocktail, nous avons l'espace parfait."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {espaces.map((espace, index) => (
            <motion.div
              key={espace.nom}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-2">
                {espace.nom}
              </h3>
              <p className="text-[var(--chateau-gold)] font-semibold mb-1">{espace.superficie}</p>
              <p className="text-sm text-[var(--chateau-stone)]">{espace.capacite}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-6">
              Prestations incluses
            </h2>
            <ul className="space-y-3">
              {prestations.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[var(--chateau-stone)]">
                  <svg className="w-5 h-5 text-[var(--chateau-gold)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-6">
              Sur demande
            </h2>
            <ul className="space-y-3">
              {surDemande.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[var(--chateau-stone)]">
                  <svg className="w-5 h-5 text-[var(--chateau-stone)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section background="gold-light">
        <SectionHeading
          badge="TÉMOIGNAGES"
          title="Ils ont dit oui au château"
        />
        <TestimonialSlider filter="mariage" />
      </Section>

      <Section background="navy">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl text-white mb-4">
            Tarifs
          </h2>
          <p className="text-white/80 mb-8">
            Location du domaine à partir de <span className="text-[var(--chateau-gold)] font-semibold">1.450€</span> pour un week-end.
            Formules tout compris sur devis personnalisé.
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
