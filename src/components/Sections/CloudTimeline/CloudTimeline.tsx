"use client"

import { useEffect, useRef, useState } from "react"
import Heading from "@/components/Heading/Heading"
import React from "react"

interface TimelineItem {
  number: string | number
  title: string
  description: string
  position: "left" | "right"
}

interface CloudTimelineProps {
  title: string
  highlight: string
  subtitle?: string
  steps: TimelineItem[]
}

export default function CloudTimeline({
  title,
  highlight,
  subtitle,
  steps,
}: CloudTimelineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const stepsWrapperRef = useRef<HTMLDivElement | null>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const circleRefs = useRef<(HTMLDivElement | null)[]>([])

  const [lineHeight, setLineHeight] = useState(0)
  const [activeStep, setActiveStep] = useState(1)
  const [lineMaxHeight, setLineMaxHeight] = useState(0)

  /* ================= SCROLL LOGIC ================= */
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const winHeight = window.innerHeight

      const visible = Math.min(
        1,
        Math.max(0, (winHeight - rect.top) / (rect.height + winHeight))
      )

      const percentage = visible * 100
      setLineHeight(percentage)

      circleRefs.current.forEach((circle, index) => {
        if (!circle || !containerRef.current) return

        const circleRect = circle.getBoundingClientRect()
        const containerRect = containerRef.current.getBoundingClientRect()

        const circleCenter =
          circleRect.top + circleRect.height / 2 - containerRect.top

        const linePixelHeight = (percentage / 100) * containerRect.height

        if (linePixelHeight >= circleCenter - 80) {
          setActiveStep(index + 1)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* ================= LINE HEIGHT FIX ================= */
  useEffect(() => {
    if (!stepsWrapperRef.current || stepRefs.current.length === 0) return

    const wrapperRect = stepsWrapperRef.current.getBoundingClientRect()
    const lastStep = stepRefs.current[stepRefs.current.length - 1]

    if (!lastStep) return

    setLineMaxHeight(
      wrapperRect.height - lastStep.getBoundingClientRect().height
    )
  }, [steps])

  return (
    <section className="w-full bg-black px-4 py-20 text-white md:px-[80px]">
      <div className="container md:px-[50px]">
        {/* ================= HEADING ================= */}
        <div className="mb-12 text-center">
          <Heading
            headingTag="h2"
            className="font-bold"
            content={[
              { text: `${title} `, color: "text-white block" },
              { text: highlight, className: "highlight-text libreItalic" },
            ]}
          />
          {subtitle && (
            <Heading
              headingTag="p"
              className="text-primary-grey pt-3 md:mx-auto md:max-w-[900px]"
              content={[{ text: subtitle }]}
            />
          )}
        </div>

        {/* ================= MOBILE TIMELINE ================= */}
        <div className="relative md:hidden">
          <div className="absolute top-0 left-5 hidden h-full w-[2px] bg-[#1A4C2B]" />

          <div className="space-y-12">
            {steps.map((item, index) => {
              const isActive = index + 1 <= activeStep

              return (
                <div
                  key={index}
                  ref={(el) => {
                    stepRefs.current[index] = el
                  }}
                  className="relative md:pl-16"
                >
                  {/* Circle */}
                  <div
                    ref={(el) => {
                      circleRefs.current[index] = el
                    }}
                    className={`absolute top-0 left-0 flex hidden h-10 w-10 items-center justify-center rounded-full md:block ${
                      isActive ? "bg-[#00CF49]" : "bg-[#0B2714]"
                    }`}
                  >
                    <span className="text-sm font-bold text-white">
                      {item.number}
                    </span>
                  </div>

                  <Heading
                    headingTag="h4"
                    className={`font-semibold break-words ${
                      isActive ? "text-white" : "text-white/40"
                    }`}
                    content={[{ text: item.title }]}
                  />

                  <Heading
                    headingTag="p"
                    className={`pt-1 text-sm leading-6 break-words ${
                      isActive ? "text-primary-grey" : "text-white/40"
                    }`}
                    content={[{ text: item.description }]}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* ================= DESKTOP TIMELINE ================= */}
        <div
          ref={containerRef}
          className="relative hidden flex-col items-center md:flex"
        >
          {/* Base Line */}
          <div
            className="absolute top-[50px] left-1/2 hidden w-[3px] -translate-x-1/2 bg-[#1A4C2B] md:block"
            style={{ height: `${lineMaxHeight}px` }}
          />

          {/* Active Line */}
          <div
            className="absolute top-[50px] left-1/2 hidden w-[3px] -translate-x-1/2 bg-[#00CF49] md:block"
            style={{
              height: `${lineHeight}%`,
              maxHeight: `${lineMaxHeight}px`,
            }}
          />

          <div ref={stepsWrapperRef} className="w-full space-y-20 pt-10">
            {steps.map((item, index) => {
              const isActive = index + 1 <= activeStep

              return (
                <div
                  key={index}
                  ref={(el) => {
                    stepRefs.current[index] = el
                  }}
                  className="relative flex w-full"
                >
                  {item.position === "left" && (
                    <>
                      <div className="w-1/2 pr-20">
                        <Heading
                          headingTag="h4"
                          className={`font-semibold ${
                            isActive ? "text-white" : "text-white/40"
                          }`}
                          content={[{ text: item.title }]}
                        />
                        <Heading
                          headingTag="p"
                          className={`pt-2 text-sm leading-6 ${
                            isActive ? "text-primary-grey" : "text-white/40"
                          }`}
                          content={[{ text: item.description }]}
                        />
                      </div>

                      <TimelineCircle
                        index={index}
                        isActive={isActive}
                        circleRefs={circleRefs}
                      />

                      <div className="w-1/2" />
                    </>
                  )}

                  {item.position === "right" && (
                    <>
                      <div className="w-1/2" />

                      <TimelineCircle
                        index={index}
                        isActive={isActive}
                        circleRefs={circleRefs}
                      />

                      <div className="w-1/2 pl-20">
                        <Heading
                          headingTag="h4"
                          className={`font-semibold ${
                            isActive ? "text-white" : "text-white/40"
                          }`}
                          content={[{ text: item.title }]}
                        />
                        <Heading
                          headingTag="p"
                          className={`pt-2 text-sm leading-6 ${
                            isActive ? "text-primary-grey" : "text-white/40"
                          }`}
                          content={[{ text: item.description }]}
                        />
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================= CIRCLE COMPONENT ================= */
function TimelineCircle({
  index,
  isActive,
  circleRefs,
}: {
  index: number
  isActive: boolean
  circleRefs: React.MutableRefObject<(HTMLDivElement | null)[]>
}) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2">
      <div
        ref={(el) => {
          circleRefs.current[index] = el
        }}
        className={`flex h-14 w-14 items-center justify-center rounded-full ${
          isActive ? "bg-[#00CF49]" : "bg-[#0B2714]"
        }`}
      >
        <span className="font-bold text-white">{index + 1}</span>
      </div>
    </div>
  )
}
