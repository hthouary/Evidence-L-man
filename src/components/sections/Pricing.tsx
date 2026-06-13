import { siteConfig } from "@/lib/config";
import { Check, ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";

const features = [
  "Hébergement professionnel",
  "Nom de domaine (.fr ou .com)",
  "Maintenance et sécurité",
  "Sauvegardes quotidiennes",
  "Modifications mineures incluses",
  "Support par téléphone et email",
  "Certificat SSL (https)",
  "Référencement local (SEO)",
];

export default function Pricing() {
  return (
    <section id="tarifs" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1E3A5F] leading-tight mb-6">
            Une solution claire et{" "}
            <span className="text-[#7A9B8E]">accessible</span>.
          </h2>
          <p className="text-lg text-[#5F7285] font-light">
            Pas de surprises. Pas de coûts cachés. Une transparence totale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 border border-[#1E3A5F]/8 flex flex-col">
            <div className="mb-8">
              <div className="text-sm font-medium text-[#5F7285] uppercase tracking-widest mb-3">Mise en place</div>
              <div className="flex items-end gap-2">
                <span className="text-6xl font-bold text-[#1E3A5F]">{siteConfig.pricing.setup}€</span>
              </div>
              <p className="text-[#5F7285] mt-3 font-light">
                Frais uniques pour la création et la configuration complète de votre site.
              </p>
            </div>
            <div className="space-y-3 flex-1">
              {["Conception sur mesure", "Intégration de vos contenus", "Configuration du référencement", "Mise en ligne"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#7A9B8E]/15 flex items-center justify-center flex-shrink-0">
                    <Check size={11} className="text-[#7A9B8E]" />
                  </div>
                  <span className="text-[#5F7285] text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative bg-[#1E3A5F] rounded-3xl p-8 flex flex-col overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="flex items-start justify-between mb-6">
                <div className="text-sm font-medium text-white/50 uppercase tracking-widest">Abonnement</div>
                <Badge variant="success">3 mois offerts</Badge>
              </div>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-6xl font-bold text-white">{siteConfig.pricing.monthly}€</span>
                <span className="text-white/50 mb-3">/mois</span>
              </div>
              <p className="text-white/50 mb-8 font-light text-sm">
                Engagement {siteConfig.pricing.commitment} mois. Résiliable avec préavis d&apos;un mois.
              </p>
              <div className="space-y-3 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Check size={11} className="text-[#7A9B8E]" />
                    </div>
                    <span className="text-white/80 text-sm font-light">{feature}</span>
                  </div>
                ))}
              </div>
              <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="block">
                <button className="w-full bg-white text-[#1E3A5F] font-semibold py-4 rounded-2xl hover:bg-[#FAFAF8] transition-colors flex items-center justify-center gap-2 group">
                  Commencer maintenant
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-[#5F7285]/60 mt-8 font-light">
          Tous les prix sont HT. TVA applicable selon votre régime fiscal.
        </p>
      </div>
    </section>
  );
}
