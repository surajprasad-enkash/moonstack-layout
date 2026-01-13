import React from "react";

//components
import Layout from "@/components/Layout";
import WorksHeroSection from "@/components/CaseStudy/WorksHeroSection";
import CaseStudySection from "@/components/CaseStudy/CaseStudySection";
import ProjectCTA from "@/components/ProjectCTA/ProjectCTA";

const CaseStudy = (): React.JSX.Element => {
  const apiKey = "a9f3c8d4e21b7a0c9f0a1e3d8b7c6f7hyx67";
  //
  return (
    <>
      <Layout>
        <WorksHeroSection />
        <CaseStudySection apiKey={apiKey} />
        <div className="relative z-[2]">
          <ProjectCTA
            title="Ready to scale"
            subtitle="your business?"
            description="Book a free consultation to get clarity, direction, and expert advice you can implement right away."
            fontSize="!text-[80px]"
            marginBottom="mb-0"
            whiteBoxClass=""
          />
        </div>
      </Layout>
    </>
  );
};

export default CaseStudy;
