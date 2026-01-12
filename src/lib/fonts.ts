import localFont from "next/font/local";

export const gordita = localFont({
  src: [
    { path: "../../public/fonts/Gordita-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/Gordita-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Gordita-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Gordita-Medium.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/Gordita-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/Gordita-Black.woff2", weight: "900", style: "normal" },

    { path: "../../public/fonts/Gordita-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../../public/fonts/Gordita-BlackItalic.woff2", weight: "900", style: "italic" },
  ],
  variable: "--font-gordita",
  display: "swap",
});
