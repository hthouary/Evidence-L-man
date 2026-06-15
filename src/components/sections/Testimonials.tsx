import { siteConfig } from "@/lib/config";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-[#7A9B8E]">
            Ils nous font confiance
          </span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#1E3A5F] sm:text-4xl lg:text-5xl">
            Des commerçants qui ont retrouvé{" "}
            <span className="text-[#7A9B8E]">leur visibilité</span>.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {siteConfig.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl border border-[#1E3A5F]/8 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Quote
                  size={28}
                  className="mb-4 text-[#7A9B8E]/40"
                  strokeWidth={1.5}
                />
                <div className="mb-4 flex items-center gap-0.5 text-[#f5a623]">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} className="fill-current" />
                  ))}
                </div>
                <blockquote className="flex-1 text-[15px] font-light leading-relaxed text-[#1E3A5F]">
                  « {t.quote} »
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-[#1E3A5F]/8 pt-5">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-semibold text-[#1E3A5F]">
                      {t.name}
                    </div>
                    <div className="text-xs text-[#5F7285]">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#1E3A5F] px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Rejoindre nos clients satisfaits →
          </a>
        </div>
      </div>
    </section>
  );
}
