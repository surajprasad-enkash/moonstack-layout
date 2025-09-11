import "@/styles/globals.css";
import "@/components/layout.styles.css"
import "@/colors/font.styles.css"
import "@/components/Homepage/homepage.styles.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
