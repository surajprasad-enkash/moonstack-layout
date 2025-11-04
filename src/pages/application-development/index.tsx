import SolutionsComponent from "@/components/BackendDeveloper/SolutionsComponent";
import FAQ from "@/components/Homepage/FAQ";
import Layout from "@/components/Layout";
import { useMultipleRefs } from "@/hooks/useMultipleRefs";
import React from "react";
import {
  accordionData,
  featuresData,
  points,
  processSteps,
  servicesArr,
  slides,
  utilisArr,
} from "./data";
import Stepper from "@/components/StepperComponent/StepperComponent";
import ReusableUtilizeSection from "@/components/Sections/UtilizeSection/UtilizeSection";
import ReusableSliderSection from "@/components/Sections/SliderSection/SliderComponent";
import AppBanner from "@/components/AppDevelopment/AppBanner";
import OurServices from "@/components/OurSevices";
import importance from "../../../public/assets/backend-importance.webp";
import greenTick from "../../../public/assets/green-tick-icon.svg";
import ImportanceSection from "@/components/AppDevelopment/ImportanceComponent";

const ApplicationDevelopment = (): React.JSX.Element => {
  //

  const faqRefs = useMultipleRefs([
    "callNowBtnRef1",
    "callNowBtnRef2",
    "callNowBtnRef3",
  ]);
  return (
    <Layout>
      <AppBanner />
      <ImportanceSection
        image={importance}
        altText="Backend importance image"
        points={points}
        tickIcon={greenTick}
        reverse={false} // You can toggle this for layout switch
      />
      <SolutionsComponent
        headingContent={[
          {
            text: "Our Specialities",
            color: "text-white text-center ",
          },
        ]}
        subHeadingClassName="flex-col"
        subHeadingText="Our experienced mobile app developers in India at Moonstack offer a range of custom app development and app modernisation services in India. Here’s a detailed overview of our selection of speciality services in mobile app development for businesses in India."
        titleClassName="flex flex-col"
        headingClassName="text-center md-w-auto"
        featuresData={featuresData}
      />
      <OurServices
        buttonText="Our Services"
        buttonVariant="rotating"
        headingLines={[
          { text: "Our Backend  ", color: "text-white" },
          { text: "Expertise", color: "text-brand200" },
        ]}
        servicesData={servicesArr}
        marginBottom="mb-22"
        cardTag={true}
      />
      <Stepper
        steps={processSteps}
        headingLines={[{ text: "Our Process", color: "block" }]}
        subHeadingLines={[
          {
            text: "At Moonstack, our process is focused on transparency, confidentiality, and a personalised working experience for our clients.",
            color: "block",
          },
          {
            text: "Here’s a detailed overview of our working process for our mobile app development services in India",
            color: "block",
          },
        ]}
      />
      <ReusableUtilizeSection
        headingLines={[
          { text: "We Use Technology to " },
          { text: "Build What Matters", color: "#00CF49" },
        ]}
        subHeadingLines={[
          { text: "The fox is a clever and adaptable animal..." },
        ]}
        tabs={["Mobile App", "Frontend", "Backend", "Devops", "SEO"]}
        items={utilisArr}
      />

      <ReusableSliderSection
        buttonText="Process"
        headingLines={[
          { text: "Empowering Innovation ", color: "block" },
          { text: "Across Industries", color: "block" },
        ]}
        slides={slides}
        bgColor="bg-black"
        slidesToShow={5}
        autoplaySpeed={2000}
      />
      <FAQ
        accordionData={accordionData}
        tagText="Our FAQs"
        heading={{
          text: "Everything you need to know",
          highlightText: "Questions",
        }}
      />
    </Layout>
  );
};

export default ApplicationDevelopment;
