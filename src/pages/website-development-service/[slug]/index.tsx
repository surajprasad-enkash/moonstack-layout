import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import SolutionsComponent from "@/components/BackendDeveloper/SolutionsComponent";
import ReusableUtilizeSection from "@/components/Sections/UtilizeSection/UtilizeSection";
import ReusableSliderSection from "@/components/Sections/SliderSection/SliderSection";
import FAQ from "@/components/Homepage/FAQ";

import importance from "../../../../public/assets/backend-importance.webp";
import greenTick from "../../../../public/assets/green-tick-icon.svg";
import { pagesData } from "./data";
import ImportanceSection from "@/components/AppDevelopment/ImportanceComponent";
import WebsiteCategoryBanner from "@/components/Website/WebsiteCategoryBanner";

import TrustSection from "@/components/Sections/TrustSection/TrustSection";
import dummyImg from "../../../../public/assets/backend-hero.webp";
import ProcessSection from "@/components/Sections/ProcessSection/ProcessSection";

export default function ApplicationPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || typeof slug !== "string") return <p>Loading...</p>;

  const page = pagesData[slug];
  if (!page) return <p>Page not found</p>;

  return (
    <Layout>
      <WebsiteCategoryBanner
        title={page.hero.title}
        description={page.hero.description}
        image={page.hero.image}
        buttonText={page.hero.buttonText}
        bgColor="md:!pt-10"
        backgroundImage={page.hero.backgroundImage}
      />
      <ImportanceSection
        image={importance}
        heading={page.pointsTitle}
        altText="Backend importance image"
        points={page.points}
        tickIcon={greenTick}
        reverse={false}
      />
      <SolutionsComponent
        headingContent={[{ text: page.solutions.headingContent }]}
        subHeadingText={page.solutions.subHeadingText}
        featuresData={page.featuresData}
        cardClassName="flex justify-center flex-col"
        benifitCardClassName="lg:grid-cols-3 "
        imgClassName="flex justify-center"
        bgColor="bg-[linear-gradient(180deg,#000000_0%,#0C401E_100%)] text-center"
        cardIconSize="w-[98]"
      />
      {/* <ChooseUsTabSection
        headingLines={[{ text: page.tabs.headingText }]}
        subHeadingLines={[{ text: page.tabs.subHeadingText }]}
        tabs={page.tabs.tabs}
      /> */}
      <TrustSection
        headingLines={[{ text: page.tabs.headingText }]}
        subHeadingLines={[{ text: page.tabs.subHeadingText }]}
        steps={[
          {
            id: 1,
            title: "Laravel Web Apps",
            description:
              "We have developed high performance and secure PHP-based Laravel framework web apps for different industries with next generation functionalities that allow us to meet modern business needs. We have also created interactive UI and engaging UX that allow users to connect with brands effectively.",
            image: dummyImg,
          },
          {
            id: 2,
            title: "Laravel E-commerce Solutions",
            description:
              "The best ecommerce website developers in India build innovative and highly functional Laravel online stores. We have integrated essential functionalities such as product catalogs, shopping carts, order tracking, and secure payment gateways that increase conversion rates and enhance user experience.",
            image: dummyImg,
          },
          {
            id: 3,
            title: "Laravel CRM Solutions",
            description:
              "Moonstack builds Laravel-based CRM solutions that improve customer relationship management processes in companies. We design custom CRM systems that help track leads, automate conversions, and enable data-driven decisions while streamlining client communications.",
            image: dummyImg,
          },
          {
            id: 4,
            title: "Laravel CMS Solutions",
            description:
              "Professional Laravel experts offer robust Laravel-based CMS development in India. We build Laravel CMS platforms that empower businesses to easily update, publish, and manage content efficiently, giving them full control over their content management systems.",
            image: dummyImg,
          },
          {
            id: 5,
            title: "POS Systems",
            description:
              "Integrate modern Laravel-powered POS systems developed by Laravel experts in India. Our POS solutions streamline operational processes, help retailers manage multiple outlets, and deliver better outcomes for customers. We have delivered a wide range of POS (Point of Sale) solutions to retail businesses.",
            image: dummyImg,
          },
          {
            id: 6,
            title: "Video Streaming and Media Apps",
            description:
              "Develop your Laravel-based video streaming and media apps with expert Laravel web developers in India. Our apps support secure content delivery, seamless streaming, user authentication, and multi-platform support — ensuring exceptional performance and experience.",
            image: dummyImg,
          },
        ]}
      />{" "}
      <ReusableUtilizeSection
        headingLines={[
          { text: "We Use Technology to " },
          { text: "Build What Matters", color: "#00CF49" },
        ]}
        subHeadingLines={[
          {
            text: "We leverage cutting-edge tech stacks to craft seamless experiences.",
          },
        ]}
        tabs={["Mobile App", "Frontend", "Backend", "Devops", "SEO", "UI/UX"]}
        items={page.utilisArr}
        bgColor="bg-[radial-gradient(99.15%_99.15%_at_50.87%_0.85%,_#0F592A_0%,_#000000_31%)]"
      />
      {/* <Stepper
        steps={page.processSteps.steps}
        headingLines={[{ text: page.processSteps.headingText, color: "block" }]}
        subHeadingLines={[{ text: page.processSteps.subHeadingText }]}
      /> */}
      <ProcessSection
        headingLines={[
          {
            text: "Our Process of Laravel website in India ",
            color: "text-[#00CF49]",
          },
        ]}
        subHeadingLines={[
          {
            text: "We have defined a process of Laravel website development that allows us to deliver successful Laravel web solutions in the market. As the best Laravel development agency in  India, our experts have defined the structured roadmap that allows us to deliver solutions on time and exclude last minute complex challenges. ",
            color: "text-white",
          },
        ]}
        servicesData={page.processSteps.steps}
        marginBottom="mb-22"
      />
      <ReusableSliderSection
        buttonText="Process"
        headingLines={[
          { text: "Empowering Innovation ", color: "block" },
          { text: "Across Industries", color: "block" },
        ]}
        slides={page.slides}
        bgColor="bg-black"
        slidesToShow={5}
        autoplaySpeed={2000}
      />
      <FAQ
        accordionData={page.accordionData}
        tagText="Our FAQs"
        heading={{
          text: "Everything you need to know",
          highlightText: "Questions",
        }}
      />
    </Layout>
  );
}
