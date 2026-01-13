import Layout from "@/components/Layout";
import React from "react";
import HeroSection from "./heroSection";
import AboutGallery from "./aboutGallerySection";
import AboutStepper from "./aboutStepper";
import TeamSection from "./teamSection";
import LocationSection from "../contact-us/locationSection";
import OurValuesSection from "./valueSection";
import ImpactStatsSection from "@/components/about-page/ImpactStatsSection";
import { impactStatsData } from "@/components/about-page/data/impactStats";
import DnaSection from "@/components/about-page/DnaSection";
import IndustryExperienceSection from "@/components/Industries/IndustryExperienceSection";

import industryicon1 from "@/assets/industries/ai/icon/dbd2_i1.png";
import industryicon2 from "@/assets/industries/ai/icon/b_i2.png";
import industryicon3 from "@/assets/industries/ai/icon/b_i4.png";
import industryicon4 from "@/assets/industries/ai/icon/_i5.png";
import Space from "@/components/Space";

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
          title={{
            before: "What is",
            highlight: "imprinted",
            after: "in our DNA",
            circled: "",
          }}
          mission={{
            label: "Mission",
            text: "We are a caring partner that provides innovative Design & Development solutions for funded startups, technology SMEs and Fortune 500 companies.",
          }}
          vision={{
            label: "Vision",
            text: "We are a full-cycle Digital Product Agency that builds and transforms amazing projects with human-centric design for the world's top companies.",
          }}
        />
        <OurValuesSection />

        <LocationSection
          heading={[
            { text: "Let`s create ", color: "text-white" },
            {
              text: "‍amazing ",
              className: "highlight-text libreItalic",
            },
            {
              text: "‍digital experiences together",
              color: "text-white",
            },
          ]}
          buttonText="Schedule a call"
          buttonLink="/contact-us"
        />
        <IndustryExperienceSection
          heading={[
            { text: "We have ", color: "text-white" },
            { text: "extensive ", className: "highlight-text libreItalic" },
            {
              text: "industry experiences",
              color: "text-white",
              className:
                "relative inline-block after:absolute after:-bottom-2 after:left-0 after:h-[6px] after:w-full after:bg-[url('/underline.svg')] after:bg-contain after:bg-no-repeat",
            },
          ]}
          description="Our product designers have completed projects in different niches. They know how to add business value and provide personalized design solutions for your digital product."
          industries={[
            {
              title: "Web 3, Blockchain",
              icon: industryicon1.src,
              tags: ["Apps", "DeFi", "IPFS", "Exchanges", "Play2Earn"],
            },
            {
              title: "SaaS",
              icon: industryicon2.src,
              tags: ["CRM", "HR", "AI", "ERP", "Automation tools"],
            },
            {
              title: "Healthcare",
              icon: industryicon3.src,
              tags: ["Mental health", "Wellness", "Insurance", "Fitness"],
            },
            {
              title: "Fintech",
              icon: industryicon4.src,
              tags: ["Banking", "Exchanges", "Digital Payments"],
            },
          ]}
        />
        <Space />
      </Layout>
    </>
  );
};

export default AboutUs;
