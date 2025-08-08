import type { MetadataRoute } from "next";
import { LINKS } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["Googlebot", "Bingbot"],
        allow: "/",
        crawlDelay: 2,
      },
    ],
    sitemap: `${LINKS.DASHXBOARD_URL}/sitemap.xml`,
    host: LINKS.DASHXBOARD_URL,
  };
}
