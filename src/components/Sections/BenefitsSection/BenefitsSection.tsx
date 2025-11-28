"use client";

import Heading from "@/components/Heading/Heading";
import Image from "next/image";


interface BenefitsSectionProps {
  title: string;
  highlight: string;
  description: string;
  benefits: { icon?: string; title: string; desc: string }[];
  image?: string;
}

export default function BenefitsSection({
  title,
  highlight,
  description,
  benefits,
  image,
}: BenefitsSectionProps) {
  return (
    <section className="bg-[#000] px-6 pt-20 text-white md:px-20">
      <div className="container">
        {/* Header Section */}
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          {/* Left Side Title */}
          <div className="md:w-1/2">
            <Heading
              headingTag="h2"
              className="text-[21px] leading-[32px] md:text-[60px] md:leading-[140%] tracking-[-0.04em] font-36  font-bold text-white"
              content={[
                { title: title, color: "text-white", className: "block" },
                { title: highlight, className: "highlight-text" },
              ]}
            />
          </div>

          {/* Right Side Description */}
          <div className="md:w-1/2">
            <Heading
              headingTag="p"
              className="text-sm leading-relaxed text-gray-300"
              content={[
                {
                  title: description,
                  color: "text-gray-300",
                  className: "block",
                },
              ]}
            />
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits?.map((item, index) => (
            <div key={index} className="text-start md:p-10 p-5">
              <div className="mb-4 ">
                  {item.icon ? (
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-2xl text-green-400">📈</span>
                  )}
              </div>
              <div className="content">
                <Heading
                  headingTag="h5"
                  className="font-semibold !text-[18px]"
                  content={[{ title: item.title, color: "text-white" }]}
                />
                <Heading
                  headingTag="p"
                  className="mt-2"
                  content={[{ title: item.desc, color: "text-[#CBCBCB]" }]}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        {image && (
          <div className="mt-12 overflow-hidden rounded-xl">
            <Image
              src={image}
              alt="Benefits Section Image"
              width={1500}
              height={700}
              className="h-auto w-full"
            />
          </div>
        )}
      </div>
    </section>
  );
}
