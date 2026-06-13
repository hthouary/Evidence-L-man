import type { Metadata } from "next";
import Image from "next/image";
import { Wrench, Gauge, ShieldCheck, Car, Phone, Clock, MapPin, Star, CheckCircle2, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Léman Auto — Garage & entretien automobile à Annemasse",
  description:
    "Léman Auto : entretien, réparation et diagnostic toutes marques à Annemasse. Prenez rendez-vous en ligne.",
};

const services = [
  {
    icon: Wrench,
    title: "Entretien & révision",
    desc: "Vidange, freinage, courroie de distribution. Forfaits clairs, toutes marques.",
    price: "À partir de 89 €",
  },
  {
    icon: Gauge,
    title: "Diagnostic électronique",
    desc: "Lecture des codes défauts, contrôle complet des systèmes embarqués.",
    price: "59 €",
  },
  {
    icon: ShieldCheck,
    title: "Contrôle technique",
    desc: "Pré-contrôle offert, contre-visite assurée, centre agréé.",
    price: "79 €",
  },
  {
    icon: Car,
    title: "Pneumatiques",
    desc: "Montage, équilibrage, géométrie. Stock de plus de 500 références.",
    price: "À partir de 15 €/pneu",
  },
];

const marques = [
  "Renault", "Peugeot", "Citroën", "Volkswagen", "BMW",
  "Mercedes", "Toyota", "Ford", "Opel", "Audi",
];

const reviews = [
  {
    name: "Franck M.",
    note: 5,
    text: "Diagnostique rapide, devis honnête et délai respecté. Ça fait 6 ans que je viens ici, je ne changerai pas. L'équipe est top.",
    date: "Décembre 2024",
  },
  {
    name: "Nathalie P.",
    note: 5,
    text: "J'avais une panne mystérieuse que deux autres garages n'avaient pas réussi à trouver. Léman Auto l'a diagnostiquée en 30 minutes. Impressionnant.",
    date: "Novembre 2024",
  },
  {
    name: "Laurent G.",
    note: 5,
    text: "Véhicule de prêt disponible immédiatement, travaux effectués dans la journée, prix très correct. Je recommande sans hésitation.",
    date: "Octobre 2024",
  },
];

const faq = [
  {
    q: "Puis-je apporter ma voiture sans rendez-vous ?",
    a: "Pour les petites interventions (remplacement d'ampoule, gonflage, etc.), nous acceptons sans RDV. Pour les révisions et diagnostics, nous recommandons de prendre rendez-vous pour minimiser l'attente.",
  },
  {
    q: "Proposez-vous un véhicule de prêt ?",
    a: "Oui, nous disposons de 3 véhicules de prêt disponibles sur demande lors de la prise de rendez-vous. Ce service est gratuit pour toute intervention supérieure à 200 €.",
  },
  {
    q: "Vos pièces sont-elles garanties ?",
    a: "Toutes nos pièces et notre main-d'œuvre sont garanties 12 mois ou 20 000 km. Nous utilisons uniquement des pièces d'origine ou de qualité équivalente.",
  },
];

