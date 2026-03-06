import Layout from "@/components/Layout"
import SinglePostData from "@/components/SingleBlog/SingleBlogApi"
import { getPost } from "@/helper"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import OgImageIcon from "@/assets/ogImage.svg"

interface PageProps {
  params: Promise<{
    slug: string
  }>
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

/* =========================
   SEO Metadata
========================= */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params

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
      canonical: seo.canonical || `/blogs/${slug}`,
    },

    /* Open Graph */
    openGraph: {
      title: seo.og?.title || seo.title,
      description: seo.og?.description || seo.description,
      url: seo.og?.url || seo.canonical || `/blogs/${slug}`,
      siteName: "Moonstack",
      type: "article",
      images: [{ url: seo.og?.image || OgImageIcon.src }],
    },

    /* Twitter */
    twitter: {
      card: "summary_large_image",
      title: seo.twitter?.title || seo.title,
      description: seo.twitter?.description || seo.description,
      images: seo.twitter?.image
        ? [seo.twitter.image]
        : seo.og?.image
          ? [seo.og.image]
          : [OgImageIcon.src],
    },

    robots: seo.robots || undefined,
  }
}

/* =========================
   Page
========================= */

async function BlogDetailsPage({ params }: PageProps) {
  const { slug } = await params

  const data = await getPost(slug)

  if (!data) {
    notFound()
  }

  return (
    <Layout>
      <SinglePostData post={data} />
    </Layout>
  )
}

export default BlogDetailsPage
