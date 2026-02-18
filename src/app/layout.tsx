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
    default: "Moonstack - Digital Product Studio",
    template: "%s | Moonstack",
  },
  description: "We build scalable digital products.",
}

import { gordita } from "@/lib/fonts"
import { VideoModalProvider } from "@/context/VideoModalContext"
import CookieConsent from "@/components/CookieConsent/CookieConsent"
import ChatWidget from "@/components/ChatWidget/ChatWidget"

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
        <ChatWidget />
      </body>
    </html>
  )
}
