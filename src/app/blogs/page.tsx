import Layout from "@/components/Layout"
import bgImage from "@/assets/blogs/blogPageNewBg.svg"
import bgImage2 from "@/assets/blogs/ready-to-scale-bg.svg"
import Image from "next/image"
import BlogInsightsSection from "@/components/NewHomePage/BlogInsightsSection"
import CategoryList from "@/components/CategoryList/CategoryList"
import Link from "next/link"
import { HiArrowRight } from "react-icons/hi"
import Breadcrumb from "@/components/Breadcrumb"
import Heading from "@/components/Heading/Heading"
import ProjectCTA from "@/components/ProjectCTA/ProjectCTA"
import { Metadata } from "next"
import { buildMetadata } from "@/helper/generateMetadata "
import OgImageIcon from "@/assets/ogImage.svg"

/* ================= META ================= */

export const generateMetadata = (): Metadata => {
  return buildMetadata({
    title: "Moonstack Blog | AI, App & Web Development News & Blogs",
    description:
      "Explore the latest AI and tech insights, news, and blog posts on web and mobile app development from the Moonstack team.",
    canonical: "https://www.moonstack.com/blogs",
    ogImage: OgImageIcon.src,
  })
}

export const dynamic = "force-dynamic"

/* ================= PAGE ================= */

export default function BlogsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blogs" },
  ]

  return (
    <Layout>
      {/* TOP BG */}
      <div className="px-[20px] pt-[160px]">
        <Image
          src={bgImage}
          alt="Background"
          className="absolute top-[-100px] right-0 z-[1] w-[70%]"
          priority
        />
      </div>

      {/* CONTENT */}
      <section className="ms:px-[20px] relative z-[2] pb-[30px] md:pb-[80px]">
        <div className="container">
          <div className="mb-[40px] pl-[15px]">
            <Breadcrumb items={breadcrumbs} />
          </div>

          <div className="gap-[20px] md:flex">
            {/* LEFT SIDEBAR */}
            <div className="px-[20px] md:w-[250px] md:px-[0px]">
              <div className="sticky top-[105px]">
                <CategoryList
                  ShowAll={true}
                  classNames="p-0 "
                  showLabel={false}
                />

                <div className="exploreMore">
                  <span className="block py-[20px] pl-[0px] text-[12px] text-[#fff]/50 uppercase md:pl-[10px]">
                    Explore More
                  </span>

                  <ul>
                    <li>
                      <Link
                        href="/about-us"
                        className="mb-[10px] flex justify-between rounded-[10px] py-2 text-sm text-white backdrop-blur-md transition hover:bg-white/20 hover:text-[#00ea52] md:px-4"
                      >
                        About Us
                        <HiArrowRight className="text-xl" />
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/case-study"
                        className="mb-[10px] flex justify-between rounded-[10px] py-2 text-sm text-white backdrop-blur-md transition hover:bg-white/20 hover:text-[#00ea52] md:px-4"
                      >
                        Case Study
                        <HiArrowRight className="text-xl" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="md:w-[calc(100%-250px)]">
              <Heading
                className="mb-[40px] pl-[20px] text-white"
                headingTag="h1"
                content={[{ text: "All Topics" }]}
              />

              {/* BLOG LIST + LOAD MORE */}
              <BlogInsightsSection
                postprePage={12}
                title={false}
                loadMore={true}
                imageHeight="h-[220px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="relative overflow-hidden pb-[00px] md:pb-[100px]">
        <Image
          src={bgImage2}
          alt="Background"
          className="absolute top-[50px] left-[-10%] z-[1] min-w-[115%]"
        />

        <div className="relative z-[2]">
          <ProjectCTA
            title="Ready to Scale"
            subtitle="Your Business?"
            description="Book a free consultation to get clarity, direction, and expert advice you can implement right away."
            fontSize="md:!text-[80px]  !text-[40px] md:!leading-[130%] !leading-[120%]"
            marginBottom="mb-0"
          />
        </div>
      </div>
    </Layout>
  )
}
