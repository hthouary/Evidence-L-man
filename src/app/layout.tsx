import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import { Analytics } from "@vercel/analytics/next";

const BASE_URL = "https://evidencelemanl.ch";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Évidence Léman — Création de sites internet pour commerces locaux à Évian & Thonon",
    template: `%s | Évidence Léman`,
  },
  description:
    "Agence web locale : création de sites internet professionnels pour restaurants, artisans, boutiques, garages et PME à Évian, Thonon, Annemasse et sur le lac Léman. À partir de 199 € + 49 €/mois. Devis gratuit.",
  keywords: [
    "création site internet Évian",
    "création site internet Thonon-les-Bains",
    "agence web Léman",
    "agence web Haute-Savoie",
    "site vitrine commerce local",
    "création site internet artisan Haute-Savoie",
    "site internet restaurant Évian",
    "création site internet Annemasse",
    "agence web Annecy",
    "site internet PME Haute-Savoie",
    "création site vitrine 74",
    "site internet pas cher Haute-Savoie",
    "référencement local Google Évian",
    "site internet commerce Léman",
  ],
  authors: [{ name: "Évidence Léman", url: BASE_URL }],
  creator: "Évidence Léman",
  publisher: "Évidence Léman",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    title: "Évidence Léman — Sites internet pour commerces locaux à Évian & Thonon",
    description:
      "Création de sites internet professionnels pour restaurants, artisans, boutiques et PME à Évian, Thonon et sur le lac Léman. À partir de 199 € + 49 €/mois.",
    siteName: "Évidence Léman",
  },
  twitter: {
    card: "summary_large_image",
    title: "Évidence Léman — Sites internet pour commerces locaux",
    description:
      "Création de sites internet pour restaurants, artisans et boutiques à Évian, Thonon et sur le Léman.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: siteConfig.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Évidence Léman",
  alternateName: "Evidence Leman",
  description:
    "Agence web spécialisée dans la création de sites internet professionnels pour commerces locaux, restaurants, artisans, boutiques et PME en Haute-Savoie et sur le lac Léman.",
  url: BASE_URL,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Virement bancaire, carte bancaire",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Évian-les-Bains",
    addressRegion: "Haute-Savoie",
    postalCode: "74500",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "City", name: "Évian-les-Bains" },
    { "@type": "City", name: "Thonon-les-Bains" },
    { "@type": "City", name: "Annemasse" },
    { "@type": "City", name: "Annecy" },
    { "@type": "City", name: "Cluses" },
    { "@type": "AdministrativeArea", name: "Haute-Savoie" },
    { "@type": "AdministrativeArea", name: "Lac Léman" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Création de sites internet",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Création de site vitrine",
        description: "Conception et mise en ligne d'un site vitrine professionnel",
        price: "199",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "199",
          priceCurrency: "EUR",
          description: "Frais de mise en place unique",
        },
      },
      {
        "@type": "Offer",
        name: "Abonnement maintenance & hébergement",
        description: "Hébergement, maintenance, sécurité, support et mises à jour incluses",
        price: "49",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "49",
          priceCurrency: "EUR",
          billingDuration: "P1M",
          description: "Par mois, après 3 mois d'essai gratuit",
        },
      },
    ],
  },
  sameAs: [
    `https://calendly.com/hugo-thouary-digital`,
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="antialiased">
          {children}
          <Analytics />
        </body>
    </html>
  );
}
