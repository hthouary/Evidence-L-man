import type { Metadata } from "next";
import Image from "next/image";
import { Waves, Droplets, Sparkles, Sun, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Villa Piscines — Construction & entretien de piscines",
  description:
    "Villa Piscines : conception, construction et entretien de piscines sur mesure autour du Léman. Devis gratuit.",
};

const services = [
  { icon: Waves, title: "Construction sur mesure", desc: "Béton, coque ou couloir de nage, selon votre terrain." },
  { icon: Droplets, title: "Entretien & traitement", desc: "Contrats annuels pour une eau toujours parfaite." },
  { icon: Sparkles, title: "Rénovation", desc: "Liner, margelles, mise aux normes et embellissement." },
  { icon: Sun, title: "Domotique & chauffage", desc: "Pilotez votre bassin depuis votre smartphone." },
];

const gallery = [
  "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?auto=format&fit=crop&w=800&q=80",
];

export default function VillaPiscinesDemo() {
  return (
    <div className="bg-white text-[#0c2e36]">
      {/* Nav */}
      <header className="sticky top-10 z-20 border-b border-[#0c2e36]/8 bg-white/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <Waves size={22} className="text-[#0aa3b8]" />
            Villa Piscines
          </span>
          <div className="hidden items-center gap-8 text-sm font-medium text-[#0c2e36]/70 md:flex">
            <a href="#services" className="hover:text-[#0aa3b8]">Services</a>
            <a href="#realisations" className="hover:text-[#0aa3b8]">Réalisations</a>
            <a href="#devis" className="hover:text-[#0aa3b8]">Devis</a>
          </div>
          <a
            href="#devis"
            className="rounded-full bg-[#0aa3b8] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0a8fa1]"
          >
            Devis gratuit
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1600&q=80"
          alt="Piscine de luxe"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06222a]/85 via-[#06222a]/55 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6">
          <div className="max-w-xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
              <Sparkles size={13} /> Pisciniste · Rives du Léman
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.04] sm:text-7xl">
              Votre espace bien-être sur mesure.
            </h1>
            <p className="mt-6 max-w-md text-lg font-light text-white/80">
              De la conception à l&apos;entretien, nous créons des piscines
              d&apos;exception qui subliment votre extérieur toute l&apos;année.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#devis"
                className="rounded-full bg-[#0aa3b8] px-7 py-4 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                Obtenir mon devis gratuit
              </a>
              <a
                href="#realisations"
                className="rounded-full border border-white/30 px-7 py-4 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/10"
              >
                Voir nos réalisations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0aa3b8]">
            Nos prestations
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">
            Un accompagnement de A à Z
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-[#0c2e36]/8 bg-[#f3fbfc] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#0aa3b8]/30 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0aa3b8]/12 text-[#0aa3b8]">
                <s.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm font-light text-[#0c2e36]/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Réalisations */}
      <section id="realisations" className="bg-[#f3fbfc] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0aa3b8]">
                Galerie
              </p>
              <h2 className="text-4xl font-bold sm:text-5xl">
                Des bassins qui font rêver
              </h2>
            </div>
            <p className="max-w-xs text-sm font-light text-[#0c2e36]/60">
              Plus de 200 piscines réalisées autour du lac Léman depuis 2009.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {gallery.map((src, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className={`relative ${i === 0 ? "aspect-[16/10] h-full" : "aspect-[4/3]"}`}>
                  <Image src={src} alt="Réalisation de piscine" fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devis */}
      <section id="devis" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0aa3b8] to-[#06606e]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center text-white">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Lancez votre projet piscine
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg font-light text-white/80">
            Recevez une étude personnalisée et un devis détaillé sous 48h,
            gratuitement et sans engagement.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0aa3b8] transition-transform hover:scale-105"
            >
              Demander mon devis gratuit
            </a>
            <a
              href="tel:+33450000000"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              <Phone size={16} /> 04 50 00 00 00
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#0c2e36]/10 py-10 text-center text-sm text-[#0c2e36]/50">
        Villa Piscines · Construction & entretien · Léman
      </footer>
    </div>
  );
}
