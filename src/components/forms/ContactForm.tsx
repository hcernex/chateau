'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import { isValidEmail, isValidPhone } from '@/lib/utils';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const sujets = [
    'Renseignements généraux',
    'Chambres d\'hôtes',
    'Locations (gîtes, appartement)',
    'Mariage / Réception',
    'Séminaire / Événement professionnel',
    'Table d\'hôtes',
    'Autre',
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nom) newErrors.nom = 'Veuillez entrer votre nom';
    if (!formData.email || !isValidEmail(formData.email)) newErrors.email = 'Veuillez entrer un email valide';
    if (formData.telephone && !isValidPhone(formData.telephone)) newErrors.telephone = 'Veuillez entrer un numéro de téléphone valide';
    if (!formData.sujet) newErrors.sujet = 'Veuillez sélectionner un sujet';
    if (!formData.message) newErrors.message = 'Veuillez entrer votre message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          sujet: '',
          message: '',
        });
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-[var(--success)] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl text-[var(--chateau-navy)] mb-2">
          Message envoyé !
        </h3>
        <p className="text-[var(--chateau-stone)]">
          Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nom */}
      <div>
        <label className="block text-sm font-medium text-[var(--chateau-navy)] mb-2">
          Nom complet *
        </label>
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--chateau-gold)] ${
            errors.nom ? 'border-[var(--error)]' : 'border-gray-200'
          }`}
        />
        {errors.nom && <p className="text-[var(--error)] text-sm mt-1">{errors.nom}</p>}
      </div>

      {/* Email et Téléphone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[var(--chateau-navy)] mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--chateau-gold)] ${
              errors.email ? 'border-[var(--error)]' : 'border-gray-200'
            }`}
          />
          {errors.email && <p className="text-[var(--error)] text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--chateau-navy)] mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="06 12 34 56 78"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--chateau-gold)] ${
              errors.telephone ? 'border-[var(--error)]' : 'border-gray-200'
            }`}
          />
          {errors.telephone && <p className="text-[var(--error)] text-sm mt-1">{errors.telephone}</p>}
        </div>
      </div>

      {/* Sujet */}
      <div>
        <label className="block text-sm font-medium text-[var(--chateau-navy)] mb-2">
          Sujet *
        </label>
        <select
          name="sujet"
          value={formData.sujet}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--chateau-gold)] ${
            errors.sujet ? 'border-[var(--error)]' : 'border-gray-200'
          }`}
        >
          <option value="">Choisir un sujet</option>
          {sujets.map((sujet) => (
            <option key={sujet} value={sujet}>
              {sujet}
            </option>
          ))}
        </select>
        {errors.sujet && <p className="text-[var(--error)] text-sm mt-1">{errors.sujet}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-[var(--chateau-navy)] mb-2">
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--chateau-gold)] resize-none ${
            errors.message ? 'border-[var(--error)]' : 'border-gray-200'
          }`}
          placeholder="Votre message..."
        />
        {errors.message && <p className="text-[var(--error)] text-sm mt-1">{errors.message}</p>}
      </div>

      {status === 'error' && (
        <div className="p-4 bg-red-50 text-[var(--error)] rounded-lg">
          Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
        </div>
      )}

      <Button type="submit" variant="primary" className="w-full" isLoading={status === 'loading'}>
        Envoyer le message
      </Button>

      <p className="text-xs text-[var(--chateau-stone)] text-center">
        En soumettant ce formulaire, vous acceptez notre{' '}
        <a href="/politique-confidentialite" className="underline">politique de confidentialité</a>.
      </p>
    </form>
  );
}
