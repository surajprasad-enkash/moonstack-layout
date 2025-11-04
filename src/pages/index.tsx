import { useRef } from "react";
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
import StickyCursor from "@/components/StickyCursor/StickyCursor";
import { useMultipleRefs } from "@/hooks/useMultipleRefs";
import { accordionData, infoBoxes } from "./data";

export default function Home() {
  const headerRefs = useMultipleRefs([
    "home",
    "service",
    "aboutUs",
    "contactUs",
    "career",
    "talkBtn",
  ]);

  const footerRefs = useMultipleRefs([
    "footerCareer",
    "terms",
    "privacy",
    "blog",
    "footerContactUs",
    "twitter",
    "facebook",
    "whatsapp",
    "linkedin",
  ]);

  // const homepageRefs = useMultipleRefs(["getStartedBtnRef", "learnMoreBtnRef"]);

  const insightsRefs = useMultipleRefs([
    "exploreNowBtnRef1",
    "exploreNowBtnRef2",
    "exploreNowBtnRef3",
    "aboutUsBtnRef",
  ]);

  const faqRefs = useMultipleRefs([
    "callNowBtnRef1",
    "callNowBtnRef2",
    "callNowBtnRef3",
  ]);

  const contactUsRefs = useMultipleRefs(["sendBtnRef"]);

  const stickyRefs = [
    // ...Object.values(homepageRefs),
    ...Object.values(insightsRefs),
    ...Object.values(faqRefs),
    ...Object.values(contactUsRefs),
    ...Object.values(headerRefs),
    ...Object.values(footerRefs),
  ];

  return (
    <div>
      {/* <StickyCursor stickyElements={stickyRefs} /> */}
      <Layout>
        <HomepageBanner  />
        <Marquee />
        <SolutionsComponent />
        <OurServices />
        <CaseStudies />
        <TechnologyComponent />
        <ProvenProcess />
        <InsightsIdeas/>
        <FAQ
          accordionData={accordionData}
          infoBoxes={infoBoxes}
          tagText="Our FAQs"
          heading={{
            text: "Wondering whether Moonstack is the right fit for your business or not? Here are the most important client queries answered from our side.",
            highlightText: "Questions",
          }}
          showInfoBoxes={true}
        />
        <ContactUs  />
      </Layout>
    </div>
  );
}
