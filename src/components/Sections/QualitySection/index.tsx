"use client"

import Image, { StaticImageData } from "next/image"
import Heading from "@/components/Heading/Heading"
import { cn } from "@/lib/utils"

interface FeatureItem {
  id: number
  title: string
  icon: string | StaticImageData
  description?: string
}
interface headingProps {
  text: string
  color?: string
  className?: string
}
interface QualitySectionProps {
  heading?: headingProps[]
  description?: string
  features: FeatureItem[]
  className?: string
  columsClass?: string
}

export default function QualitySection({
  features,
  heading = [
    {
      text: "We get things ",
      className: "text-white ",
    },
    {
      text: "done with quality",
      className: "block highlight-text libreItalic",
    },
  ],
  description,
  columsClass = "lg:grid-cols-4",
  className,
}: QualitySectionProps) {
  if (!features || features.length === 0) return null
  return (
    <section className={cn("relative py-24 text-white", className)}>
      <div className="pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative z-10 container">
        <div className="mx-auto mb-20 max-w-[800px] text-center">
          <Heading
            headingTag="h2"
            content={heading}
            className="text-[28px] font-semibold md:text-[40px]"
          />
          {description && <p className="mt-2">{description}</p>}
        </div>

        <div
          className={`grid grid-cols-1 gap-10 sm:grid-cols-2 ${columsClass}`}
        >
          {features.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className="relative h-[130px] w-[130px]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h4 className="mt-[64px] w-full leading-relaxed text-white/90">
                {item.title}
              </h4>
              {item.description && (
                <p className="mt-[20px] text-white/80">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
