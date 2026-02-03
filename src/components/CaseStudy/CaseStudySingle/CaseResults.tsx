"use client"

import { useEffect, useRef } from "react"
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion"
import { FiArrowUpRight } from "react-icons/fi"
import Heading from "@/components/Heading/Heading"

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => Math.round(latest))
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration: 1.5,
        ease: "easeOut",
      })
    }
  }, [isInView, value, motionValue])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

export default function CaseResults({ results }: any) {
  return (
    results?.length > 0 && (
      <section className="bg-white px-[20px] py-[60px] text-[#000] md:py-[80px]">
        <div className="container">
          <div className="justify-between md:flex">
            <div>
              <Heading
                headingTag="h2"
                className="mb-[30px] text-[#000] md:mb-0"
                content={[
                  { text: "Results", className: "highlight-text libreItalic" },
                ]}
              />
            </div>

            <div className="flex max-w-[930px] flex-wrap justify-center gap-[6px]">
              {results.map((item: any, i: number) => (
                <div
                  key={i}
                  className="w-full rounded-[24px] bg-[#e8f4ff] p-[40px] md:w-[calc(50%-30px)]"
                >
                  <div className="flex items-start justify-between">
                    <div className="text-[80px] leading-none font-[500]">
                      {item.prefix}
                      <Counter value={Number(item.number)} />
                      {item.suffix}
                    </div>
                  </div>

                  <p className="mt-[24px] !font-[500] text-[#0006]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  )
}
