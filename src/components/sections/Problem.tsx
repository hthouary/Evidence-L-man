import { AlertCircle, TrendingDown, Clock } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Introuvable sur Google",
    description:
      "Sans site web, vous n'existez pas pour la majorité des personnes qui cherchent vos services en ligne.",
  },
  {
    icon: TrendingDown,
    title: "Crédibilité réduite",
    description:
      "Un manque de présence en ligne ou un site obsolète peut faire douter vos clients potentiels de votre sérieux.",
  },
  {
    icon: Clock,
    title: "Opportunités manquées",
    description:
      "Chaque jour sans site web, ce sont des clients qui vont chez vos concurrents qui, eux, sont visibles.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1E3A5F] leading-tight mb-6">
            Aujourd&apos;hui, l&apos;absence de site web peut vous faire{" "}
            <span className="text-[#5F7285]">perdre des clients</span>.
          </h2>
          <p className="text-lg text-[#5F7285] leading-relaxed font-light">
            Lorsqu&apos;une personne entend parler de vous, son premier réflexe
            est souvent de vous rechercher sur Internet. Si elle ne trouve rien,
            ou si votre présence en ligne ne reflète pas la qualité de votre
            travail, vous risquez de perdre sa confiance avant même le premier
            contact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group bg-white rounded-2xl p-8 border border-[#1E3A5F]/8 hover:border-[#1E3A5F]/15 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1E3A5F]/6 flex items-center justify-center mb-6 group-hover:bg-[#1E3A5F]/10 transition-colors">
                <problem.icon
                  size={22}
                  className="text-[#1E3A5F]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">
                {problem.title}
              </h3>
              <p className="text-[#5F7285] leading-relaxed text-sm font-light">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
