import { useRouter } from "next/router";
import Layout from "@/components/Layout";
// import CaseStudyPages from "@/components/CaseStudy/CaseStudySingle/CaseStudyPage";
import dynamic from "next/dynamic";
const CaseStudyPages = dynamic(() => import('@/components/CaseStudy/CaseStudySingle/CaseStudyPage'))

export default function CaseStudyPage() {
  const router = useRouter();

  // ⬇️ Extract slug safely
  const slug = router.query.slug as string | undefined;

  // ⛔ Prevent render until slug exists
  if (!slug) return null;

  return (
    <Layout>
      <CaseStudyPages
        slug={slug}
        apiKey="a9f3c8d4e21b7a0c9f0a1e3d8b7c6f7hyx67"
      />
    </Layout>
  );
}
