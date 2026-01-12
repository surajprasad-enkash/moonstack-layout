"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Heading from "../Heading/Heading";

interface TabItem {
  id: string;
  logo: string;
  company: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating?: number;
  rightBg?: string;
  color?: string;
  clutchLogo?: string;
}

interface TestimonialsTabsProps {
  tabs: TabItem[];
  className?: string;
}

export default function TestimonialsTabs({
  tabs,
  className,
}: TestimonialsTabsProps) {
  const [activeId, setActiveId] = useState(tabs[0]?.id);

  const activeTab = tabs.find((tab) => tab.id === activeId);
  if (!activeTab) return null;

  return (
    <section className={cn("relative z-[1] px-[20px] text-white", className)}>
      <div className="container mx-auto">
        {/* Heading */}
        <span className="font-[500] block text-xs tracking-widest text-white/60 uppercase mb-[20px] md:mb-[0]">Verified reviews</span>
        <div className="mx-auto mb-[72px] max-w-[680px] text-center">
          <Heading
            headingTag="h2"
            content={[
              { text: "Join 250+ companies" },
              {
                text: "who’ve built and scaled",
                className: "libreItalic font-[400] highlight-text",
              },
              { text: "with our Arounda team" },
            ]}
          />
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 gap-[10px] lg:grid-cols-[260px_1fr]">
          {/* LEFT TABS */}
          <div className="flex flex-col gap-[10px]">
            {tabs.map((tab,index) => {
              const isActive = tab.id === activeId;

              return (
                <button
                  key={index}
                  onClick={() => setActiveId(tab.id)}
                  className={cn(
                    "flex  cursor-pointer items-center py-[40px] justify-center rounded-xl transition-all duration-300",
                    isActive
                      ? "tastimonials_button"
                      : "bg-white/10 hover:bg-white/20",
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
              );
            })}
          </div>

          {/* RIGHT CONTENT */}
          <div
            className={`relative rounded-[20px] flex justify-between flex-col  p-[48px]`}
            style={{
              background: activeTab.rightBg,
              color: activeTab.color || "#000",
            }}
          >
            <p className=" md:!text-[36px] !text-[20px]">
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
                  <p className="md:!text-[20px] !text-[16px] libreItalic">{activeTab.author}</p>
                  <p className="!text-[14px] ">{activeTab.role}</p>
                </div>
              </div>

              {activeTab.clutchLogo && (
                <div className="text-right">
                  <Image
                    src={activeTab.clutchLogo}
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
