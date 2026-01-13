import localFont from "next/font/local";

export const gordita = localFont({
  src: [
    { path: "./Gordita-Light.woff2", weight: "300", style: "normal" },
    { path: "./Gordita-Regular.woff2", weight: "400", style: "normal" },
    { path: "./Gordita-Medium.woff2", weight: "500", style: "normal" },
    { path: "./Gordita-Medium.woff2", weight: "600", style: "normal" },
    { path: "./Gordita-Bold.woff2", weight: "700", style: "normal" },
    { path: "./Gordita-Black.woff2", weight: "900", style: "normal" },

    { path: "./Gordita-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "./Gordita-BlackItalic.woff2", weight: "900", style: "italic" },
  ],
  variable: "--font-gordita",
  display: "swap",
});
