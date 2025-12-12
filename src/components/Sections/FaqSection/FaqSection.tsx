"use client";

import { useState } from "react";
import Heading from "@/components/Heading/Heading";
import Image from "next/image";
import icon from "../../../../public/assets/faq-icon.svg";
import images from "../../../../public/assets/faq-image.png";
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  highlight: string;
  description: string;
  classname?: string;
  faqs: FAQItem[];
}

export default function FAQSection({
  title,
  highlight,
  description,
  faqs,
  classname = "block",
}: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#000] px-6 py-20 text-white lg:px-20 overflow-hidden">
      <div className="relative z-10 container mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* LEFT SECTION */}
        <div>
          <Heading
            headingTag="h2"
            className="font-36 mb-3 pt-3 font-bold"
            content={[
              { text: `${title} `, color: "text-white" },
              { text: highlight, className: `highlight-text ${classname}` },
            ]}
          />

          <Heading
            headingTag="p"
            className="max-w-lg text-sm leading-relaxed text-white/80 md:text-base"
            content={[{ text: `${description} `, color: "text-white" }]}
          />

          <div className="relative mt-16 hidden opacity-70 lg:block">
            <div className="absolute left-[-80px]">
              <Image
                src={images.src}
                alt="pattern"
                width={550}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FAQ */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-xl border border-[#0f3c1e] transition ${isActive ? "faq-active" : "bg-[#082313]"} `}
              >
                {/* Header */}
                <button
                  className="flex w-full cursor-pointer items-center justify-between px-6 py-4"
                  onClick={() => toggleFAQ(index)}
                >
                  <p
                    className={`text-start text-sm font-medium md:text-base ${
                      isActive ? "text-white" : "text-white/80"
                    }`}
                  >
                    {item.question}
                  </p>

                  <span
                    className={`transform text-xl transition-transform ${
                      isActive ? "rotate-180 text-green-400" : "text-white"
                    }`}
                  >
                    <Image
                      src={icon}
                      alt="arrow icon"
                      width={20}
                      height={20}
                      className={`${
                        isActive ? "brightness-110" : "brightness-75"
                      } transition`}
                    />
                  </span>
                </button>

                {/* Body */}
                <div
                  className={`overflow-hidden px-6 text-white/70 transition-all duration-500 ${
                    isActive ? "max-h-[300px] py-2" : "max-h-0 py-0"
                  }`}
                >
                  <p className="text-sm leading-relaxed md:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* BACKGROUND EFFECTS */}
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-green-600/10 blur-3xl"></div>
      <div className="absolute top-10 right-10 h-[300px] w-[300px] rounded-full bg-green-400/10 blur-3xl"></div>
    </section>
  );
}
