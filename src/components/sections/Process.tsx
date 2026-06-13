const steps = [
  {
    number: "01",
    title: "Nous échangeons sur votre activité",
    description: "Un appel de 20 minutes pour comprendre votre activité, vos besoins et vos objectifs. Aucune technicité requise.",
  },
  {
    number: "02",
    title: "Nous préparons votre futur site",
    description: "Notre équipe crée votre site sur mesure. Vous n'avez rien à faire, nous gérons tout de A à Z.",
  },
  {
    number: "03",
    title: "Vous validez les derniers détails",
    description: "Nous vous présentons le résultat. Vous demandez les ajustements si nécessaire. Jusqu'à votre satisfaction complète.",
  },
  {
    number: "04",
    title: "Votre site est en ligne",
    description: "Votre site est publié, référencé et prêt à accueillir vos clients. En moyenne en 5 à 10 jours.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1E3A5F] leading-tight mb-4">
            Simple comme{" "}
            <span className="text-[#7A9B8E]">bonjour</span>.
          </h2>
          <p className="text-lg text-[#5F7285] font-light">
            De l&apos;idée à la mise en ligne en quelques étapes.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-[#1E3A5F]/8 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 0 ? "" : "lg:rtl"}`}
              >
                <div className={`lg:ltr ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className={`bg-white rounded-3xl p-8 border border-[#1E3A5F]/8 hover:border-[#1E3A5F]/15 hover:shadow-lg transition-all duration-300 ${index % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                    <div className="text-6xl font-bold text-[#1E3A5F]/8 font-mono mb-4">{step.number}</div>
                    <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">{step.title}</h3>
                    <p className="text-[#5F7285] leading-relaxed font-light">{step.description}</p>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center">
                  <div className="relative z-10 w-14 h-14 rounded-full bg-[#1E3A5F] text-white font-bold flex items-center justify-center text-sm shadow-lg">
                    {step.number}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
