import type { Metadata } from "next";
import Image from "next/image";
import { Phone, MapPin, Clock, Star, ChevronRight, Utensils, Wine, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Restaurant du Léman — Cuisine du terroir à Évian",
  description:
    "Restaurant du Léman : une cuisine du terroir au bord du lac. Réservez votre table à Évian.",
};

const dishes = [
  {
    name: "Filets de perche du lac",
    desc: "Beurre noisette, citron de Menton, pommes grenaille dorées",
    price: "28 €",
    tag: "Signature",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Suprême de volaille fermière",
    desc: "Jus corsé aux herbes, légumes de saison glacés, purée truffée",
    price: "24 €",
    tag: "Best-seller",
    img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Tarte fine aux pommes du Chablais",
    desc: "Caramel au beurre salé, glace vanille de Madagascar",
    price: "12 €",
    tag: "Dessert",
    img: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80",
  },
];

const menus = [
  {
    name: "Menu du Midi",
    price: "22 €",
    items: ["Entrée du jour", "Plat du chef", "Dessert maison"],
    note: "Du mardi au vendredi",
  },
  {
    name: "Menu Découverte",
    price: "38 €",
    items: ["Amuse-bouche", "Entrée", "Plat signature", "Fromages affinés", "Dessert"],
    note: "Disponible le soir",
    highlight: true,
  },
  {
    name: "Menu Prestige",
    price: "58 €",
    items: ["Amuse-bouches", "Entrée & mise en bouche", "Poisson du lac", "Viande & accompagnements", "Chariot de fromages", "Dessert & mignardises"],
    note: "Idéal pour les occasions",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80",
];

const reviews = [
  {
    name: "Sophie M.",
    note: 5,
    text: "Une expérience culinaire inoubliable. Les perches du lac étaient sublimes, et la vue sur le Léman... magique. On reviendra assurément.",
    date: "Novembre 2024",
  },
  {
    name: "Jean-Pierre L.",
    note: 5,
    text: "Le meilleur restaurant de la région du Léman, sans hésitation. Accueil chaleureux, cuisine raffinée, carte des vins excellente.",
    date: "Octobre 2024",
  },
  {
    name: "Isabelle & Marc",
    note: 5,
    text: "Repas d'anniversaire parfait. Le menu prestige nous a enchantés de bout en bout. Mention spéciale pour le chariot de fromages.",
    date: "Septembre 2024",
  },
];

export default function RestaurantDemo() {
  return (
    <div
      className="overflow-x-hidden bg-[#16110c] text-[#efe7d8]"
      style={{ fontFamily: "var(--font-cormorant)" }}
    >
      {/* Nav */}
      <header className="absolute inset-x-0 top-10 z-20">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span
            className="text-2xl tracking-wide text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Restaurant du Léman
          </span>
          <div className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] text-white/70 md:flex">
            <a href="#table" className="hover:text-[#c8a45c]">La table</a>
            <a href="#menu" className="hover:text-[#c8a45c]">Menus</a>
            <a href="#carte" className="hover:text-[#c8a45c]">La carte</a>
            <a href="#galerie" className="hover:text-[#c8a45c]">Galerie</a>
          </div>
          <a
            href="#reserver"
            className="rounded-full border border-[#c8a45c] px-5 py-2 text-xs uppercase tracking-[0.2em] text-[#c8a45c] transition-colors hover:bg-[#c8a45c] hover:text-[#16110c]"
          >
            Réserver
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=80"
          alt="Salle du restaurant"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#16110c]/70 via-[#16110c]/40 to-[#16110c]" />
        <div className="relative z-10 max-w-3xl px-6 text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[#c8a45c]">
            Évian-les-Bains · Au bord du lac
          </p>
          <h1
            className="text-5xl leading-tight text-white sm:text-7xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Une cuisine du terroir,
            <br />
            un art de vivre.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-xl font-light text-white/80">
            Produits du lac et des montagnes, sublimés au fil des saisons dans
            un cadre d&apos;exception face au Léman.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#reserver"
              className="rounded-full bg-[#c8a45c] px-8 py-4 text-sm uppercase tracking-[0.2em] text-[#16110c] transition-transform hover:scale-105"
            >
              Réserver une table
            </a>
            <a
              href="#carte"
              className="rounded-full border border-white/30 px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:border-[#c8a45c]/50"
            >
              Voir la carte
            </a>
          </div>
          {/* Stats */}
          <div className="mt-14 flex flex-wrap justify-center gap-10">
            {[
              ["3 générations", "de passion"],
              ["4.9 / 5", "plus de 800 avis"],
              ["100%", "produits locaux"],
            ].map(([v, l]) => (
              <div key={l} className="text-center">
                <div className="text-3xl text-[#c8a45c]" style={{ fontFamily: "var(--font-playfair)" }}>{v}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/50">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="border-y border-white/10 bg-[#1d1610]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-6 py-8">
          {[
            { icon: Leaf, text: "Produits du terroir & de saison" },
            { icon: Wine, text: "Cave à vins sélectionnée" },
            { icon: Utensils, text: "Menus végétariens disponibles" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 text-sm text-white/60">
              <Icon size={16} className="text-[#c8a45c]" />
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* La table */}
      <section id="table" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
              alt="Le chef"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c8a45c]">
              Notre maison
            </p>
            <h2
              className="text-4xl leading-tight text-white sm:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              La générosité d&apos;une cuisine de saison.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-white/70">
              Depuis trois générations, notre famille cultive l&apos;amour du
              produit juste. Chaque assiette raconte la rencontre entre les
              pêcheurs du lac, les maraîchers du Chablais et le savoir-faire de
              notre chef étoilé.
            </p>
            <p className="mt-4 text-lg font-light leading-relaxed text-white/70">
              Dans notre salle de 40 couverts face aux eaux bleues du Léman,
              chaque repas devient un souvenir. Nous accueillons également vos
              groupes et privatisations.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["40", "couverts"],
                ["12", "producteurs locaux"],
                ["Depuis 1982", "à Évian"],
                ["Privatisation", "sur demande"],
              ].map(([v, l]) => (
                <div key={l} className="border-l border-[#c8a45c]/30 pl-4">
                  <div className="text-xl text-white" style={{ fontFamily: "var(--font-playfair)" }}>{v}</div>
                  <div className="text-sm text-white/50">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menus */}
      <section id="menu" className="border-y border-white/10 bg-[#1d1610] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c8a45c]">
              Nos formules
            </p>
            <h2
              className="text-4xl text-white sm:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Nos menus
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menus.map((m) => (
              <div
                key={m.name}
                className={`relative rounded-sm border p-8 ${
                  m.highlight
                    ? "border-[#c8a45c] bg-[#c8a45c]/5"
                    : "border-white/10 bg-[#16110c]"
                }`}
              >
                {m.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#c8a45c] px-4 py-1 text-xs uppercase tracking-widest text-[#16110c]">
                    Recommandé
                  </div>
                )}
                <div className="mb-1 text-sm uppercase tracking-[0.2em] text-[#c8a45c]">{m.note}</div>
                <h3 className="text-2xl text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                  {m.name}
                </h3>
                <div className="my-4 text-3xl text-[#c8a45c]" style={{ fontFamily: "var(--font-playfair)" }}>
                  {m.price}
                </div>
                <ul className="space-y-2">
                  {m.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-light text-white/70">
                      <ChevronRight size={14} className="mt-0.5 shrink-0 text-[#c8a45c]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#reserver"
                  className={`mt-6 block w-full rounded-full py-3 text-center text-xs uppercase tracking-[0.2em] transition-colors ${
                    m.highlight
                      ? "bg-[#c8a45c] text-[#16110c] hover:bg-[#b8934c]"
                      : "border border-white/20 text-white hover:border-[#c8a45c] hover:text-[#c8a45c]"
                  }`}
                >
                  Réserver
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* La carte */}
      <section id="carte" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c8a45c]">
            Les incontournables
          </p>
          <h2
            className="text-4xl text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Notre carte
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {dishes.map((d) => (
            <div key={d.name} className="group">
              <div className="relative mb-5 aspect-square overflow-hidden rounded-sm">
                <div className="absolute left-3 top-3 z-10 rounded-full bg-[#c8a45c] px-3 py-1 text-xs uppercase tracking-wider text-[#16110c]">
                  {d.tag}
                </div>
                <Image
                  src={d.img}
                  alt={d.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <h3
                  className="text-2xl text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {d.name}
                </h3>
                <span className="shrink-0 text-xl text-[#c8a45c]">{d.price}</span>
              </div>
              <p className="mt-2 font-light text-white/60">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Galerie */}
      <section id="galerie" className="bg-[#1d1610] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2
            className="mb-12 text-center text-4xl text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            L&apos;atmosphère
          </h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {gallery.map((src, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-sm ${
                  i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
                }`}
              >
                <Image src={src} alt="" fill className="object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c8a45c]">
            Ce que disent nos convives
          </p>
          <h2 className="text-4xl text-white sm:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
            Avis clients
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-[#c8a45c] text-[#c8a45c]" />
            ))}
            <span className="ml-2 text-lg text-white/60">4,9 / 5 · Google</span>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-sm border border-white/10 bg-[#1d1610] p-7">
              <div className="mb-4 flex gap-1">
                {[...Array(r.note)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#c8a45c] text-[#c8a45c]" />
                ))}
              </div>
              <p className="text-lg font-light leading-relaxed text-white/80">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-medium text-white">{r.name}</span>
                <span className="text-sm text-white/40">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Réserver */}
      <section
        id="reserver"
        className="relative overflow-hidden border-t border-white/10 py-24"
      >
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c8a45c]">
                Réservations
              </p>
              <h2
                className="text-4xl text-white sm:text-5xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Réservez votre table
              </h2>
              <p className="mt-5 text-lg font-light text-white/70">
                Pour un déjeuner en semaine ou un dîner romantique le week-end,
                nos équipes vous accueillent avec le sourire.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-white/70">
                  <Clock size={18} className="text-[#c8a45c]" />
                  <span>Mardi – Dimanche · 12h–14h & 19h–22h</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin size={18} className="text-[#c8a45c]" />
                  <span>Quai Baron de Blonay, 74500 Évian-les-Bains</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Phone size={18} className="text-[#c8a45c]" />
                  <span>04 50 00 00 00</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-sm border border-white/10 bg-[#1d1610] p-6">
                <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#c8a45c]">Réservation en ligne</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="rounded border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#c8a45c]/50 focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Téléphone"
                    className="rounded border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#c8a45c]/50 focus:outline-none"
                  />
                  <input
                    type="date"
                    className="rounded border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 focus:border-[#c8a45c]/50 focus:outline-none"
                  />
                  <select className="rounded border border-white/10 bg-[#1d1610] px-4 py-3 text-sm text-white/70 focus:border-[#c8a45c]/50 focus:outline-none">
                    <option>Nombre de couverts</option>
                    {[1,2,3,4,5,6,"7+"].map(n => <option key={n}>{n} {typeof n === 'number' && n > 1 ? 'personnes' : typeof n === 'number' ? 'personne' : 'personnes'}</option>)}
                  </select>
                </div>
                <button className="mt-4 w-full rounded-full bg-[#c8a45c] py-3.5 text-sm uppercase tracking-[0.2em] text-[#16110c] transition-transform hover:scale-[1.02]">
                  Confirmer la réservation
                </button>
              </div>
              <a
                href="tel:+33400000000"
                className="flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:border-[#c8a45c] hover:text-[#c8a45c]"
              >
                <Phone size={16} /> 04 50 00 00 00
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/40">
        Restaurant du Léman · Quai Baron de Blonay · 74500 Évian-les-Bains · Tous droits réservés
      </footer>
    </div>
  );
}
