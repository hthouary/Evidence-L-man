import type { Metadata } from "next";
import Image from "next/image";
import { Hammer, TreePine, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "Atelier Horizon — Ébéniste & créations sur mesure",
  description:
    "Atelier Horizon : mobilier et agencements bois sur mesure, façonnés à la main en Haute-Savoie.",
};

const works = [
  {
    title: "Table de ferme en chêne massif",
    tag: "Mobilier",
    img: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Bibliothèque sur mesure",
    tag: "Agencement",
    img: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cuisine en noyer",
    tag: "Agencement",
    img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Escalier suspendu",
    tag: "Création",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
];

const steps = [
  { icon: Ruler, title: "Conception", desc: "Étude, mesures et plans dessinés avec vous." },
  { icon: TreePine, title: "Sélection des bois", desc: "Essences nobles, locales et durables." },
  { icon: Hammer, title: "Façonnage", desc: "Assemblage à la main dans notre atelier." },
];

export default function AtelierHorizonDemo() {
  return (
    <div className="bg-[#f4efe6] text-[#2c241b]">
      {/* Nav */}
      <header className="sticky top-10 z-20 border-b border-[#2c241b]/8 bg-[#f4efe6]/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="text-xl font-semibold tracking-tight">
            Atelier Horizon
          </span>
          <div className="hidden items-center gap-8 text-sm text-[#2c241b]/70 md:flex">
            <a href="#savoir-faire" className="hover:text-[#8a5a2b]">Savoir-faire</a>
            <a href="#realisations" className="hover:text-[#8a5a2b]">Réalisations</a>
            <a href="#contact" className="hover:text-[#8a5a2b]">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-[#2c241b] px-5 py-2 text-sm font-medium text-[#f4efe6] transition-colors hover:bg-[#8a5a2b]"
          >
            Demander un devis
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-6">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#8a5a2b]">
              Ébénisterie d&apos;art · Haute-Savoie
            </p>
            <h1
              className="text-5xl leading-[1.05] sm:text-6xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              L&apos;artisanat d&apos;excellence, façonné à la main.
            </h1>
            <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-[#2c241b]/70">
              Mobilier et agencements sur mesure, pensés pour durer des
              générations. Le bois noble rencontre le geste juste.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#realisations"
                className="rounded-full bg-[#2c241b] px-7 py-3.5 text-sm font-medium text-[#f4efe6] transition-transform hover:scale-105"
              >
                Voir nos créations
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[#2c241b]/20 px-7 py-3.5 text-sm font-medium transition-colors hover:bg-[#2c241b]/5"
              >
                Parler de mon projet
              </a>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1601564921647-b446839a013f?auto=format&fit=crop&w=800&q=80"
                alt="Artisan ébéniste"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Savoir-faire */}
      <section id="savoir-faire" className="bg-[#2c241b] py-24 text-[#f4efe6]">
        <div className="mx-auto max-w-6xl px-6">
          <h2
            className="mb-14 text-center text-4xl sm:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Du croquis à l&apos;objet
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#8a5a2b]/50 text-[#d9a86a]">
                  <s.icon size={26} strokeWidth={1.5} />
                </div>
                <div className="mb-2 text-sm text-[#d9a86a]">0{i + 1}</div>
                <h3 className="text-2xl" style={{ fontFamily: "var(--font-playfair)" }}>
                  {s.title}
                </h3>
                <p className="mt-3 font-light text-[#f4efe6]/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section id="realisations" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#8a5a2b]">
            Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
            Nos dernières réalisations
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {works.map((w, i) => (
            <div
              key={w.title}
              className={`group relative overflow-hidden rounded-2xl ${
                i % 3 === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div className={`relative ${i % 3 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                <Image
                  src={w.img}
                  alt={w.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c241b]/80 to-transparent" />
              </div>
              <div className="absolute bottom-5 left-6">
                <span className="text-xs uppercase tracking-widest text-[#d9a86a]">
                  {w.tag}
                </span>
                <h3
                  className="text-2xl text-[#f4efe6]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {w.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-4xl px-6 py-24 text-center"
      >
        <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
          Donnons vie à votre projet
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg font-light text-[#2c241b]/70">
          Chaque création débute par une conversation. Parlez-nous de vos envies,
          nous imaginons la pièce qui vous ressemble.
        </p>
        <a
          href="#"
          className="mt-8 inline-flex rounded-full bg-[#8a5a2b] px-8 py-4 text-sm font-medium text-white transition-transform hover:scale-105"
        >
          Demander un devis gratuit
        </a>
      </section>

      <footer className="border-t border-[#2c241b]/10 py-10 text-center text-sm text-[#2c241b]/50">
        Atelier Horizon · Ébénisterie · Haute-Savoie
      </footer>
    </div>
  );
}
