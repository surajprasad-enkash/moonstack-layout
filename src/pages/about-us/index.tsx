import Layout from "@/components/Layout";
import React from "react";
import HeroSection from "./heroSection";
import AboutGallery from "./aboutGallerySection";
import AboutStepper from "./aboutStepper";
import MissionSection from "./missionSection";
import WorkflowSection from "./workflow";
import { steps } from "../../constants/about";
import TeamSection from "./teamSection";
import LocationSection from "../contact-us/locationSection";
import BackedByBestSlider from "@/components/BestSlider";
import OurValuesSection from "./valueSection";
import LeadingSection from "./leadingSection";

const AboutUs = (): React.JSX.Element => {
  return (
    //
    <>
      <Layout>
        <HeroSection />
        <AboutGallery />
        {/* <LeadingSection /> */}
        <AboutStepper />
        <TeamSection />
        <MissionSection
          title="Flawless UI and UX Design in USA:"
          highlight="Artistry with Accurateness"
          subtitle=""
          services={[
            {
              number: "01",
              title: "End-to-End Services",
              description:
                "Our user experience design company is highly creative in making designs that can relate to local consumers in India. The importance of the Indian market is fully understood, and this means the creation of products that meet each and every consumer’s expectations. Whether you are a young company or a large business, we will help you design efficient UI and UX enhancing your company’s productivity",
            },
            {
              number: "02",
              title: "Boost Your Online Presence",
              description:
                "We at Moonstack deliver innovative UI and UX design services to mobilize clients across industries to create new designs that better suit the target users and improve on their engagement. Great attention is paid to the fact that our team’s goal is to create digital products that are efficient and visually appealing but also oriented to the USA cultural context and consumer values.",
            },
          ]}
        />{" "}
        <LocationSection
          heading={[
            { text: "Let`s create ", color: "text-white" },
            {
              text: "‍amazing ",
              color: "text-gradient",
            },
            {
              text: "‍digital experiences together",
              color: "text-white",
            },
          ]}
          buttonText="Schedule a call"
          buttonLink="/contact-us"
        />
        <OurValuesSection />
        <BackedByBestSlider />
      </Layout>
    </>
  );
};

export default AboutUs;
