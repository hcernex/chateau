'use client';

import Hero from '@/components/sections/Hero';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/sections/SectionHeading';
import { Card, CardImage, CardContent, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { hebergements, capaciteTotale } from '@/data/hebergements';
import { motion } from 'framer-motion';

export default function HebergementsPage() {
  return (
    <>
      <Hero
        title="Nos Hébergements"
        subtitle="Chambres d'hôtes, gîtes et appartement : jusqu'à 42 couchages sur le domaine pour tous vos événements."
        badge="HÉBERGEMENT"
        image="/images/hebergements/hero.jpg"
        height="medium"
      />

      <Section background="cream">
        <SectionHeading
          badge="VUE D'ENSEMBLE"
          title="Un hébergement pour chaque occasion"
          subtitle="Que vous soyez en couple, en famille ou en groupe, nous avons la solution d'hébergement qu'il vous faut."
        />

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { value: capaciteTotale.total, label: 'Couchages total' },
            { value: '5', label: 'Chambres d\'hôtes' },
            { value: '2', label: 'Gîtes' },
            { value: '1', label: 'Appartement' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <span className="text-4xl font-heading font-bold text-[var(--chateau-gold)]">
                {stat.value}
              </span>
              <span className="block text-sm text-[var(--chateau-stone)] mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Chambres d'hôtes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Card href="/chambres" className="group">
            <div className="grid md:grid-cols-2 gap-0">
              <CardImage src="/images/chambres/preview.jpg" alt="Chambres d'hôtes" aspectRatio="square" />
              <CardContent className="flex flex-col justify-center p-8">
                <span className="text-[var(--chateau-gold)] font-accent tracking-wider text-sm mb-2">
                  DANS LE CHÂTEAU
                </span>
                <CardTitle as="h2" className="text-2xl mb-4">Chambres d&apos;hôtes</CardTitle>
                <CardDescription className="mb-4">
                  5 chambres de charme au cœur du château, décorées avec du mobilier d&apos;époque.
                  Chaque chambre dispose d&apos;une salle de bains privative. Le petit-déjeuner est
                  servi dans la grande salle à manger du château.
                </CardDescription>
                <div className="flex flex-wrap gap-4 text-sm text-[var(--chateau-stone)] mb-4">
                  <span>2 à 12 personnes</span>
                  <span>•</span>
                  <span>Petit-déjeuner inclus</span>
                  <span>•</span>
                  <span>Dès 120€/nuit</span>
                </div>
                <Button href="/chambres" variant="outline" className="self-start">
                  Voir les chambres
                </Button>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* Gîtes et Appartement */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card href="/hebergements/gites" className="group h-full">
              <CardImage src="/images/hebergements/gites-preview.jpg" alt="Gîtes" />
              <CardContent>
                <span className="text-[var(--chateau-gold)] font-accent tracking-wider text-sm">
                  LOCATIONS
                </span>
                <CardTitle className="mt-2">Gîtes</CardTitle>
                <CardDescription>
                  Maison du Jardin (20 pers.) et Pigeonnier (4 pers.).
                  Idéal pour les mariages et événements.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <span className="text-[var(--chateau-gold)] font-accent">4-24 personnes</span>
                <span className="text-[var(--chateau-stone)] text-sm">Sur devis</span>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card href="/hebergements/appartement" className="group h-full">
              <CardImage src="/images/hebergements/appartement-preview.jpg" alt="Appartement" />
              <CardContent>
                <span className="text-[var(--chateau-gold)] font-accent tracking-wider text-sm">
                  DANS LE CHÂTEAU
                </span>
                <CardTitle className="mt-2">Appartement indépendant</CardTitle>
                <CardDescription>
                  Un appartement de 3 chambres au sein du château avec accès privatif.
                  Idéal pour les familles ou groupes d&apos;amis.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <span className="text-[var(--chateau-gold)] font-accent">6 personnes</span>
                <span className="text-[var(--chateau-stone)] text-sm">Sur devis</span>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </Section>

      <Section background="navy">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl text-white mb-4">
            Vous organisez un événement ?
          </h2>
          <p className="text-white/80 mb-8">
            Pour les mariages et séminaires, nous proposons des formules de privatisation
            incluant l&apos;ensemble des hébergements du domaine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/evenements/mariages" variant="primary">
              Mariages
            </Button>
            <Button href="/evenements/seminaires" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--chateau-navy)]">
              Séminaires
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
