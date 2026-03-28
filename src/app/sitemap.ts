import { MetadataRoute } from "next"
import { fetchPostsblogsPage, getCaseStudiesServer } from "@/helper"

export const revalidate = 3600

const baseUrl = "https://dev.moonstack.co"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ✅ Fetch API data
  let blogs: any[] = []
  let caseStudies: any[] = []

  try {
    const blogsResponse = await fetchPostsblogsPage(1, 100)
    if (blogsResponse && blogsResponse.data) {
      blogs = blogsResponse.data
    }
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error)
  }

  try {
    const caseStudiesResponse = await getCaseStudiesServer(1, 100)
    if (caseStudiesResponse && caseStudiesResponse.items) {
      caseStudies = caseStudiesResponse.items
    }
  } catch (error) {
    console.error("Error fetching case studies for sitemap:", error)
  }

  console.log("Blogs fetched for sitemap:", blogs.length)
  console.log("CaseStudies fetched for sitemap:", caseStudies.length)


  const staticUrls = [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/contact-us`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/about-us`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/industries`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/category/development`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/category/digital-marketing`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/category/app-development`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/category/consulting`, lastModified: new Date(), priority: 0.64 },
    { url: `${baseUrl}/category/ui-ux-design`, lastModified: new Date(), priority: 0.64 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/cookie-policy`, lastModified: new Date(), priority: 0.8 },
  ]

  const services = [
    "ai-agent-development-company",
    "android-app-development-company",
    "website-development-company",
    "reactjs-development-company",
    "ui-ux-designing-company",
    "ecommerce-website-development-company",
    "web-designing-company",
    "angularjs-development-company",
    "vuejs-development-company",
    "wordpress-website-development-company",
    "crm-development-company",
    "shopify-website-development-company",
    "mobile-app-development-company",
    "ios-app-development-company",
    "react-native-app-development-company",
    "mobile-app-maintenance-company",
    "pwa-development-company",
    "python-development-company",
    "search-engine-optimization-company",
    "product-designing-company",
    "cloud-company",
    "it-support-company",
    "full-stack-website-development-company",
    "laravel-website-development-company",
    "nodejs-development-company",
  ]

  const serviceUrls = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }))

  const blogUrls = blogs.map((blog: any) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.updated_date || blog.publish_date || blog.date || Date.now()),
    priority: 0.64,
  }))

  const caseStudyUrls = caseStudies.map((item: any) => ({
    url: `${baseUrl}/case-study/${item.slug}`,
    lastModified: new Date(item.updated_date || item.publish_date || item.date || Date.now()),
    priority: 0.64,
  }))

  return [...staticUrls, ...serviceUrls, ...blogUrls, ...caseStudyUrls]
}
