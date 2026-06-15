import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — Évidence Léman",
  description: "Mentions légales du site Évidence Léman, agence de création de sites internet en Haute-Savoie.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-[#1E3A5F]/8 pt-10 first:border-0 first:pt-0">
      <h2 className="mb-5 text-xl font-semibold text-[#1E3A5F]">{title}</h2>
      <div className="space-y-3 text-sm font-light leading-relaxed text-[#5F7285]">
        {children}
      </div>
    </div>
  );
}

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1E3A5F]">
      {/* Header */}
      <div className="border-b border-[#1E3A5F]/8 bg-white">
        <div className="mx-auto max-w-3xl px-5 py-8 sm:px-6">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-[#5F7285] transition-colors hover:text-[#1E3A5F]"
          >
            ← Retour à l&apos;accueil
          </Link>
          <h1 className="text-3xl font-bold sm:text-4xl">Mentions légales</h1>
          <p className="mt-2 text-sm text-[#5F7285]">Dernière mise à jour : juin 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl space-y-10 px-5 py-16 sm:px-6">
        <Section title="1. Éditeur du site">
          <p>
            Le site <strong className="font-medium text-[#1E3A5F]">evidencelemanl.ch</strong> est édité par :
          </p>
          <div className="rounded-xl border border-[#1E3A5F]/8 bg-white p-5">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-[#1E3A5F]/5">
                {[
                  ["Dénomination", "Évidence Léman"],
                  ["Forme juridique", "Auto-entrepreneur"],
                  ["SIRET", "123 456 789 00012"],
                  ["Siège social", "Haute-Savoie, France"],
                  ["Email", "contact@evidencelemanl.ch"],
                  ["Téléphone", "+33 6 00 00 00 00"],
                ].map(([label, value]) => (
                  <tr key={label} className="flex gap-8 py-2.5">
                    <td className="w-40 shrink-0 font-medium text-[#1E3A5F]">{label}</td>
                    <td className="text-[#5F7285]">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="2. Directeur de la publication">
          <p>
            Le directeur de la publication est <strong className="font-medium text-[#1E3A5F]">Hugo Thouary</strong>,
            en qualité de gérant d&apos;Évidence Léman.
          </p>
        </Section>

        <Section title="3. Hébergement">
          <p>Le site est hébergé par :</p>
          <div className="rounded-xl border border-[#1E3A5F]/8 bg-white p-5">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-[#1E3A5F]/5">
                {[
                  ["Société", "Vercel Inc."],
                  ["Adresse", "340 Pine Street, Suite 1200, San Francisco, CA 94104, USA"],
                  ["Site", "vercel.com"],
                ].map(([label, value]) => (
                  <tr key={label} className="flex gap-8 py-2.5">
                    <td className="w-40 shrink-0 font-medium text-[#1E3A5F]">{label}</td>
                    <td className="text-[#5F7285]">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="4. Propriété intellectuelle">
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, images, graphismes, logo,
            icônes, sons, logiciels...) est la propriété exclusive d&apos;Évidence Léman,
            à l&apos;exception des contenus expressément attribués à d&apos;autres propriétaires.
          </p>
          <p>
            Toute reproduction, distribution, modification, adaptation, retransmission ou
            publication, même partielle, de ces différents éléments est strictement interdite
            sans l&apos;accord exprès par écrit d&apos;Évidence Léman.
          </p>
          <p>
            Les photographies utilisées à titre d&apos;illustration proviennent de la
            plateforme Unsplash et sont soumises à leurs licences respectives.
          </p>
        </Section>

        <Section title="5. Données personnelles">
          <p>
            Le traitement de vos données personnelles est encadré par notre{" "}
            <Link
              href="/politique-de-confidentialite"
              className="font-medium text-[#1E3A5F] underline underline-offset-2"
            >
              Politique de confidentialité
            </Link>
            , conformément au Règlement Général sur la Protection des Données (RGPD)
            et à la loi Informatique et Libertés.
          </p>
          <p>
            Conformément à la loi n° 78-17 du 6 janvier 1978 modifiée, vous disposez d&apos;un
            droit d&apos;accès, de rectification et de suppression des données vous concernant.
            Pour exercer ce droit, contactez-nous à l&apos;adresse{" "}
            <a
              href="mailto:contact@evidencelemanl.ch"
              className="font-medium text-[#1E3A5F] underline underline-offset-2"
            >
              contact@evidencelemanl.ch
            </a>.
          </p>
        </Section>

        <Section title="6. Cookies">
          <p>
            Ce site n&apos;utilise pas de cookies de traçage ou de profilage publicitaire.
            Des cookies techniques strictement nécessaires au fonctionnement du site
            peuvent être déposés sur votre terminal. Ils ne collectent aucune donnée
            personnelle identifiable.
          </p>
          <p>
            En continuant à naviguer sur ce site, vous acceptez l&apos;utilisation de ces
            cookies techniques.
          </p>
        </Section>

        <Section title="7. Liens hypertextes">
          <p>
            Le site peut contenir des liens vers des sites tiers. Évidence Léman n&apos;exerce
            aucun contrôle sur ces sites et décline toute responsabilité quant à leur
            contenu, leurs pratiques en matière de confidentialité ou leur disponibilité.
          </p>
        </Section>

        <Section title="8. Limitation de responsabilité">
          <p>
            Évidence Léman met tout en œuvre pour assurer l&apos;exactitude et la mise à jour
            des informations diffusées sur ce site. Toutefois, Évidence Léman ne peut
            garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises
            à disposition.
          </p>
          <p>
            Évidence Léman se réserve le droit de modifier, corriger ou supprimer
            tout contenu à tout moment, sans préavis.
          </p>
        </Section>

        <Section title="9. Droit applicable">
          <p>
            Le présent site et les présentes mentions légales sont soumis au droit français.
            En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </Section>
      </div>
    </div>
  );
}
