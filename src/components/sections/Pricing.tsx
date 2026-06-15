import { siteConfig } from "@/lib/config";
import { Check, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const setupIncludes = [
  "Conception sur mesure",
  "Intégration de vos contenus",
  "Configuration du référencement",
  "Mise en ligne",
];

const features = [
  "Hébergement professionnel",
  "Nom de domaine (.fr ou .com)",
  "Maintenance et sécurité",
  "Sauvegardes quotidiennes",
  "Modifications mineures incluses",
  "Support par téléphone et email",
  "Certificat SSL (https)",
  "Référencement local (SEO)",
];

function CheckRow({ children, dark }: { children: string; dark?: boolean }) {
  return (
    <li className="flex items-center gap-3">
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
          dark ? "bg-white/10" : "bg-[#7A9B8E]/15"
        }`}
      >
        <Check size={11} className="text-[#7A9B8E]" />
      </span>
      <span
        className={`text-sm font-light ${dark ? "text-white/80" : "text-[#5F7285]"}`}
      >
        {children}
      </span>
    </li>
  );
}

export default function Pricing() {
  return (
    <section id="tarifs" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#1E3A5F]">
            Une solution claire et{" "}
            <span className="text-[#7A9B8E]">accessible</span>.
          </h2>
          <p className="mt-4 text-lg font-light text-[#5F7285]">
            Pas de surprises. Pas de coûts cachés. Une transparence totale.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 lg:gap-8">
          {/* Setup */}
          <div className="flex flex-col rounded-3xl border border-[#1E3A5F]/8 bg-white p-7 sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5F7285]">
              Mise en place
            </span>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-5xl font-bold text-[#1E3A5F] sm:text-6xl">
                {siteConfig.pricing.setup}€
              </span>
              <span className="text-sm text-[#5F7285]">unique</span>
            </div>
            <p className="mt-3 text-sm font-light leading-relaxed text-[#5F7285]">
              Frais unique pour la création et la configuration complète de
              votre site.
            </p>
            <ul className="mt-7 space-y-3">
              {setupIncludes.map((item) => (
                <CheckRow key={item}>{item}</CheckRow>
              ))}
            </ul>
          </div>

          {/* Subscription — highlighted */}
          <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[#1E3A5F] p-7 sm:p-8">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/5" />
            <div className="relative flex items-start justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                Abonnement mensuel
              </span>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                3 mois d&apos;essai
              </span>
            </div>
            <div className="relative mt-4 flex items-baseline gap-1.5">
              <span className="text-5xl font-bold text-white sm:text-6xl">
                {siteConfig.pricing.monthly}€
              </span>
              <span className="text-sm text-white/50">/mois</span>
            </div>
            <p className="relative mt-3 text-sm font-light text-white/50">
              3 mois d&apos;essai sans engagement, puis engagement 12 mois.
            </p>
            <ul className="relative mt-7 space-y-3">
              {features.map((f) => (
                <CheckRow key={f} dark>
                  {f}
                </CheckRow>
              ))}
            </ul>
            <Button
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
              size="lg"
              className="group relative mt-8 w-full"
            >
              Commencer maintenant
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Button>
          </div>
        </div>

        <p className="mt-8 text-center text-xs font-light text-[#5F7285]/60">
          Tous les prix sont indiqués hors taxes. TVA applicable selon votre
          régime fiscal.
        </p>
      </div>
    </section>
  );
}
