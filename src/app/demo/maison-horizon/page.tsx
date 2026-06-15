import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Clock, Star, Heart, Truck, RotateCcw, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Maison Horizon — Concept store à Thonon-les-Bains",
  description:
    "Maison Horizon : mode, décoration et art de vivre. Une sélection d'objets choisis à Thonon-les-Bains.",
};

const categories = [
  { name: "Décoration", count: 87 },
  { name: "Textile", count: 64 },
  { name: "Céramique", count: 42 },
  { name: "Luminaires", count: 29 },
  { name: "Papeterie", count: 38 },
];

const products = [
  {
    name: "Plaid en laine des Alpes",
    price: "89 €",
    category: "Textile",
    badge: "Coup de cœur",
    img: "https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Vase grès émaillé",
    price: "45 €",
    category: "Céramique",
    badge: "Artisanal",
    img: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Bougie parfumée cèdre",
    price: "32 €",
    category: "Décoration",
    badge: null,
    img: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Panier en osier tressé",
    price: "58 €",
    category: "Décoration",
    badge: "Exclusif",
    img: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Coussin velours sauge",
    price: "42 €",
    category: "Textile",
    badge: null,
    img: "https://images.unsplash.com/photo-1588099768531-a72d4a198538?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Carnet cuir gravé",
    price: "28 €",
    category: "Papeterie",
    badge: "Nouveauté",
    img: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Suspension rotin naturel",
    price: "75 €",
    category: "Luminaires",
    badge: null,
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Bol céramique artisan",
    price: "35 €",
    category: "Céramique",
    badge: "Fait main",
    img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=600&q=80",
  },
];

const reviews = [
  {
    name: "Camille R.",
    note: 5,
    text: "Une boutique qui se démarque vraiment ! Chaque objet est choisi avec soin, on sent la passion derrière chaque sélection. J'y retourne régulièrement.",
    date: "Décembre 2024",
  },
  {
    name: "Thomas V.",
    note: 5,
    text: "J'ai trouvé le cadeau parfait pour Noël ici. L'équipe est d'un conseil précieux et le packaging soigné. Mes proches ont adoré.",
    date: "Décembre 2024",
  },
  {
    name: "Marie-Claire D.",
    note: 5,
    text: "La boutique la plus jolie du Léman ! J'adore l'ambiance, les collections changent souvent et il y a toujours de belles surprises.",
    date: "Novembre 2024",
  },
];

