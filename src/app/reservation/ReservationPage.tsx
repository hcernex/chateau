'use client';

import Hero from '@/components/sections/Hero';
import Section from '@/components/ui/Section';
import ReservationForm from '@/components/forms/ReservationForm';
import { motion } from 'framer-motion';

export default function ReservationPage() {
  return (
    <>
      <Hero
        title="Réservation"
        subtitle="Réservez votre séjour au Château de Beaujeu et vivez une expérience unique."
        badge="RÉSERVER"
        image="/images/salle-manger.jpg"
        height="medium"
      />

      <Section background="cream">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-6">
                Demande de réservation
              </h2>
              <ReservationForm />
            </div>

            {/* Emplacement pour widget Amenitiz */}
            <div className="mt-8 p-8 bg-[var(--chateau-gold-light)] rounded-lg">
              <h3 className="font-heading text-xl text-[var(--chateau-navy)] mb-4 text-center">
                Réservation en ligne
              </h3>
              <p className="text-[var(--chateau-stone)] text-center mb-4">
                Bientôt disponible : réservez directement en ligne avec paiement sécurisé.
              </p>
              <div className="aspect-video bg-white/50 rounded-lg flex items-center justify-center">
                <div className="text-center text-[var(--chateau-stone)]">
                  <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">Widget de réservation Amenitiz</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Informations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-4">
                Informations pratiques
              </h3>
              <div className="space-y-4 text-sm text-[var(--chateau-stone)]">
                <div>
                  <strong className="text-[var(--chateau-navy)]">Arrivée :</strong>
                  <span className="ml-2">À partir de 16h00</span>
                </div>
                <div>
                  <strong className="text-[var(--chateau-navy)]">Départ :</strong>
                  <span className="ml-2">Avant 12h00</span>
                </div>
                <div>
                  <strong className="text-[var(--chateau-navy)]">Petit-déjeuner :</strong>
                  <span className="ml-2">Inclus pour les chambres d&apos;hôtes</span>
                </div>
                <div>
                  <strong className="text-[var(--chateau-navy)]">Animaux :</strong>
                  <span className="ml-2">Acceptés avec supplément</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-4">
                Tarifs indicatifs
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--chateau-stone)]">Chambres</span>
                  <span className="text-[var(--chateau-navy)] font-semibold">120-180€/nuit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--chateau-stone)]">Appartement</span>
                  <span className="text-[var(--chateau-navy)] font-semibold">Sur devis</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--chateau-stone)]">Gîtes</span>
                  <span className="text-[var(--chateau-navy)] font-semibold">Sur devis</span>
                </div>
              </div>
            </div>

            <div className="bg-[var(--chateau-navy)] p-6 rounded-lg text-white">
              <h3 className="font-heading text-lg mb-4">
                Besoin d&apos;aide ?
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Notre équipe est à votre disposition pour vous aider dans votre réservation.
              </p>
              <div className="space-y-2 text-sm">
                <a
                  href="tel:+33248790795"
                  className="flex items-center gap-2 text-white hover:text-[var(--chateau-gold-light)] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +33 2 48 79 07 95
                </a>
                <a
                  href="mailto:annecharlotte@chateau-de-beaujeu.com"
                  className="flex items-center gap-2 text-white hover:text-[var(--chateau-gold-light)] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
