import React from "react";
import { useMultipleRefs } from "@/hooks/useMultipleRefs";

//data
import {
  accordionData,
  benefits,
  chooseUsTabs,
  processSteps,
  serviceArr,
  slides,
  utilisArr,
  workflowItems,
} from "./data";

//component
import ReusableUtilizeSection from "@/components/Sections/UtilizeSection/UtilizeSection";
import ReusableSliderSection from "@/components/Sections/SliderSection/SliderSection";
import ImportanceSection from "@/components/Sections/ImportanceSection/ImportanceSection";
import importanceImg from "../../../public/assets/backend-importance.webp";
import Stepper from "@/components/StepperComponent/StepperComponent";
import ChooseUsTabSection from "@/components/Sections/ChooseUsTab/ChooseUsTab";
import ServicesSection from "@/components/Website/OurSevices";
import FAQ from "@/components/Homepage/FAQ";
import Layout from "@/components/Layout";
import WebsiteCategoryBanner from "@/components/Website/WebsiteCategoryBanner";
import BgImg from "../../../public/assets/website-banner.webp";
import heroImg from "../../../public/assets/website-hero.webp";
import bodyBgImg from "../../../public/assets/website-body-bg.webp";
import bannerImg from "../../../public/assets/e-commerce-hire.webp";
import HireNowBanner from "@/components/Sections/HireNowBanner/HireNowBanner";
import WhyChooseSection from "@/components/Sections/WhyChooseSection/WhyChooseSection";
import ReusableWorkflowSection from "@/components/Sections/WorkflowSection/WorkflowSection";

const Website = (): React.JSX.Element => {
  return (
    <>
      <Layout>
        <WebsiteCategoryBanner
          title={[
            {
              text: "Website Development ",
              color: "text-white block",
            },
            {
              text: "Service for Businesses",
              color: "text-[#1CFF6C]",
            },
          ]}
          description={[
            {
              text: "Launch advanced integrated functionalities based websites with best web development services for your customers.",
              color: "text-white",
            },
          ]}
          image={heroImg}
          buttonText={"Discuss with tech expert now"}
          bgColor="md:!pt-[115px]"
          backgroundImage={BgImg}
        />
        <ImportanceSection
          bgImage={bodyBgImg}
          image={importanceImg}
          title="Website Development Company  "
          description={[
            "MoonStack is known as a leading website development company in India. We have delivered a wide range of powerful, AI driven, and user centric websites to different businesses from start ups to large enterprises. Our top industry web experts in India build high performance and innovative websites that deliver smart automation and personalized user experience that ensures to meet the modern trends. ",
            "We have a team of full stack website developers in India, who have hands-on experience to build websites from scratch and integrate latest trending features that allow businesses to stay ahead in the market competition. Our professional web developers build websites from scratch that can automate workflows, analyse user experiences, and deliver personalized experiences that deliver next generation user experience and reduce internal workflow processes. At Moonstack, we are experienced in developing websites from scratch as well as upgrading existing websites with advanced user centric designs that meet all modern IT trends and innovations. ",
          ]}
          services={[
            "Custom website development ",
            "Website designing services ",
            "Website Testing services  ",
            "Website Support and maintenance ",
            "Website migration services  ",
          ]}
        />
        <WhyChooseSection
          heading={[
            {
              text: "Why Choose us for your next website  ",
              color: "text-white block",
            },
            { text: "development services in India?", color: "text-[#1CFF6C]" },
          ]}
          description="Moonstack is the leading website development company in India. Serving a wide range of clients across the globe. We have top web professionals in India, who have in-depth experience on the latest tools and technologies to deliver successful solutions to a wide range of businesses."
          cards={benefits}
        />{" "}
        <HireNowBanner
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
          tabs={["Mobile App", "Frontend", "Backend", "Devops", "SEO", "UI/UX"]}
          bgColor="bg-black utilize-bg"
        />
        <ReusableWorkflowSection
          headingLines={[
            { text: "Our Process of website  " },
            { text: "development in India", color: "text-primary" },
          ]}
          subHeadingLines={[
            {
              text: "Moonstack the leading website development company in India has defined our web development process that is designed by top web experts. Our process helps us to strategize the process and avoid last minute complex challenges and delays. ",
            },
          ]}
          filteredItems={workflowItems}
        />
        <ChooseUsTabSection
          headingLines={[
            {
              text: "Moonstack offer website   ",
              color: "text-white",
            },
            { text: "development services in India ", color: "text-primary" },
          ]}
          subHeadingLines={[
            {
              text: "We are known as the one stop solution for all your website development needs in India. From development to support you can fully rely on us. ",
              color: "text-gray-300",
            },
          ]}
          tabs={chooseUsTabs}
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
        />{" "}
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
export default Website;
