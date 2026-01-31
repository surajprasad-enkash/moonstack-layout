import Heading from "../Heading/Heading"
import Space from "../Space"
import bgImage from "@/assets/industries/products-bg.svg"
import Image from "next/image"

interface Principle {
  id: string
  title: string
  description: string
  gradient: string
}
interface headingPros {
  text?: string
  color?: string
  className?: string
}

interface DesignPrinciplesSectionProps {
  heading: headingPros[]
  principles: Principle[]
}

export default function DesignPrinciplesSection({
  heading,
  principles,
}: DesignPrinciplesSectionProps) {
  return (
    <section className="relative z-[1] px-[20px]">
      {bgImage && (
        <Image
          src={bgImage}
          alt="Background"
          className="absolute right-[0] bottom-[-200px] left-[0] z-[1] min-h-[1200px] w-[100%] object-cover"
        />
      )}
      <div className="relative z-[2] container">
        {/* HEADING */}
        <Heading
          headingTag="h2"
          className="m-[auto] max-w-[750px] text-center text-white"
          content={heading}
        />
        <Space size={40} />

        {/* GRID */}
        <div className="m-[auto] max-w-[1024px]">
          <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2">
            {principles.map((item) => (
              <div
                key={item.id}
                className={`relative rounded-[18px] p-[28px] text-black ${item.gradient}`}
              >
                {/* TOP ROW */}
                <div className="mb-[20px] flex items-center justify-between text-xs font-semibold tracking-wide uppercase">
                  <span>Key Principle</span>
                  <span>{item.id}</span>
                </div>

                {/* TITLE */}
                <Heading
                  headingTag="h4"
                  className="mb-[20px]"
                  content={[{ text: item.title, color: "text-[#000]" }]}
                />

                {/* DESCRIPTION */}
                <p className="leading-relaxed text-[#000]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
