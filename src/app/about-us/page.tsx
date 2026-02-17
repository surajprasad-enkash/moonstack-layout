import Layout from "@/components/Layout"
import React from "react"
import HeroSection from "@/components/about/heroSection"
import AboutGallery from "@/components/about/aboutGallerySection"
import AboutStepper from "@/components/about/aboutStepper"
import TeamSection from "@/components/about/teamSection"
import LocationSection from "../contact-us/locationSection"
import OurValuesSection from "@/components/about/valueSection"
import ImpactStatsSection from "@/components/about-page/ImpactStatsSection"
import { impactStatsData } from "@/components/about-page/data/impactStats"
import DnaSection from "@/components/about-page/DnaSection"
import IndustryExperienceSection from "@/components/Industries/IndustryExperienceSection"
import Space from "@/components/Space"
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
