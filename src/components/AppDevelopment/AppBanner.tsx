import React from "react";
import Image from "next/image";
import heroImg from "../../../public/assets/app-development-hero.webp";
import circleIcon from "../../../public/assets/green-circle-icon.svg";
import CustomButton from "../CommanButton/CommanButton";
import Heading from "../Heading/Heading";
import Tag from "../Tag/Tag";

const AppBanner = () => {
  return (
    <div className="bg-application bg-black relative overflow-hidden  container mx-auto">
      <div
        className="absolute top-[-187px] left-[-60px] w-[1558px] h-[1560px] rounded-full opacity-100"
        style={{
          background: "linear-gradient(180deg, #00DD4D 0%, #000000 27.75%)",
        }}
      ></div>

      <div className=" flex flex-col-reverse md:flex-row items-center md:items-start px-4 md:px-8 py-12 md:pt-20 gap-8 md:pb-[200px]">
        <div className="w-full md:w-1/2 z-10 ">
          <Tag text="App Development" variant="blur" icon={circleIcon} />
          <Heading
            headingTag="h1"
            className="font-bold pt-3 font-60 text-start leading-[125%]  "
            content={[
              {
                text: "Get Customised Mobile App Solutions in India ",
                color: "text-white",
              },
              {
                text: "With Moonstack ",
                color: "text-Color.primary-700",
              },
            ]}
          />

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-12">
            <CustomButton text="Connect with us" variant="primary" />
            <div className="rotating-btn">
              <CustomButton text="Learn More" variant="rotating" />
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 ">
          <Image
            src={heroImg}
            alt="hand-image"
            width={668}
            className="object-contain z-20 animate-bounce [animation-duration:10s] "
          />
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
