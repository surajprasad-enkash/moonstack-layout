import Layout from "@/components/Layout";
import FAQ from "@/components/Homepage/FAQ";
import HomepageBanner from "@/components/Homepage/HomepageBanner";
import InsightsIdeas from "@/components/Homepage/InsightsIdeas";
import Marquee from "@/components/Homepage/Marquee";
import OurServices from "@/components/Homepage/OurSevices";
import ProvenProcess from "@/components/Homepage/ProvenProcess";
import SolutionsComponent from "@/components/Homepage/SolutionsComponent";
import TechnologyComponent from "@/components/Homepage/TechnologyComponent";
import ContactUs from "@/components/Homepage/ContactUs";
import CaseStudies from "@/components/Homepage/CaseStudies";

import { accordionData, infoBoxes } from "./data";
import Meta from "@/components/MetaData";

export default function Home() {
  return (
    <>
      <Meta
        title=" Product Focused App & Web Development Company in India & USA"
        description="We're product-focused app and web development company in India. Moonstack’s senior engineers and designers help companies in building World class AI-powered full-stack development, UI/UX, SEO and ongoing support."
        keywords=" Website Development,Mobile app development service India, SEO, Next.js, React, Moonstack,AI solutions for businesses "
        canonical="https://www.moonstack.com/"
        ogImage="https://www.moonstack.com/og-image.jpg"
      />

      <Layout>
        <HomepageBanner />
        <Marquee />
        <SolutionsComponent />
        <OurServices />
        <CaseStudies />
        <TechnologyComponent />
        <ProvenProcess />
        <InsightsIdeas />
        <FAQ
          accordionData={accordionData}
          infoBoxes={infoBoxes}
          tagText="Our FAQs"
          heading={{
            text: "Wondering whether Moonstack is the right fit for your business or not? Here are the most important client queries answered from our side.",
            highlightText: "Questions",
          }}
        />
        <ContactUs />
      </Layout>
    </>
  );
}
