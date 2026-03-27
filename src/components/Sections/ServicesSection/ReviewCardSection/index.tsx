
import Image, { StaticImageData } from "next/image"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  quote?: string
  highlightText?: string
  authorName: string
  authorRole?: string
  authorImage: string | StaticImageData
  className?: string
  bgImage?: string
}

export default function TestimonialCard({
  quote,
  highlightText,
  authorName,
  authorRole,
  authorImage,
  className,
  bgImage,
}: TestimonialCardProps) {
  const renderQuote = () => {
    if (!highlightText) return quote

    const parts = (quote ?? "").split(highlightText)

    return (
      <>
        {parts[0]}
        <span className="rounded-full bg-[#00cf4945] px-2 py-1">
          {highlightText}
        </span>
        {parts[1]}
      </>
    )
  }
  const customColor = bgImage ? "" : ""
  return (
    <section className={`relative z-[1] px-[20px] ${customColor}`}>
      {bgImage && (
        <Image
          src={bgImage}
          alt="Background"
          priority
          className="absolute top-[0] right-[0] left-[0] z-[-1]"
        />
      )}
      <div className="relative z-[2] container">
        <div
          className={cn(
            "rounded-3xl rounded-tl-none bg-white px-6 py-16 text-center shadow-lg md:px-16",
            className
          )}
        >
          <div className="mb-2 text-4xl font-bold text-black md:mb-6">“</div>

          <p className="mx-auto max-w-5xl text-xl !text-[25px] leading-relaxed !font-medium text-black md:text-2xl md:!text-[40px]">
            {renderQuote()}
          </p>

          <div className="mt-16 flex flex-col items-center">
            <div className="mb-3 overflow-hidden rounded-full">
              <Image
                src={authorImage}
                alt={authorName}
                width={80}
                height={80}
                loading="lazy"
                className="object-cover"
              />
            </div>

            <p className="font-26 !font-semibold text-black">{authorName}</p>
            {authorRole && (
              <p className="text-sm text-black/60">{authorRole}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
