import React from "react";
import Image from "next/image";
import heroImg from "../../../public/assets/backend-hero.webp";

import CustomButton from "../CommanButton/CommanButton";
import Heading from "../Heading/Heading";


const BackendBanner = () => {
  return (
    <div className="backend-bg bg-black relative overflow-hidden w-full container mx-auto">
      <div className=" flex flex-col-reverse md:flex-row items-center md:items-start px-4 md:px-8 py-12 md:pt-20 gap-8 md:pb-48">
        <div className="w-full md:w-1/2 z-10 ">
          <Heading
            headingTag="h1"
            className="font-bold pt-3 font-60 text-start"
            content={[
              {
                text: "Smart, Scalable, Secure ",
                color: "text-white",
              },
              {
                text: "That’s Our Backend",
                color: "Colors.brand200 ",
              },
            ]}
          />
          <Heading
            headingTag="p"
            className="font-medium pt-3 font-14 text-start"
            content={[
              {
                text: "If you are looking for a perfect laptop picture on Freepik for your design project, the best way is to use specific and descriptive search keywords that match the style and purpose you want. For example, instead of just typing laptop, you can search for “modern laptop mockup,.",
                color: "text-white",
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
        {/* <OrbitingCirclesDemo /> */}

        <div className="absolute right-0 bottom-0 ">
          <Image
            src={heroImg}
            alt="hand-image"
            width={1152}
            className=" object-contain z-20 "
          />
        </div>
      </div>
    </div>
  );
};

export default BackendBanner;
