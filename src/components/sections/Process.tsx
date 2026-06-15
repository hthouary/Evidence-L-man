import { siteConfig } from "@/lib/config";

const steps = [
  {
    number: "01",
    title: "Nous échangeons sur votre activité",
    description:
      "Un appel de 20 minutes pour comprendre votre activité, vos besoins et vos objectifs. Aucune technicité requise.",
  },
  {
    number: "02",
    title: "Nous préparons votre futur site",
    description:
      "Notre équipe crée votre site sur mesure. Vous n'avez rien à faire, nous gérons tout de A à Z.",
  },
  {
    number: "03",
    title: "Vous validez les derniers détails",
    description:
      "Nous vous présentons le résultat et ajustons jusqu'à votre entière satisfaction.",
  },
  {
    number: "04",
    title: "Votre site est en ligne",
    description:
      "Votre site est publié, référencé et prêt à accueillir vos clients. En moyenne en 5 à 10 jours.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#1E3A5F]">
            Simple comme <span className="text-[#7A9B8E]">bonjour</span>.
          </h2>
          <p className="mt-4 text-lg font-light text-[#5F7285]">
            De l&apos;idée à la mise en ligne, en quatre étapes claires.
          </p>
        </div>

        <ol className="relative mx-auto max-w-2xl">
          {/* Vertical connector */}
          <div className="absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-[#1E3A5F]/15 via-[#1E3A5F]/15 to-transparent sm:left-6" />

          <div className="space-y-5">
            {steps.map((step) => (
              <li key={step.number} className="relative flex gap-5 sm:gap-7">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1E3A5F] text-sm font-semibold text-white shadow-md shadow-[#1E3A5F]/20 sm:h-12 sm:w-12">
                  {step.number}
                </div>
                <div className="flex-1 rounded-2xl border border-[#1E3A5F]/8 bg-[#FAFAF8] p-5 transition-all duration-300 hover:border-[#1E3A5F]/15 hover:shadow-md sm:p-6">
                  <h3 className="text-base font-semibold text-[#1E3A5F] sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm font-light leading-relaxed text-[#5F7285]">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </div>
        </ol>
        <div className="mt-12 text-center">
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#1E3A5F] px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Démarrer mon projet →
          </a>
        </div>
      </div>
    </section>
  );
}
