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

const carreers = (): React.JSX.Element => {
  //
  return (
    <>
      <Layout>
        <HeroSection />
        <WhyJoinSection
          heading={[
            {
              text: "Get Customised Mobile App Solutions in India ",
              color: "text-primary  text-center ",
            },
            {
              text: "With Moonstack  ",
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
        <LatestOpportunity
          heading="Latest Opportunity"
          description="Work doesn’t feel like work when you’re supported by a driven team, fuelled by limitless opportunities and empowered by remarkable benefits"
          jobs={jobsData}
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
