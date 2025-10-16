import FAQ from "@/components/Homepage/FAQ";
import Layout from "@/components/Layout";
import OurServices from "@/components/Seo/OurSevices";
import SolutionsComponent from "@/components/Seo/SolutionsComponent";
import { useMultipleRefs } from "@/hooks/useMultipleRefs";
import google from "../../../public/assets/googleIcon.svg";
import googleBottom from "../../../public/assets/googleIconBottom.svg";
import { featuresData, slides, stepperData, utilisArr } from "./data";
import vector from "../../../public/assets/seo-services-vector.webp";
import { servicesArr } from "@/pages/seo/data";
import React from "react";
import StepperComponent from "@/components/Seo/StepperComponent";
import ReusableUtilizeSection from "@/components/Seo/UtilizeComponent";
import ReusableSliderSection from "@/components/Seo/SliderComponent";
import SeoBanner from "@/components/Seo/SeoBanner";

const Seo = () => {
  const faqRefs = useMultipleRefs([
    "callNowBtnRef1",
    "callNowBtnRef2",
    "callNowBtnRef3",
  ]);
  return (
    <>
      <Layout>
        <SeoBanner />

        <SolutionsComponent
          buttonText="Why Choose Us"
          buttonVariant="small"
          headingText="How SEO Drives Revenue Growth for Your Business"
          subHeadingText="The fox is a smart and clever animal known for its quick movements and sharp instincts. It lives in forests, grasslands, and even near cities. With its bright orange fur, bushy tail, and pointed ears, the fox is easy to recognize. It hunts mainly at night and eats small animals, fruits, and insects."
          featuresData={featuresData}
          topImage={google}
          bottomImage={googleBottom}
        />

        <OurServices
          buttonText="Our Services"
          buttonVariant="rotating"
          headingLines={[
            { text: "Our Professional SEO" },
            { text: "Services in India" },
          ]}
          servicesData={servicesArr}
          vectorImage={vector}
        />

        <StepperComponent
          buttonText="Our Process"
          buttonVariant="rotating"
          headingLines={[
            { text: "Moonstack Proven 4-Step", color: "block" },
            { text: "SEO Framework" },
          ]}
          steps={stepperData}
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
    </>
  );
};
export default Seo;
