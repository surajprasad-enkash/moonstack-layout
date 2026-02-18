"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Heading from "../Heading/Heading"

interface TabItem {
  id: string
  logo: string
  company: string
  quote: string
  author: string
  role: string
  avatar: string
  rating?: number
  rightBg?: string
  color?: string
  clutchLogo?: string
}

interface TestimonialsTabsProps {
  tabs: TabItem[]
  className?: string
}

export default function TestimonialsTabs({
  tabs,
  className,
}: TestimonialsTabsProps) {
  const [activeId, setActiveId] = useState(tabs[0]?.id)

  const activeTab = tabs.find((tab) => tab.id === activeId)
  if (!activeTab) return null

  return (
    <section className={cn("relative z-[1] px-[20px] text-white", className)}>
      <div className="container mx-auto">
        {/* Heading */}
        <span className="mb-[20px] block text-center text-xs font-[500] tracking-widest text-white/60 uppercase md:mb-[0] md:text-start">
          Verified reviews
        </span>
        <div className="mx-auto mb-[72px] max-w-[790px] text-center">
          <Heading
            headingTag="h2"
            content={[
              { text: "Trusted by 250+ Companies" },
              {
                text: "to Build and Scale",
                className: "libreItalic font-[400] highlight-text",
              },
              { text: "Their Products by Moonstack Team" },
            ]}
          />
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 gap-[10px] lg:grid-cols-[260px_1fr]">
          {/* LEFT TABS */}
          <div className="flex flex-col gap-[10px]">
            {tabs.map((tab, index) => {
              const isActive = tab.id === activeId

              return (
                <button
                  key={index}
                  onClick={() => setActiveId(tab.id)}
                  className={cn(
                    "flex cursor-pointer items-center justify-center rounded-xl py-[40px] transition-all duration-300",
                    isActive
                      ? "tastimonials_button"
                      : "bg-white/10 hover:bg-white/20"
                  )}
                >
                  <Image
                    src={tab.logo}
                    alt={tab.company}
                    width={120}
                    height={50}
                    className={`object-cover transition duration-300 ${activeId}`}
                  />
                </button>
              )
            })}
          </div>

          {/* RIGHT CONTENT */}
          <div
            className={`relative flex flex-col justify-between rounded-[20px] p-[30px] md:p-[48px]`}
            style={{
              background: activeTab.rightBg,
              color: activeTab.color || "#000",
            }}
          >
            <p className="pb-4 !text-[20px] md:!text-[36px]">
              “{activeTab.quote}”
            </p>

            <div className="flex items-center justify-between border-t border-[#5e5e5e1f] pt-6">
              <div className="flex items-center gap-4">
                <Image
                  src={activeTab.avatar}
                  alt={activeTab.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="libreItalic !text-[16px] md:!text-[20px]">
                    {activeTab.author}
                  </p>
                  <p className="!text-[14px]">{activeTab.role}</p>
                </div>
              </div>

              {activeTab.clutchLogo && (
                <div className="text-right">
                  <Image
                    src={activeTab.clutchLogo}
                    alt=""
                    width={100}
                    height={100}
                    className="w-[100px]"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
