"use client";
import { FC } from "react";
import Heading from "@/components/Heading/Heading";
import PiramidAnimation from "@/components/PiramidAnimation";

interface ProcessProps {
  heading?: { text: string; color?: string; className?: string }[];
  description?: { text: string; color?: string; className?: string }[];
}

const ProcessSection: FC<ProcessProps> = ({
  heading = [],
  description = [],
}) => {
  return (
    <section className="w-full bg-black text-white">
      <div className="container mx-auto flex items-center px-4 py-12 sm:px-10 md:py-20">
        <div className="mb-12 w-1/2 items-start justify-between gap-4 pt-5 md:flex-row">
          <Heading
            headingTag="h3"
            className="pb-4 font-semibold text-white"
            content={heading ?? []} // SAFE PASS
          />

          <Heading
            headingTag="p"
            className="text-light-grey pb-6"
            content={description ?? []} // SAFE PASS
          />
        </div>

        {/* BENEFITS GRID */}
        <div className="w-1/2">
          <PiramidAnimation />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
