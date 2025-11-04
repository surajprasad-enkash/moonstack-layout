import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import SolutionsComponent from "@/components/BackendDeveloper/SolutionsComponent";

import ChooseUsTabSection from "@/components/ChooseUsTab/ChooseUsTab";
import Stepper from "@/components/StepperComponent/StepperComponent";
import ReusableUtilizeSection from "@/components/Sections/UtilizeSection/UtilizeSection";
import ReusableSliderSection from "@/components/Sections/SliderSection/SliderComponent";
import FAQ from "@/components/Homepage/FAQ";

import importance from "../../../../public/assets/backend-importance.webp";
import greenTick from "../../../../public/assets/green-tick-icon.svg";
import { pagesData } from "./data";
import ImportanceSection from "@/components/AppDevelopment/ImportanceComponent";
import WebsiteCategoryBanner from "@/components/Website/WebsiteCategoryBanner";
import { featuresData } from "../data";

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
        buttonText="Discuss your tech needs now "
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
        headingContent={[
          { text: "Benefits of ", color: "text-white block" },
          { text: " Choosing Us?", color: "Colors.brand200" },
        ]}
        subHeadingText="If you are looking for a perfect laptop picture on Freepik for your design project, the best way is to use specific and descriptive search keywords that match the style and purpose you want. For example, instead of just typing laptop, you can search for “modern laptop mockup,."
        featuresData={featuresData}
        cardClassName="flex justify-center"
        benifitCardClassName="lg:grid-cols-3 "
        imgClassName="flex justify-center"
        bgColor=""
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
