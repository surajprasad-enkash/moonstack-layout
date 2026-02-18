"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

/* ---------------- TYPES ---------------- */

export interface StepItem {
  step?: string
  description?: string
  icon?: string
  desktop?: string
  tablet?: string
}

interface NextStepsSectionProps {
  heading?: string
  steps: StepItem[]
  className?: string
}

/* ---------------- COMPONENT ---------------- */

export default function NextStepsSection({
  heading = "What are the Next Steps?",
  steps,
  className,
}: NextStepsSectionProps) {
  return (
    <section
      className={cn(
        "relative z-[1] px-[20px] py-[80px] text-white md:py-[140px]",
        className
      )}
    >
      <div className="container">
        {/* ---------------- HEADING ---------------- */}
        <div className="mb-[40px] text-center">
          <h2 className="text-[36px] font-light md:text-[48px]">
            {heading.split("next steps").map((part, index) =>
              index === 1 ? (
                <span key={index}>
                  <span className="libreItalic highlight-text font-normal">
                    next steps
                  </span>
                  {part}
                </span>
              ) : (
                part
              )
            )}
          </h2>
        </div>

        {/* ---------------- STEPS ---------------- */}
        <div className="flex flex-wrap gap-[20px] border-t border-[#ffffff4d] md:flex-nowrap md:gap-[40px]">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                step.desktop ? "md:w-[25px]" : "md:w-[calc(25%-65px)]"
              )}
            >
              {/* Image */}
              {step.desktop && (
                <div className="max-w-[25px]">
                  <Image
                    src={step.desktop}
                    alt="Next step illustration"
                    width={25}
                    height={150}
                    className="mt-[-.5px] hidden w-full object-cover md:block"
                    priority
                  />

                  {step.tablet && (
                    <Image
                      src={step.tablet}
                      alt="Next step illustration"
                      width={250}
                      height={150}
                      className="block hidden w-full object-contain md:hidden"
                    />
                  )}
                </div>
              )}

              {/* Content */}
              {step.step && (
                <div className="pt-[20px]">
                  <div className="mb-[20px] flex items-center gap-[10px]">
                    {step.icon && (
                      <Image
                        src={step.icon}
                        alt={step.step}
                        width={40}
                        height={40}
                      />
                    )}
                    <p className="font-semibold">{step.step}</p>
                  </div>

                  {step.description && (
                    <p className="text-white">{step.description}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
