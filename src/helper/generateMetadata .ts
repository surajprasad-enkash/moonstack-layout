import type { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

export function buildMetadata({
  title,
  description,
  canonical,
  ogImage = "/opengraph-image.png",
}: SEOProps): Metadata {
  return {
    title,
    description,

    alternates: canonical
      ? {
          canonical,
        }
      : undefined,

    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Moonstack",
      type: "website",
      images: [
        {
          url: ogImage,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
