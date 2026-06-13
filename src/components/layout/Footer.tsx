import { siteConfig } from "@/lib/config";
import { Mail, Calendar } from "lucide-react";

const navLinks = [
  { label: "Nos réalisations", href: "#realisations" },
  { label: "Comment ça marche", href: "#process" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1E3A5F] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <div className="text-white font-bold text-xl leading-tight">
                Évidence
              </div>
              <div className="relative inline-block mt-0.5">
                <div className="text-white/40 font-light text-xs tracking-[0.25em] uppercase">
                  Léman
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#7A9B8E]/40" />
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Création et gestion de sites internet pour commerces et entreprises
              locales en Haute-Savoie et sur le Léman.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-medium text-white/60 mb-4 text-xs uppercase tracking-[0.2em]">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white/80 transition-colors text-sm font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-white/60 mb-4 text-xs uppercase tracking-[0.2em]">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors text-sm font-light"
                >
                  <Calendar size={13} />
                  Prendre rendez-vous
                </a>
              </li>
              {siteConfig.contactChannels.email && (
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors text-sm font-light"
                  >
                    <Mail size={13} />
                    {siteConfig.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs font-light">
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits
            réservés.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/mentions-legales"
              className="text-white/25 hover:text-white/50 text-xs font-light transition-colors"
            >
              Mentions légales
            </a>
            <a
              href="/politique-de-confidentialite"
              className="text-white/25 hover:text-white/50 text-xs font-light transition-colors"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
