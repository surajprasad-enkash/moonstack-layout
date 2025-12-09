import React from "react";

//data
import {
  accordionData,
  benefits,
  cardData,
  chooseUsTabs,
  slides,
  utilisArr,
  workflowItems,
} from "../../constants/website-development/data";

//component
import ReusableUtilizeSection from "@/components/Sections/UtilizeSection/UtilizeSection";
import ReusableSliderSection from "@/components/Sections/SliderSection/SliderSection";
import ImportanceSection from "@/components/Sections/ImportanceSection/ImportanceSection";
import importanceImg from "../../../public/assets/backend-importance.webp";
import ChooseUsTabSection from "@/components/Sections/ChooseUsTab/ChooseUsTab";
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
import ExpertiseSection from "@/components/Sections/ExpertiseSection/ExpertiseSection";
import Meta from "@/components/MetaData";

const Website = (): React.JSX.Element => {
  return (
    <>
      <Meta
        title="  Customized Website Development Company in India & US | Moonstack"
        description="Get fast, secure, SEO-friendly websites built by full-stack experts focused on performance, scalability, & business results. Start your website project with Moonstack."
        keywords=" web development service in India,  web development company in India,   affordable website development service India,  custom web development service India, best web development agency India,"
        canonical="https://www.moonstack.com/website-development-service"
        ogImage="/opengraph-image.png"
      />
      <Layout>
        <WebsiteCategoryBanner
          title={[
            {
              text: "Website Development Service for Businesses",
              color: "text-gradient font-50",
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
        <ExpertiseSection
          heading={[
            {
              text: " Our End-to-End Web ",
              color: "text-white block",
            },
            {
              text: "  Development Expertise ",
              color: "text-white block",
            },
          ]}
          subHeading={[
            {
              text: "We offer comprehensive end to end custom website development services in India. From website consulting - designing - development to migration - we are one stop for all your website development needs. ",
              color: "text-white block",
            },
          ]}
          cards={cardData}
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
        <WhyChooseSection
          heading={[
            {
              text: "Why Choose us for your next website development services in India? ",
              color: "text-white block",
            },
          ]}
          description="Moonstack is the leading website development company in India. Serving a wide range of clients across the globe. We have top web professionals in India, who have in-depth experience on the latest tools and technologies to deliver successful solutions to a wide range of businesses."
          cards={benefits}
        />{" "}
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
            { text: "Our Process of website  development in India" },
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
              text: "Moonstack offers website development services in India  ",
              color: "text-white",
            },
          ]}
          subHeadingLines={[
            {
              text: "We are known as the one stop solution for all your website development needs in India. From development to support you can fully rely on us. ",
              color: "text-gray-300",
            },
          ]}
          tabs={chooseUsTabs}
          headingLayout="between"
        />
        <ReusableSliderSection
          buttonText="Process"
          headingLines={[
            { text: "Empowering Innovation ", color: "block" },
            { text: "Across Industries", color: "block" },
          ]}
          slides={slides}
          bgColor="bg-black"
          slidesToShow={4}
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
