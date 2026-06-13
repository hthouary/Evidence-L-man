import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Restaurant du Léman — Cuisine du terroir à Évian",
  description:
    "Restaurant du Léman : une cuisine du terroir au bord du lac. Réservez votre table à Évian.",
};

const dishes = [
  {
    name: "Filets de perche du lac",
    desc: "Beurre noisette, citron de Menton, pommes grenaille",
    price: "28 €",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Suprême de volaille fermière",
    desc: "Jus corsé, légumes de saison glacés",
    price: "24 €",
    img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Tarte fine aux pommes du Chablais",
    desc: "Caramel au beurre salé, glace vanille",
    price: "12 €",
    img: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=700&q=80",
];

export default function RestaurantDemo() {
  return (
    <div
      className="bg-[#16110c] text-[#efe7d8]"
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
            <a href="#menu" className="hover:text-[#c8a45c]">Le menu</a>
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
          <a
            href="#reserver"
            className="mt-10 inline-flex rounded-full bg-[#c8a45c] px-8 py-4 text-sm uppercase tracking-[0.2em] text-[#16110c] transition-transform hover:scale-105"
          >
            Réserver une table
          </a>
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
              notre chef.
            </p>
            <p className="mt-4 text-lg font-light leading-relaxed text-white/70">
              Une expérience chaleureuse, à deux pas des rives du Léman.
            </p>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="border-y border-white/10 bg-[#1d1610] py-24">
        <div className="mx-auto max-w-6xl px-6">
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
                  <span className="text-xl text-[#c8a45c]">{d.price}</span>
                </div>
                <p className="mt-2 font-light text-white/60">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section id="galerie" className="mx-auto max-w-6xl px-6 py-24">
        <h2
          className="mb-12 text-center text-4xl text-white sm:text-5xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          L&apos;atmosphère
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((src, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-sm ${
                i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Réserver */}
      <section
        id="reserver"
        className="relative overflow-hidden border-t border-white/10 py-24"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
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
            Du mardi au dimanche · 12h – 14h & 19h – 22h
            <br />
            Quai Baron de Blonay, 74500 Évian-les-Bains
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+33400000000"
              className="rounded-full bg-[#c8a45c] px-8 py-4 text-sm uppercase tracking-[0.2em] text-[#16110c] transition-transform hover:scale-105"
            >
              04 50 00 00 00
            </a>
            <a
              href="#"
              className="rounded-full border border-white/30 px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:border-[#c8a45c] hover:text-[#c8a45c]"
            >
              Réserver en ligne
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/40">
        Restaurant du Léman · Évian-les-Bains
      </footer>
    </div>
  );
}
