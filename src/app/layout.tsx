import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Création de sites internet pour commerces locaux`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Création de sites internet professionnels pour restaurants, artisans, boutiques et PME en Haute-Savoie et sur le Léman. Hébergement, maintenance et support inclus.",
  keywords: [
    "création site internet Léman",
    "création site internet Haute-Savoie",
    "site vitrine Évian",
    "création site internet artisan",
    "création site internet restaurant",
    "création site internet commerce local",
    "agence web Haute-Savoie",
    "site internet PME locale",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    title: `${siteConfig.name} — Création de sites internet pour commerces locaux`,
    description:
      "Création de sites internet professionnels pour restaurants, artisans, boutiques et PME en Haute-Savoie et sur le Léman.",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Création de sites internet pour commerces locaux`,
    description:
      "Création de sites internet professionnels pour restaurants, artisans, boutiques et PME en Haute-Savoie et sur le Léman.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: siteConfig.name,
              description:
                "Création de sites internet professionnels pour commerces locaux en Haute-Savoie",
              url: siteConfig.url,
              telephone: siteConfig.phone,
              email: siteConfig.email,
              address: {
                "@type": "PostalAddress",
                addressRegion: "Haute-Savoie",
                addressCountry: "FR",
              },
              areaServed: ["Haute-Savoie", "Léman", "Évian", "Thonon", "Annecy"],
              serviceType: "Création de sites internet",
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
