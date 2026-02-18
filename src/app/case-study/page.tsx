import React from "react"
import { Metadata } from "next"

// components
import Layout from "@/components/Layout"
import WorksHeroSection from "@/components/CaseStudy/WorksHeroSection"
import CaseStudySection from "@/components/CaseStudy/CaseStudySection"
import ProjectCTA from "@/components/ProjectCTA/ProjectCTA"

// helpers
import { getCaseStudiesServer } from "@/helper"
import { buildMetadata } from "@/helper/generateMetadata "

export const generateMetadata = (): Metadata => {
  return buildMetadata({
    title: "Moonstack Case Studies | App & Web Success Stories",
    description:
      "See Moonstack’s app, web, and product case studies showing how we solve complex problems and grow client revenue with our futuristic Development service.",
    canonical: "https://www.moonstack.com/case-study",
  })
}

interface CaseStudyProps {
  searchParams?: {
    page?: string
  }
}

export default async function CaseStudy({ searchParams }: CaseStudyProps) {
  const page = Number(searchParams?.page ?? 1)
  const perPage = 10

  const { items, totalPages } = await getCaseStudiesServer(page, perPage)

  return (
    <Layout>
      <WorksHeroSection />

      <CaseStudySection
        initialItems={items}
        totalPages={totalPages}
        initialPage={page}
        perPage={perPage}
      />

      <div className="relative z-[2]">
        <ProjectCTA
          title="Ready to Scale"
          subtitle="Your Business?"
          description="Book a free consultation to get clarity, direction, and expert advice you can implement right away."
          fontSize="md:!text-[80px] !text-[40px] !leading-[130%]"
          marginBottom="mb-0"
          whiteBoxClass=""
        />
      </div>
    </Layout>
  )
}
