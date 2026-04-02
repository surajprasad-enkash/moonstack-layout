import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/wp-admin/",
          "/wp-login.php",
          "/wp-register.php",
          "/wp-cron.php",
          "/xmlrpc.php",
          "/wp-json/",
          "/privacy-policy/",
          "/terms-and-conditions/",
          "/thank-you/",
          "/404/",
        ],
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "anthropic-ai", "Claude-Web"],
        allow: "/",
      },
    ],
    sitemap: "https://moonstack.co/sitemap.xml",
  }
}
