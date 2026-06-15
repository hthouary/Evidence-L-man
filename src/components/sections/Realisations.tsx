import { siteConfig } from "@/lib/config";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import DemoPreview from "@/components/ui/DemoPreview";

const typeColors: Record<string, string> = {
  Restaurant: "bg-amber-50 text-amber-700",
  "Boutique locale": "bg-violet-50 text-violet-700",
  Garage: "bg-sky-50 text-sky-700",
  Artisan: "bg-orange-50 text-orange-700",
  Pisciniste: "bg-cyan-50 text-cyan-700",
};

function DemoCard({
  demo,
  delay,
}: {
  demo: (typeof siteConfig.demos)[number];
  delay: number;
}) {
  const href = demo.url ?? siteConfig.calendly;
  const external = !demo.url;

  return (
    <Reveal delay={delay} className="h-full">
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#1E3A5F]/8 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1E3A5F]/15 hover:shadow-2xl hover:shadow-[#1E3A5F]/10"
      >
        {/* Screenshot — real iframe preview */}
        <div className="relative overflow-hidden">
          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 bg-[#f0efea] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 flex-1 rounded bg-white/60 px-3 py-0.5 text-[10px] text-[#888] truncate">
              evidencelemanl.ch{demo.url}
            </span>
          </div>
          <div className="relative overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]">
            {demo.url ? (
              <DemoPreview url={demo.url} />
            ) : null}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
            <div className="pointer-events-none absolute bottom-3 left-4 right-4 flex items-end justify-between">
              <span className="text-lg font-semibold text-white drop-shadow">
                {demo.name}
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#1E3A5F] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                <ArrowUpRight size={16} />
              </span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-1 flex-col p-6">
          <span
            className={`mb-3 inline-flex w-fit rounded-full px-2.5 py-0.5 text-xs font-medium ${
              typeColors[demo.type] ?? "bg-gray-50 text-gray-600"
            }`}
          >
            {demo.type}
          </span>
          <p className="mb-5 flex-1 text-sm font-light leading-relaxed text-[#5F7285]">
            {demo.description}
          </p>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E3A5F] transition-all group-hover:gap-2.5">
            {demo.url ? "Voir la démo" : "Obtenir un site similaire"}
            <ArrowUpRight size={15} />
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export default function Realisations() {
  return (
    <section id="realisations" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-[#7A9B8E]">
            Réalisations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#1E3A5F]">
            Découvrez ce que votre futur site{" "}
            <span className="text-[#7A9B8E]">pourrait devenir</span>.
          </h2>
          <p className="mt-4 text-lg font-light text-[#5F7285]">
            Cliquez sur un exemple pour explorer une vraie page vitrine, pensée
            pour chaque métier.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.demos.map((demo, i) => (
            <DemoCard key={demo.id} demo={demo} delay={(i % 3) * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
