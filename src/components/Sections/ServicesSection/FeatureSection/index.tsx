import Image, { StaticImageData } from "next/image"
import { cn } from "@/lib/utils"
import Heading from "@/components/Heading/Heading"
import { ElementType } from "react"

/* =========================
   Types
========================= */
export interface FeatureSectionProps {
  heading: any
  subHeadingText?: string
  column?: 2 | 3 | 4
  features: {
    imgSrc?: StaticImageData | string
    Icon?: ElementType // ✅ NEW (for SVG component)
    title: string
    description: string
  }[]
  className?: string
}

/* =========================
   Component
========================= */
export default function FeatureSection({
  heading,
  subHeadingText,
  column = 3,
  features,
  className,
}: FeatureSectionProps) {
  const columnClass =
    column === 2
      ? "md:grid-cols-2"
      : column === 4
        ? "md:grid-cols-4"
        : "md:grid-cols-3 !gap-[100px]"

  return (
    <section className={cn("relative z-[2] px-4 py-24 text-white", className)}>
      <div className="container mx-auto">
        {/* Heading */}
        <Heading
          headingTag="h2"
          content={heading}
          className="mx-auto mb-5 max-w-3xl text-center text-white"
        />

        {/* Optional Subheading */}
        {subHeadingText && (
          <p className="mx-auto max-w-3xl text-center text-white/80">
            {subHeadingText}
          </p>
        )}

        {/* Features Grid */}
        <div className={cn("mt-20 grid grid-cols-1 gap-14", columnClass)}>
          {features.map((item, index) => {
            const IconComponent = item.Icon
            console.log(IconComponent)
            return (
              <div key={index} className="flex flex-col">
                {/* Icon / Image */}
                <div className="mb-[30px] flex items-start justify-start">
                  {/* ✅ If SVG Component */}
                  {(IconComponent && (
                    <div className="servicesFeatureIcon h-[80px] w-[80px]">
                      <IconComponent />
                    </div>
                  )) ||
                    /* ✅ Else normal Image */
                    (item.imgSrc && (
                      <Image
                        src={item.imgSrc}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="h-[80px] w-[80px] object-contain object-center"
                      />
                    ))}
                </div>

                {/* Title */}
                <Heading
                  headingTag="h4"
                  content={item.title}
                  className="mb-3 text-start text-white"
                />

                {/* Description */}
                <Heading
                  headingTag="p"
                  content={item.description}
                  className="text-start text-white/70"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
