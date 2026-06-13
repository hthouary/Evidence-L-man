import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { siteConfig } from "@/lib/config";
import { ArrowRight, Star } from "lucide-react";

const stats = [
  { value: "5–10 j.", label: "pour être en ligne" },
  { value: "49€", label: "par mois, tout inclus" },
  { value: "3 mois", label: "d'essai offerts" },
];

function BrowserMockup() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl shadow-[#1E3A5F]/10 border border-[#1E3A5F]/10 bg-white">
      <div className="h-9 bg-[#f0efea] flex items-center gap-2 px-4 border-b border-black/5">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white/70 rounded-md h-5 w-44 flex items-center gap-1.5 px-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7A9B8E]" />
            <span className="h-1.5 flex-1 rounded bg-[#1E3A5F]/10" />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2a5080] px-8 py-12 flex flex-col items-center text-center gap-4">
        <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-medium">
          Restaurant du Léman
        </span>
        <span className="text-white text-2xl font-bold leading-tight">
          Une cuisine du terroir,
          <br />
          un art de vivre.
        </span>
        <span className="mt-1 inline-flex bg-white text-[#1E3A5F] px-5 py-2 rounded-full text-sm font-semibold">
          Réserver une table
        </span>
      </div>
      <div className="p-5 grid grid-cols-3 gap-3">
        {["Notre Menu", "Galerie", "Contact"].map((item) => (
          <div
            key={item}
            className="bg-[#FAFAF8] rounded-xl p-3 text-center border border-[#1E3A5F]/5"
          >
            <div className="h-8 bg-[#1E3A5F]/5 rounded-lg mb-2" />
            <span className="text-xs text-[#5F7285] font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32">
      {/* Decorative backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_0%,_#7A9B8E1a_0%,_transparent_70%),radial-gradient(ellipse_50%_50%_at_0%_100%,_#1E3A5F0d_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="flex flex-col items-start gap-7">
            <Badge variant="accent">
              <Star size={11} className="fill-current" />
              Agence locale du Léman
            </Badge>

            <h1 className="text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-[4.2rem] font-bold tracking-tight text-[#1E3A5F]">
              Vous méritez d&apos;être{" "}
              <span className="text-[#7A9B8E]">trouvé</span>,{" "}
              <span className="text-[#5F7285]">vu</span> et{" "}
              <span className="text-[#7A9B8E]">choisi</span>.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-[#5F7285] font-light">
              {siteConfig.description}
            </p>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="group w-full sm:w-auto"
              >
                Obtenir mon site
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Button>
              <Button
                href="#realisations"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Voir nos réalisations
              </Button>
            </div>

            {/* Stats — responsive grid, no overflow */}
            <dl className="mt-2 grid w-full grid-cols-3 gap-4 border-t border-[#1E3A5F]/10 pt-6 sm:gap-6">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <dt className="text-xl sm:text-2xl font-bold text-[#1E3A5F]">
                    {s.value}
                  </dt>
                  <dd className="mt-0.5 text-xs sm:text-sm text-[#5F7285] leading-snug">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Visual */}
          <div className="relative">
            <BrowserMockup />

            {/* Floating proof badge */}
            <div className="absolute -top-4 -left-3 sm:-left-5 bg-white rounded-2xl p-3.5 shadow-lg shadow-[#1E3A5F]/10 border border-[#1E3A5F]/8">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#7A9B8E]/15 flex items-center justify-center text-[#7A9B8E]">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#1E3A5F]">
                    Site en ligne
                  </div>
                  <div className="text-[11px] text-[#5F7285]">en 7 jours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
