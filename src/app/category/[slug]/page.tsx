import Layout from "@/components/Layout"
import bgImage from "@/assets/blogs/blogPageNewBg.svg"
import Image from "next/image"
import ProjectCTA from "@/components/ProjectCTA/ProjectCTA"
import Link from "next/link"
import { HiArrowRight } from "react-icons/hi"
import CategoryList from "@/components/CategoryList/CategoryList"
import Breadcrumb from "@/components/Breadcrumb"
import { fetchPostsByCategory } from "@/helper"
import { IPostsByCategoryResponse } from "@/types/blog"
import CategoryPostsClient from "@/components/CategoryPosts/CategoryPostsClient"
import { notFound } from "next/navigation"

/* Utility */
const formatCategoryName = (slug: string) =>
  slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())

export default async function CategoryPage({
  params,
}: {
  params: { slug: string }
}) {
  const page = 1
  const data = (await fetchPostsByCategory(
    params.slug,
    page
  )) as IPostsByCategoryResponse
  const categoryName = data?.category?.name || formatCategoryName(params.slug)
  if (!data) {
    notFound()
  }
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blogs" },
    { label: categoryName, href: "" },
  ]

  return (
    <Layout>
      {/* Top BG */}
      <div className="z-[1] px-[20px] pt-[160px]">
        <Image
          src={bgImage}
          alt="Background"
          className="absolute top-[-100px] right-0 z-[1] w-[70%]"
          priority
        />
      </div>

      <section className="relative z-[3] px-[20px] pb-[20] md:pb-[80px]">
        <div className="container">
          <div className="mb-[40px] md:pl-[15px]">
            <Breadcrumb items={breadcrumbs} />
          </div>

          <div className="gap-[20px] md:flex">
            {/* SIDEBAR */}
            <div className="md:w-[250px]">
              <div className="sticky top-[105px]">
                <CategoryList
                  ShowAll={true}
                  classNames="p-0 "
                  showLabel={false}
                />

                <div className="exploreMore">
                  <span className="block py-[20px] text-[12px] text-[#fff]/50 uppercase md:pl-[10px]">
                    Explore More
                  </span>

                  <ul>
                    <li>
                      <Link
                        href="/about-us"
                        className="mb-[10px] flex justify-between rounded-[10px] py-2 text-sm text-white backdrop-blur-md hover:text-[#00ea52] md:px-4"
                      >
                        About Us <HiArrowRight className="text-xl" />
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/case-study"
                        className="mb-[10px] flex justify-between rounded-[10px] py-2 text-sm text-white backdrop-blur-md hover:text-[#00ea52] md:px-4"
                      >
                        Case Study <HiArrowRight className="text-xl" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="md:w-[calc(100%-250px)]">
              <CategoryPostsClient
                initialPosts={data?.data || []}
                categoryName={data.category.name}
                slug={data.category.slug}
                totalPages={data?.pagination?.total_pages || 1}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="relative overflow-hidden pb-[00px] md:pb-[100px]">
        <Image
          src={bgImage}
          alt="Background"
          className="absolute top-[50px] left-[-10%] z-[1] min-w-[115%]"
        />

        <div className="relative z-[2]">
          <ProjectCTA
            title="Ready to Scale"
            subtitle="Your Business?"
            description="Book a free consultation to get clarity, direction, and expert advice you can implement right away."
            fontSize="md:!text-[80px] !text-[40px] !leading-[130%]"
            marginBottom="mb-0"
          />
        </div>
      </div>
    </Layout>
  )
}
