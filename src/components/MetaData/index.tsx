import Head from "next/head";
import React from "react";

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  siteName?: string;
}

const Meta: React.FC<MetaProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  siteName = "Moonstack",
}) => {
  return (
    <Head>
      {/* TITLE */}
      {title && <title>{title}</title>}

      {/* META DESCRIPTION */}
      {description && <meta name="description" content={description} />}

      {/* META KEYWORDS */}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* CANONICAL URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* OPEN GRAPH TAGS */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />

      {/* TWITTER TAGS */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Head>
  );
};

export default Meta;
