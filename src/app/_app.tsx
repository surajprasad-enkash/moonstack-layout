import "@/styles/globals.css";
import "@/components/layout.styles.css";
import "@/colors/font.styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../input.css";

import type { AppProps } from "next/app";
import { Libre_Baskerville } from "next/font/google";
import { gordita } from "@/lib/fonts";



/* LIBRE BASKERVILLE */
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={` ${libreBaskerville.variable} ${gordita.variable} `}
    >
      <Component {...pageProps} />
    </div>
  );
}
