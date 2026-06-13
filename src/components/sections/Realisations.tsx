"use client";

import { siteConfig } from "@/lib/config";
import { ExternalLink, Smartphone, Monitor } from "lucide-react";
import Button from "@/components/ui/Button";
import { useState } from "react";

type DemoId =
  | "restaurant-leman"
  | "maison-horizon"
  | "leman-auto"
  | "atelier-horizon"
  | "villa-piscines";

const typeColors: Record<string, string> = {
  Restaurant: "bg-amber-50 text-amber-700",
  "Boutique locale": "bg-violet-50 text-violet-700",
  Garage: "bg-sky-50 text-sky-700",
  Artisan: "bg-orange-50 text-orange-700",
  Pisciniste: "bg-cyan-50 text-cyan-700",
};

const previews: Record<
  DemoId,
  { bg: string; accent: string; subtitle: string; cta: string }
> = {
  "restaurant-leman": {
    bg: "from-amber-900 to-amber-700",
    accent: "bg-amber-400 text-amber-950",
    subtitle: "Une cuisine du terroir, un art de vivre.",
    cta: "Réserver",
  },
  "maison-horizon": {
    bg: "from-violet-900 to-violet-700",
    accent: "bg-violet-300 text-violet-950",
    subtitle: "La boutique qui vous ressemble.",
    cta: "Découvrir",
  },
  "leman-auto": {
    bg: "from-slate-900 to-slate-700",
    accent: "bg-sky-400 text-sky-950",
    subtitle: "Votre garage de confiance.",
    cta: "Rendez-vous",
  },
  "atelier-horizon": {
    bg: "from-orange-900 to-orange-700",
    accent: "bg-orange-300 text-orange-950",
    subtitle: "L'artisanat d'excellence.",
    cta: "Réalisations",
  },
  "villa-piscines": {
    bg: "from-cyan-900 to-cyan-700",
    accent: "bg-cyan-300 text-cyan-950",
    subtitle: "Votre espace bien-être sur mesure.",
    cta: "Devis gratuit",
  },
};

function DemoCard({ demo }: { demo: (typeof siteConfig.demos)[number] }) {
  const [view, setView] = useState<"desktop" | "mobile">("desktop");
  const p = previews[demo.id as DemoId];

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-[#1E3A5F]/8 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#1E3A5F]/15 hover:shadow-xl">
      {/* Preview */}
      <div className="bg-[#f0efea] p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex items-center gap-1 rounded-lg bg-black/5 p-0.5">
            <button
              type="button"
              onClick={() => setView("desktop")}
              aria-label="Aperçu ordinateur"
              aria-pressed={view === "desktop"}
              className={`rounded-md p-1.5 transition-colors ${
                view === "desktop"
                  ? "bg-white text-[#1E3A5F] shadow-sm"
                  : "text-[#5F7285] hover:text-[#1E3A5F]"
              }`}
            >
              <Monitor size={13} />
            </button>
            <button
              type="button"
              onClick={() => setView("mobile")}
              aria-label="Aperçu mobile"
              aria-pressed={view === "mobile"}
              className={`rounded-md p-1.5 transition-colors ${
                view === "mobile"
                  ? "bg-white text-[#1E3A5F] shadow-sm"
                  : "text-[#5F7285] hover:text-[#1E3A5F]"
              }`}
            >
              <Smartphone size={13} />
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div
            className={`overflow-hidden rounded-xl bg-gradient-to-br ${p.bg} transition-all duration-300 ${
              view === "mobile" ? "w-36" : "w-full"
            }`}
          >
            <div className="flex min-h-36 flex-col items-center justify-center gap-2 p-6 text-center">
              <span className="text-[8px] font-medium uppercase tracking-[0.25em] text-white/40">
                {demo.name}
              </span>
              <span className="text-sm font-bold leading-tight text-white">
                {p.subtitle}
              </span>
              <span
                className={`mt-1 rounded-full px-4 py-1 text-[9px] font-bold ${p.accent}`}
              >
                {p.cta}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1 bg-black/20 px-4 py-3">
              {["Services", "Galerie", "Contact"].map((i) => (
                <div key={i} className="rounded-md bg-white/10 py-1.5 text-center">
                  <span className="text-[8px] text-white/60">{i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold leading-tight text-[#1E3A5F]">
            {demo.name}
          </h3>
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
              typeColors[demo.type] ?? "bg-gray-50 text-gray-600"
            }`}
          >
            {demo.type}
          </span>
        </div>
        <p className="mb-5 flex-1 text-sm font-light leading-relaxed text-[#5F7285]">
          {demo.description}
        </p>
        {demo.url ? (
          <Button
            href={demo.url}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            className="w-full"
          >
            Voir la démo <ExternalLink size={13} />
          </Button>
        ) : (
          <Button
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            className="w-full"
          >
            Obtenir un site similaire
          </Button>
        )}
      </div>
    </article>
  );
}

export default function Realisations() {
  return (
    <section id="realisations" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#1E3A5F]">
            Découvrez ce que votre futur site{" "}
            <span className="text-[#7A9B8E]">pourrait devenir</span>.
          </h2>
          <p className="mt-4 text-lg font-light text-[#5F7285]">
            Des exemples concrets de sites que nous créons pour des commerces
            locaux comme le vôtre.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.demos.map((demo) => (
            <DemoCard key={demo.id} demo={demo} />
          ))}
        </div>
      </div>
    </section>
  );
}
