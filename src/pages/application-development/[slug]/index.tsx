import { useRouter } from "next/router";
import Layout from "@/components/Layout";

//components
import AppCategoryBanner from "@/components/AppDevelopment/AppCategoryBanner";
import SolutionsComponent from "@/components/Sections/SolutionSection/SolutionsComponent";
import ChooseUsTabSection from "@/components/Sections/ChooseUsTab/ChooseUsTab";
import CloudTimeline from "@/components/Sections/CloudServices/CloudTimeline/CloudTimeline";
import ReusableTechnologySection from "@/components/Sections/TechnologySection/TechnologySection";
import ReusableSliderSection from "@/components/Sections/SliderSection/SliderSection";
import FAQ from "@/components/Homepage/FAQ";
import ImportanceSection from "@/components/AppDevelopment/ImportanceComponent";

//utils
import importance from "../../../../public/assets/backend-importance.webp";
import greenTick from "../../../../public/assets/green-tick-icon.svg";

//data
import { pagesData } from "./data";

export default function ApplicationPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || typeof slug !== "string") return <p>Loading...</p>;

  const page = pagesData[slug];
  if (!page) return <p>Page not found</p>;

  return (
    <Layout>
      <AppCategoryBanner
        title={page.hero.title}
        description={page.hero.description}
        image={page.hero.image}
        buttonText="Get Started"
        bgColor="bg-black"
        bgImage={page.hero.bgImage}
      />
      <ImportanceSection
        image={importance}
        altText="Backend importance image"
        points={page.points}
        tickIcon={greenTick}
        heading={page.heading}
        reverse={false}
      />
      <SolutionsComponent
        headingText={page.solutions.headingText}
        subHeadingText={page.solutions.subHeadingText}
        featuresData={page.featuresData}
        titleClassName="md:flex-col"
        subHeadingClassName="md:text-center"
        headingClassName="text-center"
        cardClassName="app-category-speclity-card"
      />
      <ChooseUsTabSection
        headingLines={[{ text: page.tabs.headingText }]}
        subHeadingLines={[{ text: page.tabs.subHeadingText }]}
        tabs={page.tabs.tabs}
      />{" "}
      <ReusableTechnologySection
        headingLines={[
          { text: "We Use Technology to " },
          { text: "Build What Matters", color: "text-primary" },
        ]}
        subHeadingLines={[
          {
            text: "We leverage cutting-edge tech stacks to craft seamless experiences.",
          },
        ]}
        filteredItems={page.utilisArr}
        bgColor="bg-[radial-gradient(99.15%_99.15%_at_50.87%_0.85%,_#0F592A_0%,_#000000_31%)]"
      />
      <CloudTimeline
        title={page.processSteps.headingText}
        highlight=""
        subtitle={page.processSteps.subHeadingText}
        steps={page.processSteps.steps}
      />
      <ReusableSliderSection
        buttonText="Process"
        headingLines={[
          { text: "Empowering Innovation ", color: "block" },
          { text: "Across Industries", color: "block" },
        ]}
        slides={page.slides}
        bgColor="bg-black"
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
