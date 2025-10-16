import BackendBanner from "@/components/BackendDeveloper/BackendBanner";
import SolutionsComponent from "@/components/BackendDeveloper/SolutionsComponent";
import FAQ from "@/components/Homepage/FAQ";
import Layout from "@/components/Layout";
import { useMultipleRefs } from "@/hooks/useMultipleRefs";
import React from "react";
import { featuresData, servicesArr, slides, utilisArr } from "./data";
import ImportanceComponent from "@/components/BackendDeveloper/ImportanceComponent";
import OurServices from "@/components/BackendDeveloper/OurSevices";
import Stepper from "@/components/StepperComponent/StepperComponent";
import ReusableUtilizeSection from "@/components/Seo/UtilizeComponent";
import ReusableSliderSection from "@/components/Seo/SliderComponent";

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
      <Stepper />
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
      <FAQ refs={faqRefs} showInfoBoxes={false} />
    </Layout>
  );
};

export default BackendDeveloper;
