import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/thank-you/"],
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "anthropic-ai", "Claude-Web"],
        allow: "/",
      },
    ],
    sitemap: "https://moonstack.co/sitemap.xml",
  }
}
