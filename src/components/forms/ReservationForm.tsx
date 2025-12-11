'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import { chambres } from '@/data/chambres';
import { hebergements } from '@/data/hebergements';
import { isValidEmail, isValidPhone } from '@/lib/utils';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    hebergement: '',
    dateArrivee: '',
    dateDepart: '',
    adultes: 2,
    enfants: 0,
    nom: '',
    email: '',
    telephone: '',
    message: '',
    tableDhotes: false,
    animaux: false,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.hebergement) newErrors.hebergement = 'Veuillez sélectionner un hébergement';
    if (!formData.dateArrivee) newErrors.dateArrivee = 'Veuillez sélectionner une date d\'arrivée';
    if (!formData.dateDepart) newErrors.dateDepart = 'Veuillez sélectionner une date de départ';
    if (!formData.nom) newErrors.nom = 'Veuillez entrer votre nom';
    if (!formData.email || !isValidEmail(formData.email)) newErrors.email = 'Veuillez entrer un email valide';
    if (!formData.telephone || !isValidPhone(formData.telephone)) newErrors.telephone = 'Veuillez entrer un numéro de téléphone valide';

    if (formData.dateArrivee && formData.dateDepart) {
      const arrivee = new Date(formData.dateArrivee);
      const depart = new Date(formData.dateDepart);
      if (depart <= arrivee) {
        newErrors.dateDepart = 'La date de départ doit être après la date d\'arrivée';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          hebergement: '',
          dateArrivee: '',
          dateDepart: '',
          adultes: 2,
          enfants: 0,
          nom: '',
          email: '',
          telephone: '',
          message: '',
          tableDhotes: false,
          animaux: false,
        });
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
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
          Demande envoyée !
        </h3>
        <p className="text-[var(--chateau-stone)]">
          Nous avons bien reçu votre demande de réservation. Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Hébergement */}
      <div>
        <label className="block text-sm font-medium text-[var(--chateau-navy)] mb-2">
          Hébergement souhaité *
        </label>
        <select
          name="hebergement"
          value={formData.hebergement}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--chateau-gold)] ${
            errors.hebergement ? 'border-[var(--error)]' : 'border-gray-200'
          }`}
        >
          <option value="">Choisir un hébergement</option>
          <optgroup label="Chambres d'hôtes">
            {chambres.map((chambre) => (
              <option key={chambre.slug} value={chambre.slug}>
                {chambre.nom} ({chambre.capacite.min}-{chambre.capacite.max} pers.)
              </option>
            ))}
          </optgroup>
          <optgroup label="Locations">
            {hebergements.map((h) => (
              <option key={h.slug} value={h.slug}>
                {h.nom} ({h.capacite} pers.)
              </option>
            ))}
          </optgroup>
        </select>
        {errors.hebergement && <p className="text-[var(--error)] text-sm mt-1">{errors.hebergement}</p>}
      </div>

      {/* Dates */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[var(--chateau-navy)] mb-2">
            Date d&apos;arrivée *
          </label>
          <input
            type="date"
            name="dateArrivee"
            value={formData.dateArrivee}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--chateau-gold)] ${
              errors.dateArrivee ? 'border-[var(--error)]' : 'border-gray-200'
            }`}
          />
          {errors.dateArrivee && <p className="text-[var(--error)] text-sm mt-1">{errors.dateArrivee}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--chateau-navy)] mb-2">
            Date de départ *
          </label>
          <input
            type="date"
            name="dateDepart"
            value={formData.dateDepart}
            onChange={handleChange}
            min={formData.dateArrivee || new Date().toISOString().split('T')[0]}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--chateau-gold)] ${
              errors.dateDepart ? 'border-[var(--error)]' : 'border-gray-200'
            }`}
          />
          {errors.dateDepart && <p className="text-[var(--error)] text-sm mt-1">{errors.dateDepart}</p>}
        </div>
      </div>

      {/* Nombre de personnes */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[var(--chateau-navy)] mb-2">
            Adultes *
          </label>
          <input
            type="number"
            name="adultes"
            value={formData.adultes}
            onChange={handleChange}
            min={1}
            max={20}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--chateau-gold)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--chateau-navy)] mb-2">
            Enfants
          </label>
          <input
            type="number"
            name="enfants"
            value={formData.enfants}
            onChange={handleChange}
            min={0}
            max={10}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--chateau-gold)]"
          />
        </div>
      </div>

      {/* Coordonnées */}
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
            Téléphone *
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

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-[var(--chateau-navy)] mb-2">
          Message / Demandes particulières
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--chateau-gold)] resize-none"
          placeholder="Précisez vos demandes particulières..."
        />
      </div>

      {/* Options */}
      <div className="space-y-3">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="tableDhotes"
            checked={formData.tableDhotes}
            onChange={handleChange}
            className="w-5 h-5 text-[var(--chateau-gold)] border-gray-300 rounded focus:ring-[var(--chateau-gold)]"
          />
          <span className="text-[var(--chateau-stone)]">
            Table d&apos;hôtes (dîner) - min. 6 personnes
          </span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="animaux"
            checked={formData.animaux}
            onChange={handleChange}
            className="w-5 h-5 text-[var(--chateau-gold)] border-gray-300 rounded focus:ring-[var(--chateau-gold)]"
          />
          <span className="text-[var(--chateau-stone)]">
            Animaux de compagnie (supplément)
          </span>
        </label>
      </div>

      {status === 'error' && (
        <div className="p-4 bg-red-50 text-[var(--error)] rounded-lg">
          Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
        </div>
      )}

      <Button type="submit" variant="primary" className="w-full" isLoading={status === 'loading'}>
        Envoyer ma demande
      </Button>

      <p className="text-xs text-[var(--chateau-stone)] text-center">
        En soumettant ce formulaire, vous acceptez notre{' '}
        <a href="/politique-confidentialite" className="underline">politique de confidentialité</a>.
      </p>
    </form>
  );
}
