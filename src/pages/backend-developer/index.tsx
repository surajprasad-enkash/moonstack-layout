import BackendBanner from "@/components/BackendDeveloper/BackendBanner";
import SolutionsComponent from "@/components/BackendDeveloper/SolutionsComponent";
import FAQ from "@/components/Homepage/FAQ";
import Layout from "@/components/Layout";
import { useMultipleRefs } from "@/hooks/useMultipleRefs";
import React from "react";
import {
  accordionData,
  featuresData,
  infoData,
  processSteps,
  servicesArr,
  slides,
  utilisArr,
} from "../../constants/backend-developer";
import ImportanceComponent from "@/components/BackendDeveloper/ImportanceComponent";
import Stepper from "@/components/StepperComponent/StepperComponent";
import OurServices from "@/components/OurSevices";
import ReusableSliderSection from "@/components/Sections/SliderSection/SliderSection";
import ReusableUtilizeSection from "@/components/Seo/UtilizeComponent";

const BackendDeveloper = () => {
  //

  const faqRefs = useMultipleRefs([
    "callNowBtnRef1",
    "callNowBtnRef2",
    "callNowBtnRef3",
  ]);
  return (
    <Layout>
      <BackendBanner />
      <SolutionsComponent
        headingContent={[
          { text: "Benefits of ", color: "text-white block" },
          { text: " Choosing Us?", color: "Colors.brand200" },
        ]}
        subHeadingText="If you are looking for a perfect laptop picture on Freepik for your design project, the best way is to use specific and descriptive search keywords that match the style and purpose you want. For example, instead of just typing laptop, you can search for “modern laptop mockup,."
        featuresData={featuresData}
        infoData={infoData}
      />

      <ImportanceComponent />
      <OurServices
        buttonText="Our Services"
        buttonVariant="rotating"
        headingLines={[
          { text: "Our Backend  ", color: "text-white" },
          { text: "Expertise", color: "text-brand200" },
        ]}
        servicesData={servicesArr}
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
        headingLines={[{ text: "Tools We Utilized For Excellence" }]}
        subHeadingLines={[
          {
            text: "The fox is a clever and adaptable animal, often recognized for its reddish fur, bushy tail, and sharp features.",
          },
          {
            text: "Found in forests, grasslands, mountains, and even urban areas.",
          },
        ]}
        items={utilisArr}
        bgColor="bg-black utilize-bg"
        tabs={[]}
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

export default BackendDeveloper;
