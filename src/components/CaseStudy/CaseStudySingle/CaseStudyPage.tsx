"use client"

import { useEffect, useState } from "react"

import CaseHero from "./CaseHero"
import CaseOverview from "./CaseOverview"
import CaseResults from "./CaseResults"
import ProjectCTA from "@/components/ProjectCTA/ProjectCTA"
import Space from "@/components/Space"
import ProcessSection from "./ProcessSection"
import Heading from "@/components/Heading/Heading"
import CaseStudyHighlight from "./CaseStudyHighlight"
import CaseStudyMoodboard from "./CaseStudyMoodboard"

interface Props {
  data?: any
}

export default function CaseStudyPage({ data }: Props) {
  /* ---------------- ERROR ---------------- */

  /* ---------------- PAGE ---------------- */
  return (
    <>
      <CaseHero data={data} />

      <CaseOverview data={data} />
      {data?.acf?.process?.length > 0 && (
        <ProcessSection process={data.acf.process} />
      )}
      {/* {data?.acf?.moodboard?.length > 0 && ( */}
      <CaseStudyMoodboard data={data.acf.moodboard} />
      {/* )} */}
      {/* {data?.acf?.uiLayout?.length > 0 && ( */}
      <CaseStudyMoodboard data={data.acf.uiLayout} />
      {/* )}
      {data?.acf?.responsiveDesign?.length > 0 && ( */}
      <CaseStudyMoodboard data={data.acf.responsiveDesign} />
      {/* )} */}
      <div className="bg-white">
        <Space />
      </div>
      <CaseStudyHighlight />
      {data?.acf?.results?.length > 0 && (
        <CaseResults results={data.acf.results} />
      )}

      <div className="pt-[60px] md:px-[20px] md:pt-[80px]">
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
          marginBottom="mb-[10px] max-w-[700px] !leading-[130%]  mx-[auto] md:!text-[72px]"
          description="We offer you a free 3-day trial work with one of our web developers to cover your questions about our working process. "
          descriptionClass="md:!max-w-[700px]"
        />
      </div>
      <Space mobileSize={0} />
    </>
  )
}
