import type { Metadata } from "next"
import { Libre_Baskerville } from "next/font/google"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./globals.css"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre",
  display: "swap",
})

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
}

import { gordita } from "@/lib/fonts"
import { VideoModalProvider } from "@/context/VideoModalContext"
import CookieConsent from "@/components/CookieConsent/CookieConsent"
// import ChatWidget from "@/components/ChatWidget/ChatWidget"

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
        <VideoModalProvider>{children}</VideoModalProvider>
        <CookieConsent />
        {/* <ChatWidget /> */}
      </body>
    </html>
  )
}
