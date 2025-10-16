import React from "react";
import Image from "next/image";
import handImg from "../../../public/assets/seo-hand.webp";
import { Colors } from "@/colors/colors";
import CustomButton from "../CommanButton/CommanButton";

const SeoBanner = () => {
  return (
    <div className="seo-bg bg-black relative overflow-hidden w-full">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:items-start px-4 md:px-8 py-12 md:py-20 gap-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 bg-gradient-to-r from-transparent via-black to-transparent p-4 md:p-8">
          <h1 className="poppins-semibold text-white text-4xl md:text-5xl lg:text-6xl leading-snug md:leading-tight">
            Boost Your Visibility with{" "}
            <span style={{ color: Colors.brand200 }}>Smart SEO</span>
          </h1>

          <p className="poppins-medium text-white mt-4 text-sm md:text-base lg:text-lg leading-relaxed md:leading-[1.8]">
            The fox is a smart and clever animal known for its quick movements
            and sharp instincts. It lives in forests, grasslands, and even near
            cities. With its bright orange fur, bushy tail, and pointed ears,
            the fox is easy to recognize. It hunts mainly at night and eats
            small animals, fruits, and insects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6">
            <CustomButton text="Connect with us" variant="primary" />
            <div className="rotating-btn">
              <CustomButton text="Learn More" variant="rotating" />
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          <Image
            src={handImg}
            alt="hand-image"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SeoBanner;
