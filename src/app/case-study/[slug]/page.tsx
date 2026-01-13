import Layout from "@/components/Layout";
import CaseStudyPages from "@/components/CaseStudy/CaseStudySingle/CaseStudyPage";

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
