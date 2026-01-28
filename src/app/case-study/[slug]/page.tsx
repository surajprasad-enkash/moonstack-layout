import Layout from "@/components/Layout"
import CaseStudyPages from "@/components/CaseStudy/CaseStudySingle/CaseStudyPage"
import { getCaseStudy } from "@/helper"
import { Metadata } from "next"

interface PageProps {
  params: {
    slug: string
  }
}
interface SeoData {
  title: string
  description: string
  canonical?: string
  focus_keyword?: string
  robots?: string
  og?: {
    title?: string
    description?: string
    url?: string
    image?: string
  }
  twitter?: {
    title?: string
    description?: string
    image?: string
  }
}
interface CaseStudyPost {
  post: any
  seo?: SeoData
}
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = params
  const page = (await getCaseStudy(slug)) as CaseStudyPost | null
  if (!page?.seo) {
    return {
      title: "Blogs | Moonstack",
      description: "Moonstack blogs",
    }
  }

  const seo = page.seo

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.focus_keyword ? seo.focus_keyword.split(",") : [],
    alternates: {
      canonical: `/case-study/${slug}`,
    },

    // ✅ Open Graph (Facebook / LinkedIn)
    openGraph: {
      title: seo.og?.title || seo.title,
      description: seo.og?.description || seo.description,
      url: seo.og?.url || seo.canonical,
      siteName: "Moonstack",
      type: "article",
      images: seo.og?.image ? [{ url: seo.og.image }] : [],
    },

    // ✅ Twitter Card
    twitter: {
      card: "summary_large_image",
      title: seo.twitter?.title || seo.title,
      description: seo.twitter?.description || seo.description,
      images: seo.twitter?.image
        ? [seo.twitter.image]
        : seo.og?.image
          ? [seo.og.image]
          : [],
    },

    robots: seo.robots || undefined,
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
