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
import ReusableSliderSection from "@/components/Seo/SliderComponent";
import AppBanner from "@/components/AppDevelopment/AppBanner";
import OurServices from "@/components/OurSevices";
import importance from "../../../public/assets/backend-importance.webp";
import greenTick from "../../../public/assets/green-tick-icon.svg";
import ImportanceSection from "@/components/AppDevelopment/ImportanceComponent";
import WebsiteCategoryBanner from "@/components/Website/WebsiteCategoryBanner";
import heroImg from "../../../public/assets/app-development-hero.webp";
import BgImg from "../../../public/assets/app-development-images/application-dev-bg.webp";
const ApplicationDevelopment = (): React.JSX.Element => {
  //

  const faqRefs = useMultipleRefs([
    "callNowBtnRef1",
    "callNowBtnRef2",
    "callNowBtnRef3",
  ]);
  return (
    <Layout>
      <WebsiteCategoryBanner
        title={[
          {
            text: "Mobile Application  ",
            color: "text-white block",
          },
          {
            text: "Development Company",
            color: "text-primary",
          },
        ]}
        tabText="Mobile Application"
        imageHeight="546px"
        description={[
          {
            text: "",
            color: "text-white",
          },
        ]}
        image={heroImg}
        buttonText={"Discuss with tech expert now"}
        bgColor="!md:pt-[140px] "
        backgroundImage={BgImg}
      />
      <ImportanceSection
        image={importance}
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
        altText="Backend importance image"
        points={points}
        tickIcon={greenTick}
        reverse={false}
      />
      <OurServices
        headingLines={[
          {
            text: "Our Specialities ",
            color: "text-primary",
          },
        ]}
        subHeadingLines={[
          {
            text: "Our experienced mobile app developers in India at Moonstack offer a range of custom app development and app modernisation services in India. Here’s a detailed overview of our selection of speciality services in mobile app development for businesses in India.",
            color: "text-white",
          },
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
      <SolutionsComponent
        headingContent={[
          {
            text: "Why Choose Us?",
            color: "text-white text-center ",
          },
        ]}
        subHeadingClassName="flex-col text-center items-center"
        subHeadingText="As one of the top local mobile app development firms in India, Moonstack offers solutions that are rooted in practicality, transparency, and efficiency. Here are some of the highlight reasons on why you should work with us."
        titleClassName="flex flex-col items-center"
        headingClassName="text-center md-w-auto items-center"
        featuresData={featuresData}
        benifitCardClassName="lg:grid-cols-3"
        cardClassName="border border-[var(--Text-Colour-950,#5B5B5B)]"
      />
      <ReusableUtilizeSection
        headingLines={[
          { text: "We Use Technology to " },
          { text: "Build What Matters", color: "text-primary" },
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
        autoplaySpeed={2000}
      />
      <FAQ
        accordionData={accordionData}
        tagText="Frequently Asked Questions"
        heading={{
          text: "Everything you need to know about Application Development",
        }}
      />
    </Layout>
  );
};

export default ApplicationDevelopment;
