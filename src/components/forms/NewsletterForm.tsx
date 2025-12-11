'use client';

import { useState } from 'react';
import { isValidEmail } from '@/lib/utils';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setStatus('error');
      setMessage('Veuillez entrer une adresse email valide.');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Merci pour votre inscription !');
        setEmail('');
      } else {
        throw new Error('Erreur lors de l\'inscription');
      }
    } catch {
      setStatus('error');
      setMessage('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre email"
          className="flex-1 px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[var(--chateau-gold)] transition-colors text-sm"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-4 py-2 bg-[var(--chateau-gold)] text-white rounded hover:bg-[var(--chateau-wine)] transition-colors disabled:opacity-50 text-sm font-accent"
        >
          {status === 'loading' ? '...' : 'OK'}
        </button>
      </div>
      {message && (
        <p
          className={`text-xs ${
            status === 'success' ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
