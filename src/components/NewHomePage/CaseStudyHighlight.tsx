"use client"

import Image, { StaticImageData } from "next/image"
import bgImage from "@/assets/newHomePage/caseStudy/banner.svg"

/* ---------------- TYPES ---------------- */

interface Badge {
  label: string
}

interface Testimonial {
  name: string
  role: string
  text: string
  rating?: number
  clientImage?: StaticImageData | string
}

interface CaseStudyHighlightProps {
  tag?: string
  badges?: Badge[]
  title?: string
  showTag?: boolean
  description?: string
  testimonial?: Testimonial
  images?: StaticImageData[]
  clutchLogo?: StaticImageData | string
}

/* ---------------- COMPONENT ---------------- */

export default function CaseStudyHighlight({
  tag = "CASE STUDY",
  badges = [{ label: "Web 3.0" }, { label: "$2.4M raised" }],
  title = "MYSO Finance raised $2.4M and reached 85% user engagement with our design",
  showTag = false,
  description = "Arounda excels with meticulous attention to detail, creative problem-solving, and effective communication. Their innovative solutions significantly enhanced the user experience.",
  clutchLogo,
  testimonial = {
    name: "Artemine Sarden",
    role: "Founder, MYSO Finance",
    text: "Arounda excels with meticulous attention to detail and creative problem-solving.",
    rating: 5,
  },
  images = [],
}: CaseStudyHighlightProps) {
  return (
    <section className="relative px-[20px] text-white">
      {showTag && bgImage && (
        <Image
          src={bgImage}
          alt="Background"
          className="absolute top-[20%] right-[0] left-[0%] z-[1] h-[auto] w-[150%]"
        />
      )}

      <div className="relative z-10 container">
        {/* TAG */}
        {showTag && (
          <div className="mb-5 md:mb-[90px]">
            <span className="block text-xs font-[500] tracking-widest text-white/60 uppercase">
              {tag}
            </span>
          </div>
        )}

        <div className="gap-20 md:flex">
          {/* LEFT CONTENT */}
          <div className="max-w-full md:max-w-[520px]">
            <div className="sticky top-[20px] md:pt-[85px]">
              {/* Badges */}
              <div className="mb-[30px] flex flex-wrap">
                {badges.map((badge, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-white/10 px-[20px] py-[10px] text-[16px] backdrop-blur"
                  >
                    {badge.label}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="mb-[30px] border-b border-white/10 pb-[30px] text-[30px] leading-[1.3]">
                {title}
              </h3>

              {/* Rating */}
              {clutchLogo && (
                <div className="mb-[24px] flex items-center gap-3 text-sm">
                  <span className="clutchLogo">
                    <Image
                      src={clutchLogo}
                      alt="Clutch logo"
                      width={100}
                      height={40}
                      className="object-contain"
                    />
                  </span>

                  <span className="flex gap-[5px] text-[18px] text-[#d6ff00]">
                    {Array.from({ length: testimonial.rating ?? 5 }).map(
                      (_, i) => (
                        <span key={i}>★</span>
                      )
                    )}
                  </span>
                </div>
              )}

              {/* Description */}
              <p className="mb-[20px] !text-[20px] !font-[500] text-white">
                {description}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {testimonial.clientImage && (
                  <Image
                    src={testimonial.clientImage}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                )}

                <div>
                  <p className="libreItalic !text-[22px] !font-medium">
                    {testimonial.name}
                  </p>
                  <p className="!font-[500] text-[#fff9] text-[16]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="md-pt-[0] relative flex flex-col gap-[10px] pt-5 md:w-[calc(100%-520px)]">
            {images.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[24px] bg-[#111]"
              >
                <Image
                  src={img}
                  alt="Case study preview"
                  width={900}
                  height={700}
                  className="w-full object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
