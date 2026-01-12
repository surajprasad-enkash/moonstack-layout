"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Heading from "@/components/Heading/Heading";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration: 1.5,
        ease: "easeOut",
      });
    }
  }, [isInView, value, motionValue]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function CaseResults({ results }: any) {
  return (
    results?.length > 0 && (
      <section className="bg-white px-[20px] py-[80px] text-[#000]">
        <div className="container">
          <div className="flex justify-between">
            <div>
              <Heading
                headingTag="h2"
                className="text-[#000]"
                content={[
                  { text: "Results", className: "highlight-text libreItalic" },
                ]}
              />
            </div>

            <div className="flex flex-wrap max-w-[930px] justify-center gap-[6px]">
              {results.map((item: any, i: number) => (
                <div
                  key={i}
                  className="w-[calc(50%-30px)] p-[40px] bg-[#e8f4ff] rounded-[24px]"
                >
                  <div className="flex items-start justify-between">
                    <div className="text-[80px] leading-none font-[500]">
                      {item.prefix}
                      <Counter value={Number(item.number)} />
                      {item.suffix}
                    </div>
                  </div>

                  <p className="mt-[24px] !font-[500] text-[#0006]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  );
}
