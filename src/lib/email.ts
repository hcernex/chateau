import { Resend } from 'resend';

// Initialisation conditionnelle de Resend
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const FROM_EMAIL = 'Château de Beaujeu <noreply@chateau-de-beaujeu.com>';
const TO_EMAIL = 'annecharlotte@chateau-de-beaujeu.com';

// Vérification que Resend est configuré
function checkResendConfig() {
  if (!resend) {
    console.warn('RESEND_API_KEY non configurée - les emails ne seront pas envoyés');
    return false;
  }
  return true;
}

interface ContactEmailData {
  nom: string;
  email: string;
  telephone?: string;
  sujet: string;
  message: string;
}

interface ReservationEmailData {
  hebergement: string;
  dateArrivee: string;
  dateDepart: string;
  adultes: number;
  enfants: number;
  nom: string;
  email: string;
  telephone: string;
  message?: string;
  tableDhotes: boolean;
  animaux: boolean;
}

interface NewsletterEmailData {
  email: string;
}

export async function sendContactEmail(data: ContactEmailData) {
  if (!checkResendConfig()) {
    // En mode développement sans API key, simuler le succès
    console.log('Email contact simulé:', data);
    return { success: true };
  }

  const { nom, email, telephone, sujet, message } = data;

  const htmlContent = `
    <h2>Nouveau message de contact</h2>
    <p><strong>Nom :</strong> ${nom}</p>
    <p><strong>Email :</strong> ${email}</p>
    ${telephone ? `<p><strong>Téléphone :</strong> ${telephone}</p>` : ''}
    <p><strong>Sujet :</strong> ${sujet}</p>
    <hr />
    <h3>Message :</h3>
    <p>${message.replace(/\n/g, '<br />')}</p>
  `;

  const textContent = `
Nouveau message de contact

Nom : ${nom}
Email : ${email}
${telephone ? `Téléphone : ${telephone}` : ''}
Sujet : ${sujet}

Message :
${message}
  `;

  try {
    await resend!.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Contact] ${sujet} - ${nom}`,
      html: htmlContent,
      text: textContent,
    });

    return { success: true };
  } catch (error) {
    console.error('Erreur envoi email contact:', error);
    return { success: false, error };
  }
}

export async function sendReservationEmail(data: ReservationEmailData) {
  if (!checkResendConfig()) {
    // En mode développement sans API key, simuler le succès
    console.log('Email réservation simulé:', data);
    return { success: true };
  }

  const {
    hebergement,
    dateArrivee,
    dateDepart,
    adultes,
    enfants,
    nom,
    email,
    telephone,
    message,
    tableDhotes,
    animaux,
  } = data;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const htmlContent = `
    <h2>Nouvelle demande de réservation</h2>

    <h3>Séjour</h3>
    <p><strong>Hébergement :</strong> ${hebergement}</p>
    <p><strong>Date d'arrivée :</strong> ${formatDate(dateArrivee)}</p>
    <p><strong>Date de départ :</strong> ${formatDate(dateDepart)}</p>
    <p><strong>Adultes :</strong> ${adultes}</p>
    <p><strong>Enfants :</strong> ${enfants}</p>

    <h3>Options</h3>
    <p><strong>Table d'hôtes :</strong> ${tableDhotes ? 'Oui' : 'Non'}</p>
    <p><strong>Animaux de compagnie :</strong> ${animaux ? 'Oui' : 'Non'}</p>

    <h3>Contact</h3>
    <p><strong>Nom :</strong> ${nom}</p>
    <p><strong>Email :</strong> ${email}</p>
    <p><strong>Téléphone :</strong> ${telephone}</p>

    ${message ? `
    <h3>Message / Demandes particulières</h3>
    <p>${message.replace(/\n/g, '<br />')}</p>
    ` : ''}
  `;

  const textContent = `
Nouvelle demande de réservation

SÉJOUR
Hébergement : ${hebergement}
Date d'arrivée : ${formatDate(dateArrivee)}
Date de départ : ${formatDate(dateDepart)}
Adultes : ${adultes}
Enfants : ${enfants}

OPTIONS
Table d'hôtes : ${tableDhotes ? 'Oui' : 'Non'}
Animaux de compagnie : ${animaux ? 'Oui' : 'Non'}

CONTACT
Nom : ${nom}
Email : ${email}
Téléphone : ${telephone}

${message ? `MESSAGE / DEMANDES PARTICULIÈRES
${message}` : ''}
  `;

  try {
    // Email au château
    await resend!.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Réservation] ${hebergement} - ${nom} (${formatDate(dateArrivee)} - ${formatDate(dateDepart)})`,
      html: htmlContent,
      text: textContent,
    });

    // Email de confirmation au client
    const confirmationHtml = `
      <h2>Merci pour votre demande de réservation !</h2>
      <p>Bonjour ${nom},</p>
      <p>Nous avons bien reçu votre demande de réservation pour le <strong>${hebergement}</strong> du <strong>${formatDate(dateArrivee)}</strong> au <strong>${formatDate(dateDepart)}</strong>.</p>
      <p>Nous reviendrons vers vous dans les plus brefs délais pour confirmer la disponibilité et vous communiquer les modalités de réservation.</p>
      <p>Pour toute question, n'hésitez pas à nous contacter :</p>
      <ul>
        <li>Téléphone : +33 2 48 79 07 95</li>
        <li>Email : annecharlotte@chateau-de-beaujeu.com</li>
        <li>WhatsApp : +33 6 XX XX XX XX</li>
      </ul>
      <p>À très bientôt au Château de Beaujeu !</p>
      <p>Bien cordialement,<br />Anne-Charlotte de Pommereau</p>
    `;

    await resend!.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Confirmation de votre demande de réservation - Château de Beaujeu',
      html: confirmationHtml,
    });

    return { success: true };
  } catch (error) {
    console.error('Erreur envoi email réservation:', error);
    return { success: false, error };
  }
}

export async function sendNewsletterConfirmation(data: NewsletterEmailData) {
  if (!checkResendConfig()) {
    // En mode développement sans API key, simuler le succès
    console.log('Email newsletter simulé:', data);
    return { success: true };
  }

  const { email } = data;

  const htmlContent = `
    <h2>Nouvelle inscription newsletter</h2>
    <p><strong>Email :</strong> ${email}</p>
    <p>Date d'inscription : ${new Date().toLocaleString('fr-FR')}</p>
  `;

  const confirmationHtml = `
    <h2>Bienvenue dans notre newsletter !</h2>
    <p>Merci de vous être inscrit(e) à la newsletter du Château de Beaujeu.</p>
    <p>Vous recevrez désormais nos actualités, offres spéciales et événements à venir.</p>
    <p>À très bientôt !</p>
    <p>L'équipe du Château de Beaujeu</p>
    <hr />
    <p style="font-size: 12px; color: #666;">
      Pour vous désinscrire, répondez à cet email avec le mot "DESINSCRIPTION".
    </p>
  `;

  try {
    // Notification au château
    await resend!.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: '[Newsletter] Nouvelle inscription',
      html: htmlContent,
    });

    // Confirmation au nouvel abonné
    await resend!.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Bienvenue dans la newsletter du Château de Beaujeu',
      html: confirmationHtml,
    });

    return { success: true };
  } catch (error) {
    console.error('Erreur envoi email newsletter:', error);
    return { success: false, error };
  }
}
