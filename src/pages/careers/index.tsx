import React from "react";

//components
import Layout from "@/components/Layout";
import HeroSection from "./heroSection";
import GetQuoteBanner from "@/components/GetQuoteBanner/GetQuoteBanner";
import WhyJoinSection from "./whyJoin";
import LatestOpportunity from "./latestOpp";

//data
import { benefitsData, jobsData } from "./data";

//utils
import bannerImg from "../../../public/assets/website-development-images/crm-banner.webp";
import ProcessSection from "./process";

const carreers = (): React.JSX.Element => {
  //
  return (
    <>
      <Layout>
        <HeroSection />
        <WhyJoinSection
          heading={[
            {
              text: "Get Customised  ",
              color: "text-primary  text-center ",
            },
            {
              text: " Mobile App Solutions in India With Moonstack  ",
              color: " text-white text-center ",
            },
          ]}
          description={[
            {
              text: "Looking for a company that’ll value your potential? Look no further.",
              color: "text-white  text-center ",
            },
            {
              text: "With Moonstack  ",
              color: " text-white text-center ",
            },
          ]}
          benefits={benefitsData}
        />
        <ProcessSection
          heading={[
            {
              text: "Vetting process that",
              color: "text-gradient  text-center ",
            },
            {
              text: " weeds out 99%, so you only see the best of the best. ",
              color: " text-white text-center ",
            },
          ]}
          description={[
            {
              text: "We use a smart AI tool to screen developers from remote locations all over the world on quality-based parameters. This helps save you time and money spent on local market awareness. Our senior devs then pre-interview and shortlist them for you. Which means, you skip straight to meeting the highly-vetted candidates.",
              color: "text-white  text-center ",
            },
          ]}
        />
        <LatestOpportunity
          heading="Latest Opportunity"
          description="Work doesn’t feel like work when you’re supported by a driven team, fuelled by limitless opportunities and empowered by remarkable benefits"
        />

        <GetQuoteBanner
          headingContent={[
            {
              text: "Scale Your Business with E-Commerce Experts",
              color: "text-white",
            },
          ]}
          subHeadingContent={[
            {
              text: "Android app development goes through different stages of work. As the premier Android app development agency in India",
              color: "text-white",
            },
          ]}
          buttonText="Connect with us"
          image={bannerImg}
        />
      </Layout>
    </>
  );
};

export default carreers;
