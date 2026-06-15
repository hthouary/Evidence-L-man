import type { Metadata } from "next";
import Image from "next/image";
import { Waves, Droplets, Sparkles, Sun, Phone, MapPin, Clock, Star, CheckCircle2, Thermometer, Shield, Wifi } from "lucide-react";

export const metadata: Metadata = {
  title: "Villa Piscines — Construction & entretien de piscines",
  description:
    "Villa Piscines : conception, construction et entretien de piscines sur mesure autour du Léman. Devis gratuit.",
};

const services = [
  {
    icon: Waves,
    title: "Construction sur mesure",
    desc: "Béton armé, coque polyester ou couloir de nage. Chaque réalisation est unique, adaptée à votre terrain et vos envies.",
    price: "À partir de 25 000 €",
  },
  {
    icon: Droplets,
    title: "Entretien & traitement",
    desc: "Contrats annuels ou à la séance. Analyse d'eau, équilibrage chimique, nettoyage complet pour une eau toujours cristalline.",
    price: "À partir de 49 €/mois",
  },
  {
    icon: Sparkles,
    title: "Rénovation",
    desc: "Remplacement de liner, margelles, carrelage. Mise aux normes sécurité. Embellissement de bassins existants.",
    price: "Sur devis",
  },
  {
    icon: Sun,
    title: "Terrasse & abords",
    desc: "Plage de piscine en pierre naturelle, bois composite ou béton désactivé. Clôtures et portillons de sécurité.",
    price: "Sur devis",
  },
  {
    icon: Thermometer,
    title: "Chauffage & pompe à chaleur",
    desc: "Installation de pompes à chaleur, couvertures solaires et systèmes de chauffage pour profiter de votre piscine 9 mois/an.",
    price: "À partir de 3 500 €",
  },
  {
    icon: Wifi,
    title: "Domotique & automatisation",
    desc: "Pilotez votre bassin depuis votre smartphone. Contrôle du pH, chlore, température et éclairage à distance.",
    price: "À partir de 1 800 €",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519046346009-6e5e9d5e3b06?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
];

const reviews = [
  {
    name: "Éric & Valérie T.",
    note: 5,
    text: "Villa Piscines a construit notre piscine en 8 semaines exactement comme promis. Le résultat est splendide, le suivi impeccable. On est ravis à 100%.",
    date: "Été 2024",
    projet: "Construction béton 10×5m",
  },
  {
    name: "Bernard M.",
    note: 5,
    text: "J'ai souscrit au contrat d'entretien annuel. L'équipe vient chaque semaine, l'eau est toujours parfaite. Un vrai service professionnel.",
    date: "2024",
    projet: "Entretien annuel",
  },
  {
    name: "Christelle R.",
    note: 5,
    text: "Rénovation complète de notre ancienne piscine. Nouveau liner, nouvelles margelles, pompe à chaleur installée. Le tout en moins de 3 semaines. Bravo !",
    date: "Printemps 2024",
    projet: "Rénovation complète",
  },
];

const faq = [
  {
    q: "Combien de temps dure la construction d'une piscine ?",
    a: "En moyenne 6 à 10 semaines pour une piscine béton standard. Une piscine à coque peut être installée en 2 à 3 semaines. Nous établissons un planning précis dès la signature du contrat.",
  },
  {
    q: "Quelle piscine choisir : béton ou coque ?",
    a: "La piscine en béton offre une liberté totale de forme et de taille, idéale pour les grands projets. La coque polyester est plus rapide à installer et nécessite moins d'entretien. Nous vous conseillons lors d'une visite gratuite.",
  },
  {
    q: "Proposez-vous un service d'hivernage ?",
    a: "Oui, nous assurons l'hivernage actif ou passif de votre piscine chaque automne, ainsi que la remise en route au printemps. Ces prestations peuvent être incluses dans un contrat d'entretien annuel.",
  },
];

export default function VillaPiscinesDemo() {
  return (
    <div className="overflow-x-hidden bg-white text-[#0c2e36]">
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
            <a href="#avis" className="hover:text-[#0aa3b8]">Avis</a>
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
            <div className="mt-12 grid grid-cols-3 gap-6 sm:flex sm:gap-10">
              {[
                ["200+", "piscines construites"],
                ["15 ans", "d'expertise"],
                ["4,9/5", "avis clients"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="text-3xl font-bold text-[#0aa3b8]">{v}</div>
                  <div className="text-sm text-white/60">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="border-b border-[#0c2e36]/8 bg-[#f3fbfc]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-6 py-8">
          {[
            { icon: Shield, text: "Membre PROPISCINES" },
            { icon: CheckCircle2, text: "Garantie décennale" },
            { icon: Waves, text: "Devis gratuit sous 48h" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-[#0c2e36]/70">
              <Icon size={16} className="text-[#0aa3b8]" />
              {text}
            </div>
          ))}
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
          <p className="mx-auto mt-4 max-w-xl text-[#0c2e36]/60">
            De la première ébauche à l&apos;entretien annuel, nous gérons tout pour que vous profitiez simplement de votre piscine.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
              <div className="mt-4 text-sm font-semibold text-[#0aa3b8]">{s.price}</div>
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
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {gallery.map((src, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl ${
                  i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <div className={`relative ${i === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
                  <Image
                    src={src}
                    alt="Réalisation de piscine"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold sm:text-5xl">Comment ça se passe ?</h2>
          <p className="mt-4 text-[#0c2e36]/60">De votre appel à la première baignade en 4 étapes.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "01", title: "Visite gratuite", desc: "Nous venons chez vous analyser le terrain et comprendre votre projet." },
            { step: "02", title: "Devis détaillé", desc: "Plans, matériaux et prix clairs remis sous 48h, sans engagement." },
            { step: "03", title: "Construction", desc: "Notre équipe intervient dans les délais convenus, sans mauvaise surprise." },
            { step: "04", title: "Mise en eau", desc: "Nous assurons la mise en eau, le traitement initial et vous formons à l'entretien." },
          ].map((s) => (
            <div key={s.step} className="relative rounded-2xl border border-[#0c2e36]/8 bg-[#f3fbfc] p-7">
              <div className="mb-4 text-4xl font-bold text-[#0aa3b8]/20">{s.step}</div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm font-light text-[#0c2e36]/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Avis */}
      <section id="avis" className="bg-[#f3fbfc] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0aa3b8]">
              Témoignages
            </p>
            <h2 className="text-4xl font-bold sm:text-5xl">
              Nos clients en parlent
            </h2>
            <div className="mt-4 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-[#0aa3b8] text-[#0aa3b8]" />
              ))}
              <span className="ml-2 text-sm text-[#0c2e36]/60">4,9 / 5 · Google</span>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl bg-white p-7 shadow-sm">
                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#0aa3b8]">{r.projet}</div>
                <div className="mb-4 flex gap-1">
                  {[...Array(r.note)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#0aa3b8] text-[#0aa3b8]" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-[#0c2e36]/80">&ldquo;{r.text}&rdquo;</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-semibold">{r.name}</span>
                  <span className="text-xs text-[#0c2e36]/40">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="mb-10 text-center text-3xl font-bold">Questions fréquentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <div key={f.q} className="rounded-2xl border border-[#0c2e36]/8 p-6">
              <h3 className="font-semibold text-[#0c2e36]">{f.q}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-[#0c2e36]/60">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Devis */}
      <section id="devis" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0aa3b8] to-[#06606e]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="text-white">
              <h2 className="text-4xl font-bold sm:text-5xl">
                Lancez votre projet piscine
              </h2>
              <p className="mt-5 text-lg font-light text-white/80">
                Recevez une étude personnalisée et un devis détaillé sous 48h,
                gratuitement et sans engagement.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Visite à domicile offerte",
                  "Plans et simulation 3D inclus",
                  "Devis sous 48h, sans engagement",
                  "Financement disponible",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 size={18} className="shrink-0 text-white" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
                <p className="mb-4 text-sm font-semibold text-white">Demande de devis gratuit</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Téléphone"
                    className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                  />
                  <select className="rounded-xl border border-white/20 bg-[#0a8fa1] px-4 py-3 text-sm text-white focus:border-white/40 focus:outline-none">
                    <option>Type de projet</option>
                    <option>Construction béton</option>
                    <option>Piscine à coque</option>
                    <option>Couloir de nage</option>
                    <option>Rénovation</option>
                    <option>Entretien</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Commune"
                    className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                  />
                </div>
                <button className="mt-4 w-full rounded-full bg-white py-3.5 text-sm font-semibold text-[#0aa3b8] transition-transform hover:scale-[1.02]">
                  Demander mon devis gratuit
                </button>
              </div>
              <a
                href="tel:+33450000000"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone size={16} /> 04 50 00 00 00
              </a>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-white">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={14} />
                  <span>Zone Industrielle, 74200 Thonon-les-Bains</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-white/80">
                  <Clock size={14} />
                  <span>Lun – Ven 8h – 18h · Sam 9h – 12h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#0c2e36]/10 py-10 text-center text-sm text-[#0c2e36]/50">
        Villa Piscines · Construction & entretien · Léman · Tous droits réservés
      </footer>
    </div>
  );
}
