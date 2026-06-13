"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";
import { Calendar, MessageCircle, Mail, Send } from "lucide-react";
import Button from "@/components/ui/Button";

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

  const channels = [
    {
      icon: Calendar,
      title: "Prendre rendez-vous",
      description: "Choisissez un créneau qui vous convient. 20 minutes suffisent.",
      cta: "Ouvrir Calendly",
      href: siteConfig.calendly,
      color: "text-[#1E3A5F]",
      bg: "bg-[#1E3A5F]/6",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Envoyez-nous un message directement. Réponse rapide garantie.",
      cta: "Écrire sur WhatsApp",
      href: siteConfig.whatsapp,
      color: "text-[#25D366]",
      bg: "bg-[#25D366]/8",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Préférez-vous l'email ? Nous répondons sous 24h.",
      cta: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      color: "text-[#7A9B8E]",
      bg: "bg-[#7A9B8E]/10",
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1E3A5F] leading-tight mb-6">
            Parlons de votre{" "}
            <span className="text-[#7A9B8E]">projet</span>.
          </h2>
          <p className="text-lg text-[#5F7285] font-light">
            Quelques minutes suffisent pour découvrir ce que votre futur site pourrait devenir.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {channels.map((channel) => (
            <a
              key={channel.title}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-3xl p-8 border border-[#1E3A5F]/8 hover:border-[#1E3A5F]/15 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className={`w-12 h-12 ${channel.bg} rounded-xl flex items-center justify-center mb-6`}>
                <channel.icon size={22} className={channel.color} />
              </div>
              <h3 className="font-semibold text-[#1E3A5F] text-lg mb-2">{channel.title}</h3>
              <p className="text-[#5F7285] text-sm font-light leading-relaxed mb-6 flex-1">{channel.description}</p>
              <div className="text-sm font-medium text-[#1E3A5F] group-hover:underline">{channel.cta} →</div>
            </a>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl border border-[#1E3A5F]/8 p-8">
            <h3 className="text-xl font-semibold text-[#1E3A5F] mb-6">Envoyez-nous un message</h3>
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#7A9B8E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-[#7A9B8E]" />
                </div>
                <h4 className="font-semibold text-[#1E3A5F] text-lg mb-2">Message envoyé !</h4>
                <p className="text-[#5F7285] font-light">Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1E3A5F] mb-1.5">Nom *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#1E3A5F]/12 bg-[#FAFAF8] text-[#1E3A5F] placeholder-[#5F7285]/40 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20 focus:border-[#1E3A5F]/30 transition-all text-sm"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1E3A5F] mb-1.5">Entreprise</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#1E3A5F]/12 bg-[#FAFAF8] text-[#1E3A5F] placeholder-[#5F7285]/40 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20 focus:border-[#1E3A5F]/30 transition-all text-sm"
                      placeholder="Mon Commerce"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1E3A5F] mb-1.5">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#1E3A5F]/12 bg-[#FAFAF8] text-[#1E3A5F] placeholder-[#5F7285]/40 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20 focus:border-[#1E3A5F]/30 transition-all text-sm"
                      placeholder="jean@exemple.fr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1E3A5F] mb-1.5">Téléphone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#1E3A5F]/12 bg-[#FAFAF8] text-[#1E3A5F] placeholder-[#5F7285]/40 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20 focus:border-[#1E3A5F]/30 transition-all text-sm"
                      placeholder="+33 6 00 00 00 00"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1E3A5F] mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#1E3A5F]/12 bg-[#FAFAF8] text-[#1E3A5F] placeholder-[#5F7285]/40 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20 focus:border-[#1E3A5F]/30 transition-all text-sm resize-none"
                    placeholder="Décrivez votre activité et ce que vous recherchez..."
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
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
