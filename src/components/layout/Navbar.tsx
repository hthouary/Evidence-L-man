"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/config";
import Button from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Réalisations", href: "#realisations" },
  { label: "Process", href: "#process" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5 group shrink-0">
      <span className="text-[#1E3A5F] font-semibold text-base tracking-tight">
        Évidence
      </span>
      <span className="h-4 w-px bg-[#7A9B8E]/50" aria-hidden />
      <span className="text-[#5F7285] font-light text-sm tracking-[0.15em] uppercase">
        Léman
      </span>
    </a>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#FAFAF8]/85 backdrop-blur-xl border-b border-[#1E3A5F]/8"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#5F7285] transition-colors hover:text-[#1E3A5F]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2.5">
            <Button
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="sm"
            >
              WhatsApp
            </Button>
            <Button
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
            >
              Rendez-vous
            </Button>
          </div>

          <button
            className="md:hidden -mr-2 p-2 text-[#1E3A5F]"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-[#1E3A5F]/8 bg-[#FAFAF8] transition-all duration-300",
          isMenuOpen ? "max-h-[480px]" : "max-h-0 border-transparent"
        )}
      >
        <div className="mx-auto max-w-6xl px-5 py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="py-3 text-[15px] font-medium text-[#1E3A5F] border-b border-[#1E3A5F]/6"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <Button
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              className="w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              WhatsApp
            </Button>
            <Button
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Prendre rendez-vous
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
