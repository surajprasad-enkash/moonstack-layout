import { Key } from "react";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
let comma = ",";
export default function CaseOverview({ data }: any) {
  return (
    <>
      <section className="bg-[#fff] py-[80px]">
        <div className="container">
          <div className="left_section bg-[#1515150a] rounded-[32px] rounded-rb-none  ">
            <div className="m-0 mb-[40px] flex flex-wrap  p-0">
              {data.casestudy_info_list.map((item: any, i: number) => (
                <div key={i} className="flex-1 p-[40px] font-[300] left_section_info_list">
                  <p className="mb-[12px] block  uppercase text-[#000]">
                    <strong className="text-[12px]">{item.label}</strong>
                  </p>
                  <span className="block text-[32px] whitespace-nowrap font-[500]">{item.content}</span>
                </div>
              ))}

              
            </div>
          </div>
          <div className="aboutProject md:flex gap-[60px] mt-[120px] mb-[120px]">
            <div className="leftSection md:w-[34%]">
              <p className="!text-[12px] uppercase text-[#000] !font-[500]">About Project</p>
            </div>
            <div className="rightSection md:w-[66%]">
              <div>
                <div className="font-[400] leading-[120%] text-[40px]">{data.acf.aboutProject}</div>
              </div>
            </div>
          </div>
          <div className="gallarySection">
            <div className="items-center gap-[80px] md:flex">
              {data.acf.product_images.map((img: string, i: number) => (
                <div key={i} className="w-[calc(50%-40px)]">
                  <Image
                    src={img}
                    alt="Product"
                    width={400}
                    height={300}
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
            <Heading headingTag="h2" className="text-[#000]" content={[
              {text:'Challenges', className:''},
              {text:'& Solutions', className:'highlight-text libreItalic'}
            ]} />
          </div>
          <div className="max-w-[975px] ml-[auto]">
            <div className="flex gap-[60px] px-[48px] py-[40px] border border-[#dce5e0] rounded-[24px] rounded-tl-none justify-between">
              <div>
                <p className="!font-[500] !text-[26px]">Problem</p>
              </div>
              <div className="max-w-[448px]">
                <div className="!font-[500] !text-[20px]">
                  {data.acf.challenges.description}
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[975px] ml-[auto]">
            <div className="flex gap-[60px] px-[48px] bg-[#f7f7f7] mt-[6px] py-[40px] border border-[#f7f7f7] rounded-[24px] rounded-br-none justify-between">
              <div>
                <p className="!font-[500] !text-[26px]">Solution</p>
              </div>
              <div className="max-w-[448px]">
                <div className="!font-[500] !text-[20px]">
                   {data.acf.solution.description}
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </section>
    </>
  );
}
