"use client";

import Image from "next/image";
import Link from "next/link";
import Heading, { HeadingSegment } from "@/components/Heading/Heading";
import { FiArrowRight } from "react-icons/fi";
import bgImage from "public/assets/industries/ai/icon/review-bg.svg";

interface IndustryCard {
  title: string;
  href?: string;
  icon: string;
  tags: string[];
}

interface IndustryExperienceSectionProps {
  heading: HeadingSegment[];
  description: string;
  industries: IndustryCard[];
}

export default function IndustryExperienceSection({
  heading,
  description,
  industries,
}: IndustryExperienceSectionProps) {
  return (
    <section className="relative px-[20px]">
      <div className="container relative z-10 mx-auto px-4">
        {/* HEADING */}
        <div className="mx-auto mb-[72px] max-w-[820px] text-center">
          <Heading headingTag="h2" content={heading} className="text-white" />

          <p className="mt-[16px] text-[15px] leading-relaxed text-white/70">
            {description}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2">
          {industries.map((item, index) => (
            <Link
              key={index}
              href={item.href || "#"}
              className="group relative rounded-[20px] bg-[#EEF2FF] p-[32px] transition"
            >
              {/* TOP */}
              <div className="mb-[18px] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={32}
                    height={32}
                  />
                  <h3 className="text-[20px] font-semibold text-black">
                    {item.title}
                  </h3>
                </div>

                <FiArrowRight className="text-black transition " />
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-[10px]">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-black/20 px-[14px] py-[6px] text-[12px] text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
