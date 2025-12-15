"use client";
import { FC } from "react";
import Image from "next/image";
import { FiClock } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import Heading from "@/components/Heading/Heading";

interface Job {
  title: string;
  posted: string;
  location: string;
  type: string;
  description: string;
  image: string;
}

interface LatestOpportunityProps {
  heading: string;

  description: string;
  jobs?: Job[]; // <-- optional
}

const LatestOpportunity: FC<LatestOpportunityProps> = ({
  heading,

  description,
  jobs = [], // <-- DEFAULT VALUE FIX
}) => {
  return (
    <section className="w-full bg-black text-white">
      <div className="container mx-auto px-4 py-12 sm:px-10 md:py-20">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row">
          <div className="w-1/2">
            <Heading
              headingTag="h3"
              className="pb-4 font-semibold text-white"
              content={heading ?? []}
            />
          </div>

          <div className="w-1/2">
            <Heading
              headingTag="p"
              className="text-light-grey pb-6"
              content={description ?? []}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {(jobs ?? []).map((job, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl border border-[#12391e] bg-[#0d1a12] p-6 shadow-lg md:p-8"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{job.title}</h3>

                <div className="my-3 flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-3">
                    <FiClock />
                    {job.posted}
                  </div>

                  <hr className="h-3 w-[1px] bg-white" />

                  <div className="flex items-center gap-3">
                    <MdLocationPin />
                    {job.location}
                  </div>

                  <hr className="h-3 w-[1px] bg-white" />

                  <div className="flex items-center gap-3">
                    <BsPersonWorkspace />
                    {job.type}
                  </div>
                </div>

                <p className="mb-4 text-sm text-gray-400">{job.description}</p>

                <button className="bg-primary rounded-3xl px-4 py-2 text-sm font-semibold text-black transition hover:bg-green-600">
                  Join Now
                </button>
              </div>

              <div className="hidden md:block">
                <div className="flex h-36 w-36 items-center justify-center">
                  <Image
                    src={job.image}
                    alt={job.type}
                    width={144}
                    height={144}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestOpportunity;
