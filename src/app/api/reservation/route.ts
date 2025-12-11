import { NextRequest, NextResponse } from 'next/server';
import { sendReservationEmail } from '@/lib/email';
import { isValidEmail, isValidPhone } from '@/lib/utils';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
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
    } = body;

    // Validation des champs obligatoires
    if (!hebergement || !dateArrivee || !dateDepart || !nom || !email || !telephone) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    if (!isValidPhone(telephone)) {
      return NextResponse.json(
        { error: 'Numéro de téléphone invalide' },
        { status: 400 }
      );
    }

    // Validation des dates
    const arrivee = new Date(dateArrivee);
    const depart = new Date(dateDepart);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (arrivee < today) {
      return NextResponse.json(
        { error: 'La date d\'arrivée ne peut pas être dans le passé' },
        { status: 400 }
      );
    }

    if (depart <= arrivee) {
      return NextResponse.json(
        { error: 'La date de départ doit être après la date d\'arrivée' },
        { status: 400 }
      );
    }

    // Validation du nombre de personnes
    if (adultes < 1 || adultes > 20) {
      return NextResponse.json(
        { error: 'Nombre d\'adultes invalide' },
        { status: 400 }
      );
    }

    if (enfants < 0 || enfants > 10) {
      return NextResponse.json(
        { error: 'Nombre d\'enfants invalide' },
        { status: 400 }
      );
    }

    // Envoi de l'email
    const result = await sendReservationEmail({
      hebergement,
      dateArrivee,
      dateDepart,
      adultes: Number(adultes),
      enfants: Number(enfants),
      nom,
      email,
      telephone,
      message,
      tableDhotes: Boolean(tableDhotes),
      animaux: Boolean(animaux),
    });

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Erreur API réservation:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
