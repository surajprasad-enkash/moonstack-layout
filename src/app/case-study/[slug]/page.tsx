import Layout from "@/components/Layout";
import CaseStudyPages from "@/components/CaseStudy/CaseStudySingle/CaseStudyPage";

/* ===================== CONSTANTS ===================== */
/**
 * IMPORTANT:
 * All slugs MUST be known at build time.
 * Move this to a constants file if you prefer.
 */
const CASE_STUDY_SLUGS = [
  "accord",
  "avila-restaurants",
  "avila-bbq-grills",
  "rueil-formation-routiere",
];

/* ===================== STATIC PARAMS ===================== */
export function generateStaticParams() {
  return CASE_STUDY_SLUGS.map((slug) => ({
    slug,
  }));
}

/* ===================== PAGE ===================== */
interface PageProps {
  params: {
    slug: string;
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  return (
    <Layout>
      <CaseStudyPages
        slug={params.slug}
        apiKey="a9f3c8d4e21b7a0c9f0a1e3d8b7c6f7hyx67"
      />
    </Layout>
  );
}
