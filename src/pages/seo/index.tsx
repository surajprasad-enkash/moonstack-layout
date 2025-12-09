import FAQ from "@/components/Homepage/FAQ";
import Layout from "@/components/Layout";
import OurServices from "@/components/Seo/OurSevices";
import SolutionsComponent from "@/components/Sections/SolutionSection/SolutionsComponent";
import { useMultipleRefs } from "@/hooks/useMultipleRefs";
import google from "../../../public/assets/googleIcon.svg";
import googleBottom from "../../../public/assets/googleIconBottom.svg";
import {
  accordionData,
  featuresData,
  slides,
  stepperData,
  utilisArr,
} from "../../constants/seo";
import vector from "../../../public/assets/seo-services-vector.webp";
import { servicesArr } from "@/constants/seo";
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
          headingLines={[
            { text: "We Use Technology to " },
            { text: "Build What Matters", color: "#00CF49" },
          ]}
          subHeadingLines={[
            { text: "The fox is a clever and adaptable animal..." },
          ]}
          tabs={["Mobile App", "Frontend", "Backend", "Devops", "SEO", "UI/UX"]}
          items={utilisArr}
          bgColor="bg-[radial-gradient(99.15%_99.15%_at_50.87%_0.85%,_#0F592A_0%,_#000000_31%)]"
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
    </>
  );
};
export default Seo;
