import React from "react";
import Image from "next/image";
import heroImg from "../../../public/assets/app-development-hero.webp";
import circleIcon from "../../../public/assets/green-circle-icon.svg";
import CustomButton from "../CommanButton/CommanButton";
import Heading from "../Heading/Heading";
import Tag from "../Tag/Tag";

const AppBanner = () => {
  return (
    <section>
      <div className="bg-application relative container mx-auto overflow-hidden bg-black">
        <div
          className="absolute top-[-187px] left-[-60px] h-[1560px] w-[1558px] rounded-full opacity-100"
          style={{
            background: "linear-gradient(180deg, #00DD4D 0%, #000000 27.75%)",
          }}
        ></div>

        <div className="flex flex-col-reverse items-center gap-8 px-4 py-12 md:flex-row md:items-start md:px-8 md:pt-20 md:pb-[200px]">
          <div className="z-10 w-full md:w-1/2">
            <Tag text="App Development" variant="blur" icon={circleIcon} />
            <Heading
              headingTag="h1"
              className="font-60 pt-3 text-start leading-[125%] font-bold"
              content={[
                {
                  text: "Mobile Application ",
                  color: "text-white",
                },
                {
                  text: "Development ",
                  color: "text-primary",
                },
              ]}
            />{" "}
            <Heading
              headingTag="p"
              className="text-start"
              content={[
                {
                  text: "At Moonstack, we understand the power of mobile applications and deliver complete end-to-end mobile app solutions in India for businesses. When built right, mobile apps can scale businesses and build brands. They are the most direct connection customers have with brands and a gateway to customer retention and business growth.",
                  color: "text-white",
                },
              ]}
            />
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-8">
              <CustomButton text="Connect with us" variant="primary" />
              <div className="rotating-btn">
                <CustomButton text="Learn More" variant="rotating" />
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0">
            <Image
              src={heroImg}
              alt="hand-image"
              width={600}
              className="z-20 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppBanner;
