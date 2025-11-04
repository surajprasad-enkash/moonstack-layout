import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import AppCategoryBanner from "@/components/AppDevelopment/AppCategoryBanner";
import SolutionsComponent from "@/components/Seo/SolutionsComponent";
import ChooseUsTabSection from "@/components/ChooseUsTab/ChooseUsTab";
import Stepper from "@/components/StepperComponent/StepperComponent";
import ReusableUtilizeSection from "@/components/Sections/UtilizeSection/UtilizeSection";
import ReusableSliderSection from "@/components/Sections/SliderSection/SliderComponent";
import FAQ from "@/components/Homepage/FAQ";

import importance from "../../../../public/assets/backend-importance.webp";
import greenTick from "../../../../public/assets/green-tick-icon.svg";
import { pagesData } from "./data";
import ImportanceSection from "@/components/AppDevelopment/ImportanceComponent";

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
      />
      <ImportanceSection
        image={importance}
        altText="Backend importance image"
        points={page.points}
        tickIcon={greenTick}
        reverse={false} // You can toggle this for layout switch
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
      />

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

      <Stepper
        steps={page.processSteps.steps}
        headingLines={[{ text: page.processSteps.headingText, color: "block" }]}
        subHeadingLines={[{ text: page.processSteps.subHeadingText }]}
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
