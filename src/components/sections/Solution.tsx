import { Eye, Shield, Zap } from "lucide-react";

const solutions = [
  {
    icon: Eye,
    title: "Plus de visibilité",
    description:
      "Soyez présent lorsque vos futurs clients vous recherchent. Apparaissez sur Google, Maps et les réseaux sociaux.",
    gradient: "from-[#1E3A5F]/8 to-[#1E3A5F]/3",
    iconColor: "text-[#1E3A5F]",
    iconBg: "bg-[#1E3A5F]/10",
    num: "01",
  },
  {
    icon: Shield,
    title: "Plus de crédibilité",
    description:
      "Un site moderne inspire confiance dès les premières secondes. Montrez le meilleur de votre activité.",
    gradient: "from-[#7A9B8E]/10 to-[#7A9B8E]/3",
    iconColor: "text-[#7A9B8E]",
    iconBg: "bg-[#7A9B8E]/12",
    num: "02",
  },
  {
    icon: Zap,
    title: "Plus de simplicité",
    description:
      "Nous nous occupons de tout. Vous restez concentré sur votre activité, sans aucune contrainte technique.",
    gradient: "from-[#5F7285]/8 to-[#5F7285]/3",
    iconColor: "text-[#5F7285]",
    iconBg: "bg-[#5F7285]/10",
    num: "03",
  },
];

export default function Solution() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1E3A5F] leading-tight mb-6">
            Une présence en ligne simple,{" "}
            <span className="text-[#7A9B8E]">efficace</span> et sans
            contraintes.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((s) => (
            <div
              key={s.title}
              className={`relative rounded-3xl p-10 bg-gradient-to-br ${s.gradient} border border-[#1E3A5F]/6 hover:border-[#1E3A5F]/12 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg`}
            >
              <div
                className={`w-14 h-14 ${s.iconBg} rounded-2xl flex items-center justify-center mb-8`}
              >
                <s.icon size={26} className={s.iconColor} strokeWidth={1.5} />
              </div>
              <div className="absolute top-6 right-6 text-5xl font-bold text-[#1E3A5F]/6 font-mono select-none">
                {s.num}
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">
                {s.title}
              </h3>
              <p className="text-[#5F7285] leading-relaxed font-light">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 lg:p-12 bg-[#1E3A5F] rounded-3xl text-center">
          <p className="text-xl lg:text-2xl text-white/90 font-light leading-relaxed">
            <span className="text-[#7A9B8E] font-semibold">Notre promesse :</span>{" "}
            Vous vous occupez de votre activité.{" "}
            <span className="text-white font-semibold">
              Nous nous occupons du reste.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
