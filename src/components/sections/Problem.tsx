import { Search, TrendingDown, Clock } from "lucide-react";

const problems = [
  {
    icon: Search,
    title: "Introuvable sur Google",
    description:
      "Sans site web, vous n'existez pas pour la majorité des personnes qui cherchent vos services en ligne.",
  },
  {
    icon: TrendingDown,
    title: "Crédibilité réduite",
    description:
      "Un manque de présence en ligne, ou un site obsolète, peut faire douter vos clients potentiels de votre sérieux.",
  },
  {
    icon: Clock,
    title: "Opportunités manquées",
    description:
      "Chaque jour sans site web, ce sont des clients qui vont chez des concurrents qui, eux, sont visibles.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#1E3A5F]">
            Aujourd&apos;hui, l&apos;absence de site web peut vous faire{" "}
            <span className="text-[#5F7285]">perdre des clients</span>.
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-[#5F7285]">
            Lorsqu&apos;une personne entend parler de vous, son premier réflexe
            est souvent de vous rechercher sur Internet. Si elle ne trouve rien,
            ou si votre présence en ligne ne reflète pas la qualité de votre
            travail, vous risquez de perdre sa confiance avant même le premier
            contact.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className="group rounded-3xl border border-[#1E3A5F]/8 bg-white p-8 transition-all duration-300 hover:border-[#1E3A5F]/15 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E3A5F]/[0.06] transition-colors group-hover:bg-[#1E3A5F]/10">
                <p.icon size={22} className="text-[#1E3A5F]" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-[#1E3A5F]">
                {p.title}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-[#5F7285]">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
