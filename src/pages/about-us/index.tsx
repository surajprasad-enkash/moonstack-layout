import Layout from "@/components/Layout";
import React from "react";
import HeroSection from "./heroSection";
import AboutGallery from "./aboutGallerySection";
import AboutStepper from "./aboutStepper";
import MissionSection from "./missionSection";
import WorkflowSection from "./workflow";
import { steps } from "../../constants/about";

const AboutUs = (): React.JSX.Element => {
  return (
    //
    <>
      <Layout>
        <HeroSection />
        <AboutGallery />
        <AboutStepper
          title="Journey of Moonstack Teams"
          highlight=""
          subtitle="Onboard is designed to make hiring easier, faster, and more transparent for everyone. Whether you’re a freelancer, full-time employee, or a company, the platform helps you connect."
          steps={[
            {
              number: "01",
              title: "Discovery & Research",
              description:
                "Research user needs, market trends, and business goals through interviews, surveys, and analysis to define the product vision and scope.",
              position: "right",
            },
            {
              number: "02",
              title: "Concept & Structure",
              description:
                "Create wireframes to outline the product’s structure, functionality, and user flows, forming the foundation for the experience.",
              position: "left",
            },
            {
              number: "03",
              title: "Design & Systems",
              description:
                "Design intuitive, visually appealing UI/UX and build scalable design systems to ensure consistency and strong brand alignment.",
              position: "right",
            },
            {
              number: "04",
              title: "Prototyping & Validation",
              description:
                "Develop interactive prototypes and conduct usability testing with real users to validate concepts and identify improvements.",
              position: "left",
            },
          ]}
        />

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
        />
        <WorkflowSection
          heading="Our Proven Workflow for Process"
          steps={steps}
        />
      </Layout>
    </>
  );
};

export default AboutUs;
