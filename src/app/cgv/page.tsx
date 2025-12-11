import { Metadata } from 'next';
import Section from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente',
  description: 'Conditions générales de vente et de réservation du Château de Beaujeu.',
};

export default function CGVPage() {
  return (
    <Section background="cream" className="pt-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl text-[var(--chateau-navy)] mb-8">
          Conditions Générales de Vente
        </h1>

        <div className="prose prose-stone max-w-none space-y-8">
          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Article 1 - Objet
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre le Château de Beaujeu et ses clients pour les prestations d&apos;hébergement (chambres d&apos;hôtes, gîtes, appartement) et les services annexes (table d&apos;hôtes, location de salles pour événements).
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Article 2 - Réservation
            </h2>
            <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-2">2.1 Demande de réservation</h3>
            <p className="text-[var(--chateau-stone)]">
              Toute réservation peut être effectuée par téléphone, email, formulaire en ligne ou via notre plateforme de réservation. La réservation n&apos;est définitive qu&apos;après confirmation écrite de notre part et réception de l&apos;acompte.
            </p>
            <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-2 mt-4">2.2 Acompte</h3>
            <p className="text-[var(--chateau-stone)]">
              Un acompte de 30% du montant total du séjour est demandé pour confirmer la réservation. Le solde est à régler à l&apos;arrivée ou selon les modalités convenues.
            </p>
            <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-2 mt-4">2.3 Confirmation</h3>
            <p className="text-[var(--chateau-stone)]">
              Une confirmation de réservation détaillant les prestations, dates et tarifs vous sera envoyée par email. Merci de vérifier les informations et de nous signaler toute erreur.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Article 3 - Tarifs et paiement
            </h2>
            <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-2">3.1 Tarifs</h3>
            <p className="text-[var(--chateau-stone)]">
              Les tarifs sont indiqués en euros TTC. Ils comprennent l&apos;hébergement et le petit-déjeuner pour les chambres d&apos;hôtes. Les tarifs des gîtes et de l&apos;appartement sont hors petit-déjeuner sauf mention contraire.
            </p>
            <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-2 mt-4">3.2 Taxe de séjour</h3>
            <p className="text-[var(--chateau-stone)]">
              La taxe de séjour est en sus et sera perçue au moment du règlement, conformément à la réglementation en vigueur.
            </p>
            <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-2 mt-4">3.3 Moyens de paiement</h3>
            <p className="text-[var(--chateau-stone)]">
              Nous acceptons les modes de paiement suivants : carte bancaire (Visa, Mastercard), virement bancaire, espèces. Les chèques ne sont pas acceptés.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Article 4 - Annulation et modification
            </h2>
            <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-2">4.1 Par le client</h3>
            <p className="text-[var(--chateau-stone)]">
              Toute annulation doit être notifiée par écrit (email ou courrier). Les conditions d&apos;annulation sont les suivantes :
            </p>
            <ul className="list-disc list-inside text-[var(--chateau-stone)] mt-4 space-y-2">
              <li>Plus de 30 jours avant l&apos;arrivée : remboursement intégral de l&apos;acompte</li>
              <li>Entre 30 et 14 jours : l&apos;acompte reste acquis au château</li>
              <li>Moins de 14 jours : 100% du montant du séjour est dû</li>
            </ul>
            <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-2 mt-4">4.2 Par le château</h3>
            <p className="text-[var(--chateau-stone)]">
              En cas d&apos;annulation de notre fait (cas de force majeure, travaux imprévus), nous vous proposerons des dates alternatives ou procéderons au remboursement intégral des sommes versées.
            </p>
            <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-2 mt-4">4.3 Modification</h3>
            <p className="text-[var(--chateau-stone)]">
              Toute demande de modification de réservation sera étudiée au cas par cas et reste soumise à disponibilité.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Article 5 - Arrivée et départ
            </h2>
            <p className="text-[var(--chateau-stone)]">
              <strong>Chambres d&apos;hôtes :</strong><br />
              - Arrivée : à partir de 16h00<br />
              - Départ : avant 12h00
            </p>
            <p className="text-[var(--chateau-stone)] mt-4">
              <strong>Gîtes et appartement :</strong><br />
              - Arrivée : à partir de 17h00<br />
              - Départ : avant 10h00
            </p>
            <p className="text-[var(--chateau-stone)] mt-4">
              Merci de nous prévenir de votre heure d&apos;arrivée approximative. En cas d&apos;arrivée tardive (après 19h), veuillez nous en informer à l&apos;avance.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Article 6 - Petit-déjeuner
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Le petit-déjeuner est inclus pour les séjours en chambres d&apos;hôtes. Il est servi de 8h30 à 10h00 dans la salle à manger ou, selon la météo, en terrasse.
            </p>
            <p className="text-[var(--chateau-stone)] mt-4">
              Pour les gîtes et l&apos;appartement, le petit-déjeuner peut être proposé en option sur demande préalable.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Article 7 - Table d&apos;hôtes
            </h2>
            <p className="text-[var(--chateau-stone)]">
              La table d&apos;hôtes est proposée sur réservation préalable (48h minimum) pour un minimum de 6 personnes. Le menu unique met en valeur les produits du terroir local.
            </p>
            <p className="text-[var(--chateau-stone)] mt-4">
              Merci de nous signaler toute allergie ou régime alimentaire particulier lors de votre réservation.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Article 8 - Animaux de compagnie
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Les animaux de compagnie sont acceptés avec un supplément de 15€ par nuit et par animal. Ils doivent être tenus en laisse dans les espaces communs et ne sont pas autorisés sur les lits et canapés.
            </p>
            <p className="text-[var(--chateau-stone)] mt-4">
              Le propriétaire reste responsable de tout dommage causé par son animal.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Article 9 - Responsabilités
            </h2>
            <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-2">9.1 Du client</h3>
            <p className="text-[var(--chateau-stone)]">
              Le client s&apos;engage à respecter les lieux et le matériel mis à disposition. Tout dégât ou dommage causé pendant le séjour sera facturé.
            </p>
            <h3 className="font-heading text-lg text-[var(--chateau-navy)] mb-2 mt-4">9.2 Du château</h3>
            <p className="text-[var(--chateau-stone)]">
              Le Château de Beaujeu décline toute responsabilité en cas de vol, perte ou détérioration des objets et effets personnels des clients.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Article 10 - Règlement intérieur
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Le client s&apos;engage à respecter le règlement intérieur affiché dans chaque hébergement, notamment :
            </p>
            <ul className="list-disc list-inside text-[var(--chateau-stone)] mt-4 space-y-2">
              <li>Interdiction de fumer à l&apos;intérieur des bâtiments</li>
              <li>Respect du calme des lieux, notamment après 22h</li>
              <li>Stationnement sur les emplacements prévus</li>
              <li>Respect des espaces verts et du mobilier de jardin</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Article 11 - Événements (mariages, séminaires)
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Pour les locations de salles et l&apos;organisation d&apos;événements, un contrat spécifique détaillant les conditions particulières sera établi. Un devis personnalisé sera fourni sur demande.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Article 12 - Protection des données
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Les données personnelles collectées sont traitées conformément à notre <a href="/politique-confidentialite" className="text-[var(--chateau-gold)] underline hover:text-[var(--chateau-navy)]">Politique de Confidentialité</a> et à la réglementation en vigueur (RGPD).
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Article 13 - Médiation
            </h2>
            <p className="text-[var(--chateau-stone)]">
              En cas de litige, le client peut recourir gratuitement au service de médiation de la consommation. Le médiateur peut être saisi via la plateforme européenne de règlement des litiges : ec.europa.eu/consumers/odr
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Article 14 - Droit applicable
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Les présentes CGV sont soumises au droit français. En cas de litige non résolu à l&apos;amiable, les tribunaux de Bourges seront compétents.
            </p>
          </section>

          <p className="text-sm text-[var(--chateau-stone)] pt-8 border-t border-gray-200">
            Dernière mise à jour : Décembre 2024
          </p>
        </div>
      </div>
    </Section>
  );
}
