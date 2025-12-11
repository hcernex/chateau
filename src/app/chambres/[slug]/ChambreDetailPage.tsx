'use client';

import Hero from '@/components/sections/Hero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { Card, CardImage, CardContent, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card';
import { Chambre } from '@/types';
import { formatPrice } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Props {
  chambre: Chambre;
  autresChambres: Chambre[];
}

export default function ChambreDetailPage({ chambre, autresChambres }: Props) {
  return (
    <>
      <Hero
        title={chambre.nom}
        subtitle={chambre.type === 'suite' ? 'Suite' : 'Chambre d\'hôtes'}
        badge={`${chambre.capacite.min}-${chambre.capacite.max} PERSONNES`}
        image={chambre.images[0]}
        height="medium"
        primaryCTA={{ label: 'Réserver cette chambre', href: '/reservation' }}
      />

      <Section background="white">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contenu principal */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Badge variant={chambre.type === 'suite' ? 'gold' : 'default'}>
                  {chambre.type === 'suite' ? 'Suite' : 'Chambre'}
                </Badge>
                {chambre.superficie && (
                  <span className="text-[var(--chateau-stone)]">{chambre.superficie}</span>
                )}
              </div>

              <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
                Description
              </h2>
              <p className="text-[var(--chateau-stone)] leading-relaxed mb-8">
                {chambre.description}
              </p>

              {chambre.particularite && (
                <div className="bg-[var(--chateau-gold-light)] p-6 rounded-lg mb-8">
                  <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-2">
                    Particularité
                  </h3>
                  <p className="text-[var(--chateau-stone)]">{chambre.particularite}</p>
                </div>
              )}

              <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
                Équipements
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {chambre.equipements.map((equip) => (
                  <li key={equip} className="flex items-center gap-2 text-[var(--chateau-stone)]">
                    <svg className="w-5 h-5 text-[var(--chateau-gold)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {equip}
                  </li>
                ))}
              </ul>

              <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
                Vue
              </h2>
              <p className="text-[var(--chateau-stone)] mb-8">{chambre.vue}</p>

              {/* Galerie placeholder */}
              <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
                Galerie
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {chambre.images.map((img, index) => (
                  <div
                    key={index}
                    className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-[var(--chateau-gold-light)] to-[var(--chateau-stone)] flex items-center justify-center"
                  >
                    <div className="text-center text-white">
                      <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm opacity-70">Photo {index + 1}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Tarifs et réservation */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[var(--chateau-cream)] p-6 rounded-lg sticky top-24"
            >
              <div className="text-center mb-6">
                <span className="text-4xl font-heading font-bold text-[var(--chateau-gold)]">
                  {formatPrice(chambre.tarifParNuit)}
                </span>
                <span className="text-[var(--chateau-stone)] block">par nuit</span>
              </div>

              <div className="border-t border-[var(--chateau-stone)]/20 pt-4 mb-6">
                <p className="text-sm text-[var(--chateau-stone)] text-center">
                  Petit-déjeuner inclus<br />
                  Servi dans la grande salle à manger du château
                </p>
              </div>

              <Button href="/reservation" variant="primary" className="w-full mb-4">
                Réserver
              </Button>
              <Button href="/contact" variant="outline" className="w-full">
                Nous contacter
              </Button>

              <div className="mt-6 text-center">
                <p className="text-sm text-[var(--chateau-stone)]">
                  Arrivée : 16h00 | Départ : 12h00
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Autres chambres */}
      <Section background="cream">
        <h2 className="font-heading text-3xl text-[var(--chateau-navy)] text-center mb-8">
          Découvrez aussi
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {autresChambres.map((autre) => (
            <Card key={autre.id} href={`/chambres/${autre.slug}`}>
              <CardImage src={autre.images[0]} alt={autre.nom} />
              <CardContent>
                <CardTitle>{autre.nom}</CardTitle>
                <CardDescription>
                  {autre.particularite || autre.style || `Vue ${autre.vue}`}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <span className="text-[var(--chateau-gold)] font-heading font-semibold">
                  {formatPrice(autre.tarifParNuit)}/nuit
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/chambres" className="text-[var(--chateau-gold)] font-accent hover:text-[var(--chateau-wine)]">
            ← Voir toutes les chambres
          </Link>
        </div>
      </Section>
    </>
  );
}
