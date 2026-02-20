import { Key } from "react"
import Image from "next/image"
import Heading from "@/components/Heading/Heading"
let comma = ","
export default function CaseOverview({ data }: any) {
  return (
    <>
      <section className="bg-[#fff] px-[20px] pt-[60px] pb-[20px] md:py-[80px]">
        <div className="container">
          <div className="left_section rounded-rb-none rounded-[32px] bg-[#1515150a]">
            <div className="m-0 mb-[40px] flex flex-wrap p-0">
              {data.casestudy_info_list.map((item: any, i: number) => (
                <div
                  key={i}
                  className="left_section_info_list flex-1 p-[40px] font-[300]"
                >
                  <p className="mb-[12px] block text-[#000] uppercase">
                    <strong
                      className="text-[12px]"
                      dangerouslySetInnerHTML={{ __html: item.label }}
                    />
                  </p>
                  <span
                    className="block text-[32px] font-[500] whitespace-nowrap"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="aboutProject mt-[60px] mb-[60px] gap-[60px] md:mt-[120px] md:mb-[120px] md:flex">
            <div className="leftSection md:w-[34%]">
              <p className="mb-[20px] !text-[12px] !font-[500] text-[#000] uppercase md:mb-0">
                About Project
              </p>
            </div>
            <div className="rightSection md:w-[66%]">
              <div>
                <div
                  className="text-[40px] leading-[120%] font-[400]"
                  dangerouslySetInnerHTML={{ __html: data.acf.aboutProject }}
                />
              </div>
            </div>
          </div>
          <div className="gallarySection">
            <div className="flex-wrap items-center gap-[40px] md:flex">
              {data.acf.product_images.map((img: string, i: number) => (
                <div
                  key={i}
                  className="mb-[20px] w-full md:mb-0 md:w-[calc(50%-20px)] md:[&:nth-child(3)]:!w-full"
                >
                  <Image
                    src={img}
                    alt="Product"
                    width={2000}
                    height={2000}
                    className="h-[auto] w-[100%] rounded-[20px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="challengesSolutions bg-white px-[20px] pt-[20px] md:pt-[80px]">
        <div className="container">
          <div className="mb-[30px] md:mb-[80px]">
            <Heading
              headingTag="h2"
              className="text-[#000]"
              content={[
                { text: "Challenges", className: "" },
                {
                  text: "& Solutions",
                  className: "highlight-text libreItalic",
                },
              ]}
            />
          </div>
          <div className="ml-[auto] max-w-[975px]">
            <div className="justify-between gap-[60px] rounded-[24px] rounded-tl-none border border-[#dce5e0] p-[20px] md:flex md:p-[48px]">
              <div className="mb-[20px] md:mb-0">
                <p className="!text-[26px] !font-[500]">Problem</p>
              </div>
              <div className="max-w-[448px]">
                <div
                  className="!text-[20px] !font-[500]"
                  dangerouslySetInnerHTML={{
                    __html: data.acf.challenges.description,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="ml-[auto] max-w-[975px]">
            <div className="mt-[6px] justify-between gap-[60px] rounded-[24px] rounded-br-none border border-[#f7f7f7] bg-[#f7f7f7] p-[20px] md:flex md:p-[40px]">
              <div className="mb-[20px] md:mb-0">
                <p className="!text-[26px] !font-[500]">Solution</p>
              </div>
              <div className="max-w-[448px]">
                <div
                  className="!text-[20px] !font-[500]"
                  dangerouslySetInnerHTML={{
                    __html: data.acf.solution.description,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
