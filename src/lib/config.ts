export const siteConfig = {
  name: "Évidence Léman",
  tagline: "Vous méritez d'être trouvé, vu et choisi.",
  description:
    "Nous créons et gérons votre site internet de A à Z pour vous apporter plus de visibilité, plus de crédibilité et plus d'opportunités. Sans complexité technique, sans perte de temps.",
  url: "https://evidencelemanl.ch",
  email: "contact@evidencelemanl.ch",
  phone: "+33 6 00 00 00 00",
  whatsapp: "https://wa.me/33600000000",
  calendly: "https://calendly.com/hugo-thouary-digital",
  address: "Haute-Savoie, France",
  // Affiche / masque les canaux de contact. Passe à `true` pour réactiver.
  contactChannels: {
    calendly: true,
    whatsapp: false,
    email: false,
  },
  pricing: {
    setup: 199,
    monthly: 49,
    trial: 3,
    commitment: 12,
  },
  demos: [
    {
      id: "restaurant-leman",
      name: "Restaurant du Léman",
      type: "Restaurant",
      description:
        "Site élégant pour un restaurant avec menu, réservations et galerie photos.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
      url: "/demo/restaurant-leman" as string | null,
    },
    {
      id: "maison-horizon",
      name: "Maison Horizon",
      type: "Boutique locale",
      description:
        "Vitrine moderne pour une boutique avec catalogue produits et horaires.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
      url: "/demo/maison-horizon" as string | null,
    },
    {
      id: "leman-auto",
      name: "Léman Auto",
      type: "Garage",
      description:
        "Site professionnel pour un garage avec services et prise de rendez-vous.",
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80",
      url: "/demo/leman-auto" as string | null,
    },
    {
      id: "atelier-horizon",
      name: "Atelier Horizon",
      type: "Artisan",
      description:
        "Présentation soignée des réalisations et du savoir-faire artisanal.",
      image:
        "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80",
      url: "/demo/atelier-horizon" as string | null,
    },
    {
      id: "villa-piscines",
      name: "Villa Piscines",
      type: "Pisciniste",
      description:
        "Site premium pour un pisciniste avec galerie, services et devis en ligne.",
      image:
        "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=900&q=80",
      url: "/demo/villa-piscines" as string | null,
    },
  ],
  sectors: [
    "Restaurants",
    "Boutiques",
    "Coiffeurs",
    "Garages",
    "Artisans",
    "Piscinistes",
    "Paysagistes",
    "Cavistes",
    "Instituts",
    "Fleuristes",
  ],
  testimonials: [
    {
      quote:
        "En une semaine, j'avais un site magnifique et mes premières réservations en ligne. Je n'ai eu à m'occuper de rien.",
      name: "Camille Besson",
      role: "Restaurant du Léman, Évian",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote:
        "Mes clients me trouvent enfin sur Google et la boutique n'a jamais autant tourné. Un vrai changement.",
      name: "Sophie Marin",
      role: "Maison Horizon, Thonon",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote:
        "Le garage a doublé ses demandes de rendez-vous. Simple, rapide, et un interlocuteur unique qui gère tout.",
      name: "Thomas Roch",
      role: "Léman Auto, Annemasse",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
  ],
  faq: [
    {
      question: "Dois-je m'occuper de l'hébergement ?",
      answer:
        "Non, tout est inclus. Nous gérons l'hébergement de votre site de A à Z. Vous n'avez rien à configurer, rien à gérer.",
    },
    {
      question: "Dois-je acheter un nom de domaine ?",
      answer:
        "Non, le nom de domaine est inclus dans votre abonnement mensuel. Nous nous occupons de l'enregistrement et du renouvellement.",
    },
    {
      question: "Dois-je effectuer des mises à jour ?",
      answer:
        "Non, nous gérons toutes les mises à jour techniques. Votre site reste toujours sécurisé et performant sans que vous ayez à intervenir.",
    },
    {
      question: "Puis-je demander des modifications ?",
      answer:
        "Oui, les modifications mineures (textes, photos, horaires…) sont incluses dans votre abonnement mensuel. Il suffit de nous contacter.",
    },
    {
      question: "Combien de temps faut-il ?",
      answer:
        "En général, votre site est en ligne en 5 à 10 jours ouvrés après notre premier échange.",
    },
    {
      question: "Que se passe-t-il après les 3 mois d'essai ?",
      answer:
        "L'abonnement mensuel de 49 €/mois continue automatiquement. Vous pouvez résilier à tout moment en respectant un préavis d'un mois.",
    },
  ],
};
