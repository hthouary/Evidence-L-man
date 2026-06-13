import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Maison Horizon — Concept store à Thonon-les-Bains",
  description:
    "Maison Horizon : mode, décoration et art de vivre. Une sélection d'objets choisis à Thonon-les-Bains.",
};

const products = [
  {
    name: "Plaid en laine des Alpes",
    price: "89 €",
    img: "https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Vase grès émaillé",
    price: "45 €",
    img: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Bougie parfumée cèdre",
    price: "32 €",
    img: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Panier en osier tressé",
    price: "58 €",
    img: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=600&q=80",
  },
];

export default function MaisonHorizonDemo() {
  return (
    <div className="bg-[#f6f1ea] text-[#3a322b]">
      {/* Nav */}
      <header className="sticky top-10 z-20 border-b border-[#3a322b]/8 bg-[#f6f1ea]/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span
            className="text-2xl tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Maison Horizon
          </span>
          <div className="hidden items-center gap-8 text-sm text-[#3a322b]/70 md:flex">
            <a href="#collection" className="hover:text-[#b5654a]">Collection</a>
            <a href="#lookbook" className="hover:text-[#b5654a]">Lookbook</a>
            <a href="#visite" className="hover:text-[#b5654a]">Nous trouver</a>
          </div>
          <a
            href="#visite"
            className="rounded-full bg-[#b5654a] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#9d543c]"
          >
            La boutique
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[#b5654a]">
            Concept store · Thonon-les-Bains
          </p>
          <h1
            className="text-5xl leading-[1.05] sm:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            La boutique qui vous ressemble.
          </h1>
          <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-[#3a322b]/70">
            Mode, décoration et art de vivre. Une sélection sensible
            d&apos;objets et de pièces choisies avec soin, pour habiller votre
            quotidien.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#collection"
              className="rounded-full bg-[#3a322b] px-7 py-3.5 text-sm font-medium text-[#f6f1ea] transition-transform hover:scale-105"
            >
              Découvrir la collection
            </a>
            <a
              href="#visite"
              className="rounded-full border border-[#3a322b]/20 px-7 py-3.5 text-sm font-medium transition-colors hover:bg-[#3a322b]/5"
            >
              Venir nous voir
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80"
              alt="Intérieur de la boutique"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-4 shadow-xl">
            <div className="text-2xl" style={{ fontFamily: "var(--font-playfair)" }}>
              +300
            </div>
            <div className="text-xs text-[#3a322b]/60">pièces uniques</div>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between">
          <h2
            className="text-4xl sm:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Notre sélection
          </h2>
          <a href="#" className="hidden text-sm font-medium text-[#b5654a] hover:underline sm:block">
            Voir tout →
          </a>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.name} className="group">
              <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-2xl bg-white">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-[15px] font-medium">{p.name}</h3>
              <p className="text-sm text-[#b5654a]">{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lookbook */}
      <section id="lookbook" className="bg-[#ece3d6] py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
          <div className="relative order-2 aspect-square overflow-hidden rounded-[2rem] md:order-1">
            <Image
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
              alt="Lookbook"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#b5654a]">
              Lookbook automne
            </p>
            <h2
              className="text-4xl leading-tight sm:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Des matières nobles, des teintes douces.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-[#3a322b]/70">
              Chaque saison, nous composons une sélection inspirée par les
              paysages du Léman. Lin lavé, laine bouillie, céramique
              artisanale : la beauté du simple, bien fait.
            </p>
          </div>
        </div>
      </section>

      {/* Visite */}
      <section id="visite" className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2
          className="text-4xl sm:text-5xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Venez nous rendre visite
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg font-light text-[#3a322b]/70">
          12 rue du Commerce, 74200 Thonon-les-Bains
          <br />
          Du mardi au samedi · 10h – 19h
        </p>
        <a
          href="#"
          className="mt-8 inline-flex rounded-full bg-[#b5654a] px-8 py-4 text-sm font-medium text-white transition-transform hover:scale-105"
        >
          Itinéraire
        </a>
      </section>

      <footer className="border-t border-[#3a322b]/10 py-10 text-center text-sm text-[#3a322b]/50">
        Maison Horizon · Thonon-les-Bains
      </footer>
    </div>
  );
}