export default function MaisonHorizonDemo() {
  return (
    <div className="overflow-x-hidden bg-[#f6f1ea] text-[#3a322b]">
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
            <a href="#avis" className="hover:text-[#b5654a]">Avis</a>
            <a href="#visite" className="hover:text-[#b5654a]">La boutique</a>
          </div>
          <a
            href="#visite"
            className="rounded-full bg-[#b5654a] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#9d543c]"
          >
            Nous trouver
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
            quotidien de beauté.
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
          <div className="mt-10 flex gap-8">
            {[
              ["+ 300", "pièces uniques"],
              ["4,8/5", "avis Google"],
              ["Depuis 2015", "à Thonon"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="text-xl font-semibold text-[#b5654a]" style={{ fontFamily: "var(--font-playfair)" }}>{v}</div>
                <div className="text-xs text-[#3a322b]/50">{l}</div>
              </div>
            ))}
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
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-[#b5654a] text-[#b5654a]" />
              ))}
            </div>
            <div className="mt-1 text-xs text-[#3a322b]/60">&ldquo;La boutique parfaite !&rdquo;</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-[#3a322b]/10 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-6 py-8">
          {[
            { icon: Truck, text: "Click & collect disponible" },
            { icon: RotateCcw, text: "Échanges sous 14 jours" },
            { icon: Heart, text: "Emballage cadeau offert" },
            { icon: Tag, text: "Programme fidélité" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 text-sm text-[#3a322b]/70">
              <Icon size={16} className="text-[#b5654a]" />
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#b5654a]">Automne–Hiver 2024</p>
            <h2
              className="text-4xl sm:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Notre sélection
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.name}
                className="rounded-full border border-[#3a322b]/15 px-4 py-1.5 text-xs font-medium text-[#3a322b]/70 transition-colors hover:border-[#b5654a] hover:text-[#b5654a]"
              >
                {c.name} <span className="text-[#3a322b]/40">({c.count})</span>
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.name} className="group cursor-pointer">
              <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-2xl bg-white">
                {p.badge && (
                  <div className="absolute left-3 top-3 z-10 rounded-full bg-[#b5654a] px-3 py-1 text-xs font-medium text-white">
                    {p.badge}
                  </div>
                )}
                <button className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur transition-colors hover:bg-[#b5654a] hover:text-white">
                  <Heart size={14} />
                </button>
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mb-1 text-xs text-[#b5654a]">{p.category}</div>
              <h3 className="text-[15px] font-medium">{p.name}</h3>
              <div className="mt-1 flex items-center justify-between">
                <p className="font-semibold text-[#3a322b]">{p.price}</p>
                <button className="text-xs text-[#3a322b]/50 underline hover:text-[#b5654a]">
                  Ajouter
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#" className="inline-flex rounded-full border border-[#3a322b]/20 px-8 py-3.5 text-sm font-medium transition-colors hover:bg-[#3a322b]/5">
            Voir tout le catalogue →
          </a>
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
              Lookbook automne 2024
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
            <p className="mt-4 text-lg font-light leading-relaxed text-[#3a322b]/70">
              Toutes nos pièces sont sourcées auprès de créateurs européens
              engagés dans une production responsable et durable.
            </p>
            <a
              href="#collection"
              className="mt-8 inline-flex rounded-full bg-[#3a322b] px-7 py-3.5 text-sm font-medium text-[#f6f1ea] transition-transform hover:scale-105"
            >
              Découvrir le lookbook
            </a>
          </div>
        </div>
      </section>

      {/* Avis */}
      <section id="avis" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#b5654a]">Ils nous font confiance</p>
          <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
            Avis de nos clientes
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-[#b5654a] text-[#b5654a]" />
            ))}
            <span className="ml-2 text-sm text-[#3a322b]/60">4,8 / 5 sur Google</span>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="mb-4 flex gap-1">
                {[...Array(r.note)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#b5654a] text-[#b5654a]" />
                ))}
              </div>
              <p className="text-[15px] leading-relaxed text-[#3a322b]/80">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-medium">{r.name}</span>
                <span className="text-xs text-[#3a322b]/40">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visite */}
      <section id="visite" className="bg-[#3a322b] py-24 text-[#f6f1ea]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#d9a86a]">Venez nous voir</p>
              <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
                La boutique vous attend.
              </h2>
              <p className="mt-5 text-lg font-light text-[#f6f1ea]/70">
                Nichée au cœur de Thonon, notre boutique vous accueille dans
                un espace chaleureux et inspirant, à deux pas du lac.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-[#f6f1ea]/70">
                  <MapPin size={18} className="text-[#d9a86a]" />
                  <span>12 rue du Commerce, 74200 Thonon-les-Bains</span>
                </div>
                <div className="flex items-center gap-3 text-[#f6f1ea]/70">
                  <Clock size={18} className="text-[#d9a86a]" />
                  <span>Mardi – Samedi · 10h – 19h</span>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <a
                  href="#"
                  className="rounded-full bg-[#b5654a] px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-105"
                >
                  Itinéraire
                </a>
                <a
                  href="#"
                  className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium transition-colors hover:bg-white/10"
                >
                  Nous contacter
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80"
                alt="Vitrine de la boutique"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#3a322b]/10 py-10 text-center text-sm text-[#3a322b]/50">
        Maison Horizon · 12 rue du Commerce · 74200 Thonon-les-Bains · Tous droits réservés
      </footer>
    </div>
  );
}
