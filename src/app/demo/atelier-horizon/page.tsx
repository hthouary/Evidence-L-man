import type { Metadata } from "next";
import Image from "next/image";
import { Hammer, TreePine, Ruler, Phone, MapPin, Clock, Star, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Atelier Horizon — Ébéniste & créations sur mesure",
  description:
    "Atelier Horizon : mobilier et agencements bois sur mesure, façonnés à la main en Haute-Savoie.",
};

const works = [
  {
    title: "Table de ferme en chêne massif",
    tag: "Mobilier",
    desc: "Table 12 couverts, chêne massif huilé, pieds tournés",
    img: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Bibliothèque sur mesure",
    tag: "Agencement",
    desc: "Bibliothèque intégrée en noyer, 4 m de large, éclairage LED intégré",
    img: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cuisine en noyer",
    tag: "Agencement",
    desc: "Cuisine complète en noyer américain, plan de travail en pierre de Bourgogne",
    img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Escalier suspendu",
    tag: "Création",
    desc: "Escalier limon central acier, marches en frêne massif, rampe câbles inox",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Dressing habillé chêne",
    tag: "Agencement",
    desc: "Dressing sur mesure en chêne blanc brossé, quincaillerie laiton mat",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Lit baldaquin contemporain",
    tag: "Mobilier",
    desc: "Lit 180×200 en chêne massif, baldaquin minimaliste, tête de lit capitonnée",
    img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80",
  },
];

const steps = [
  {
    icon: Ruler,
    title: "Conception",
    desc: "Première rencontre chez vous ou à l'atelier. Étude du projet, prise de mesures et plans dessinés à la main avec vous. Devis sous 5 jours.",
  },
  {
    icon: TreePine,
    title: "Sélection des bois",
    desc: "Nous choisissons ensemble les essences nobles selon votre projet. Bois locaux, séchés naturellement, sourcés auprès de forêts certifiées PEFC.",
  },
  {
    icon: Hammer,
    title: "Façonnage",
    desc: "Assemblage à la main dans notre atelier de Haute-Savoie. Finitions à l'huile, cire ou vernis selon vos préférences. Livraison et pose incluses.",
  },
];

const essences = ["Chêne", "Noyer", "Frêne", "Hêtre", "Pin de montagne", "Érable", "Cerisier", "Chataignier"];

