"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/config";
import Button from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Nos réalisations", href: "#realisations" },
  { label: "Comment ça marche", href: "#process" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[#1E3A5F]/8 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center group">
            <div className="flex flex-col">
              <span className="text-[#1E3A5F] font-bold text-lg leading-tight tracking-tight">
                Évidence
              </span>
              <div className="relative">
                <span className="text-[#5F7285] font-light text-xs leading-tight tracking-[0.2em] uppercase">
                  Léman
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#7A9B8E]/40 group-hover:bg-[#7A9B8E] transition-colors duration-300" />
              </div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#5F7285] hover:text-[#1E3A5F] transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                WhatsApp
              </Button>
            </a>
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm">Prendre rendez-vous</Button>
            </a>
          </div>

          <button
            className="md:hidden p-2 text-[#1E3A5F]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#1E3A5F]/8">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[#5F7285] hover:text-[#1E3A5F] font-medium py-2 border-b border-[#1E3A5F]/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">
                  WhatsApp
                </Button>
              </a>
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full">Prendre rendez-vous</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
