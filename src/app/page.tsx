'use client';

import Hero from '@/components/sections/Hero';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/sections/SectionHeading';
import { Card, CardImage, CardContent, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import TestimonialSlider from '@/components/sections/TestimonialSlider';
import { chambres } from '@/data/chambres';
import { formatPrice } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Équipements du domaine
const equipements = [
  { icon: '🏊', label: 'Piscine', description: 'Piscine extérieure chauffée' },
  { icon: '🌳', label: 'Parc arboré', description: 'Jardin et parc de plusieurs hectares' },
  { icon: '☀️', label: 'Terrasse Sud', description: 'Terrasse plein sud avec vue' },
  { icon: '🏔️', label: 'Vue vallée', description: 'Vue sur la vallée de la Sauldre' },
  { icon: '📶', label: 'Wi-Fi', description: 'Wi-Fi gratuit partout' },
  { icon: '🚗', label: 'Parking', description: 'Parking privé sécurisé' },
];

// Activités régionales
const activites = [
  { nom: 'Vignobles de Sancerre', distance: '10 min', icon: '🍷' },
  { nom: 'Pouilly-sur-Loire', distance: '20 min', icon: '🍇' },
  { nom: 'Bourges', distance: '39 km', icon: '🏛️' },
  { nom: 'Paris', distance: '2h', icon: '🚄' },
  { nom: 'Crottin de Chavignol', distance: '15 min', icon: '🧀' },
  { nom: 'Châteaux de la Loire', distance: '1h', icon: '🏰' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Château de Beaujeu"
        subtitle="Demeure historique au cœur du vignoble de Sancerre. Vivez une expérience unique dans un monument du XVIe siècle, à seulement 2 heures de Paris."
        badge="DEPUIS 1566"
        image="/images/hero-chateau.jpg"
        primaryCTA={{ label: 'Réserver votre séjour', href: '/reservation' }}
        secondaryCTA={{ label: 'Découvrir le domaine', href: '/domaine/histoire' }}
      />

      {/* Section Bienvenue */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-accent text-[var(--chateau-gold)] tracking-[0.2em] text-sm">BIENVENUE</span>
            <h2 className="font-heading text-3xl md:text-4xl text-[var(--chateau-navy)] mt-4 mb-6">
              Un écrin d&apos;histoire au cœur du Berry
            </h2>
            <div className="space-y-4 text-[var(--chateau-stone)] leading-relaxed">
              <p>
                Bienvenue au Château de Beaujeu, demeure de caractère du XVIe siècle nichée
                au cœur du vignoble de Sancerre. À seulement 2 heures de Paris, notre château
                familial inscrit aux Monuments Historiques vous accueille pour des séjours
                d&apos;exception, des mariages féériques et des événements professionnels dans
                un cadre authentique et préservé.
              </p>
              <p>
                Propriété de la famille de Pommereau depuis 1809, le château conserve tout
                son charme d&apos;antan : boiseries d&apos;époque, cheminées monumentales et mobilier
                de style vous transportent dans une autre époque, tout en bénéficiant du
                confort moderne.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/domaine/histoire" variant="primary">
                Découvrir notre histoire
              </Button>
              <Button href="/domaine/galerie" variant="outline">
                Voir la galerie
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-[var(--chateau-gold-light)] to-[var(--chateau-stone)] flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} points="9,22 9,12 15,12 15,22" />
                  </svg>
                  <p className="text-sm opacity-70">Image du château</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[var(--chateau-gold)] text-white p-6 rounded-lg shadow-xl">
              <p className="font-heading text-4xl font-bold">458</p>
              <p className="font-accent text-sm">ans d&apos;histoire</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Section Hébergements */}
      <Section background="cream">
        <SectionHeading
          badge="NOS HÉBERGEMENTS"
          title="Un séjour sur mesure"
          subtitle="Que vous soyez en couple, en famille ou en groupe, nous avons l'hébergement qu'il vous faut. Jusqu'à 42 couchages sur le domaine."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {/* Chambres d'hôtes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card href="/chambres" className="group h-full">
              <CardImage src="/images/chambres/preview.jpg" alt="Chambres d'hôtes" />
              <CardContent>
                <CardTitle>Chambres d&apos;hôtes</CardTitle>
                <CardDescription>
                  5 chambres de charme dans le château, décorées avec du mobilier d&apos;époque.
                  Petit-déjeuner inclus servi dans la grande salle à manger.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <span className="text-[var(--chateau-gold)] font-accent">2-12 personnes</span>
                <span className="text-[var(--chateau-stone)] text-sm">Dès 120€/nuit</span>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Appartement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card href="/hebergements/appartement" className="group h-full">
              <CardImage src="/images/hebergements/appartement-preview.jpg" alt="Appartement indépendant" />
              <CardContent>
                <CardTitle>Appartement indépendant</CardTitle>
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

          {/* Gîtes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card href="/hebergements/gites" className="group h-full">
              <CardImage src="/images/hebergements/gites-preview.jpg" alt="Gîtes" />
              <CardContent>
                <CardTitle>Gîtes</CardTitle>
                <CardDescription>
                  La Maison du Jardin (20 pers.) et le Pigeonnier (4 pers.).
                  Parfaits pour les mariages et événements.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <span className="text-[var(--chateau-gold)] font-accent">4-24 personnes</span>
                <span className="text-[var(--chateau-stone)] text-sm">Sur devis</span>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <Button href="/hebergements" variant="primary">
            Voir tous nos hébergements
          </Button>
        </div>
      </Section>

      {/* Section Événements */}
      <Section background="navy">
        <SectionHeading
          badge="ÉVÉNEMENTS"
          title="Un cadre d'exception pour vos réceptions"
          subtitle="Mariages féériques ou séminaires inspirants, le Château de Beaujeu offre un écrin unique pour vos événements les plus importants."
          light
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mariages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/evenements/mariages" className="group block">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
                <div className="w-full h-full bg-gradient-to-br from-[var(--chateau-wine)] to-[var(--chateau-gold)] flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-2 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <p className="text-sm opacity-70">Photo de mariage</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <h3 className="font-heading text-2xl text-white mb-3 group-hover:text-[var(--chateau-gold-light)] transition-colors">
                Mariages & Réceptions
              </h3>
              <p className="text-white/70 mb-4">
                Jusqu&apos;à 220 personnes assises ou 400 en cocktail. Salle de réception de 213m²,
                caves voûtées et parc arboré pour une cérémonie laïque inoubliable.
              </p>
              <span className="inline-flex items-center gap-2 text-[var(--chateau-gold-light)] font-accent group-hover:gap-3 transition-all">
                Découvrir
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </motion.div>

          {/* Séminaires */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/evenements/seminaires" className="group block">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
                <div className="w-full h-full bg-gradient-to-br from-[var(--chateau-forest)] to-[var(--chateau-navy)] flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-2 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-sm opacity-70">Photo de séminaire</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <h3 className="font-heading text-2xl text-white mb-3 group-hover:text-[var(--chateau-gold-light)] transition-colors">
                Séminaires & Événements Pro
              </h3>
              <p className="text-white/70 mb-4">
                Un cadre inspirant à 2h de Paris pour vos réunions de direction, team building
                et événements corporate. Hébergement sur place jusqu&apos;à 42 personnes.
              </p>
              <span className="inline-flex items-center gap-2 text-[var(--chateau-gold-light)] font-accent group-hover:gap-3 transition-all">
                Découvrir
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Section Le Domaine - Équipements */}
      <Section background="white">
        <SectionHeading
          badge="LE DOMAINE"
          title="Tout le confort au cœur de l'histoire"
          subtitle="Le château et son domaine offrent tous les services pour un séjour inoubliable."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {equipements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="text-center p-6 rounded-lg bg-[var(--chateau-cream)] hover:bg-[var(--chateau-gold-light)] transition-colors group"
            >
              <span className="text-4xl mb-3 block">{item.icon}</span>
              <h4 className="font-heading text-[var(--chateau-navy)] font-semibold mb-1">
                {item.label}
              </h4>
              <p className="text-xs text-[var(--chateau-stone)]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Section La Région */}
      <Section background="gold-light">
        <SectionHeading
          badge="LA RÉGION"
          title="Au cœur du vignoble de Sancerre"
          subtitle="Une situation privilégiée pour découvrir les richesses du Berry et du Val de Loire."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activites.map((item, index) => (
            <motion.div
              key={item.nom}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h4 className="font-heading text-[var(--chateau-navy)] font-semibold">
                  {item.nom}
                </h4>
                <p className="text-sm text-[var(--chateau-stone)]">{item.distance}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/domaine/environnement" variant="secondary">
            Explorer la région
          </Button>
        </div>
      </Section>

      {/* Section Témoignages */}
      <Section background="cream">
        <SectionHeading
          badge="TÉMOIGNAGES"
          title="Ce que disent nos hôtes"
          subtitle="Note moyenne de 9.5/10 sur Booking et 4.7/5 sur Mariages.net"
        />

        <TestimonialSlider />
      </Section>

      {/* Section Chambres Preview */}
      <Section background="white">
        <SectionHeading
          badge="NOS CHAMBRES"
          title="Des chambres de caractère"
          subtitle="Chaque chambre raconte une histoire et offre un cadre unique pour votre séjour."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chambres.slice(0, 3).map((chambre, index) => (
            <motion.div
              key={chambre.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card href={`/chambres/${chambre.slug}`} className="group h-full">
                <CardImage src={chambre.images[0]} alt={chambre.nom} />
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-accent uppercase tracking-wider text-[var(--chateau-gold)]">
                      {chambre.type === 'suite' ? 'Suite' : 'Chambre'}
                    </span>
                    <span className="text-xs text-[var(--chateau-stone)]">
                      {chambre.capacite.min}-{chambre.capacite.max} pers.
                    </span>
                  </div>
                  <CardTitle>{chambre.nom}</CardTitle>
                  <CardDescription>
                    {chambre.particularite || chambre.style || `Vue ${chambre.vue}`}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <span className="text-[var(--chateau-gold)] font-heading font-semibold">
                    {formatPrice(chambre.tarifParNuit)}
                    <span className="text-sm font-normal text-[var(--chateau-stone)]">/nuit</span>
                  </span>
                  <span className="text-[var(--chateau-stone)] text-sm">
                    Petit-déj. inclus
                  </span>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/chambres" variant="primary">
            Voir toutes les chambres
          </Button>
        </div>
      </Section>

      {/* CTA Final */}
      <Section background="navy" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
              Prêt à vivre une expérience unique ?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Réservez votre séjour au Château de Beaujeu et laissez-vous transporter
              dans un univers d&apos;exception, entre histoire et modernité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/reservation" variant="primary" size="lg">
                Réserver maintenant
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[var(--chateau-navy)]">
                Nous contacter
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
