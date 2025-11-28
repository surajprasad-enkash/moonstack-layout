import Heading from "@/components/Heading/Heading";
import React from "react";

interface CloudServicesSectionProps {
  title: string;
  highlight: string;
  subtitle?: string;
  services: {
    number: string | number;
    title: string;
    description: string;
  }[];
}

export default function CloudServicesSection({
  title,
  highlight,
  subtitle,
  services,
}: CloudServicesSectionProps) {
  return (
    <section className="w-full bg-[#000] text-white pt-20 px-[20px] md:px-[80px]">
      <div className="container mx-auto ">
<div className="row">
  <div className="text-center md:px-30">
        {/* Main Title */}
           <Heading
              headingTag="h2"
              className="font-36 pt-3 text-center font-bold"
              content={[
                { text: `${title} `, color: "text-white block" },
                { text: highlight, className: "highlight-text" },
              ]}
            />
       
        {/* Subtitle */}
        {subtitle && (
           <Heading
              headingTag="p"
              className="font-14 pt-3 text-[12px] leading-[28px] font-medium tracking-[-0.04em] tracking-wider text-white md:text-[14px] md:leading-[200%]"
              content={[{ text: `${subtitle} `, color: "text-white" }]}
            />
        
        )}
</div>
</div>
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services?.map((item, index) => (
            <div
              key={index}
              className="bg-[#001A09] p-15 rounded-xl shadow-xl  text-left"
            >
              <span className="text-2xl font-bold text-gray-200">{item.number}</span>

            


   <Heading
              headingTag="h4"
              className="font-20 mt-6 font-bold"
              content={[
                { text: `${item.title} `, color: "text-white" },
              ]}
            />
             <Heading
              headingTag="p"
              className="font-14 pt-3 text-[12px] leading-[28px] font-medium tracking-[-0.04em] tracking-wider text-white md:text-[14px] md:leading-[200%]"
              content={[{ text: `${item.description} `, color: "text-white" }]}
            />
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