const reviews = [
  {
    name: "Hélène & Antoine B.",
    note: 5,
    text: "Notre cuisine en noyer est absolument magnifique. L'atelier a compris exactement ce qu'on voulait dès le premier rendez-vous. Une œuvre d'art fonctionnelle.",
    date: "Novembre 2024",
    projet: "Cuisine sur mesure",
  },
  {
    name: "Philippe D.",
    note: 5,
    text: "La bibliothèque qu'ils ont créée pour mon bureau est monumentale. Qualité exceptionnelle, délais respectés, et une équipe à l'écoute du moindre détail.",
    date: "Octobre 2024",
    projet: "Bibliothèque intégrée",
  },
  {
    name: "Sylvie M.",
    note: 5,
    text: "J'ai commandé une table de famille qui fera des générations. Le chêne massif est superbe, la finition irréprochable. Je recommande à 100%.",
    date: "Septembre 2024",
    projet: "Table de ferme",
  },
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
            <a href="#avis" className="hover:text-[#8a5a2b]">Avis</a>
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
              générations. Le bois noble rencontre le geste juste, dans notre
              atelier depuis 1998.
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
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                ["25 ans", "d'atelier"],
                ["+ 400", "créations"],
                ["4,9/5", "avis clients"],
              ].map(([v, l]) => (
                <div key={l} className="border-l-2 border-[#8a5a2b]/30 pl-4">
                  <div className="text-xl font-semibold text-[#8a5a2b]" style={{ fontFamily: "var(--font-playfair)" }}>{v}</div>
                  <div className="text-xs text-[#2c241b]/50">{l}</div>
                </div>
              ))}
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

      {/* Essences */}
      <section className="border-y border-[#2c241b]/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <p className="mb-4 text-center text-xs uppercase tracking-widest text-[#2c241b]/40">Essences travaillées</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {essences.map((e) => (
              <span key={e} className="rounded-full border border-[#8a5a2b]/20 px-4 py-1.5 text-sm text-[#2c241b]/70">
                {e}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Savoir-faire */}
      <section id="savoir-faire" className="bg-[#2c241b] py-24 text-[#f4efe6]">
        <div className="mx-auto max-w-6xl px-6">
          <h2
            className="mb-4 text-center text-4xl sm:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Du croquis à l&apos;objet
          </h2>
          <p className="mb-14 text-center text-lg font-light text-[#f4efe6]/60">
            Un processus artisanal en 3 étapes, de la première idée à la livraison.
          </p>
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
          <div className="mt-16 rounded-2xl border border-[#8a5a2b]/30 bg-[#8a5a2b]/10 p-8 text-center">
            <p className="text-lg font-light text-[#f4efe6]/80">
              <span className="font-semibold text-[#d9a86a]">Délai moyen :</span> 6 à 10 semaines selon la complexité du projet.
              Livraison et installation incluses dans un rayon de 50 km.
            </p>
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w, i) => (
            <div
              key={w.title}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div className={`relative ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                <Image
                  src={w.img}
                  alt={w.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c241b]/80 to-transparent" />
              </div>
              <div className="absolute bottom-5 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-[#d9a86a]">
                  {w.tag}
                </span>
                <h3
                  className="text-xl text-[#f4efe6]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {w.title}
                </h3>
                <p className="mt-1 text-sm text-[#f4efe6]/60">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Garanties */}
      <section className="bg-[#ede4d5] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-center text-3xl" style={{ fontFamily: "var(--font-playfair)" }}>
            Nos engagements
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Garantie 10 ans", desc: "Sur tous nos assemblages et structures" },
              { title: "Bois certifiés", desc: "Essences PEFC, séchées naturellement" },
              { title: "Devis gratuit", desc: "Étude et plans sans engagement" },
              { title: "Livraison & pose", desc: "Incluses jusqu'à 50 km" },
            ].map((g) => (
              <div key={g.title} className="flex gap-4 rounded-xl bg-white p-5">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#8a5a2b]" />
                <div>
                  <div className="font-semibold text-[#2c241b]">{g.title}</div>
                  <div className="mt-1 text-sm text-[#2c241b]/60">{g.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis */}
      <section id="avis" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#8a5a2b]">Témoignages</p>
          <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
            Ils ont fait confiance à l&apos;atelier
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-[#8a5a2b] text-[#8a5a2b]" />
            ))}
            <span className="ml-2 text-sm text-[#2c241b]/60">4,9 / 5 · Google</span>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl bg-white p-7">
              <div className="mb-1 text-xs uppercase tracking-widest text-[#8a5a2b]">{r.projet}</div>
              <div className="mb-4 flex gap-1">
                {[...Array(r.note)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#8a5a2b] text-[#8a5a2b]" />
                ))}
              </div>
              <p className="text-[15px] leading-relaxed text-[#2c241b]/80">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-medium">{r.name}</span>
                <span className="text-xs text-[#2c241b]/40">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-[#2c241b] py-24 text-[#f4efe6]"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
                Donnons vie à votre projet
              </h2>
              <p className="mt-5 text-lg font-light text-[#f4efe6]/70">
                Chaque création débute par une conversation. Parlez-nous de vos envies,
                nous imaginons la pièce qui vous ressemble.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-[#f4efe6]/70">
                  <Phone size={18} className="text-[#d9a86a]" />
                  <span>04 50 00 00 00</span>
                </div>
                <div className="flex items-center gap-3 text-[#f4efe6]/70">
                  <MapPin size={18} className="text-[#d9a86a]" />
                  <span>Chemin des Artisans, 74000 Annecy</span>
                </div>
                <div className="flex items-center gap-3 text-[#f4efe6]/70">
                  <Clock size={18} className="text-[#d9a86a]" />
                  <span>Lundi – Vendredi · 8h – 18h · Visites sur RDV</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <a
                href="#"
                className="rounded-full bg-[#8a5a2b] px-8 py-5 text-center text-sm font-medium text-white transition-transform hover:scale-105"
              >
                Demander un devis gratuit
              </a>
              <a
                href="tel:+33450000000"
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-5 text-sm font-medium transition-colors hover:bg-white/10"
              >
                <Phone size={16} /> Appeler l&apos;atelier
              </a>
              <p className="text-center text-sm text-[#f4efe6]/40">
                Dévis gratuit · Réponse sous 48h · Sans engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#f4efe6]/10 bg-[#2c241b] py-10 text-center text-sm text-[#f4efe6]/30">
        Atelier Horizon · Ébénisterie sur mesure · Haute-Savoie depuis 1998
      </footer>
    </div>
  );
}
