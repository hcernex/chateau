'use client';

import Hero from '@/components/sections/Hero';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/sections/SectionHeading';
import { Card, CardImage, CardContent, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { chambres } from '@/data/chambres';
import { formatPrice } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function ChambresPage() {
  return (
    <>
      <Hero
        title="Nos Chambres d'hôtes"
        subtitle="5 chambres de caractère au cœur du château, décorées avec du mobilier d'époque. Petit-déjeuner inclus."
        badge="HÉBERGEMENT"
        image="/images/chambres/chambre-toile-jouy.jpg"
        height="medium"
      />

      <Section background="cream">
        <SectionHeading
          badge="NOS CHAMBRES"
          title="Un séjour hors du temps"
          subtitle="Chaque chambre raconte une histoire et offre une expérience unique dans un cadre authentique du XVIe siècle."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chambres.map((chambre, index) => (
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
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant={chambre.type === 'suite' ? 'gold' : 'default'} size="sm">
                      {chambre.type === 'suite' ? 'Suite' : 'Chambre'}
                    </Badge>
                    <span className="text-xs text-[var(--chateau-stone)]">
                      {chambre.capacite.min}-{chambre.capacite.max} personnes
                    </span>
                  </div>
                  <CardTitle>{chambre.nom}</CardTitle>
                  <CardDescription>
                    {chambre.particularite || chambre.style || `Vue sur ${chambre.vue.toLowerCase()}`}
                  </CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {chambre.equipements.slice(0, 3).map((equip) => (
                      <span
                        key={equip}
                        className="text-xs px-2 py-1 bg-[var(--chateau-cream)] rounded text-[var(--chateau-stone)]"
                      >
                        {equip.split(' ').slice(0, 2).join(' ')}
                      </span>
                    ))}
                  </div>
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
      </Section>

      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl text-[var(--chateau-navy)] mb-6">
            Services inclus
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🍳', label: 'Petit-déjeuner', desc: 'Servi dans la salle à manger' },
              { icon: '🛁', label: 'Salle de bains', desc: 'Privative avec produits d\'accueil' },
              { icon: '📶', label: 'Wi-Fi', desc: 'Gratuit dans tout le château' },
              { icon: '🅿️', label: 'Parking', desc: 'Privé et sécurisé' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <span className="text-3xl block mb-2">{item.icon}</span>
                <h4 className="font-heading font-semibold text-[var(--chateau-navy)]">{item.label}</h4>
                <p className="text-sm text-[var(--chateau-stone)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="gold-light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl text-[var(--chateau-navy)] mb-4">
            Informations pratiques
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-2">Arrivée & Départ</h3>
              <p className="text-[var(--chateau-stone)]">
                Arrivée : à partir de 16h00<br />
                Départ : avant 12h00
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-2">Animaux</h3>
              <p className="text-[var(--chateau-stone)]">
                Animaux de compagnie acceptés avec supplément.<br />
                Merci de nous prévenir à la réservation.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
