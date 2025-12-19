import "@/styles/globals.css";
import "@/components/layout.styles.css";
import "@/colors/font.styles.css";
import "@/components/Homepage/homepage.styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../input.css";
import { Hanken_Grotesk } from "next/font/google";
import type { AppProps } from "next/app";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-hanken",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={hankenGrotesk.variable}>
      <Component {...pageProps} />
    </main>
  );
}
