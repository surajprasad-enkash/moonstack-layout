import Layout from "@/components/Layout";
import CategoryPosts from "@/components/CategoryPosts/CategoryPosts";
import { useRouter } from "next/router";
import bgImage from "public/assets/blogs/blogPageNewBg.svg";
import bgImage2 from "../pubpublic/assets/dy-to-scale-bg.svg";
import Image from "next/image";
import ProjectCTA from "@/components/ProjectCTA/ProjectCTA";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import CategoryList from "@/components/CategoryList/CategoryList";
import Breadcrumb from "@/components/Breadcrumb";

/**
 * Utility: slug → Human readable
 * digital-marketing → Digital Marketing
 */
const formatCategoryName = (slug?: string | string[]) => {
  if (!slug || Array.isArray(slug)) return "";
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

export default function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;

  const categoryName = formatCategoryName(slug);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blogs" },
    { label: categoryName, href: "" },
  ];

  return (
    <Layout>
      {/* Top Background */}
      <div className="px-[20px] z-[1] pt-[160px]">
        {bgImage && (
          <Image
            src={bgImage}
            alt="Background"
            className="absolute top-[-100px] right-0 z-[1] w-[70%]"
          />
        )}
      </div>

      <section className="relative z-[3] px-[20px] pb-[80px]">
        <div className="container">
          {/* Breadcrumb */}
          <div className="mb-[40px] pl-[15px]">
            <Breadcrumb items={breadcrumbs} />
          </div>

          <div className="gap-[20px] md:flex">
            {/* LEFT SIDEBAR */}
            <div className="md:w-[250px]">
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

            {/* RIGHT CONTENT */}
            <div className="md:w-[calc(100%-250px)]">
              <CategoryPosts slug={slug} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="relative overflow-hidden pb-[100px]">
        {bgImage2 && (
          <Image
            src={bgImage2}
            alt="Background"
            className="absolute top-[50px] left-[-10%] z-[1] min-w-[115%]"
          />
        )}

        <div className="relative z-[2]">
          <ProjectCTA
            title="Ready to scale"
            subtitle="your business?"
            description="Book a free consultation to get clarity, direction, and expert advice you can implement right away."
            fontSize="!text-[80px]"
            marginBottom="mb-0"
          />
        </div>
      </div>
    </Layout>
  );
}
