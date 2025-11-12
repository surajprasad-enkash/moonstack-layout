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
        solutionPoints={page.solutionPoints}
        solutionHeading={page.solutionTitle}
        tickIcon={greenTick}
        reverse={false}
      />
      <SolutionsComponent
        headingContent={[{ text: page.solutions.headingContent }]}
        subHeadingText={page.solutions.subHeadingText}
        featuresData={page.featuresData}
        benifitCardClassName="lg:grid-cols-3"
        bgColor="bg-[linear-gradient(180deg,#000000_0%,#0C401E_100%)] "
      />
      {/* <ChooseUsTabSection
        headingLines={[{ text: page.tabs.headingText }]}
        subHeadingLines={[{ text: page.tabs.subHeadingText }]}
        tabs={page.tabs.tabs}
      /> */}
      <TrustSection
        headingLines={[{ text: page.tabs.headingText }]}
        subHeadingLines={[{ text: page.tabs.subHeadingText }]}
        tabs={page.tabs.tabs}
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
        tabs={["E-Commerce Development"]}
        items={page.utilisArr}
        bgColor="bg-[radial-gradient(99.15%_99.15%_at_50.87%_0.85%,_#0F592A_0%,_#000000_31%)]"
      />
      {/* <Stepper
        steps={page.processSteps.steps}
        headingLines={[{ text: page.processSteps.headingText, color: "block" }]}
        subHeadingLines={[{ text: page.processSteps.subHeadingText }]}
      /> */}
      <ProcessSection
        headingLines={[{ text: page.processSteps.headingText, color: "block" }]}
        subHeadingLines={[{ text: page.processSteps.subHeadingText }]}
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
