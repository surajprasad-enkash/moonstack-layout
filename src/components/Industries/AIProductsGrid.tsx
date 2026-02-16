// "use client"

import Link from "next/link"

import { FiArrowRight } from "react-icons/fi"
import Heading from "@/components/Heading/Heading"
import { ElementType } from "react"

interface AIProductItem {
  title: string
  description: string
  href?: string
  Icon?: ElementType
  gradient: string
}
interface HeadingItem {
  text: string
  color: string
  className: string
}
interface AIProductsGridProps {
  heading: HeadingItem[]
  items: AIProductItem[]
}

export default function AIProductsGrid({
  heading,
  items,
}: AIProductsGridProps) {
  return (
    <section className="relative z-[1] px-[20px]">
      <div className="container mx-auto">
        {/* HEADING */}
        <Heading
          headingTag="h2"
          className="mx-auto mb-[72px] max-w-[700px] text-center text-white"
          content={heading}
        />

        {/* GRID */}
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between overflow-hidden rounded-[18px] p-[28px] transition"
              style={item.gradient ? { background: item.gradient } : undefined}
            >
              {/* ICON */}
              {item.Icon && (
                <div className="servicesFeatureIcon mb-[14px] h-[40px] w-[40px]">
                  <item.Icon />
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
                className="inline-flex max-w-[max-content] items-center gap-2 rounded-[50px] bg-black px-[24px] py-[10px] text-[16px] text-white transition"
              >
                Learn More <FiArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
