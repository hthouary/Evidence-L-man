import type { Metadata } from "next";
import Image from "next/image";
import { Wrench, Gauge, ShieldCheck, Car, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Léman Auto — Garage & entretien automobile à Annemasse",
  description:
    "Léman Auto : entretien, réparation et diagnostic toutes marques à Annemasse. Prenez rendez-vous en ligne.",
};

const services = [
  { icon: Wrench, title: "Entretien & révision", desc: "Vidange, freinage, courroie, toutes marques." },
  { icon: Gauge, title: "Diagnostic électronique", desc: "Lecture des défauts et contrôle complet." },
  { icon: ShieldCheck, title: "Contrôle technique", desc: "Pré-contrôle et contre-visite assurés." },
  { icon: Car, title: "Pneumatiques", desc: "Montage, équilibrage et géométrie." },
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
              passionnés, un devis clair, des délais tenus.
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
            <div className="mt-12 flex gap-8">
              {[
                ["15 ans", "d'expérience"],
                ["4,9/5", "avis clients"],
                ["48h", "délai moyen"],
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

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-3 text-4xl font-bold sm:text-5xl">Nos prestations</h2>
        <p className="mb-12 text-white/60">Un service complet pour votre véhicule.</p>
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
            </div>
          ))}
        </div>
      </section>

      {/* Atelier */}
      <section id="atelier" className="border-y border-white/8 bg-white/[0.02] py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=900&q=80"
              alt="Mécanicien au travail"
              fill
              className="object-cover"
            />
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
                "Véhicule de prêt sur demande",
                "Garantie pièces et main d'œuvre",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-white/80">
                  <ShieldCheck size={18} className="shrink-0 text-[#2f7bff]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* RDV */}
      <section id="rdv" className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-4xl font-bold sm:text-5xl">
          Prenez rendez-vous en 1 minute
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg font-light text-white/70">
          Décrivez votre besoin, choisissez un créneau, nous nous occupons du
          reste.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href="#"
            className="flex items-center justify-center gap-2 rounded-md bg-[#2f7bff] px-7 py-5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            <Clock size={18} /> Réserver un créneau
          </a>
          <a
            href="tel:+33450000000"
            className="flex items-center justify-center gap-2 rounded-md border border-white/20 px-7 py-5 text-sm font-semibold transition-colors hover:bg-white/5"
          >
            <Phone size={18} /> Appeler le garage
          </a>
        </div>
        <p className="mt-8 text-sm text-white/50">
          Zone Industrielle des Bordes, 74100 Annemasse · Lun – Ven 8h – 18h
        </p>
      </section>

      <footer className="border-t border-white/8 py-10 text-center text-sm text-white/40">
        Léman Auto · Annemasse
      </footer>
    </div>
  );
}
