import { Key } from "react"
import Image from "next/image"
import Heading from "@/components/Heading/Heading"
let comma = ","
export default function CaseOverview({ data }: any) {
  return (
    <>
      <section className="bg-[#fff] py-[80px]">
        <div className="container">
          <div className="left_section rounded-rb-none rounded-[32px] bg-[#1515150a]">
            <div className="m-0 mb-[40px] flex flex-wrap p-0">
              {data.casestudy_info_list.map((item: any, i: number) => (
                <div
                  key={i}
                  className="left_section_info_list flex-1 p-[40px] font-[300]"
                >
                  <p className="mb-[12px] block text-[#000] uppercase">
                    <strong className="text-[12px]">{item.label}</strong>
                  </p>
                  <span className="block text-[32px] font-[500] whitespace-nowrap">
                    {item.content}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="aboutProject mt-[120px] mb-[120px] gap-[60px] md:flex">
            <div className="leftSection md:w-[34%]">
              <p className="!text-[12px] !font-[500] text-[#000] uppercase">
                About Project
              </p>
            </div>
            <div className="rightSection md:w-[66%]">
              <div>
                <div className="text-[40px] leading-[120%] font-[400]">
                  {data.acf.aboutProject}
                </div>
              </div>
            </div>
          </div>
          <div className="gallarySection">
            <div className="flex-wrap items-center gap-[40px] md:flex">
              {data.acf.product_images.map((img: string, i: number) => (
                <div
                  key={i}
                  className="w-full md:w-[calc(50%-20px)] md:[&:nth-child(3)]:!w-full"
                >
                  <Image
                    src={img}
                    alt="Product"
                    width={1500}
                    height={1500}
                    className="h-[auto] w-[100%] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="challengesSolutions bg-white pt-[80px]">
        <div className="container">
          <div className="mb-[80px]">
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
            <div className="flex justify-between gap-[60px] rounded-[24px] rounded-tl-none border border-[#dce5e0] px-[48px] py-[40px]">
              <div>
                <p className="!text-[26px] !font-[500]">Problem</p>
              </div>
              <div className="max-w-[448px]">
                <div className="!text-[20px] !font-[500]">
                  {data.acf.challenges.description}
                </div>
              </div>
            </div>
          </div>
          <div className="ml-[auto] max-w-[975px]">
            <div className="mt-[6px] flex justify-between gap-[60px] rounded-[24px] rounded-br-none border border-[#f7f7f7] bg-[#f7f7f7] px-[48px] py-[40px]">
              <div>
                <p className="!text-[26px] !font-[500]">Solution</p>
              </div>
              <div className="max-w-[448px]">
                <div className="!text-[20px] !font-[500]">
                  {data.acf.solution.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
