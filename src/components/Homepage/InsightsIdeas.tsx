import React, { useEffect, useRef } from "react";
import { Colors } from "@/colors/colors";
import Image from "next/image";
import img1 from "../../../public/assets/insight1.png";
import img2 from "../../../public/assets/insight2.png";
import img3 from "../../../public/assets/insight3.png";
import arrow from "../../../public/assets/arrow-green.svg";



const InsightsIdeas = () => {
  const rotatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let angle = 0;
    const rotate = () => {
      angle = (angle + 1) % 360;
      if (rotatingRef.current) {
        rotatingRef.current.style.setProperty("--angle", `${angle}deg`);
      }
      requestAnimationFrame(rotate);
    };

    rotate();
    return () => cancelAnimationFrame(rotate as any);
  }, []);

  return (
    <>
      <div className="container mx-auto bg-black p-15 pt-25 text-white">
        <div className="w-full justify-self-center text-center md:w-1/2 lg:w-1/2 xl:w-1/2">
          <div className="poppins-semibold font-40">
            Blogs{" "}
            <span className="via=[#60F90D] bg-gradient-to-r from-[#25E8B1] to-[#60F90D] bg-clip-text text-transparent">
              & Articles
            </span>
          </div>
          <div className="poppins-medium font-16 mt-4 leading-[200%]">
            Whether you’re interested in learning more about web and app
            development or you want to stay up-to-date with industry trends, our
            blogs and articles will help you achieve both.
          </div>
        </div>
        <div className="mt-4 flex flex-col justify-between gap-y-8 md:flex-row">
          <div className="w-full rounded-2xl border-1 border-solid border-[#296329] p-6 md:w-[32%] lg:w-[32%] xl:w-[32%]">
            <Image
              src={img1}
              alt="image-1"
              className="h-auto w-[100%] object-contain"
            />
            <div className="poppins-medium font-14 mt-4 leading-[200%] text-[#FF9E2F]">
              Development
            </div>
            <div className="poppins-semibold font-20 mt-4">
              How To Build Real Estate App from Scratch: Step-by-Step Guide
            </div>
            <div className="poppins-medium font-16 mt-4 leading-[200%]">
              Education is the key to success in life. It helps people gain
              knowledge, develop skills, and build.
            </div>
            <button
              className="poppins-medium font-16 mt-8 flex cursor-pointer"
              style={{ color: Colors.brand200 }}
            >
              Explore Now
              <Image src={arrow} alt="" className="ml-2 h-auto w-4" />
            </button>
          </div>
          <div className="w-full rounded-2xl border-1 border-solid border-[#296329] p-6 md:w-[32%] lg:w-[32%] xl:w-[32%]">
            <Image
              src={img2}
              alt="image-1"
              className="h-auto w-[100%] object-contain"
            />
            <div className="poppins-medium font-14 mt-4 leading-[200%] text-[#FF9E2F]">
              Development
            </div>
            <div className="poppins-semibold font-20 mt-4">
              How To Build Real Estate App from Scratch: Step-by-Step Guide
            </div>
            <div className="poppins-medium font-16 mt-4 leading-[200%]">
              Education is the key to success in life. It helps people gain
              knowledge, develop skills, and build.
            </div>
            <button
              className="poppins-medium font-16 mt-8 flex cursor-pointer"
              style={{ color: Colors.brand200 }}
            >
              Explore Now
              <Image src={arrow} alt="" className="ml-2 h-auto w-4" />
            </button>
          </div>
          <div className="w-full rounded-2xl border-1 border-solid border-[#296329] p-6 md:w-[32%] lg:w-[32%] xl:w-[32%]">
            <Image
              src={img3}
              alt="image-1"
              className="h-auto w-[100%] object-contain"
            />
            <div className="poppins-medium font-14 mt-4 leading-[200%] text-[#FF9E2F]">
              Development
            </div>
            <div className="poppins-semibold font-20 mt-4">
              How To Build Real Estate App from Scratch: Step-by-Step Guide
            </div>
            <div className="poppins-medium font-16 mt-4 leading-[200%]">
              Education is the key to success in life. It helps people gain
              knowledge, develop skills, and build.
            </div>
            <button
              className="poppins-medium font-16 mt-8 flex cursor-pointer"
              style={{ color: Colors.brand200 }}
            >
              Explore Now
              <Image src={arrow} alt="" className="ml-2 h-auto w-4" />
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="rotating-btn" >
            <button className="poppins-semibold font-16 hover:color-black mt-8 justify-self-center rounded-4xl border-1 border-solid border-green-500 bg-black px-12 py-3 text-white">
              About Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsightsIdeas;
