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

export default function Home() {
  //
  return (
    <div>
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
    </div>
  );
}
