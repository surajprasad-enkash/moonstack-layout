"use client";

import Image from "next/image";
import Heading, { HeadingSegment } from "@/components/Heading/Heading";
import vector from "@/assets/app-development-images/processVector.svg";
import { cn } from "@/lib/utils";

interface StageItem {
  text: string;
  split?: boolean;
}

interface Stage {
  stage: string;
  title: string;
  gradient: string;
  items: StageItem[];
}

interface ProcessStagesProps {
  heading: string | HeadingSegment[];
  description?: string;
  className?: string;
}

const stages: Stage[] = [
  {
    stage: "STAGE 1",
    title: "Discovery & Planning",
    gradient: "from-[#20E3B2] ",
    items: [
      { text: "Requirement briefing" },
      { text: "Understanding business" },
      { text: "Product & market research" },
      { text: "Competitor analysis" },
      { text: "Product validation" },
    ],
  },
  {
    stage: "STAGE 2",
    title: "UX & UI Design",
    gradient: "from-[#1f8827] to-[#2ECCFA]",
    items: [
      { text: "Wireframes", split: true },
      { text: "Prototyping", split: true },
      { text: "Layouts & responsiveness" },
      { text: "Design system setup" },
      { text: "UI guidelines" },
      { text: "User flows", split: true },
      { text: "Visual design", split: true },
    ],
  },
  {
    stage: "STAGE 3",
    title: "Development, Testing & QA",
    gradient: "from-[#085d0f] to-[#5af992] ",
    items: [
      { text: "Design-to-development" },
      { text: "Collaboration functional" },
      { text: "Performance", split: true },
      { text: "Bug fixing", split: true },
      { text: "Validation & refinements" },
      { text: "UI/UX", split: true },
      { text: "Security testing", split: true },
    ],
  },
  {
    stage: "STAGE 4",
    title: "Delivery & Support",
    gradient: "from-[#5af992] to-[#08300e]",
    items: [
      { text: "Final review", split: true },
      { text: "Support", split: true },
      { text: "Production deployment" },
      { text: "App store submission" },
      { text: "Launch monitoring" },
      { text: "Post-launch improvements" },
    ],
  },
];

export default function ProcessStages({
  heading,
  description,
  className,
}: ProcessStagesProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-black pt-[120px] text-white",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08)_1px,_transparent_1px)] bg-[length:24px_24px]" />

      <div className="container mx-auto px-4">
        {/* HEADING */}
        <div className="mx-auto mb-[72px] max-w-[60%] text-center">
          <Heading
            headingTag="h2"
            content={heading}
            className="mb-6 text-white"
          />

          {description && (
            <Heading
              headingTag="p"
              content={description}
              className="!text-[18px] !font-[500] text-white"
            />
          )}
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          {stages.map((stage, index) => (
            <div
              key={index}
              className={`relative border border-r-0 border-b-0 border-l-0 border-white/15 bg-black/40 p-6 !pb-0 backdrop-blur ${
                index === 0
                  ? "rounded-r-[8px] border-l-0"
                  : index === stages.length - 1
                    ? "rounded-l-[8px] border-r-0 border-b-0"
                    : "rounded-[8px]"
              }`}
            >
              <span className="mb-6 block text-center text-sm tracking-widest text-white/60">
                {stage.stage}
              </span>

              <div
                className={`mx-auto mb-6 w-fit rounded-full bg-gradient-to-r text-center ${stage.gradient} px-6 py-3 text-center text-sm font-medium`}
              >
                {stage.title}
              </div>

              <div className="flex flex-wrap gap-3">
                {stage.items.map((item, i) => (
                  <div
                    key={i}
                    className={`items-center rounded-full border border-white/20 bg-black/40 px-4 py-2 text-center text-sm text-white/90 ${
                      item.split ? "w-[calc(50%-6px)] text-center" : "w-full"
                    }`}
                  >
                    {item.text}
                  </div>
                ))}
              </div>

              {index !== stages.length - 1 && (
                <span
                  className="absolute top-0 right-[-9px] block h-[200px] w-[1px] rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(rgba(255, 255, 255, 0.2) 0%, rgb(255, 255, 255, 0) 100%)",
                  }}
                />
              )}

              {index !== stages.length - 1 && (
                <span className="absolute top-0 right-[-27px] block h-8 w-[37px]">
                  <Image src={vector} alt={""} />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
