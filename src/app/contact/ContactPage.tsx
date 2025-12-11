'use client';

import Hero from '@/components/sections/Hero';
import Section from '@/components/ui/Section';
import ContactForm from '@/components/forms/ContactForm';
import { motion } from 'framer-motion';
import { contactInfo } from '@/data/navigation';

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact"
        subtitle="Une question, une demande de renseignement ? N'hésitez pas à nous contacter."
        badge="NOUS ÉCRIRE"
        image="/images/contact-hero.jpg"
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
                Envoyez-nous un message
              </h2>
              <ContactForm />
            </div>
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Coordonnées */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-4">
                Coordonnées
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--chateau-gold)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-[var(--chateau-navy)] font-medium">{contactInfo.nom}</p>
                    <p className="text-[var(--chateau-stone)]">{contactInfo.adresse}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--chateau-gold)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a
                    href={`tel:${contactInfo.telephone.replace(/\s/g, '')}`}
                    className="text-[var(--chateau-stone)] hover:text-[var(--chateau-gold)] transition-colors"
                  >
                    {contactInfo.telephone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--chateau-gold)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-[var(--chateau-stone)] hover:text-[var(--chateau-gold)] transition-colors break-all"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-[#25D366] p-6 rounded-lg text-white">
              <h3 className="font-heading text-lg mb-3">
                Contactez-nous sur WhatsApp
              </h3>
              <p className="text-white/90 text-sm mb-4">
                Pour une réponse rapide, envoyez-nous un message sur WhatsApp.
              </p>
              <a
                href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Bonjour, je souhaite des informations sur le Château de Beaujeu.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#25D366] px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Ouvrir WhatsApp
              </a>
            </div>

            {/* Horaires */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-4">
                Horaires d&apos;accueil
              </h3>
              <div className="space-y-2 text-sm text-[var(--chateau-stone)]">
                <div className="flex justify-between">
                  <span>Lundi - Dimanche</span>
                  <span className="text-[var(--chateau-navy)]">9h - 19h</span>
                </div>
                <div className="pt-2 border-t border-gray-100 mt-2">
                  <p className="text-[var(--chateau-navy)]">
                    <strong>Arrivée :</strong> à partir de 16h
                  </p>
                  <p className="text-[var(--chateau-navy)]">
                    <strong>Départ :</strong> avant 12h
                  </p>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-4">
                Suivez-nous
              </h3>
              <div className="flex gap-4">
                <a
                  href={contactInfo.reseauxSociaux.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[var(--chateau-cream)] rounded-full flex items-center justify-center text-[var(--chateau-navy)] hover:bg-[var(--chateau-gold)] hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a
                  href={contactInfo.reseauxSociaux.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[var(--chateau-cream)] rounded-full flex items-center justify-center text-[var(--chateau-navy)] hover:bg-[var(--chateau-gold)] hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Carte Google Maps */}
      <Section background="white" className="!py-0">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 pt-16">
            <h2 className="font-heading text-3xl text-[var(--chateau-navy)] mb-4">
              Nous trouver
            </h2>
            <p className="text-[var(--chateau-stone)]">
              {contactInfo.nom}, {contactInfo.adresse}
            </p>
          </div>
          <div className="aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.0!2d2.70197!3d47.32482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sChâteau+de+Beaujeu!5e0!3m2!1sfr!2sfr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte Google Maps - Château de Beaujeu"
            />
          </div>
          <div className="text-center py-8">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Château de Beaujeu, 18300 Sens-Beaujeu, France')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--chateau-gold)] hover:text-[var(--chateau-navy)] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Obtenir l&apos;itinéraire
            </a>
          </div>
        </div>
      </Section>

      {/* Section Accès */}
      <Section background="gold-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[var(--chateau-navy)] text-center mb-8">
            Comment venir
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white p-6 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[var(--chateau-cream)] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--chateau-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg text-[var(--chateau-navy)]">
                  En voiture
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-[var(--chateau-stone)]">
                <li><strong>Depuis Paris (2h) :</strong> A77 direction Nevers, sortie Cosne-sur-Loire</li>
                <li><strong>Depuis Bourges (30 min) :</strong> D955 direction Sancerre</li>
                <li><strong>Depuis Orléans (1h30) :</strong> A71 puis D955</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white p-6 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[var(--chateau-cream)] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--chateau-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg text-[var(--chateau-navy)]">
                  En train
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-[var(--chateau-stone)]">
                <li><strong>Gare de Cosne-sur-Loire :</strong> 15 km (navette possible sur demande)</li>
                <li><strong>Gare de Bourges :</strong> 39 km</li>
                <li><strong>TGV depuis Paris Bercy :</strong> 2h jusqu&apos;à Cosne-sur-Loire</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white p-6 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[var(--chateau-cream)] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--chateau-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg text-[var(--chateau-navy)]">
                  En avion
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-[var(--chateau-stone)]">
                <li><strong>Aéroport de Bourges :</strong> 39 km</li>
                <li><strong>Aéroport Paris-Orly :</strong> 200 km</li>
                <li><strong>Aéroport Paris-CDG :</strong> 250 km</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white p-6 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[var(--chateau-cream)] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--chateau-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg text-[var(--chateau-navy)]">
                  Coordonnées GPS
                </h3>
              </div>
              <div className="text-sm text-[var(--chateau-stone)]">
                <p className="font-mono text-[var(--chateau-navy)]">47.32482, 2.70197</p>
                <p className="mt-2">Château de Beaujeu, 18300 Sens-Beaujeu</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}
