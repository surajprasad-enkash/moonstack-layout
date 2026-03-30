import Image from "next/image"
import bgImage from "@/assets/case-study/single-case-study/banner.svg"
import Breadcrumb from "@/components/Breadcrumb"

export default function CaseHero({ data }: any) {
  let featured_image = data.featured_image
  if (featured_image == "") {
    featured_image = data.acf.case_study_profile_image
  }
  return (
    <section className="relative overflow-hidden px-[20px] pt-[104px] pb-[40px] text-white md:min-h-[100vh] md:pt-[160px] md:pb-[40px]">
      {bgImage.src && (
        <Image
          src={bgImage.src}
          alt="Background"
          width={100}
          height={100}
          className="absolute top-[0px] right-[0] left-[0] z-[1] h-[auto] w-[100%]"
        />
      )}
      <div className="relative z-[2] container">
        <div className="breadcrumb">
          <Breadcrumb
            items={[
              {
                label: "Home",
                href: "/",
              },
              {
                label: "Case Study",
                href: "/case-study",
              },
              {
                label: data.title,
                href: data.slug,
              },
            ]}
          />
        </div>
        <div className="">
          <div>
            <div className="mx-[auto] max-w-[900px]">
              <h1
                className="mt-[20px] md:text-center"
                dangerouslySetInnerHTML={{ __html: data.title }}
              />
            </div>
            {/* <div
              className="caseStudySingleTag"
              dangerouslySetInnerHTML={{ __html: data.acf.case_study_tag_list }}
            /> */}

            <div className="mt-[40px] items-end gap-[60px] md:flex">
              <div className="md:w-[34%]">
                <h2
                  className="mb-[30px] !text-[25px] !leading-[130%] !font-[400] md:mb-[0] md:!text-[40px]"
                  dangerouslySetInnerHTML={{
                    __html: data.acf.bannerDescription,
                  }}
                />
              </div>
              <div className="md:w-[66%]">
                <Image
                  src={featured_image}
                  alt={data.title}
                  width={1000}
                  height={1000}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
