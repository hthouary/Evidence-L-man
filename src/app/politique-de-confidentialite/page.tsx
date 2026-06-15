import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Évidence Léman",
  description: "Politique de confidentialité et de protection des données personnelles d'Évidence Léman, conforme au RGPD.",
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

export default function PolitiqueConfidentialite() {
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
          <h1 className="text-3xl font-bold sm:text-4xl">Politique de confidentialité</h1>
          <p className="mt-2 text-sm text-[#5F7285]">
            Conforme au RGPD · Dernière mise à jour : juin 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl space-y-10 px-5 py-16 sm:px-6">

        <div className="rounded-xl border border-[#7A9B8E]/30 bg-[#7A9B8E]/5 p-5 text-sm text-[#5F7285]">
          <strong className="font-medium text-[#1E3A5F]">Résumé :</strong> Évidence Léman collecte uniquement les données que vous nous transmettez volontairement via le formulaire de contact. Ces données ne sont jamais vendues ni transmises à des tiers. Vous pouvez demander leur suppression à tout moment.
        </div>

        <Section title="1. Responsable du traitement">
          <p>
            Le responsable du traitement des données personnelles collectées sur le site
            <strong className="font-medium text-[#1E3A5F]"> evidencelemanl.ch</strong> est :
          </p>
          <div className="rounded-xl border border-[#1E3A5F]/8 bg-white p-5">
            <p className="font-medium text-[#1E3A5F]">Évidence Léman</p>
            <p>Haute-Savoie, France</p>
            <p>
              Email :{" "}
              <a
                href="mailto:contact@evidencelemanl.ch"
                className="font-medium text-[#1E3A5F] underline underline-offset-2"
              >
                contact@evidencelemanl.ch
              </a>
            </p>
          </div>
        </Section>

        <Section title="2. Données collectées">
          <p>Nous collectons les données suivantes :</p>
          <ul className="ml-4 list-disc space-y-1.5">
            <li>
              <strong className="font-medium text-[#1E3A5F]">Formulaire de contact :</strong>{" "}
              nom, prénom, adresse e-mail, numéro de téléphone (facultatif), message.
            </li>
            <li>
              <strong className="font-medium text-[#1E3A5F]">Prise de rendez-vous Calendly :</strong>{" "}
              les données saisies sur la plateforme Calendly sont soumises à la{" "}
              <a
                href="https://calendly.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E3A5F] underline underline-offset-2"
              >
                politique de confidentialité de Calendly
              </a>.
            </li>
            <li>
              <strong className="font-medium text-[#1E3A5F]">Données de navigation :</strong>{" "}
              adresse IP, type de navigateur, pages visitées. Ces données sont collectées
              de manière anonymisée à des fins statistiques.
            </li>
          </ul>
        </Section>

        <Section title="3. Finalités et bases légales">
          <p>Vos données sont utilisées pour les finalités suivantes :</p>
          <div className="overflow-hidden rounded-xl border border-[#1E3A5F]/8 bg-white">
            <table className="w-full text-sm">
              <thead className="border-b border-[#1E3A5F]/8 bg-[#FAFAF8]">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-[#1E3A5F]">Finalité</th>
                  <th className="px-4 py-3 text-left font-semibold text-[#1E3A5F]">Base légale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E3A5F]/5">
                {[
                  ["Répondre à vos demandes de contact", "Intérêt légitime (art. 6.1.f RGPD)"],
                  ["Établir des devis et propositions commerciales", "Intérêt légitime (art. 6.1.f RGPD)"],
                  ["Gérer la relation client", "Exécution du contrat (art. 6.1.b RGPD)"],
                  ["Statistiques de navigation anonymisées", "Intérêt légitime (art. 6.1.f RGPD)"],
                ].map(([f, b]) => (
                  <tr key={f} className="text-[#5F7285]">
                    <td className="px-4 py-3">{f}</td>
                    <td className="px-4 py-3">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="4. Durée de conservation">
          <p>
            Vos données personnelles sont conservées pendant les durées suivantes :
          </p>
          <ul className="ml-4 list-disc space-y-1.5">
            <li>
              <strong className="font-medium text-[#1E3A5F]">Prospects (sans suite commerciale) :</strong>{" "}
              3 ans à compter du dernier contact.
            </li>
            <li>
              <strong className="font-medium text-[#1E3A5F]">Clients :</strong>{" "}
              5 ans à compter de la fin de la relation contractuelle (obligations légales comptables).
            </li>
            <li>
              <strong className="font-medium text-[#1E3A5F]">Données de navigation :</strong>{" "}
              13 mois maximum.
            </li>
          </ul>
        </Section>

        <Section title="5. Destinataires des données">
          <p>
            Vos données personnelles ne sont jamais vendues ni louées à des tiers.
            Elles peuvent être partagées uniquement avec :
          </p>
          <ul className="ml-4 list-disc space-y-1.5">
            <li>
              <strong className="font-medium text-[#1E3A5F]">Vercel Inc.</strong>{" "}
              (hébergeur du site) — transfert encadré par les clauses contractuelles types de la Commission européenne.
            </li>
            <li>
              <strong className="font-medium text-[#1E3A5F]">Calendly LLC</strong>{" "}
              (outil de prise de rendez-vous) — transfert encadré par les clauses contractuelles types.
            </li>
          </ul>
          <p>
            Ces sous-traitants traitent vos données uniquement sur instruction d&apos;Évidence Léman
            et s&apos;engagent à respecter la confidentialité de vos données.
          </p>
        </Section>

        <Section title="6. Vos droits">
          <p>
            Conformément au RGPD (articles 15 à 22), vous disposez des droits suivants :
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { droit: "Droit d'accès", desc: "Obtenir une copie des données vous concernant." },
              { droit: "Droit de rectification", desc: "Corriger des données inexactes ou incomplètes." },
              { droit: "Droit à l'effacement", desc: "Demander la suppression de vos données." },
              { droit: "Droit à la portabilité", desc: "Recevoir vos données dans un format structuré." },
              { droit: "Droit d'opposition", desc: "S'opposer au traitement de vos données." },
              { droit: "Droit à la limitation", desc: "Restreindre temporairement le traitement." },
            ].map(({ droit, desc }) => (
              <div key={droit} className="rounded-lg border border-[#1E3A5F]/8 bg-white p-4">
                <p className="font-medium text-[#1E3A5F]">{droit}</p>
                <p className="mt-1 text-xs text-[#5F7285]">{desc}</p>
              </div>
            ))}
          </div>
          <p>
            Pour exercer ces droits, contactez-nous à :{" "}
            <a
              href="mailto:contact@evidencelemanl.ch"
              className="font-medium text-[#1E3A5F] underline underline-offset-2"
            >
              contact@evidencelemanl.ch
            </a>
            . Vous avez également le droit d&apos;introduire une réclamation auprès de la{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#1E3A5F] underline underline-offset-2"
            >
              CNIL
            </a>{" "}
            (Commission Nationale de l&apos;Informatique et des Libertés).
          </p>
        </Section>

        <Section title="7. Sécurité">
          <p>
            Évidence Léman met en œuvre des mesures techniques et organisationnelles
            appropriées pour protéger vos données contre tout accès non autorisé,
            modification, divulgation ou destruction. Le site est hébergé sur une
            infrastructure sécurisée avec chiffrement HTTPS (TLS).
          </p>
        </Section>

        <Section title="8. Cookies">
          <p>
            Ce site n&apos;utilise pas de cookies de traçage publicitaire ni d&apos;outils d&apos;analyse
            comportementale tiers (Google Analytics, Facebook Pixel, etc.).
          </p>
          <p>
            Des cookies techniques strictement nécessaires peuvent être déposés pour
            assurer le bon fonctionnement du site (session, préférences). Ils ne
            permettent pas d&apos;identifier personnellement les visiteurs.
          </p>
        </Section>

        <Section title="9. Modifications">
          <p>
            La présente politique de confidentialité peut être modifiée à tout moment.
            La date de dernière mise à jour figure en haut de page. Nous vous invitons
            à la consulter régulièrement.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>
            Pour toute question relative à cette politique ou à la protection de vos données :
          </p>
          <div className="rounded-xl border border-[#1E3A5F]/8 bg-white p-5">
            <p className="font-medium text-[#1E3A5F]">Évidence Léman</p>
            <p>Haute-Savoie, France</p>
            <p>
              <a
                href="mailto:contact@evidencelemanl.ch"
                className="font-medium text-[#1E3A5F] underline underline-offset-2"
              >
                contact@evidencelemanl.ch
              </a>
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
