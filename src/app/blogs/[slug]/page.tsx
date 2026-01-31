import Layout from "@/components/Layout"
import SinglePostData from "@/components/SingleBlog/SingleBlogApi"
import { getPost } from "@/helper"
import { Metadata } from "next"
import { notFound } from "next/navigation"

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

interface BlogPost {
  post: any
  seo?: SeoData
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = params
  const page = (await getPost(slug)) as BlogPost | null
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
      canonical: `/blogs/${slug}`,
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
async function BlogDetailsPage({ params }: PageProps) {
  const { slug } = params
  const data = await getPost(slug)
  if (!data) {
    notFound()
  }
  return (
    <Layout>
      <SinglePostData post={data || undefined} />
    </Layout>
  )
}

export default BlogDetailsPage
