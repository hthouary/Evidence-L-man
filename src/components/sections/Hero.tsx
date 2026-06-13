"use client";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { siteConfig } from "@/lib/config";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#7A9B8E18_0%,_transparent_60%),radial-gradient(ellipse_at_bottom_left,_#1E3A5F08_0%,_transparent_60%)]" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#7A9B8E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#1E3A5F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-5">
              <Badge variant="accent" className="gap-1.5">
                <Star size={10} className="fill-current" />
                Agence locale, résultats concrets
              </Badge>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1E3A5F] leading-[1.05] tracking-tight">
                Vous méritez d&apos;être{" "}
                <span className="text-[#7A9B8E]">trouvé</span>,{" "}
                <span className="text-[#5F7285]">vu</span> et{" "}
                <span className="text-[#7A9B8E]">choisi</span>.
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-[#5F7285] leading-relaxed max-w-lg font-light">
              {siteConfig.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full sm:w-auto group">
                  Obtenir mon site
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </a>
              <a href="#realisations">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Voir nos réalisations
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#1E3A5F]">5–10</span>
                <span className="text-xs text-[#5F7285]">jours pour être en ligne</span>
              </div>
              <div className="w-px h-10 bg-[#1E3A5F]/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#1E3A5F]">49€</span>
                <span className="text-xs text-[#5F7285]">par mois tout inclus</span>
              </div>
              <div className="w-px h-10 bg-[#1E3A5F]/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#7A9B8E]">3 mois</span>
                <span className="text-xs text-[#5F7285]">d&apos;essai offerts</span>
              </div>
            </div>
          </div>

          {/* Right: browser mockup */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Browser frame */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#1E3A5F]/10 bg-white">
                {/* Browser toolbar */}
                <div className="h-9 bg-[#f0f0ed] flex items-center gap-2 px-4 border-b border-black/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white/70 rounded-md h-5 w-48 mx-auto flex items-center justify-center gap-1 px-2">
                      <div className="w-2 h-2 rounded-full bg-[#7A9B8E]/50" />
                      <div className="h-2 bg-[#1E3A5F]/10 rounded flex-1" />
                    </div>
                  </div>
                </div>
                {/* Site preview */}
                <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2a5080] p-10 min-h-56 flex flex-col justify-center items-center text-center gap-4">
                  <div className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-medium">
                    Restaurant du Léman
                  </div>
                  <div className="text-white text-3xl font-bold leading-tight">
                    Une cuisine du terroir,
                    <br />
                    un art de vivre.
                  </div>
                  <div className="bg-white text-[#1E3A5F] px-6 py-2.5 rounded-full text-sm font-semibold mt-2 cursor-pointer hover:bg-[#FAFAF8] transition-colors">
                    Réserver une table
                  </div>
                </div>
                <div className="p-5 grid grid-cols-3 gap-3 bg-white">
                  {["Notre Menu", "Galerie", "Contact"].map((item) => (
                    <div
                      key={item}
                      className="bg-[#FAFAF8] rounded-xl p-3 text-center border border-[#1E3A5F]/5"
                    >
                      <div className="h-8 bg-[#1E3A5F]/5 rounded-lg mb-2" />
                      <div className="text-xs text-[#5F7285] font-medium">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile mockup overlay */}
              <div className="absolute -bottom-8 -right-8 w-28 rounded-2xl overflow-hidden shadow-xl border border-[#1E3A5F]/10 bg-white">
                <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2a5080] p-4 flex flex-col items-center text-center gap-1.5">
                  <div className="text-white/40 text-[7px] tracking-widest uppercase">
                    Restaurant
                  </div>
                  <div className="text-white text-[9px] font-semibold leading-tight">
                    Une cuisine du terroir
                  </div>
                  <div className="bg-white text-[#1E3A5F] px-2 py-0.5 rounded-full text-[7px] font-semibold mt-0.5">
                    Réserver
                  </div>
                </div>
                <div className="p-2 space-y-1 bg-white">
                  {["Menu", "Photos", "Infos"].map((item) => (
                    <div
                      key={item}
                      className="bg-[#FAFAF8] rounded-md p-1.5 text-center"
                    >
                      <div className="text-[7px] text-[#5F7285]">{item}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-5 -left-5 bg-white rounded-2xl p-4 shadow-lg border border-[#1E3A5F]/8">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-[#7A9B8E]/12 rounded-xl flex items-center justify-center">
                    <span className="text-[#7A9B8E] text-base">✓</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#1E3A5F]">
                      Site en ligne
                    </div>
                    <div className="text-[10px] text-[#5F7285]">en 7 jours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
