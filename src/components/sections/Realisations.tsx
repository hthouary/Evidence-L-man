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
  Garage: "bg-blue-50 text-blue-700",
  Artisan: "bg-orange-50 text-orange-700",
  Pisciniste: "bg-cyan-50 text-cyan-700",
};

const mockPreviews: Record<
  DemoId,
  { bg: string; accent: string; subtitle: string; cta: string }
> = {
  "restaurant-leman": {
    bg: "from-amber-900 to-amber-700",
    accent: "bg-amber-400",
    subtitle: "Une cuisine du terroir, un art de vivre.",
    cta: "Réserver",
  },
  "maison-horizon": {
    bg: "from-violet-900 to-violet-700",
    accent: "bg-violet-300",
    subtitle: "La boutique qui vous ressemble.",
    cta: "Découvrir",
  },
  "leman-auto": {
    bg: "from-slate-900 to-slate-700",
    accent: "bg-blue-400",
    subtitle: "Votre garage de confiance.",
    cta: "Rendez-vous",
  },
  "atelier-horizon": {
    bg: "from-orange-900 to-orange-700",
    accent: "bg-orange-300",
    subtitle: "L'artisanat d'excellence.",
    cta: "Voir les réalisations",
  },
  "villa-piscines": {
    bg: "from-cyan-900 to-cyan-700",
    accent: "bg-cyan-300",
    subtitle: "Votre espace bien-être sur mesure.",
    cta: "Devis gratuit",
  },
};

function DemoCard({ demo }: { demo: (typeof siteConfig.demos)[0] }) {
  const [view, setView] = useState<"desktop" | "mobile">("desktop");
  const preview = mockPreviews[demo.id as DemoId];

  return (
    <div className="group bg-white rounded-3xl border border-[#1E3A5F]/8 overflow-hidden hover:shadow-xl hover:border-[#1E3A5F]/15 transition-all duration-300 flex flex-col">
      {/* Preview area */}
      <div className="bg-[#f0f0ed] p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setView("desktop")}
              className={`p-1.5 rounded-md transition-colors ${view === "desktop" ? "bg-white shadow-sm text-[#1E3A5F]" : "text-[#5F7285] hover:text-[#1E3A5F]"}`}
              aria-label="Vue bureau"
            >
              <Monitor size={12} />
            </button>
            <button
              onClick={() => setView("mobile")}
              className={`p-1.5 rounded-md transition-colors ${view === "mobile" ? "bg-white shadow-sm text-[#1E3A5F]" : "text-[#5F7285] hover:text-[#1E3A5F]"}`}
              aria-label="Vue mobile"
            >
              <Smartphone size={12} />
            </button>
          </div>
        </div>

        <div
          className={`transition-all duration-300 ${view === "mobile" ? "w-32 mx-auto" : "w-full"}`}
        >
          <div
            className={`bg-gradient-to-br ${preview.bg} rounded-xl overflow-hidden`}
          >
            <div className="p-6 text-center flex flex-col justify-center items-center gap-2 min-h-36">
              <div className="text-white/30 text-[8px] tracking-[0.25em] uppercase font-medium">
                {demo.name}
              </div>
              <div className="text-white font-bold leading-tight text-sm">
                {preview.subtitle}
              </div>
              <div
                className={`${preview.accent} text-[#111] px-4 py-1 rounded-full text-[9px] font-bold mt-1`}
              >
                {preview.cta}
              </div>
            </div>
            <div className="bg-black/20 px-4 py-3 grid grid-cols-3 gap-1">
              {["Services", "Galerie", "Contact"].map((item) => (
                <div
                  key={item}
                  className="bg-white/10 rounded-md py-1.5 text-center"
                >
                  <div className="text-white/60 text-[8px]">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card info */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <div className="space-y-1">
            <h3 className="font-semibold text-[#1E3A5F] text-lg leading-tight">
              {demo.name}
            </h3>
            <span
              className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full ${typeColors[demo.type] ?? "bg-gray-50 text-gray-600"}`}
            >
              {demo.type}
            </span>
          </div>
          {demo.url && (
            <a href={demo.url} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="ghost" className="rounded-xl p-2">
                <ExternalLink size={14} />
              </Button>
            </a>
          )}
        </div>
        <p className="text-[#5F7285] text-sm leading-relaxed font-light mb-5 flex-1">
          {demo.description}
        </p>
        {demo.url ? (
          <a href={demo.url} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="w-full">
              Voir la démo <ExternalLink size={13} />
            </Button>
          </a>
        ) : (
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" className="w-full">
              Obtenir un site similaire
            </Button>
          </a>
        )}
      </div>
    </div>
  );
}

export default function Realisations() {
  return (
    <section id="realisations" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1E3A5F] leading-tight mb-6">
            Découvrez ce que votre futur site{" "}
            <span className="text-[#7A9B8E]">pourrait devenir</span>.
          </h2>
          <p className="text-lg text-[#5F7285] font-light">
            Des exemples concrets de sites que nous créons pour des commerces
            locaux comme le vôtre.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.demos.map((demo) => (
            <DemoCard key={demo.id} demo={demo} />
          ))}
        </div>
      </div>
    </section>
  );
}
