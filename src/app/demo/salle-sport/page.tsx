import type { Metadata } from "next";
import Image from "next/image";
import { Dumbbell, Heart, Users, Zap, Phone, MapPin, Clock, Star, CheckCircle2, CalendarDays, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "Énergie Gym — Salle de sport & fitness à Annemasse",
  description:
    "Énergie Gym : musculation, cardio, cours collectifs et coaching personnalisé à Annemasse. Essai gratuit.",
};

const services = [
  {
    icon: Dumbbell,
    title: "Espace musculation",
    desc: "Plus de 200 machines et équipements libres. Haltères, barres, câbles, appareils guidés — tout pour progresser.",
    badge: "700 m²",
  },
  {
    icon: Heart,
    title: "Cardio & endurance",
    desc: "Tapis, vélos, rameurs, elliptiques dernière génération avec écrans connectés et suivi de performance.",
    badge: "80 machines",
  },
  {
    icon: Users,
    title: "Cours collectifs",
    desc: "Yoga, pilates, RPM, HIIT, zumba, boxe... 30 cours par semaine animés par nos coachs certifiés.",
    badge: "30 cours/sem",
  },
  {
    icon: Zap,
    title: "Coaching personnalisé",
    desc: "Bilan fitness, programme sur mesure, suivi individuel. Objectif perte de poids, prise de masse ou remise en forme.",
    badge: "Sur RDV",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
];

const abonnements = [
  {
    name: "Sans engagement",
    price: "49 €",
    per: "/mois",
    items: ["Accès illimité", "Cours collectifs inclus", "Vestiaires & douches", "Application mobile"],
    highlight: false,
  },
  {
    name: "Engagement 12 mois",
    price: "34 €",
    per: "/mois",
    items: ["Accès illimité", "Cours collectifs inclus", "1 séance coaching offerte", "Bilan fitness initial", "Application mobile"],
    highlight: true,
    badge: "Le plus populaire",
  },
  {
    name: "Journée",
    price: "12 €",
    per: "/jour",
    items: ["Accès complet 1 journée", "Cours collectifs du jour", "Vestiaires & douches"],
    highlight: false,
  },
];

const reviews = [
  {
    name: "Alex T.",
    note: 5,
    text: "Salle nickel, équipements récents et propres, coachs disponibles et professionnels. J'ai perdu 14 kg en 6 mois. Je recommande à tout le monde.",
    date: "Décembre 2024",
  },
  {
    name: "Mélanie S.",
    note: 5,
    text: "Les cours collectifs sont top ! J'adore le HIIT du mardi soir. L'ambiance est motivante sans être intimidante. Parfait pour débuter.",
    date: "Novembre 2024",
  },
  {
    name: "Karim B.",
    note: 5,
    text: "Après avoir testé 3 salles à Annemasse, j'ai trouvé la meilleure ici. Rapport qualité/prix imbattable, et le staff est vraiment sympa.",
    date: "Octobre 2024",
  },
];

const horaires = [
  { jour: "Lundi – Vendredi", horaire: "6h – 23h" },
  { jour: "Samedi", horaire: "8h – 20h" },
  { jour: "Dimanche", horaire: "9h – 18h" },
  { jour: "Jours fériés", horaire: "9h – 17h" },
];

export default function SalleSportDemo() {
  return (
    <div
      className="overflow-x-hidden bg-[#0d0f12] text-[#e8eaed]"
      style={{ fontFamily: "var(--font-grotesk)" }}
    >
      {/* Nav */}
      <header className="sticky top-10 z-20 border-b border-white/8 bg-[#0d0f12]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="flex items-center gap-2 text-xl font-bold">
            <Flame size={22} className="text-[#f97316]" />
            ÉNERGIE<span className="text-[#f97316]">GYM</span>
          </span>
          <div className="hidden items-center gap-8 text-sm font-medium text-white/60 md:flex">
            <a href="#services" className="hover:text-white">La salle</a>
            <a href="#cours" className="hover:text-white">Cours</a>
            <a href="#tarifs" className="hover:text-white">Tarifs</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-md bg-[#f97316] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#ea6c0a]"
          >
            Essai gratuit
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-[88vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80"
            alt="Salle de musculation"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f12] via-[#0d0f12]/80 to-[#0d0f12]/30" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#f97316]/30 bg-[#f97316]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#f97316]">
              <Flame size={12} /> Salle de fitness · Annemasse
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] sm:text-7xl">
              Dépassez{" "}
              <span className="text-[#f97316]">vos limites.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg font-light text-white/70">
              700 m² d&apos;équipements dernière génération, 30 cours collectifs par semaine
              et des coachs certifiés pour vous accompagner vers vos objectifs.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-md bg-[#f97316] px-7 py-4 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                Essai gratuit sans engagement
              </a>
              <a
                href="#tarifs"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-7 py-4 text-sm font-semibold transition-colors hover:bg-white/5"
              >
                Voir les tarifs
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                ["700 m²", "d'équipements"],
                ["+1 200", "membres actifs"],
                ["4,8/5", "avis Google"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="text-3xl font-bold text-[#f97316]">{v}</div>
                  <div className="text-sm text-white/50">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-white/8 bg-white/[0.02]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-6 py-6">
          {[
            { icon: CheckCircle2, text: "Ouvert 7j/7 dès 6h" },
            { icon: CheckCircle2, text: "Coaching certifié" },
            { icon: CheckCircle2, text: "Parking gratuit" },
            { icon: CheckCircle2, text: "Matériel Technogym" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-white/60">
              <Icon size={14} className="text-[#f97316]" />
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#f97316]">Nos espaces</p>
          <h2 className="text-4xl font-bold sm:text-5xl">La salle</h2>
          <p className="mt-3 text-white/60">Tout ce qu&apos;il faut pour progresser, sous un même toit.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-white/8 bg-white/[0.03] p-7 transition-colors hover:border-[#f97316]/30 hover:bg-[#f97316]/[0.04]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f97316]/15 text-[#f97316]">
                  <s.icon size={22} />
                </div>
                <span className="rounded-full border border-[#f97316]/30 px-3 py-1 text-xs font-semibold text-[#f97316]">
                  {s.badge}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-white/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Galerie */}
      <section id="cours" className="border-t border-white/8 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#f97316]">Nos espaces en images</p>
            <h2 className="text-4xl font-bold sm:text-5xl">La salle en photos</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((src, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"}`}
              >
                <Image
                  src={src}
                  alt="Salle de sport"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#f97316]">Abonnements</p>
          <h2 className="text-4xl font-bold sm:text-5xl">Nos tarifs</h2>
          <p className="mt-3 text-white/60">Sans frais d&apos;inscription. Premier mois offert sur l&apos;engagement 12 mois.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {abonnements.map((a) => (
            <div
              key={a.name}
              className={`relative rounded-xl border p-8 ${
                a.highlight
                  ? "border-[#f97316] bg-[#f97316]/5"
                  : "border-white/8 bg-white/[0.03]"
              }`}
            >
              {a.highlight && a.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#f97316] px-4 py-1 text-xs font-semibold text-white">
                  {a.badge}
                </div>
              )}
              <h3 className="text-lg font-semibold">{a.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">{a.price}</span>
                <span className="text-sm text-white/50">{a.per}</span>
              </div>
              <ul className="mt-6 space-y-2.5">
                {a.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/70">
                    <CheckCircle2 size={14} className="shrink-0 text-[#f97316]" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-7 block w-full rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                  a.highlight
                    ? "bg-[#f97316] text-white hover:bg-[#ea6c0a]"
                    : "border border-white/15 text-white hover:border-[#f97316]/50 hover:text-[#f97316]"
                }`}
              >
                Choisir ce forfait
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Avis */}
      <section className="border-t border-white/8 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#f97316]">Témoignages</p>
            <h2 className="text-4xl font-bold sm:text-5xl">Ce qu&apos;ils en disent</h2>
            <div className="mt-4 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-[#f97316] text-[#f97316]" />
              ))}
              <span className="ml-2 text-white/60">4,8 / 5 · Google</span>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-xl border border-white/8 bg-white/[0.03] p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(r.note)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#f97316] text-[#f97316]" />
                  ))}
                </div>
                <p className="text-sm font-light leading-relaxed text-white/75">&ldquo;{r.text}&rdquo;</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-semibold">{r.name}</span>
                  <span className="text-xs text-white/40">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Essai */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#f97316]">Venez nous voir</p>
            <h2 className="text-4xl font-bold sm:text-5xl">
              1 séance d&apos;essai offerte
            </h2>
            <p className="mt-5 text-lg font-light text-white/70">
              Venez tester la salle gratuitement, sans engagement et sans carte bancaire. Un coach vous accueillera et vous guidera.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 text-white/70">
                <Clock size={18} className="mt-0.5 shrink-0 text-[#f97316]" />
                <div>
                  {horaires.map((h) => (
                    <div key={h.jour} className="flex gap-4 text-sm">
                      <span className="w-44 shrink-0">{h.jour}</span>
                      <span>{h.horaire}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin size={18} className="shrink-0 text-[#f97316]" />
                <span>12 avenue de l&apos;Europe, 74100 Annemasse</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone size={18} className="shrink-0 text-[#f97316]" />
                <span>04 50 00 00 00</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-[#f97316]/20 bg-[#f97316]/5 p-6">
              <p className="mb-4 text-sm font-semibold text-[#f97316]">Réserver mon essai gratuit</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Prénom Nom"
                  className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#f97316]/50 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#f97316]/50 focus:outline-none"
                />
                <select className="rounded-md border border-white/10 bg-[#0d0f12] px-4 py-3 text-sm text-white/70 focus:border-[#f97316]/50 focus:outline-none">
                  <option>Objectif</option>
                  <option>Perte de poids</option>
                  <option>Prise de masse</option>
                  <option>Remise en forme</option>
                  <option>Cardio / endurance</option>
                </select>
                <input
                  type="date"
                  className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 focus:border-[#f97316]/50 focus:outline-none"
                />
              </div>
              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#f97316] py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]">
                <CalendarDays size={16} /> Réserver ma séance gratuite
              </button>
            </div>
            <a
              href="tel:+33450000000"
              className="flex items-center justify-center gap-2 rounded-md border border-white/20 py-4 text-sm font-semibold transition-colors hover:bg-white/5"
            >
              <Phone size={16} /> Appeler la salle
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8 py-10 text-center text-sm text-white/40">
        Énergie Gym · 12 avenue de l&apos;Europe · 74100 Annemasse · Tous droits réservés
      </footer>
    </div>
  );
}
