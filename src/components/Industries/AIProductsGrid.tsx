"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import Heading from "@/components/Heading/Heading";

interface AIProductItem {
  title: string;
  description: string;
  href?: string;
  icon?: string;
  gradient: string;
}
interface HeadingItem{
  text:string;
  color:string;
  className:string;
}
interface AIProductsGridProps {
  heading: HeadingItem[];
  items: AIProductItem[];
}

export default function AIProductsGrid({
  heading,
  items,
}: AIProductsGridProps) {
  return (
    <section className="relative px-[20px]">
      <div className="container mx-auto px-4">
        {/* HEADING */}
        <Heading
          headingTag="h2"
          className="mx-auto mb-[72px] max-w-[500px] text-center text-white"
          content={heading}
        />

        {/* GRID */}
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between rounded-[18px] p-[28px] transition overflow-hidden"
              style={item.gradient ? { background: item.gradient } : undefined}
            >
              {/* ICON */}
              {item.icon && (
                <div className="mb-[14px]">
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    width={40}
                    height={40}
                  />
                </div>
              )}

              {/* CONTENT */}
              <div>
                <h4 className="mb-[16px] text-[26px] font-semibold text-black">
                  {item.title}
                </h4>

                <p className="mb-[24px] text-[14px] leading-relaxed text-black">
                  {item.description}
                </p>
              </div>

              {/* CTA */}
              <Link
                href={item.href || "#"}
                className="inline-flex rounded-[50px] items-center gap-2 bg-black px-[24px] py-[10px] text-[16px] text-white transition max-w-[max-content]"
              >
                Learn More <FiArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
