"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#1E3A5F]">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-lg font-light text-[#5F7285]">
            Tout ce que vous devez savoir avant de vous lancer.
          </p>
        </div>

        <div className="space-y-3">
          {siteConfig.faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-[#1E3A5F]/8 bg-[#FAFAF8]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-[#1E3A5F]/[0.03] sm:p-6"
                >
                  <span className="font-medium leading-snug text-[#1E3A5F]">
                    {item.question}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1E3A5F]/8">
                    <ChevronDown
                      size={15}
                      className={cn(
                        "text-[#1E3A5F] transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm font-light leading-relaxed text-[#5F7285] sm:px-6 sm:pb-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
