import { Eye, Shield, Sparkles } from "lucide-react";

const solutions = [
  {
    icon: Eye,
    num: "01",
    title: "Plus de visibilité",
    description:
      "Soyez présent lorsque vos futurs clients vous recherchent. Apparaissez sur Google, Maps et les réseaux sociaux.",
    iconColor: "text-[#1E3A5F]",
    iconBg: "bg-[#1E3A5F]/10",
  },
  {
    icon: Shield,
    num: "02",
    title: "Plus de crédibilité",
    description:
      "Un site moderne inspire confiance dès les premières secondes. Montrez le meilleur de votre activité.",
    iconColor: "text-[#7A9B8E]",
    iconBg: "bg-[#7A9B8E]/15",
  },
  {
    icon: Sparkles,
    num: "03",
    title: "Plus de simplicité",
    description:
      "Nous nous occupons de tout. Vous restez concentré sur votre activité, sans aucune contrainte technique.",
    iconColor: "text-[#5F7285]",
    iconBg: "bg-[#5F7285]/12",
  },
];

export default function Solution() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#1E3A5F]">
            Une présence en ligne simple,{" "}
            <span className="text-[#7A9B8E]">efficace</span> et sans
            contraintes.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border border-[#1E3A5F]/8 bg-[#FAFAF8] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#1E3A5F]/15 hover:shadow-lg lg:p-10"
            >
              <span className="pointer-events-none absolute right-6 top-5 select-none font-mono text-5xl font-bold text-[#1E3A5F]/[0.06]">
                {s.num}
              </span>
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${s.iconBg}`}
              >
                <s.icon size={26} className={s.iconColor} strokeWidth={1.5} />
              </div>
              <h3 className="mt-7 text-xl font-bold text-[#1E3A5F] sm:text-2xl">
                {s.title}
              </h3>
              <p className="mt-3 font-light leading-relaxed text-[#5F7285]">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-[#1E3A5F] px-6 py-10 text-center lg:mt-16 lg:py-12">
          <p className="mx-auto max-w-3xl text-xl font-light leading-relaxed text-white/90 lg:text-2xl">
            <span className="font-semibold text-[#7A9B8E]">
              Notre promesse&nbsp;:
            </span>{" "}
            Vous vous occupez de votre activité.{" "}
            <span className="font-semibold text-white">
              Nous nous occupons du reste.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
