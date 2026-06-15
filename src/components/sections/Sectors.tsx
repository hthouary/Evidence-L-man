import { siteConfig } from "@/lib/config";

// 4 copies → animation at -25% = exactly 1 copy scrolled → seamless on any screen width
const base = siteConfig.sectors;
const items = [...base, ...base, ...base, ...base];

export default function Sectors() {
  return (
    <section className="border-y border-[#1E3A5F]/8 bg-white py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-sm font-medium uppercase tracking-[0.18em] text-[#5F7285]">
          Conçu pour les commerces qui font vivre nos villes
        </p>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-3">
          {items.map((sector, i) => (
            <span
              key={`${sector}-${i}`}
              className="whitespace-nowrap rounded-full border border-[#1E3A5F]/10 bg-[#FAFAF8] px-5 py-2 text-sm font-medium text-[#1E3A5F]"
            >
              {sector}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