export default function LemanAutoDemo() {
  return (
    <div
      className="bg-[#0e1116] text-[#e7ebf0]"
      style={{ fontFamily: "var(--font-grotesk)" }}
    >
      {/* Nav */}
      <header className="sticky top-10 z-20 border-b border-white/8 bg-[#0e1116]/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="flex items-center gap-2 text-xl font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#2f7bff]">
              <Car size={18} className="text-white" />
            </span>
            LÉMAN<span className="text-[#2f7bff]">AUTO</span>
          </span>
          <div className="hidden items-center gap-8 text-sm font-medium text-white/60 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#atelier" className="hover:text-white">L&apos;atelier</a>
            <a href="#avis" className="hover:text-white">Avis</a>
            <a href="#rdv" className="hover:text-white">Rendez-vous</a>
          </div>
          <a
            href="#rdv"
            className="rounded-md bg-[#2f7bff] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1f6aee]"
          >
            Prendre RDV
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1632823471565-1ecdf5c6d7f9?auto=format&fit=crop&w=1600&q=80"
            alt="Atelier mécanique"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1116] via-[#0e1116]/90 to-[#0e1116]/40" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2f7bff]/30 bg-[#2f7bff]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#5b97ff]">
              Garage toutes marques · Annemasse
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] sm:text-7xl">
              Votre garage de{" "}
              <span className="text-[#2f7bff]">confiance.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg font-light text-white/70">
              Entretien, réparation et diagnostic au juste prix. Une équipe de
              passionnés, un devis clair avant toute intervention, des délais tenus.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#rdv"
                className="rounded-md bg-[#2f7bff] px-7 py-4 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                Demander un rendez-vous
              </a>
              <a
                href="tel:+33450000000"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-7 py-4 text-sm font-semibold transition-colors hover:bg-white/5"
              >
                <Phone size={16} /> 04 50 00 00 00
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 sm:flex sm:gap-10">
              {[
                ["15 ans", "d'expérience"],
                ["4,9/5", "avis clients"],
                ["48h", "délai moyen"],
                ["+2 000", "clients fidèles"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="text-3xl font-bold text-[#2f7bff]">{v}</div>
                  <div className="text-sm text-white/50">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marques */}
      <section className="border-y border-white/8 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <p className="mb-4 text-center text-xs uppercase tracking-widest text-white/40">Toutes marques acceptées</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {marques.map((m) => (
              <span key={m} className="text-sm font-medium text-white/50">{m}</span>
            ))}
            <span className="text-sm text-white/30">& toutes autres marques</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12">
          <h2 className="mb-3 text-4xl font-bold sm:text-5xl">Nos prestations</h2>
          <p className="text-white/60">Devis gratuit et détaillé avant chaque intervention.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-white/8 bg-white/[0.03] p-6 transition-colors hover:border-[#2f7bff]/40 hover:bg-[#2f7bff]/[0.06]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#2f7bff]/15 text-[#5b97ff]">
                <s.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm font-light text-white/60">{s.desc}</p>
              <div className="mt-4 text-sm font-semibold text-[#5b97ff]">{s.price}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-xl border border-[#2f7bff]/20 bg-[#2f7bff]/5 p-5">
          <p className="text-sm text-white/70">
            <span className="font-semibold text-white">Bon à savoir :</span> Nous proposons également la réparation de climatisation, le remplacement de vitrage et le traitement anti-corrosion. Demandez notre liste complète de prestations.
          </p>
        </div>
      </section>

      {/* Atelier */}
      <section id="atelier" className="border-y border-white/8 bg-white/[0.02] py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=900&q=80"
                alt="Mécanicien au travail"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-xl border border-[#2f7bff]/30 bg-[#0e1116] p-4">
              <div className="text-2xl font-bold text-[#2f7bff]">Agréé</div>
              <div className="text-xs text-white/50">Contrôle technique</div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Un atelier moderne, des techniciens passionnés.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-white/70">
              Équipements de diagnostic dernière génération, pièces d&apos;origine
              ou équivalentes garanties, et un interlocuteur unique qui vous
              explique tout, simplement.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Devis gratuit et détaillé avant toute intervention",
                "Véhicule de prêt sur demande (gratuit dès 200 €)",
                "Garantie pièces et main d'œuvre 12 mois",
                "Restitution lavée et propre à l'intérieur",
                "Suivi digital de votre véhicule",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#2f7bff]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Avis */}
      <section id="avis" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold sm:text-5xl">Ce que disent nos clients</h2>
            <div className="mt-3 flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-[#2f7bff] text-[#2f7bff]" />
              ))}
              <span className="text-white/60">4,9 / 5 · Plus de 400 avis Google</span>
            </div>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-xl border border-white/8 bg-white/[0.03] p-6">
              <div className="mb-4 flex gap-1">
                {[...Array(r.note)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#2f7bff] text-[#2f7bff]" />
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
      </section>

      {/* FAQ */}
      <section className="border-t border-white/8 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-10 text-3xl font-bold text-center">Questions fréquentes</h2>
          <div className="space-y-4">
            {faq.map((f) => (
              <div key={f.q} className="rounded-xl border border-white/8 p-6">
                <h3 className="font-semibold text-white">{f.q}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-white/60">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RDV */}
      <section id="rdv" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold sm:text-5xl">
              Prenez rendez-vous
            </h2>
            <p className="mt-5 text-lg font-light text-white/70">
              Décrivez votre besoin, choisissez un créneau, nous nous occupons du reste. Réponse garantie sous 2h.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-white/70">
                <Clock size={18} className="text-[#2f7bff]" />
                <span>Lundi – Vendredi · 8h – 18h · Samedi 8h – 12h</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin size={18} className="text-[#2f7bff]" />
                <span>Zone Industrielle des Bordes, 74100 Annemasse</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone size={18} className="text-[#2f7bff]" />
                <span>04 50 00 00 00</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-md bg-[#2f7bff] px-7 py-5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              <CalendarDays size={18} /> Réserver un créneau en ligne
            </a>
            <a
              href="tel:+33450000000"
              className="flex items-center justify-center gap-2 rounded-md border border-white/20 px-7 py-5 text-sm font-semibold transition-colors hover:bg-white/5"
            >
              <Phone size={18} /> Appeler le garage
            </a>
            <div className="rounded-md border border-white/8 bg-white/[0.03] p-5">
              <p className="text-sm font-semibold text-white">Urgence panne ?</p>
              <p className="mt-1 text-sm text-white/60">Appelez-nous directement. Nous faisons notre possible pour vous accueillir le jour même.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8 py-10 text-center text-sm text-white/40">
        Léman Auto · Zone Industrielle des Bordes · 74100 Annemasse · Tous droits réservés
      </footer>
    </div>
  );
}
