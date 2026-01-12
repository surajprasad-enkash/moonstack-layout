"use client";
import React from "react";

interface StepItem {
  number: string | number;
  title: string;
  description: string;
}

interface WorkflowProps {
  heading: string;
  subHeading?: string;
  steps?: StepItem[]; // make optional to avoid TypeScript error
}

const WorkflowSection: React.FC<WorkflowProps> = ({
  heading,
  subHeading,
  steps = [], // <-- DEFAULT VALUE FIX
}) => {
  return (
    <section className="relative w-full bg-black px-6 py-16 text-white">
      <div className="container mx-auto">

        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold">{heading}</h2>
          {subHeading && <p className="mt-2 text-gray-300">{subHeading}</p>}
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-4">
          {(steps ?? []).map((step, i) => (   // <-- SAFE MAP FIX
            <div key={i} className="flex flex-col items-start gap-4 pb-[120px]">
              <div className="font-36 z-10 flex w-fit items-center justify-center rounded-tl-[10px] bg-[#00B33F] px-4 py-2 font-semibold text-white">
                {String(step.number).padStart(2, "0")}
              </div>

              <div>
                <h3 className="mb-1 pt-[60px] font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-primary pointer-events-none absolute top-[217px] left-1/2 container hidden h-[403px] w-[91%] max-w-[1150px] -translate-x-1/2 rounded-2xl border border-l-0 border-dashed md:block"></div>
      </div>
    </section>
  );
};

export default WorkflowSection;
