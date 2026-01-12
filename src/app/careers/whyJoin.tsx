"use client";
import { FC } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Heading from "@/components/Heading/Heading";

interface Benefit {
  title: string;
  description: string;
}

interface WhyJoinProps {
  heading?: { text: string; color?: string; className?: string }[];
  description?: { text: string; color?: string; className?: string }[];
  benefits?: Benefit[];
}

const WhyJoinSection: FC<WhyJoinProps> = ({
  heading = [],
  description = [],
  benefits = [],
}) => {
  return (
    <section className="w-full bg-black text-white">
      <div className="container mx-auto px-4 py-12 sm:px-10 md:py-20">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row">
          <div className="w-1/2">
            <Heading
              headingTag="h2"
              className="pb-4 font-bold text-white"
              content={heading ?? []}
            />
          </div>

          <div className="w-1/2">
            <Heading
              headingTag="p"
              className="text-light-grey pb-6"
              content={description ?? []} // SAFE PASS
            />
          </div>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {(benefits ?? []).map((item, index) => (
            <div
              key={index}
              className="flex items-start justify-between rounded-xl border border-[#12391e] bg-[#0a170e] p-6 shadow-lg"
            >
              <div>
                <h6 className="text-lg font-bold">{item.title}</h6>
                <p className="mt-2 text-sm text-gray-400">{item.description}</p>
              </div>

              <FaCheckCircle className="text-primary h-6 w-6 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
