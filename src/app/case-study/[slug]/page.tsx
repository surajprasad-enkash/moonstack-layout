import Layout from "@/components/Layout"
import CaseStudyPages from "@/components/CaseStudy/CaseStudySingle/CaseStudyPage"
import { getCaseStudy } from "@/helper"

interface PageProps {
  params: {
    slug: string
  }
}

async function CaseStudyPage({ params }: PageProps) {
  const { slug } = params
  const data = await getCaseStudy(slug)
  return (
    <Layout>
      <CaseStudyPages data={data} />
    </Layout>
  )
}
export default CaseStudyPage
