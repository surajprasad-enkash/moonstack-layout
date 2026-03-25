import type { Metadata } from "next"
import { Libre_Baskerville } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre",
  display: "swap",
})

import { gordita } from "@/lib/fonts"
import { VideoModalProvider } from "@/context/VideoModalContext"
import CookieConsent from "@/components/CookieConsent/CookieConsent"
import { OrganizationSchema, WebSiteSchema } from "@/components/StructuredData"
import LeadPopup from "@/components/LeadPopup/LeadPopup"

export const metadata: Metadata = {
  title: {
    default: "Product Focused App & Web Development Company in India & USA",
    template: "%s | Moonstack",
  },
  description:
    "We're product-focused app and web development company in India. Moonstack’s senior engineers and designers help companies in building World class AI-powered full-stack development, UI/UX, SEO and ongoing support.",

  keywords: [
    "web development company India",
    "app development company India",
    "full stack development services",
    "AI powered development",
    "UI UX design agency",
    "SEO services company",
    "Next.js development company",
    "React development agency",
    "software development company USA",
    "Moonstack",
  ],

  alternates: {
    canonical: "/",
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

  authors: [
    {
      name: "Moonstack",
      url: "https://moonstack.co",
    },
  ],

  publisher: "Moonstack",

  openGraph: {
    title: "Product Focused App & Web Development Company",
    description:
      "AI-powered full-stack development, UI/UX, SEO and ongoing support.",
    url: "https://moonstack.co",
    siteName: "Moonstack",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Moonstack",
    description: "Product-focused AI-powered web & app development company.",
  },

  verification: {
    google: "mO3FlU4gORcou13wu6VRGRkrlWzuEggJ3mvWIv8KrD0",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={gordita.variable}>
      <body
        className={`font-sans antialiased ${libreBaskerville.variable} ${gordita.variable}`}
      >
        <OrganizationSchema />
        <WebSiteSchema />

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DK4DT1TB8W"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DK4DT1TB8W');
      `}
        </Script>

        <VideoModalProvider>{children}</VideoModalProvider>
        <CookieConsent />
        <LeadPopup />
      </body>
    </html>
  )
}
