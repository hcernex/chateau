import { Metadata } from 'next';
import ContactPage from './ContactPage';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez le Château de Beaujeu pour toute demande de renseignement, réservation ou devis. Téléphone, email et WhatsApp disponibles.',
};

export default function Page() {
  return <ContactPage />;
}
