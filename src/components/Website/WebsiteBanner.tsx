import React from "react";
import CustomButton from "../CommanButton/CommanButton";
import Heading from "../Heading/Heading";
import circleIcon from "../../../public/assets/green-circle-icon.svg";
import Tag from "../Tag/Tag";

const WebsiteBanner = () => {
  return (
    <div className="website-bg bg-black relative overflow-hidden w-full container mx-auto">
      <div className=" items-center  px-4 md:px-8 py-12 md:py-20 gap-8">
        {/* Left Content */}
        <div className="w-full  text-center">
          <Tag text="Web Development Agency" variant="blur" icon={circleIcon} />
          <Heading
            headingTag="h1"
            className="font-bold   tracking-[0em] leading-[140%] text-center"
            content={[
              {
                text: "Website Development ",
                color: "text-white block",
              },
              {
                text: "Service for Businesses",
                color: "text-Color.primary",
              },
            ]}
          />
          <h1 className="text-primary">Website Development </h1>
          <Heading
            headingTag="p"
            className="font-16 pt-4"
            content={[
              {
                text: "Launch advanced integrated functionalities based websites with best web development services for your customers.",
                color: "text-white",
              },
            ]}
          />
          <div className="text-center pt-12">
            <CustomButton
              text="Discuss with tech expert now"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteBanner;
