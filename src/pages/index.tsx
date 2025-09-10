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

export default function Home() {
  return (
    <div>
      <Layout>
        <HomepageBanner />
        <Marquee />
        <SolutionsComponent />
        <OurServices />
        <TechnologyComponent />
        <ProvenProcess />
        <InsightsIdeas />
        <FAQ />
        <ContactUs />
      </Layout>
    </div>
  );
}
