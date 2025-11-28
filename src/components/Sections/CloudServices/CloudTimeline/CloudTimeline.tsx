"use client";

import { useEffect, useRef, useState } from "react";
import Heading from "@/components/Heading/Heading";
import React from "react";

interface TimelineItem {
  number: string | number;
  title: string;
  description: string;
  position: "left" | "right";
}

interface CloudTimelineProps {
  title: string;
  highlight: string;
  subtitle?: string;
  steps: TimelineItem[];
}

export default function CloudTimeline({
  title,
  highlight,
  subtitle,
  steps,
}: CloudTimelineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lineHeight, setLineHeight] = useState(0);
  const [activeStep, setActiveStep] = useState(1);

  /* ----------------------- 1) Animate vertical line ------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const winHeight = window.innerHeight;

      const visible = Math.min(
        1,
        Math.max(0, (winHeight - rect.top) / (rect.height + winHeight))
      );

      const percentage = visible * 100;
      setLineHeight(percentage);

      /* ---------------- 2) Detect circle when line touches it ---------------- */
      circleRefs.current.forEach((circle, index) => {
        if (!circle) return;

        const circleRect = circle.getBoundingClientRect();
        const containerRect = containerRef.current!.getBoundingClientRect();

        const circleCenter =
          circleRect.top +
          circleRect.height / 2 -
          containerRect.top;

        const linePixelHeight =
          (percentage / 100) * containerRect.height;

        if (linePixelHeight >= circleCenter - 81) {
          setActiveStep(index + 1);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* -------------------------------------------------------------------------- */

  return (
    <section className="w-full bg-[#000] px-[20px] md:px-[80px] py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        {/* Main Heading */}
        <div className="mb-12 text-center">
          <Heading
            headingTag="h2"
            className="font-36 pt-3 text-center font-bold"
            content={[
              { text: `${title} `, color: "text-white block" },
              { text: highlight, className: "highlight-text" },
            ]}
          />
          {subtitle && (
            <Heading
              headingTag="p"
              className="font-14 pt-3 text-[12px] leading-[28px] tracking-wide text-white md:text-[14px] md:leading-[200%]"
              content={[{ text: subtitle, color: "text-white" }]}
            />
          )}
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative flex flex-col items-center">
          {/* Background Line */}
          <div className="absolute top-[50px] left-1/2 h-full w-[3px] max-h-[calc(100%-120px)] -translate-x-1/2 bg-[#1A4C2B]"></div>

          {/* Animated Line */}
          <div
            className="absolute top-[50px] left-1/2 w-[3px] max-h-[calc(100%-120px)] -translate-x-1/2 bg-[#00CF49] transition-all duration-100"
            style={{ height: `${lineHeight}%` }}
          ></div>

          <div className="w-full space-y-20 pt-10">
            {steps.map((item, index) => {
              const isActive = index + 1 <= activeStep;

              return (
                <div key={index} className="relative flex w-full">
                  {/* LEFT CONTENT */}
                  {item.position === "left" && (
                    <>
                      <div className="w-1/2 pr-20 text-left">
                        <Heading
                          headingTag="h4"
                          className={`font-20 font-semibold ${
                            isActive ? "text-[#fff]" : "text-[#fff]/40"
                          }`}
                          content={[{ text: item.title, color: "" }]}
                        />
                        <Heading
                          headingTag="p"
                          className={`font-14 pt-2 text-[12px] leading-[24px] ${
                             isActive ? "text-[#fff]" : "text-[#fff]/40"
                          }`}
                          content={[{ text: item.description, color: "" }]}
                        />
                      </div>

                      {/* Center Circle */}
                      <div className="absolute left-1/2 -translate-x-1/2">
                        <div
                          ref={(el) => {
                            circleRefs.current[index] = el;
                          }}
                          className={`relative flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300
                            ${
                              isActive
                                ? "bg-[#00CF49] after:border-[#00CF49]"
                                : "bg-[#0B2714] after:border-[#1A4C2B]"
                            }
                            after:absolute after:top-[-5px] after:right-[-5px] after:bottom-[-5px] after:left-[-5px]
                            after:rounded-full after:border-2 after:content-['']`}
                        >
                          <span
                            className={`text-lg font-bold ${
                              isActive ? "text-[#fff]" : "text-[#fff]/40"
                            }`}
                          >
                            {item.number}
                          </span>
                        </div>
                      </div>

                      <div className="hidden w-1/2 md:block"></div>
                    </>
                  )}

                  {/* RIGHT CONTENT */}
                  {item.position === "right" && (
                    <>
                      <div className="hidden w-1/2 md:block"></div>

                      {/* Center Circle */}
                      <div className="absolute left-1/2 -translate-x-1/2">
                        <div
                          ref={(el) => {
                            circleRefs.current[index] = el;
                          }}
                          className={`relative flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300
                            ${
                              isActive
                                ? "bg-[#00CF49] after:border-[#00CF49]"
                                : "bg-[#0B2714] after:border-[#1A4C2B]"
                            }
                            after:absolute after:top-[-5px] after:right-[-5px] after:bottom-[-5px] after:left-[-5px]
                            after:rounded-full after:border-2 after:content-['']`}
                        >
                          <span
                            className={`text-lg font-bold ${
                              isActive ? "text-[#fff]" : "text-[#fff]/40"
                            }`}
                          >
                            {item.number}
                          </span>
                        </div>
                      </div>

                      <div className="w-1/2 pl-20 text-left">
                        <Heading
                          headingTag="h4"
                          className={`font-20 font-semibold ${
                            isActive ? "text-[#fff]" : "text-[#fff]/40"
                          }`}
                          content={[{ text: item.title, color: "" }]}
                        />
                        <Heading
                          headingTag="p"
                          className={`font-14 pt-2 text-[12px] leading-[24px] ${
                            isActive ? "text-[#fff]" : "text-[#fff]/40"
                          }`}
                          content={[{ text: item.description, color: "" }]}
                        />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
