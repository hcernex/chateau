import { Metadata } from 'next';
import Section from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité et de protection des données personnelles du Château de Beaujeu.',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <Section background="cream" className="pt-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl text-[var(--chateau-navy)] mb-8">
          Politique de Confidentialité
        </h1>

        <div className="prose prose-stone max-w-none space-y-8">
          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Introduction
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Le Château de Beaujeu s&apos;engage à protéger la vie privée des utilisateurs de son site internet. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Responsable du traitement
            </h2>
            <p className="text-[var(--chateau-stone)]">
              <strong>Château de Beaujeu</strong><br />
              Anne-Charlotte de Pommereau<br />
              Château de Beaujeu<br />
              18300 Sens-Beaujeu, France<br />
              Email : annecharlotte@chateau-de-beaujeu.com
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Données collectées
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Nous collectons les données suivantes :
            </p>
            <ul className="list-disc list-inside text-[var(--chateau-stone)] mt-4 space-y-2">
              <li><strong>Données d&apos;identification :</strong> nom, prénom, email, numéro de téléphone</li>
              <li><strong>Données de réservation :</strong> dates de séjour, type d&apos;hébergement, nombre de personnes, demandes particulières</li>
              <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées (via cookies)</li>
              <li><strong>Données de contact :</strong> contenu des messages envoyés via nos formulaires</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Finalités du traitement
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Vos données sont collectées pour les finalités suivantes :
            </p>
            <ul className="list-disc list-inside text-[var(--chateau-stone)] mt-4 space-y-2">
              <li>Traitement de vos demandes de réservation et de renseignements</li>
              <li>Gestion de la relation client et suivi de votre séjour</li>
              <li>Envoi de notre newsletter (avec votre consentement)</li>
              <li>Amélioration de nos services et de notre site internet</li>
              <li>Respect de nos obligations légales et réglementaires</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Base légale du traitement
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Le traitement de vos données repose sur :
            </p>
            <ul className="list-disc list-inside text-[var(--chateau-stone)] mt-4 space-y-2">
              <li><strong>L&apos;exécution d&apos;un contrat :</strong> pour le traitement des réservations</li>
              <li><strong>Votre consentement :</strong> pour l&apos;envoi de newsletters et l&apos;utilisation de cookies non essentiels</li>
              <li><strong>L&apos;intérêt légitime :</strong> pour l&apos;amélioration de nos services</li>
              <li><strong>Les obligations légales :</strong> pour la conservation des factures et documents comptables</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Destinataires des données
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Vos données peuvent être transmises à :
            </p>
            <ul className="list-disc list-inside text-[var(--chateau-stone)] mt-4 space-y-2">
              <li>Notre équipe interne (réservations, accueil)</li>
              <li>Nos prestataires techniques (hébergement web, email)</li>
              <li>Les autorités administratives si requis par la loi</li>
            </ul>
            <p className="text-[var(--chateau-stone)] mt-4">
              Nous ne vendons jamais vos données à des tiers.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Durée de conservation
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Vos données sont conservées :
            </p>
            <ul className="list-disc list-inside text-[var(--chateau-stone)] mt-4 space-y-2">
              <li><strong>Données de réservation :</strong> 3 ans après votre dernier séjour</li>
              <li><strong>Données de facturation :</strong> 10 ans (obligation légale)</li>
              <li><strong>Données de newsletter :</strong> jusqu&apos;à votre désinscription</li>
              <li><strong>Données de contact :</strong> 3 ans après le dernier contact</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Vos droits
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-[var(--chateau-stone)] mt-4 space-y-2">
              <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
              <li><strong>Droit à l&apos;effacement :</strong> supprimer vos données</li>
              <li><strong>Droit à la limitation :</strong> restreindre le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong>Droit de retrait du consentement :</strong> retirer votre consentement à tout moment</li>
            </ul>
            <p className="text-[var(--chateau-stone)] mt-4">
              Pour exercer ces droits, contactez-nous à : annecharlotte@chateau-de-beaujeu.com
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Cookies
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Notre site utilise des cookies pour :
            </p>
            <ul className="list-disc list-inside text-[var(--chateau-stone)] mt-4 space-y-2">
              <li><strong>Cookies essentiels :</strong> fonctionnement du site (pas de consentement requis)</li>
              <li><strong>Cookies de performance :</strong> analyse de la navigation (avec consentement)</li>
              <li><strong>Cookies marketing :</strong> personnalisation des publicités (avec consentement)</li>
            </ul>
            <p className="text-[var(--chateau-stone)] mt-4">
              Vous pouvez gérer vos préférences de cookies via le bandeau affiché lors de votre première visite ou dans les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Sécurité des données
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. Notre site utilise le protocole HTTPS pour sécuriser les échanges de données.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Transferts internationaux
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Certains de nos prestataires techniques peuvent être situés en dehors de l&apos;Union Européenne. Dans ce cas, nous nous assurons que des garanties appropriées sont en place (clauses contractuelles types, décision d&apos;adéquation).
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Réclamation
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL (Commission Nationale de l&apos;Informatique et des Libertés) :
            </p>
            <p className="text-[var(--chateau-stone)] mt-4">
              CNIL<br />
              3 Place de Fontenoy<br />
              TSA 80715<br />
              75334 Paris Cedex 07<br />
              Site web : www.cnil.fr
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Modifications
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec indication de la date de mise à jour.
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
