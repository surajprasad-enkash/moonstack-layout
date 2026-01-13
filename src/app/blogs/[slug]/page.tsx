import Layout from "@/components/Layout";
import SinglePostData from "@/components/SingleBlog/SingleBlogApi";

/* ===================== BLOG SLUG CONSTANTS ===================== */
/**
 * IMPORTANT:
 * With `output: "export"`, ALL blog slugs must be known at build time.
 * These should come from CMS at build-time or be hardcoded.
 */
export const BLOG_POST_SLUGS = [
  "google-core-update-june-2025-impact-insights-and-action-steps",
  "how-we-reduced-client-site-load-time-by-60-and-increased-conversions-18",
  "how-to-build-real-estate-app-from-scratch-step-by-step-guide",
  "online-payment-gateway-integration-a-detailed-guide-for-websites-and-apps",
  "how-ai-and-machine-learning-are-transforming-mobile-app-development-in-2025",
  "future-of-digital-marketing-careers-top-skills-strategies-to-dominate-in-2025",
  "what-is-react-native-0-79-speed-boosts-debugging-upgrades",
  "10-popular-web-design-trends-to-know-in-2025",
  "why-angular-is-a-game-changer-for-web-development",
  "p-10-best-cross-platform-app-development-frameworks-in-2025",
] as const;

/* ===================== STATIC PARAMS (REQUIRED) ===================== */
export function generateStaticParams() {
  return BLOG_POST_SLUGS.map((slug) => ({
    slug,
  }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

/* ===================== PAGE ===================== */
export default function BlogDetailsPage({ params }: PageProps) {
  const { slug } = params;

  // Safety guard (optional but recommended)
  if (!BLOG_POST_SLUGS.includes(slug as any)) {
    return (
      <Layout>
        <p className="p-10 text-center">Post not found</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <SinglePostData slug={slug} />
    </Layout>
  );
}
