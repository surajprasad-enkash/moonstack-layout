"use client";

import { FC, useEffect, useState } from "react";
import { FiClock } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { GrUserExpert } from "react-icons/gr";
import Heading from "@/components/Heading/Heading";
import CustomButton from "@/components/CommanButton/CommanButton";

interface Job {
  id: number;
  title: string;
  publish_date: string;
  location: string;
  job_mode: string;
  description: string;
  experience: string;
}

interface LatestOpportunityProps {
  heading: string;
  description: string;
}

const LatestOpportunity: FC<LatestOpportunityProps> = ({
  heading,
  description,
}) => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(
          "https://resources.moonstack.co/wp-json/jobs/v1/list",
          {
            headers: {
              "x-api-key":
                "a9f4e2c8d1b73a6f98c0b2e47a5d1f9c6e8b0a2c7f5d4e3b92e4b7a1c8f6d",
            },
          }
        );
        const data = await res.json();
        if (data.status && data.data) {
          // Map API fields to our Job interface
          const formattedJobs = data.data.map((job: any) => ({
            id: job.id,
            title: job.title.replace(/&#8211;/g, "–"),
            publish_date: job.publish_date,
            location: job.location,
            job_mode: job.job_mode,
            experience: job.experience,
            description: job.description,
          }));
          setJobs(formattedJobs);
        }
      } catch (err) {
        console.error("Failed to fetch jobs", err);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="w-full bg-black text-white">
      <div className="container mx-auto px-4 py-12 sm:px-10 md:py-20">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row">
          <div className="w-1/2">
            <Heading
              headingTag="h2"
              className="pb-4 font-bold text-white"
              content={heading ?? ""}
            />
          </div>
          <div className="w-1/2">
            <Heading
              headingTag="p"
              className="text-light-grey pb-6"
              content={description ?? ""}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="flex items-center justify-between rounded-xl border border-[#12391e] bg-[#0d1a12] p-6 shadow-lg md:p-8"
            >
              <div className="flex-1">
                <h5 className="text-xl font-semibold">{job.title}</h5>

                <div className="my-3 flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-3">
                    <FiClock />
                    {job.publish_date}
                  </div>

                  <hr className="h-3 w-[1px] bg-white" />

                  <div className="flex items-center gap-3">
                    <MdLocationPin />
                    {job.location}
                  </div>

                  <hr className="h-3 w-[1px] bg-white" />

                  <div className="flex items-center gap-3">
                    <BsPersonWorkspace />
                    {job.job_mode}
                  </div>
                  <hr className="h-3 w-[1px] bg-white" />

                  <div className="flex items-center gap-3 text-white">
                    <GrUserExpert />
                    {job.experience}
                  </div>
                </div>

                <p className="mb-4 text-sm text-gray-400">{job.description}</p>
              </div>

              <div className="flex h-36 w-36 items-center justify-center">
                <CustomButton text={"Join Now"} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestOpportunity;
