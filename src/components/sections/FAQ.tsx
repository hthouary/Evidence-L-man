"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1E3A5F] leading-tight mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-[#5F7285] font-light">
            Tout ce que vous devez savoir avant de vous lancer.
          </p>
        </div>

        <div className="space-y-3">
          {siteConfig.faq.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAFAF8] rounded-2xl border border-[#1E3A5F]/6 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#1E3A5F]/3 transition-colors"
              >
                <span className="font-medium text-[#1E3A5F] pr-4">{item.question}</span>
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1E3A5F]/8 flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus size={14} className="text-[#1E3A5F]" />
                  ) : (
                    <Plus size={14} className="text-[#1E3A5F]" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-[#5F7285] leading-relaxed font-light">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
