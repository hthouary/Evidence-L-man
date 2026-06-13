import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { siteConfig } from "@/lib/config";
import { ArrowRight, Star, Calendar } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "5–10 j.", label: "pour être en ligne" },
  { value: "49€", label: "par mois, tout inclus" },
  { value: "3 mois", label: "d'essai offerts" },
];

function BrowserMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#1E3A5F]/10 bg-white shadow-2xl shadow-[#1E3A5F]/15">
      <div className="flex h-9 items-center gap-2 border-b border-black/5 bg-[#f0efea] px-4">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex flex-1 justify-center">
          <div className="flex h-5 w-44 items-center gap-1.5 rounded-md bg-white/70 px-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7A9B8E]" />
            <span className="h-1.5 flex-1 rounded bg-[#1E3A5F]/10" />
          </div>
        </div>
      </div>

      {/* Hero photo with overlay copy */}
      <div className="relative h-56 w-full sm:h-64">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80"
          alt="Aperçu d'un site de restaurant"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f2238]/85 via-[#0f2238]/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/60">
            Restaurant du Léman
          </span>
          <span className="text-2xl font-bold leading-tight text-white drop-shadow">
            Une cuisine du terroir,
            <br />
            un art de vivre.
          </span>
          <span className="mt-1 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#1E3A5F]">
            Réserver une table
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 p-5">
        {["Notre Menu", "Galerie", "Réserver"].map((item) => (
          <div
            key={item}
            className="rounded-xl border border-[#1E3A5F]/5 bg-[#FAFAF8] p-3 text-center"
          >
            <div className="mb-2 h-8 rounded-lg bg-[#1E3A5F]/5" />
            <span className="text-xs font-medium text-[#5F7285]">{item}</span>
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_0%,_#7A9B8E1f_0%,_transparent_70%),radial-gradient(ellipse_50%_50%_at_0%_100%,_#1E3A5F0d_0%,_transparent_70%)]" />
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-[#7A9B8E]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="reveal is-visible flex flex-col items-start gap-7">
            <Badge variant="accent">
              <Star size={11} className="fill-current" />
              Agence locale du Léman
            </Badge>

            <h1 className="text-[2.6rem] font-bold leading-[1.08] tracking-tight text-[#1E3A5F] sm:text-6xl lg:text-[4.2rem]">
              Vous méritez d&apos;être{" "}
              <span className="text-[#7A9B8E]">trouvé</span>,{" "}
              <span className="text-[#5F7285]">vu</span> et{" "}
              <span className="text-[#7A9B8E]">choisi</span>.
            </h1>

            <p className="max-w-xl text-lg font-light leading-relaxed text-[#5F7285]">
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

            {/* Social proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {siteConfig.testimonials.map((t) => (
                  <Image
                    key={t.name}
                    src={t.avatar}
                    alt={t.name}
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full border-2 border-[#FAFAF8] object-cover"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-0.5 text-[#f5a623]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} className="fill-current" />
                  ))}
                </div>
                <span className="text-[#5F7285]">
                  Commerces locaux déjà accompagnés
                </span>
              </div>
            </div>

            {/* Stats */}
            <dl className="mt-1 grid w-full grid-cols-3 gap-4 border-t border-[#1E3A5F]/10 pt-6 sm:gap-6">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <dt className="text-xl font-bold text-[#1E3A5F] sm:text-2xl">
                    {s.value}
                  </dt>
                  <dd className="mt-0.5 text-xs leading-snug text-[#5F7285] sm:text-sm">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="animate-float">
              <BrowserMockup />
            </div>

            {/* Floating proof badge */}
            <div className="absolute -left-3 -top-4 rounded-2xl border border-[#1E3A5F]/8 bg-white p-3.5 shadow-lg shadow-[#1E3A5F]/10 sm:-left-5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7A9B8E]/15 text-[#7A9B8E]">
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

            {/* Floating reservation badge */}
            <div className="absolute -bottom-5 -right-2 rounded-2xl border border-[#1E3A5F]/8 bg-white p-3.5 shadow-lg shadow-[#1E3A5F]/10 sm:-right-5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1E3A5F]/8 text-[#1E3A5F]">
                  <Calendar size={16} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#1E3A5F]">
                    +18 réservations
                  </div>
                  <div className="text-[11px] text-[#5F7285]">cette semaine</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
