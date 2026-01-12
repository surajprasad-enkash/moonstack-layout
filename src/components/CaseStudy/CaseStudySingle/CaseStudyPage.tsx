"use client";

import { useEffect, useState } from "react";

import CaseHero from "./CaseHero";
import CaseOverview from "./CaseOverview";
import CaseResults from "./CaseResults";
import ProjectCTA from "@/components/ProjectCTA/ProjectCTA";
import Space from "@/components/Space";
import ProcessSection from "./ProcessSection";
import Heading from "@/components/Heading/Heading";
import CaseStudyHighlight from "./CaseStudyHighlight";
import CaseStudyMoodboard from "./CaseStudyMoodboard";

interface Props {
  slug: string;
  apiKey: string;
}

export default function CaseStudyPage({ slug, apiKey }: Props) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchCaseStudy = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://moonstack.co/wp-json/moonstack/v1/case-study/${slug}`,
          {
            headers: {
              "X-API-KEY": apiKey,
            },
          },
        );

        if (!res.ok) {
          if (res.status === 404) throw new Error("Case study not found");
          if (res.status === 401 || res.status === 403)
            throw new Error("Invalid API key");
          throw new Error("Something went wrong");
        }

        const json = await res.json();

        if (json?.success === false) {
          throw new Error(json.message || "Failed to load case study");
        }

        setData(json);
      } catch (err: any) {
        console.error("Case study fetch error:", err);
        setError(err.message || "Unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [slug, apiKey]);

  /* ---------------- LOADING ---------------- */
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        {/* <Loader /> */}
      </div>
    );
  }

  /* ---------------- ERROR ---------------- */
  if (error) {
    return (
      <div className="flex h-screen items-center justify-center px-4 text-center">
        <div>
          <h2 className="mb-2 text-2xl font-semibold text-red-500">Oops!</h2>
          <p className="text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  /* ---------------- PAGE ---------------- */
  return (
    <>
      <CaseHero data={data} />

      <CaseOverview data={data} />
      {/* {data?.acf?.moodboard?.length > 0 && ( */}
        <CaseStudyMoodboard data={data.acf.moodboard} />
      {/* )} */}
      {data?.acf?.process?.length > 0 && (
        <ProcessSection process={data.acf.process} />
      )}
      <CaseStudyHighlight />
      {data?.acf?.results?.length > 0 && (
        <CaseResults results={data.acf.results} />
      )}

      <div className="px-[20px] pt-[80px]">
        <Heading
          headingTag="h2"
          className="text-center text-[#fff] md:!text-[92px]"
          content={[
            { text: "Let’s", className: "" },
            { text: "work", className: "libreItalic highlight-text" },
            { text: "together", className: "" },
          ]}
        />
        <ProjectCTA
          title="3-day FREE trial to get to know us"
          subtitle=""
          marginBottom="mb-[10px] max-w-[700px] md:!leading-[130%] mx-[auto] md:!text-[72px]"
          description="We offer you a free 3-day trial work with one of our web developers to cover your questions about our working process. "
          descriptionClass="md:!max-w-[700px]"
        />
      </div>
      <Space />
    </>
  );
}
