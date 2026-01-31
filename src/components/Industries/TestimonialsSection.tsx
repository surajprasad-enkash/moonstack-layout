"use client"

import Image from "next/image"
import Heading, { HeadingSegment } from "@/components/Heading/Heading"
import { cn } from "@/lib/utils"
import clutchReviews from "@/assets/industries/icon/clutch-reviews.svg"
import bgImage from "@/assets/industries/icon/review-bg.svg"

interface Testimonial {
  quote: string
  name: string
  role: string
  avatar: string
  rating?: number
}

interface TestimonialsSectionProps {
  heading: HeadingSegment[]
  testimonials: Testimonial[]
  className?: string
}

export default function TestimonialsSection({
  heading,
  testimonials,
  className,
}: TestimonialsSectionProps) {
  return (
    <section className={cn("relative px-[20px] text-white", className)}>
      {bgImage && (
        <Image
          src={bgImage}
          alt="Background"
          className="absolute top-[-200px] right-[0] left-[0] z-[1] h-[2000px] w-[350%] object-cover"
        />
      )}

      <div className="relative z-[2] container">
        {/* HEADER */}
        <div className="mb-[64px] flex flex-col gap-[24px] lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[700px]">
            <Heading headingTag="h2" content={heading} className="text-white" />
          </div>

          {/* CLUTCH BADGE */}
          <div className="">
            <Image
              src={clutchReviews}
              alt="Clutch reviews"
              width={200}
              height={80}
            />
          </div>
        </div>

        {/* GRID */}
        {/* GRID */}
        <div className="grid grid-cols-1 gap-[16px] md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-[18px] bg-[#141414] p-[28px] transition-colors duration-300 hover:bg-white"
            >
              {/* STARS */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: item.rating ?? 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="text-[20px] text-[#D0F601] transition-colors group-hover:text-[#FF3D2E]"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* QUOTE */}
              <p className="mb-6 text-[14px] leading-relaxed text-white/80 transition-colors duration-300 group-hover:text-black">
                “{item.quote}”
              </p>

              {/* AUTHOR */}
              <div className="mt-auto flex items-center gap-3">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-[16px] font-semibold text-white transition-colors duration-300 group-hover:text-black">
                    {item.name}
                  </p>

                  {/* THIS WILL REMAIN SAME AS YOU ASKED */}
                  <p className="!font-[14px] text-white/60 duration-300 group-hover:text-black">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
