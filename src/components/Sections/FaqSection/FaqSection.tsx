"use client"

import { useState } from "react"
import Heading from "@/components/Heading/Heading"
import Image from "next/image"
import icon from "@/assets/faq-icon.svg"
import { FAQSchema } from "@/components/StructuredData"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title: string
  highlight?: string
  description: string
  classname?: string
  faqs: FAQItem[]
}

function FAQItem({
  item,
  isActive,
  onClick,
}: {
  item: FAQItem
  isActive: boolean
  onClick: () => void
}) {
  return (
    <div className="faq-active rounded-xl">
      {/* Header */}
      <button
        className="flex w-full cursor-pointer items-center justify-between px-6 py-4"
        onClick={onClick}
      >
        <h5
          className={`max-w-[calc(100%-30px)] text-start font-medium transition-colors duration-300 ${
            isActive ? "text-white" : "text-white/80"
          }`}
        >
          {item.question}
        </h5>

        <span
          className={`h-[20px] w-[20px] flex-shrink-0 transform transition-transform duration-100 ${
            isActive ? "rotate-180" : ""
          }`}
        >
          <Image
            src={icon}
            alt="arrow icon"
            width={20}
            height={20}
            className={`transition-all duration-300 ${
              isActive ? "brightness-110" : "brightness-75"
            }`}
          />
        </span>
      </button>

      {/* Body — grid-rows trick: 0fr ↔ 1fr is perfectly smooth, no JS measurement needed */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: isActive ? "1fr" : "0fr",
          transition: "grid-template-rows 0.1s cubic-bezier(0.1, 0, 0.1, 1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div className="px-6 pb-4 text-white/70">
            <p className="text-sm leading-relaxed md:text-base">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FAQSection({
  title,
  highlight,
  description,
  faqs,
  classname = "block",
}: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faqSection relative w-full overflow-hidden px-[20px] py-[60px] text-white md:py-[80px]">
      <FAQSchema faqs={faqs} />
      <div className="relative z-10 container mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <Heading
            headingTag="h2"
            className="mb-[50px] pt-3"
            content={[
              { text: `${title} `, color: "text-white" },
              {
                text: highlight,
                className: ` highlight-text libreItalic ${classname}`,
              },
            ]}
          />

          <Heading
            headingTag="p"
            className="max-w-lg text-sm leading-relaxed text-white/80 md:text-base"
            content={[{ text: `${description} `, color: "text-white" }]}
          />

          <div className="relative mt-16 hidden opacity-70 lg:block">
            <div className="absolute left-[-80px]"></div>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isActive={activeIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>

      {/* BACKGROUND EFFECTS */}
      <div className="absolute bottom-0 left-0 flex h-[550px] w-[500px] items-end"></div>
      <div className="absolute top-10 right-10 h-[300px] w-[300px] rounded-full bg-green-400/10 blur-3xl"></div>
    </section>
  )
}
