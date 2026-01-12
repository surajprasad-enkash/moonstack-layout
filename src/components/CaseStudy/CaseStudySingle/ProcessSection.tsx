"use client";

import Heading from "@/components/Heading/Heading";
import { cn } from "@/lib/utils";

interface ProcessItem {
  title: string;
  description: string[];
}

interface ProcessSectionProps {
  process: ProcessItem[];
  className?: string;
}

const stepColors = [
  "bg-[#B58CFF]",
  "bg-[#FFB27D]",
  "bg-[#7EC3FF]",
  "bg-[#111111]",
];

const listBgColors = [
  "bg-[#F6F0FF]",
  "bg-[#FFF3EA]",
  "bg-[#EEF7FF]",
  "bg-[#F4F6F8]",
];

export default function ProcessSection({
  process,
  className,
}: ProcessSectionProps) {
  if (!process || process.length === 0) return null;

  return (
    <section className={cn("px-[20px] bg-white py-[100px]", className)}>
      <div className="container">
        {/* Heading */}
       
          <Heading headingTag="h2" className="text-[#000] mb-[80px]" content={[
              {text:'Process', className:'highlight-text libreItalic'}
            ]} />

        {/* Cards */}
        <div className="grid grid-cols-1 gap-[32px] lg:grid-cols-4">
          {process.map((item, index) => (
            <div
              key={index}
              className="rounded-[32px] max-h-[max-content] border border-[#0000001f] p-[24px]"
            >
              {/* Step Number */}
              <div
                className={cn(
                  "mb-[16px] flex h-[32px]  w-[32px] items-center justify-center rounded-full text-sm font-[600] text-white",
                  stepColors[index % stepColors.length]
                )}
              >
                {index + 1}
              </div>

              {/* Title */}
              <h3 className="mb-[16px] !text-[26px] font-[500] ">
                {item.title}
              </h3>

              {/* Divider */}
              <div className="mb-[16px] h-[1px] w-full bg-[#0000001f]" />

              {/* Points */}
              <ul
                className={cn(
                  "rounded-[24px] overflow-hidden",
                  listBgColors[index % listBgColors.length]
                )}
              >
                {item.description.map((point, i) => (
                  <li
                    key={i}
                    className="border-b border-white/60 px-[24px] py-[18px] text-[16px] last:border-b-0"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
