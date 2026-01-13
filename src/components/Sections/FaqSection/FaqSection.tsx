"use client";

import { useState } from "react";
import Heading from "@/components/Heading/Heading";
import Image from "next/image";
import icon from "@/assets/faq-icon.svg";
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  highlight?: string;
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
    <section className="faqSection relative w-full px-[20px] py-[80px] text-white">
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
          {faqs.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`faq-active overflow-hidden rounded-xl transition`}
              >
                {/* Header */}
                <button
                  className="hover:text-primary-yellow flex w-full cursor-pointer items-center justify-between px-6 py-4"
                  onClick={() => toggleFAQ(index)}
                >
                  <h5
                    className={`hover:text-primary-yellow text-start font-medium ${
                      isActive
                        ? "hover:text-primary-yellow text-white"
                        : "text-white/80"
                    }`}
                  >
                    {item.question}
                  </h5>

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
      <div className="absolute bottom-0 left-0 flex h-[550px] w-[500px] items-end"></div>
      <div className="absolute top-10 right-10 h-[300px] w-[300px] rounded-full bg-green-400/10 blur-3xl"></div>
    </section>
  );
}
