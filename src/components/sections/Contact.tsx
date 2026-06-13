"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";
import { Calendar, MessageCircle, Mail, Send } from "lucide-react";
import Button from "@/components/ui/Button";

const channels = [
  {
    icon: Calendar,
    title: "Prendre rendez-vous",
    description: "Choisissez un créneau qui vous convient. 20 minutes suffisent.",
    cta: "Ouvrir Calendly",
    href: siteConfig.calendly,
    color: "text-[#1E3A5F]",
    bg: "bg-[#1E3A5F]/[0.06]",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Envoyez-nous un message directement. Réponse rapide garantie.",
    cta: "Écrire sur WhatsApp",
    href: siteConfig.whatsapp,
    color: "text-[#25D366]",
    bg: "bg-[#25D366]/10",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Vous préférez l'email ? Nous répondons sous 24 heures.",
    cta: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    color: "text-[#7A9B8E]",
    bg: "bg-[#7A9B8E]/12",
  },
];

const inputClass =
  "w-full rounded-xl border border-[#1E3A5F]/12 bg-[#FAFAF8] px-4 py-3 text-sm text-[#1E3A5F] placeholder-[#5F7285]/40 transition-all focus:border-[#1E3A5F]/30 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/15";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#1E3A5F]">
            Parlons de votre <span className="text-[#7A9B8E]">projet</span>.
          </h2>
          <p className="mt-4 text-lg font-light text-[#5F7285]">
            Quelques minutes suffisent pour découvrir ce que votre futur site
            pourrait devenir.
          </p>
        </div>

        {/* Channels */}
        <div className="mb-12 grid gap-6 md:grid-cols-3 lg:mb-16">
          {channels.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-3xl border border-[#1E3A5F]/8 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#1E3A5F]/15 hover:shadow-lg"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.bg}`}
              >
                <c.icon size={22} className={c.color} strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-[#1E3A5F]">
                {c.title}
              </h3>
              <p className="mt-2 flex-1 text-sm font-light leading-relaxed text-[#5F7285]">
                {c.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[#1E3A5F] group-hover:gap-2 transition-all">
                {c.cta} <span aria-hidden>→</span>
              </span>
            </a>
          ))}
        </div>

        {/* Form */}
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-[#1E3A5F]/8 bg-white p-7 sm:p-8">
            <h3 className="mb-6 text-xl font-semibold text-[#1E3A5F]">
              Envoyez-nous un message
            </h3>
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#7A9B8E]/12">
                  <Send size={24} className="text-[#7A9B8E]" />
                </div>
                <h4 className="text-xl font-semibold text-[#1E3A5F]">
                  Message envoyé !
                </h4>
                <p className="mt-2 font-light text-[#5F7285]">
                  Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-[#1E3A5F]"
                    >
                      Nom *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={update("name")}
                      className={inputClass}
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-1.5 block text-sm font-medium text-[#1E3A5F]"
                    >
                      Entreprise
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={update("company")}
                      className={inputClass}
                      placeholder="Mon Commerce"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-[#1E3A5F]"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={update("email")}
                      className={inputClass}
                      placeholder="jean@exemple.fr"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-[#1E3A5F]"
                    >
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={update("phone")}
                      className={inputClass}
                      placeholder="+33 6 00 00 00 00"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-[#1E3A5F]"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={update("message")}
                    className={`${inputClass} resize-none`}
                    placeholder="Décrivez votre activité et ce que vous recherchez..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Envoyer le message
                  <Send size={16} />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
