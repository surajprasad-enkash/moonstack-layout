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
  const stepsWrapperRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [lineHeight, setLineHeight] = useState(0);
  const [activeStep, setActiveStep] = useState(1);
  const [lineMaxHeight, setLineMaxHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const winHeight = window.innerHeight;

      const visible = Math.min(
        1,
        Math.max(0, (winHeight - rect.top) / (rect.height + winHeight)),
      );

      const percentage = visible * 100;
      setLineHeight(percentage);

      circleRefs.current.forEach((circle, index) => {
        if (!circle || !containerRef.current) return;

        const circleRect = circle.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();

        const circleCenter =
          circleRect.top + circleRect.height / 2 - containerRect.top;

        const linePixelHeight = (percentage / 100) * containerRect.height;

        if (linePixelHeight >= circleCenter - 81) {
          setActiveStep(index + 1);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!stepsWrapperRef.current || stepRefs.current.length === 0) return;

    const wrapperRect = stepsWrapperRef.current.getBoundingClientRect();
    const lastStep = stepRefs.current[stepRefs.current.length - 1];
    if (!lastStep) return;

    const lastStepRect = lastStep.getBoundingClientRect();

    const wrapperHeight = wrapperRect.height;
    const lastStepHeight = lastStepRect.height;

    // ⭐ FINAL RESULT
    const finalHeight = wrapperHeight - lastStepHeight + 0;

    setLineMaxHeight(finalHeight);
  }, [steps]);

  return (
    <section className="w-full px-[20px] py-20 text-white md:px-[80px]">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <Heading
            headingTag="h2"
            className="pt-3 text-center font-bold"
            content={[
              { text: `${title} `, color: "text-white block" },
              { text: highlight, className: "highlight-text" },
            ]}
          />

          {subtitle && (
            <Heading
              headingTag="p"
              className="text-primary-grey pt-3"
              content={[{ text: subtitle, color: "text-primary-grey" }]}
            />
          )}
        </div>

        <div ref={containerRef} className="relative flex flex-col items-center">
          <div
            className="absolute top-[50px] left-1/2 w-[3px] -translate-x-1/2 bg-[#1A4C2B]"
            style={{ height: `${lineMaxHeight}px` }}
          ></div>

          <div
            className="absolute top-[50px] left-1/2 w-[3px] -translate-x-1/2 bg-[#00CF49] transition-all duration-100"
            style={{
              height: `${lineHeight}%`,
              maxHeight: `${lineMaxHeight}px`,
            }}
          ></div>

          <div ref={stepsWrapperRef} className="w-full space-y-20 pt-10">
            {steps.map((item, index) => {
              const isActive = index + 1 <= activeStep;

              return (
                <div
                  key={index}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  className="relative flex w-full"
                >
                  {item.position === "left" && (
                    <>
                      <div className="w-1/2 pr-20 text-left">
                        <Heading
                          headingTag="h4"
                          className={`font-20 font-semibold ${
                            isActive ? "text-white" : "text-white/40"
                          }`}
                          content={[{ text: item.title, color: "" }]}
                        />

                        <Heading
                          headingTag="p"
                          className={`font-14 pt-2 text-[12px] leading-[24px] ${
                            isActive ? "text-primary-grey" : "text-white/40"
                          }`}
                          content={[{ text: item.description, color: "" }]}
                        />
                      </div>

                      <div className="absolute left-1/2 -translate-x-1/2">
                        <div
                          ref={(el) => {
                            circleRefs.current[index] = el;
                          }}
                          className={`relative flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 ${
                            isActive
                              ? "bg-[#00CF49] after:border-[#00CF49]"
                              : "bg-[#0B2714] after:border-[#1A4C2B]"
                          } after:absolute after:top-[-5px] after:right-[-5px] after:bottom-[-5px] after:left-[-5px] after:rounded-full after:border-2 after:content-['']`}
                        >
                          <span
                            className={`text-lg font-bold ${
                              isActive ? "text-white" : "text-white/40"
                            }`}
                          >
                            {item.number}
                          </span>
                        </div>
                      </div>

                      <div className="hidden w-1/2 md:block"></div>
                    </>
                  )}

                  {item.position === "right" && (
                    <>
                      <div className="hidden w-1/2 md:block"></div>

                      <div className="absolute left-1/2 -translate-x-1/2">
                        <div
                          ref={(el) => {
                            circleRefs.current[index] = el;
                          }}
                          className={`relative flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 ${
                            isActive
                              ? "bg-[#00CF49] after:border-[#00CF49]"
                              : "bg-[#0B2714] after:border-[#1A4C2B]"
                          } after:absolute after:top-[-5px] after:right-[-5px] after:bottom-[-5px] after:left-[-5px] after:rounded-full after:border-2 after:content-['']`}
                        >
                          <span
                            className={`text-lg font-bold ${
                              isActive ? "text-white" : "text-white/40"
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
                            isActive ? "text-white" : "text-white/40"
                          }`}
                          content={[{ text: item.title, color: "" }]}
                        />
                        <Heading
                          headingTag="p"
                          className={`font-14 pt-2 text-[12px] leading-[24px] ${
                            isActive ? "text-primary-grey" : "text-white/40"
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
