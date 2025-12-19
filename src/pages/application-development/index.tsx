import React from "react";
import Layout from "@/components/Layout";

//components
import SolutionsComponent from "@/components/BackendDeveloper/SolutionsComponent";
import FAQ from "@/components/Homepage/FAQ";
import ReusableSliderSection from "@/components/Sections/SliderSection/SliderSection";
import OurServices from "@/components/OurSevices";
import ImportanceSection from "@/components/AppDevelopment/ImportanceComponent";
import WebsiteCategoryBanner from "@/components/Website/WebsiteCategoryBanner";

//data
import {
  accordionData,
  featuresData,
  points,
  processSteps,
  servicesArr,
  slides,
  utilisArr,
} from "../../constants/application-development";

//utils
import importance from "../../../public/assets/backend-importance.webp";
import greenTick from "../../../public/assets/green-tick-icon.svg";
import bannerImg from "../../../public/assets/app-development-images/contact-app-img.webp";
import bannerBg from "../../../public/assets/app-development-images/contact-app-bg.webp";
import heroImg from "../../../public/assets/app-development-hero.webp";
import BgImg from "../../../public/assets/app-development-images/application-dev-bg.webp";
import BodySectionBgImg from "../../../public/assets/app-development-images/bodySectionBg.webp";
import CloudTimeline from "@/components/Sections/CloudServices/CloudTimeline/CloudTimeline";
import ReusableUtilizeSection from "@/components/Sections/UtilizeSection/UtilizeSection";
import Meta from "@/components/MetaData";
import ReusableBanner from "@/components/ReuseableBanner";

const ApplicationDevelopment = (): React.JSX.Element => {
  //

  return (
    <>
      <Meta
        title=" Custom Mobile App Development Company India & USA | Moonstack"
        description="Build high-performing Android, iOS, & cross-platform apps with senior developer team that ships fast and scales with your roadmap. Book a free consultation"
        keywords=" Android App Development, iOS App Development,  React Native App Development, Mobile App Maintenance service, Mobile App Maintenance service,"
        canonical="https://www.moonstack.com/mobile-app-development-service"
        ogImage="https://www.moonstack.com/opengraph-image.png"
      />

      <Layout>
        <WebsiteCategoryBanner
          title={[
            {
              text: "Mobile Application Development  ",
              color: "text-white ",
            },
            {
              text: "Company ",
              color: "text-gradient ",
            },
          ]}
          tabText="Mobile Application"
          imageHeight="646px"
          description={[
            {
              text: "",
              color: "text-white",
            },
          ]}
          image={heroImg}
          buttonText={"Discuss with us"}
          bgColor="!md:pt-[140px] "
          backgroundImage={BgImg}
        />
        <ImportanceSection
          image={importance}
          heading={[
            {
              text: "Get Customised Mobile App Solutions in India ",
              color: "text-white  text-center ",
            },
            {
              text: "With Moonstack  ",
              color: "text-gradient  text-center ",
            },
          ]}
          altText="Backend importance image"
          points={points}
          tickIcon={greenTick}
          reverse={false}
          bgImg={BodySectionBgImg}
        />

        <OurServices
          headingLines={[
            {
              text: "Our Specialities ",
              color: "text-white",
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

        <CloudTimeline
          title="Our Process"
          highlight=""
          subtitle="At Moonstack, our process is focused on transparency, confidentiality, and a personalised working experience for our clients. Here’s a detailed overview of our working process for our mobile app development services in India"
          steps={processSteps.steps}
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
          cardIconSize="w-[55px]"
          cardClassName="border border-[var(--Text-Colour-950,#5B5B5B)]"
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
        <ReusableBanner
          title={[
            {
              text: "Need Assistance? Our Tech Experts Are Just a Click Away",
              color: "block",
            },
          ]}
          description={[
            {
              text: "The world of design is constantly evolving, blending creativity, technology, and user psychology... ",
              color: "block",
            },
          ]}
          rightImg={bannerImg}
          bgImg={bannerBg}
          buttonLabel="Talk with us"
          buttonLink="/contact"
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
    </>
  );
};

export default ApplicationDevelopment;
