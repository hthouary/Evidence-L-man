import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Bandeau agence */}
      <div className="sticky top-0 z-[100] border-b border-white/10 bg-[#1E3A5F] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
          <Link
            href="/#realisations"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">Retour aux réalisations</span>
            <span className="sm:hidden">Retour</span>
          </Link>
          <span className="inline-flex items-center gap-1.5 text-xs text-white/50">
            <Sparkles size={13} className="text-[#7A9B8E]" />
            Démo réalisée par{" "}
            <span className="font-semibold text-white">Évidence Léman</span>
          </span>
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-[#1E3A5F] transition-colors hover:bg-white/90"
          >
            <span className="hidden sm:inline">Je veux un site comme ça</span>
            <span className="sm:hidden">J&apos;en veux un</span>
          </a>
        </div>
      </div>
      {children}
    </div>
  );
}
