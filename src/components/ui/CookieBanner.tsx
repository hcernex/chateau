'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const COOKIE_CONSENT_KEY = 'cookie_consent';

type ConsentType = 'all' | 'essential' | null;

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'all');
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl border border-gray-100">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="hidden sm:block flex-shrink-0">
                <div className="w-12 h-12 bg-[var(--chateau-gold-light)] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--chateau-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-2">
                  Nous respectons votre vie privée
                </h3>
                <p className="text-sm text-[var(--chateau-stone)] mb-4">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site.
                  Les cookies essentiels sont nécessaires au fonctionnement du site.
                  Les cookies analytiques nous aident à comprendre comment vous utilisez le site.
                </p>

                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="mb-4 p-4 bg-[var(--chateau-cream)] rounded-lg text-sm"
                  >
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-[var(--chateau-navy)]">Cookies essentiels</h4>
                        <p className="text-[var(--chateau-stone)]">
                          Nécessaires au fonctionnement du site (préférences de consentement, session).
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--chateau-navy)]">Cookies analytiques</h4>
                        <p className="text-[var(--chateau-stone)]">
                          Nous aident à comprendre comment les visiteurs utilisent le site pour l&apos;améliorer.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleAcceptAll}
                  >
                    Accepter tout
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleAcceptEssential}
                  >
                    Essentiels uniquement
                  </Button>
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="text-sm text-[var(--chateau-gold)] hover:text-[var(--chateau-navy)] transition-colors underline"
                  >
                    {showDetails ? 'Masquer les détails' : 'En savoir plus'}
                  </button>
                </div>

                <p className="text-xs text-[var(--chateau-stone)] mt-4">
                  En cliquant sur &quot;Accepter tout&quot;, vous consentez à l&apos;utilisation de tous les cookies.
                  Consultez notre{' '}
                  <a href="/politique-confidentialite" className="underline hover:text-[var(--chateau-navy)]">
                    politique de confidentialité
                  </a>{' '}
                  pour en savoir plus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Hook pour vérifier le consentement
export function useCookieConsent(): ConsentType {
  const [consent, setConsent] = useState<ConsentType>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentType;
    setConsent(storedConsent);
  }, []);

  return consent;
}
