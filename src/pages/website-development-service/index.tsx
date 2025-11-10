import React from "react";
import { useMultipleRefs } from "@/hooks/useMultipleRefs";

//data
import {
  accordionData,
  chooseUsTabs,
  processSteps,
  serviceArr,
  slides,
  utilisArr,
} from "./data";

//component
import ReusableUtilizeSection from "@/components/Sections/UtilizeSection/UtilizeSection";
import ReusableSliderSection from "@/components/Sections/SliderSection/SliderSection";
import WebsiteBanner from "@/components/Website/WebsiteBanner";
import ImportanceSection from "@/components/Sections/ImportanceSection/ImportanceSection";
import importanceImg from "../../../public/assets/backend-importance.webp";
import Stepper from "@/components/StepperComponent/StepperComponent";
import ChooseUsTabSection from "@/components/Sections/ChooseUsTab/ChooseUsTab";
import ServicesSection from "@/components/Website/OurSevices";
import FAQ from "@/components/Homepage/FAQ";
import Layout from "@/components/Layout";

const Website = (): React.JSX.Element => {
  const faqRefs = useMultipleRefs([
    "callNowBtnRef1",
    "callNowBtnRef2",
    "callNowBtnRef3",
  ]);
  return (
    <>
      <Layout>
        <WebsiteBanner />
        <ImportanceSection
          image={importanceImg}
          title="Website Development Company  "
          description={[
            "MoonStack is known as a leading website development company in India. We have delivered a wide range of powerful, AI driven, and user centric websites to different businesses from start ups to large enterprises. Our top industry web experts in India build high performance and innovative websites that deliver smart automation and personalized user experience that ensures to meet the modern trends. ",
            "We have a team of full stack website developers in India, who have hands-on experience to build websites from scratch and integrate latest trending features that allow businesses to stay ahead in the market competition. Our professional web developers build websites from scratch that can automate workflows, analyse user experiences, and deliver personalized experiences that deliver next generation user experience and reduce internal workflow processes. At Moonstack, we are experienced in developing websites from scratch as well as upgrading existing websites with advanced user centric designs that meet all modern IT trends and innovations. ",
          ]}
          reverse
          buttonText="Why Choose Us"
        />
        <ServicesSection
          tagText="Our Services"
          mainHeading="Our Website"
          highlightHeading="Development Services"
          description="We offer comprehensive end to end custom website development services in India. From website consulting - designing - development to migration - we are one stop for all your website development needs."
          services={serviceArr}
          columns={2}
        />
        <Stepper
          steps={processSteps}
          headingLines={[
            {
              text: "Our Process of website development in India ",
              color: "block",
            },
          ]}
          subHeadingLines={[
            {
              text: "Moonstack the leading website development company in India has defined our web development process that is designed by top web experts. Our process helps us to strategize the process and avoid last minute complex challenges and delays. ",
              color: "block",
            },
          ]}
        />
        <ChooseUsTabSection
          headingLines={[
            {
              text: "Why Choose us for your next website  ",
              color: "text-white",
            },
            { text: "development services in India? ", color: "text-brand200" },
          ]}
          subHeadingLines={[
            {
              text: "Moonstack is the leading website development company in India. Serving a wide range of clients across the globe. We have top web professionals in India, who have in-depth experience on the latest tools and technologies to deliver successful solutions to a wide range of businesses.",
              color: "text-gray-300",
            },
          ]}
          tabs={chooseUsTabs}
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
