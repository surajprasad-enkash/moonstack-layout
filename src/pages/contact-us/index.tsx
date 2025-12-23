import React from "react";
import Layout from "@/components/Layout";

//components
import HeroSection from "./heroSection";
import LocationSection from "./locationSection";
import GetQuoteBanner from "@/components/GetQuoteBanner/GetQuoteBanner";

//utils
import bannerImg from "../../../public/assets/website-development-images/crm-banner.webp";
import FAQSection from "@/components/Sections/FaqSection/FaqSection";
import { accordionData } from "@/constants/contact";

const contactUs = (): React.JSX.Element => {
  //
  return (
    <>
      <Layout>
        <HeroSection />
        <LocationSection
          heading={[
            { text: "Let`s discuss", color: "text-white block" },
            { text: "‍your next project", color: "text-white" },
          ]}
          buttonText="Schedule a call"
          buttonLink="/contact-us"
        />

        <FAQSection
          title="Frequently Asked"
          highlight="Questions."
          description="To decide means to choose a direction with clarity and confidence. It’s the process of thinking through different possibilities, understanding what truly matters, and then taking a stand. Every decision."
          faqs={accordionData}
        />
      </Layout>
    </>
  );
};

export default contactUs;
