import Layout from "@/components/Layout";
import bgImage from "@/assets/blogs/blogPageNewBg.svg";
import bgImage2 from "@/assets/blogs/ready-to-scale-bg.svg";
import Image from "next/image";
import BlogInsightsSection from "@/components/NewHomePage/BlogInsightsSection";
import CategoryList from "@/components/CategoryList/CategoryList";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import Breadcrumb from "@/components/Breadcrumb";
import Heading from "@/components/Heading/Heading";
import ProjectCTA from "@/components/ProjectCTA/ProjectCTA";
const breadcrumbs = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
];

export default function BlogsPage() {
  return (
    <Layout>
      <div className="px-[0] px-[20px] pt-[160px] pb-[0px]">
        {bgImage && (
          <Image
            src={bgImage}
            alt="Background"
            className="absolute top-[-100px] right-[0] z-[1] h-[auto] w-[70%]"
          />
        )}
      </div>
      <section className="relative z-[2] px-[20px] pt-[0px] pb-[80px]">
        <div className="container">
          <div className="mb-[40px] pl-[15px]">
            {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
          </div>
          <div className="gap-[20px] md:flex">
            <div className="leftBox md:w-[250px]">
              <div className="sticky top-[105px]">
                <CategoryList classNames="" ShowAll={true} showLabel={false} />
                <div className="exploreMore">
                  <span className="block py-[20px] pl-[10px] text-[12px] text-[#fff]/50 uppercase">
                    Explore More
                  </span>
                  <ul>
                    <li>
                      <Link
                        href={`/about-us`}
                        className="mb-[10px] block flex justify-between rounded-[10px] px-4 py-2 text-sm text-white backdrop-blur-md transition hover:bg-white/20 hover:text-[#00ea52]"
                      >
                        About Us
                        <span className="CategoryIcon">
                          <HiArrowRight className="text-xl" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/case-study`}
                        className="mb-[10px] block flex justify-between rounded-[10px] px-4 py-2 text-sm text-white backdrop-blur-md transition hover:bg-white/20 hover:text-[#00ea52]"
                      >
                        Case Study
                        <span className="CategoryIcon">
                          <HiArrowRight className="text-xl" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rightBox md:w-[calc(100%-250px)]">
              <Heading
                className="mb-[40px] pl-[20px] text-white"
                headingTag="h1"
                content={[{ text: "All topics" }]}
              />
              <BlogInsightsSection
                postprePage={12}
                title={false}
                loadMore={true}
                imageHeight="h-[200px]"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="relative overflow-hidden pb-[100px]">
        {bgImage2 && (
          <Image
            src={bgImage2}
            alt="Background"
            className="absolute top-[50px] left-[-10%] z-[1] h-[auto] min-w-[115%]"
          />
        )}
        <div className="relative z-[2]">
          <ProjectCTA
            title="Ready to scale"
            subtitle="your business?"
            description="Book a free consultation to get clarity, direction, and expert advice you can implement right away."
            fontSize="!text-[80px]"
            marginBottom="mb-0"
            whiteBoxClass=""
          />
        </div>
      </div>
    </Layout>
  );
}
