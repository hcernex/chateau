import { Metadata } from 'next';
import Section from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales du site Château de Beaujeu.',
};

export default function MentionsLegalesPage() {
  return (
    <Section background="cream" className="pt-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl text-[var(--chateau-navy)] mb-8">
          Mentions Légales
        </h1>

        <div className="prose prose-stone max-w-none space-y-8">
          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Éditeur du site
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Le présent site internet est édité par :<br /><br />
              <strong>Château de Beaujeu</strong><br />
              Anne-Charlotte de Pommereau<br />
              Château de Beaujeu<br />
              18300 Sens-Beaujeu<br />
              France<br /><br />
              Téléphone : +33 2 48 79 07 95<br />
              Email : annecharlotte@chateau-de-beaujeu.com
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Directeur de la publication
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Anne-Charlotte de Pommereau
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Hébergement
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Ce site est hébergé par :<br /><br />
              Vercel Inc.<br />
              440 N Barranca Ave #4133<br />
              Covina, CA 91723<br />
              États-Unis<br />
              Site web : vercel.com
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Propriété intellectuelle
            </h2>
            <p className="text-[var(--chateau-stone)]">
              L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p className="text-[var(--chateau-stone)] mt-4">
              La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Crédits photographiques
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Les photographies présentes sur ce site sont la propriété du Château de Beaujeu ou sont utilisées avec l&apos;autorisation de leurs auteurs respectifs.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Liens hypertextes
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Le site Château de Beaujeu peut contenir des liens hypertextes vers d&apos;autres sites internet. Nous ne disposons d&apos;aucun moyen pour contrôler le contenu de ces sites tiers qui demeurent totalement indépendants.
            </p>
            <p className="text-[var(--chateau-stone)] mt-4">
              En conséquence, nous ne saurions être tenus pour responsables du contenu de ces sites, et ce quelle qu&apos;en soit la nature.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Données personnelles
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Pour toute information concernant le traitement de vos données personnelles, veuillez consulter notre <a href="/politique-confidentialite" className="text-[var(--chateau-gold)] underline hover:text-[var(--chateau-navy)]">Politique de Confidentialité</a>.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Cookies
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur. Pour en savoir plus sur notre utilisation des cookies, veuillez consulter notre <a href="/politique-confidentialite" className="text-[var(--chateau-gold)] underline hover:text-[var(--chateau-navy)]">Politique de Confidentialité</a>.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[var(--chateau-navy)] mb-4">
              Droit applicable
            </h2>
            <p className="text-[var(--chateau-stone)]">
              Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
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
