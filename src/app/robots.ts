import { MetadataRoute } from "next";

const BASE_URL = "https://evidencelemanl.ch";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Exclure les pages démo de l'indexation Google
        disallow: ["/demo/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
