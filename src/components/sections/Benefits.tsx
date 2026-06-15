import { TrendingUp, Eye, ShieldCheck, MapPin } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/config";

const stats = [
  {
    value: "98 %",
    label: "des consommateurs recherchent un commerce local en ligne avant de se déplacer",
    source: "BrightLocal, 2023",
    href: "https://brightlocal.com/research/local-consumer-review-survey/",
  },
  {
    value: "75 %",
    label: "de la crédibilité d'une entreprise est jugée d'après la qualité de son site",
    source: "Stanford Web Credibility Research",
    href: "https://credibility.stanford.edu/",
  },
  {
    value: "76 %",
    label: "des recherches locales sur mobile aboutissent à une visite en boutique sous 24 h",
    source: "Think with Google",
    href: "https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/local-search-mobile-statistics/",
  },
  {
    value: "2 ×",
    label: "plus de revenus générés par les PME disposant d'une présence web professionnelle",
    source: "Deloitte, Connected Small Business",
    href: "https://www2.deloitte.com/uk/en/pages/technology/articles/connected-small-businesses.html",
  },
];

const benefits = [
  {
    icon: Eye,
    title: "Visible 24 h / 24, 7 j / 7",
    desc: "Votre site travaille même quand vous dormez, le week-end et les jours fériés. Vos clients trouvent vos horaires, votre adresse et vos services à tout moment.",
  },
  {
    icon: ShieldCheck,
    title: "Plus crédible qu'une page Facebook",
    desc: "Un site professionnel inspire immédiatement confiance. 75 % des acheteurs en ligne avouent ne pas faire confiance aux entreprises sans site internet.",
  },
  {
    icon: MapPin,
    title: "Référencé sur Google Maps & Search",
    desc: "Nous optimisons votre fiche locale pour que vous apparaissiez en tête des résultats quand quelqu'un cherche votre métier près de chez lui.",
  },
  {
    icon: TrendingUp,
    title: "Rentabilisé dès le premier client",
    desc: "Pour un artisan ou un restaurateur, un seul client supplémentaire par mois suffit à couvrir l'abonnement. La plupart de nos clients en gagnent bien plus.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-[#1E3A5F] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="mx-auto mb-20 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-[#7A9B8E]">
            Pourquoi c&apos;est urgent
          </span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Vos clients vous cherchent en ligne.{" "}
            <span className="text-[#7A9B8E]">Sont-ils en train de trouver vos concurrents ?</span>
          </h2>
        </Reveal>

        {/* Stats */}
        <div className="mb-20 grid gap-px overflow-hidden rounded-2xl border border-white/8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.source} delay={i * 80}>
              <div className="flex h-full flex-col bg-white/[0.04] p-8">
                <div className="mb-3 text-5xl font-bold tracking-tight text-white lg:text-6xl">
                  {s.value}
                </div>
                <p className="flex-1 text-sm font-light leading-relaxed text-white/70">
                  {s.label}
                </p>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-xs text-[#7A9B8E] underline underline-offset-2 transition-colors hover:text-white"
                >
                  {s.source} ↗
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Benefit cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 70}>
              <div className="flex gap-5 rounded-2xl border border-white/8 bg-white/[0.04] p-7 transition-colors hover:border-[#7A9B8E]/30">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7A9B8E]/15 text-[#7A9B8E]">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-white/60">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom quote + CTA */}
        <Reveal className="mt-16 text-center">
          <p className="text-lg font-light text-white/60">
            46 % de toutes les recherches Google ont une intention locale.{" "}
            <span className="font-medium text-white">
              La question n&apos;est plus si vous avez besoin d&apos;un site — mais si vos concurrents vous ont déjà devancé.
            </span>
          </p>
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#7A9B8E] px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Prendre rendez-vous gratuit →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
