import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import SolutionsComponent from "@/components/BackendDeveloper/SolutionsComponent";
import FAQ from "@/components/Homepage/FAQ";
import importance from "../../../../public/assets/e-commerce-importance.webp";
import greenTick from "../../../../public/assets/green-tick-icon.svg";
import { pagesData, pagesKeys, TPageKeys } from "./data";
import ImportanceSection from "@/components/AppDevelopment/ImportanceComponent";
import WebsiteCategoryBanner from "@/components/Website/WebsiteCategoryBanner";
import ProcessSection from "@/components/Sections/ProcessSection/ProcessSection";
import ChooseUsTabSection from "@/components/Sections/ChooseUsTab/ChooseUsTab";
import HireNowBanner from "@/components/Sections/HireNowBanner/HireNowBanner";
import ReusableTechnologySection from "@/components/Sections/TechnologySection/TechnologySection";
import GetQuoteBanner from "@/components/GetQuoteBanner/GetQuoteBanner";
import WhyChooseSection from "@/components/Sections/WhyChooseSection/WhyChooseSection";

export default function ApplicationPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || typeof slug !== "string") return <p>Loading...</p>;

  const page = pagesData[pagesKeys[slug as TPageKeys] as TPageKeys];
  if (!page) return <p>Page not found</p>;

  return (
    <Layout>
      <WebsiteCategoryBanner
        title={page.hero.title}
        description={page.hero.description}
        image={page.hero.image}
        buttonText={page.hero.buttonText}
        bgColor=""
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
      />{" "}
      {page?.tabs && (
        <ChooseUsTabSection
          headingLines={[{ text: page.tabs.headingText }]}
          subHeadingLines={[{ text: page.tabs.subHeadingText }]}
          tabs={page.tabs.tabs}
          reverse={true}
          headingLayout="between"
        />
      )}
      <HireNowBanner
        headingContent={page.banner?.headingText ?? []}
        subHeadingContent={page.banner?.subHeadingText ?? []}
        buttonText="Connect with us"
        image={page.banner?.image ?? ""}
        imageHeight={page.banner?.imageHeight ?? "md:w-[405px]"}
      />
      <WhyChooseSection
        heading={[{ text: page.whyChooseData.headingText, color: "block" }]}
        description={page.whyChooseData.subHeadingText}
        cards={page.whyChooseData.steps}
      />{" "}
      {page?.featureDataContent && (
        <SolutionsComponent
          headingContent={
            typeof page.featureDataContent.headingContent === "string"
              ? [{ text: page.featureDataContent.headingContent }]
              : page.featureDataContent.headingContent || []
          }
          subHeadingText={page.featureDataContent.subHeadingText || ""}
          featuresData={page.featureDataContent.featuresData || []}
          titleClassName="flex justify-between"
          headingClassName="text-start md-w-auto"
          benifitCardClassName="lg:grid-cols-3"
          cardClassName="border border-[var(--Text-Colour-950,#5B5B5B)]"
        />
      )}
      {page?.utilisArr && (
        <ReusableTechnologySection
          headingLines={[
            { text: "We Use Technology to " },
            { text: "Build What Matters", color: "#00CF49" },
          ]}
          subHeadingLines={[
            {
              text: "We leverage cutting-edge tech stacks to craft seamless experiences.",
            },
          ]}
          filteredItems={page.utilisArr}
          // bgColor="bg-[radial-gradient(99.15%_99.15%_at_50.87%_0.85%,_#0F592A_0%,_#000000_31%)]"
        />
      )}
      <GetQuoteBanner
        headingContent={page.quoteBanner?.headingText ?? []}
        subHeadingContent={page.quoteBanner?.subHeadingText ?? []}
        buttonText={page.quoteBanner?.buttonText ?? "Connect with us"}
        image={page.quoteBanner?.image ?? ""}
      />
      {/* 
        <GetQuoteBanner
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
      /> */}
      {page?.processSteps && (
        <ProcessSection
          headingLines={[
            { text: page.processSteps.headingText, color: "block" },
          ]}
          subHeadingLines={[{ text: page.processSteps.subHeadingText }]}
          servicesData={page.processSteps.steps}
          marginBottom="mb-22"
        />
      )}
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
