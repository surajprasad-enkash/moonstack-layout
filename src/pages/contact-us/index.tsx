import React from "react";
import Layout from "@/components/Layout";

//components
import HeroSection from "./heroSection";
import LocationSection from "./locationSection";
import GetQuoteBanner from "@/components/GetQuoteBanner/GetQuoteBanner";

//utils
import bannerImg from "../../../public/assets/website-development-images/crm-banner.webp";

const contactUs = (): React.JSX.Element => {
  //
  return (
    <>
      <Layout>
        <HeroSection />
        <LocationSection />
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
          containerClassName="mt-20 "
        />
      </Layout>
    </>
  );
};

export default contactUs;
