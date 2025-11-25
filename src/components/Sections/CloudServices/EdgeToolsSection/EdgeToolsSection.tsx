import Heading from "@/components/Heading/Heading";
import Image from "next/image";
import React from "react";

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

interface Props {
  title: string;
  highlight: string;
  description: string;
  services: ServiceItem[];
}

const EdgeToolsSection: React.FC<Props> = ({
  title,
  highlight,
  description,
  services,
}) => {
  return (
    <section className="bg-[#000] pt-20 px-[20px] md:px-[80px]">
      <div className="container mx-auto ">
        <div className="flex flex-col items-start gap-12 md:flex-row">
          {/* LEFT SIDE */}
          <div className="sticky top-[100px] w-full md:w-1/2">
            <Heading
              headingTag="h2"
              className="font-36 pt-3 text-start font-bold"
              content={[
                { text: `${title} `, color: "text-white" },
                { text: highlight, className: "highlight-text" },
              ]}
            />

            <Heading
              headingTag="p"
              className="font-14 pt-3 text-[12px] leading-[28px] font-medium tracking-[-0.04em] tracking-wider text-white md:text-[14px] md:leading-[200%]"
              content={[{ text: `${description} `, color: "text-white" }]}
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex w-full flex-col gap-5 md:w-1/2">
            {services.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-2xl bg-[#05140A] p-10 transition-all"
              >
                {/* ICON */}
                <div className="h-12 w-12">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={26}
                    height={26}
                  />
                </div>

                {/* TEXT */}
                <div>
                  <Heading
                    headingTag="h4"
                    className="font-20 font-bold"
                    content={[{ text: `${item.title} `, color: "text-white" }]}
                  />
                  <Heading
                    headingTag="p"
                    className="font-14 pt-2 text-[12px] leading-[28px] font-medium tracking-[-0.04em] tracking-wider text-white md:text-[14px] md:leading-[200%]"
                    content={[
                      { text: `${item.description} `, color: "text-white" },
                    ]}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EdgeToolsSection;
