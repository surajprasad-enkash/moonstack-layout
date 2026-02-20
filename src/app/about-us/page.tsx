import dynamic from "next/dynamic"
import Layout from "@/components/Layout"
import React from "react"
import HeroSection from "@/components/about/heroSection"
import Space from "@/components/Space"

const AboutGallery = dynamic(() => import("@/components/about/aboutGallerySection"))
const AboutStepper = dynamic(() => import("@/components/about/aboutStepper"))
const TeamSection = dynamic(() => import("@/components/about/teamSection"))
const LocationSection = dynamic(() => import("../contact-us/locationSection"))
const OurValuesSection = dynamic(() => import("@/components/about/valueSection"))
const ImpactStatsSection = dynamic(() => import("@/components/about-page/ImpactStatsSection"))
const DnaSection = dynamic(() => import("@/components/about-page/DnaSection"))
const IndustryExperienceSection = dynamic(() => import("@/components/Industries/IndustryExperienceSection"))
import { impactStatsData } from "@/components/about-page/data/impactStats"
import { Metadata } from "next"
import { buildMetadata } from "@/helper/generateMetadata "
import {
  aboutDnaData,
  aboutLocationData,
  aboutIndustryExperienceData,
} from "@/constants/about"

export const generateMetadata = (): Metadata => {
  return buildMetadata({
    title: " About Moonstack | Client Oriented Development Company in India",
    description:
      "Want to know who is behind Moonstack? Learn how our India‑based Development team helps startups and businesses ship reliable apps, websites, and digital products.",
    canonical: "https://www.moonstack.com/about-us",
  })
}
const AboutUs = (): React.JSX.Element => {
  return (
    <>
      <Layout>
        <HeroSection />
        <AboutGallery />
        <AboutStepper />
        <TeamSection />
        <ImpactStatsSection data={impactStatsData} />
        <DnaSection
          title={aboutDnaData.title}
          mission={aboutDnaData.mission}
          vision={aboutDnaData.vision}
        />
        <OurValuesSection />

        <LocationSection
          heading={aboutLocationData.heading}
          buttonText={aboutLocationData.buttonText}
          buttonLink={aboutLocationData.buttonLink}
        />
        <IndustryExperienceSection
          heading={aboutIndustryExperienceData.heading}
          description={aboutIndustryExperienceData.description}
          industries={aboutIndustryExperienceData.industries}
        />
        <Space />
      </Layout>
    </>
  )
}

export default AboutUs
