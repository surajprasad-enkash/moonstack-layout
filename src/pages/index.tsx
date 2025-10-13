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

export default function Home() {
  const headerRefs = useMultipleRefs([
    'home',
    'service',
    'aboutUs',
    'contactUs',
    'career',
    'talkBtn'
  ]);

  const footerRefs = useMultipleRefs([
    'footerCareer',
    'terms',
    'privacy',
    'blog',
    'footerContactUs',
    'twitter',
    'facebook',
    'whatsapp',
    'linkedin'
  ]);

  const homepageRefs = useMultipleRefs([
    'getStartedBtnRef',
    'learnMoreBtnRef'
  ]);

  const insightsRefs = useMultipleRefs([
    'exploreNowBtnRef1',
    'exploreNowBtnRef2',
    'exploreNowBtnRef3',
    'aboutUsBtnRef'
  ]);

  const faqRefs = useMultipleRefs([
    'callNowBtnRef1',
    'callNowBtnRef2',
    'callNowBtnRef3'
  ]);

  const contactUsRefs = useMultipleRefs(['sendBtnRef']);

  const stickyRefs = [
    ...Object.values(homepageRefs),
    ...Object.values(insightsRefs),
    ...Object.values(faqRefs),
    ...Object.values(contactUsRefs),
    ...Object.values(headerRefs),
    ...Object.values(footerRefs)
  ]

  return (
    <div>
      <StickyCursor stickyElements={stickyRefs} />
      <Layout refs={headerRefs} footerRefs={footerRefs}>
        <HomepageBanner refs={homepageRefs} />
        <Marquee />
        <SolutionsComponent />
        <OurServices />
        <CaseStudies />
        <TechnologyComponent />
        <ProvenProcess />
        <InsightsIdeas refs={insightsRefs} />
        <FAQ refs={faqRefs} />
        <ContactUs refs={contactUsRefs} />
      </Layout>
    </div>
  );
}
