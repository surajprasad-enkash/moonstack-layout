import React, { useEffect, useRef } from "react";
import Image from "next/image";
import rating from "../../../public/assets/rating.svg";
import robotImg from "../../../public/assets/robot-img.webp";
import { Colors } from "@/colors/colors";

interface IBannerRefs {
  getStartedBtnRef: React.RefObject<HTMLDivElement>;
  learnMoreBtnRef: React.RefObject<HTMLDivElement>;
}

const HomepageBanner = ({ refs }: { refs: IBannerRefs }) => {
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
      <div className="bg-black container mx-auto">
        <div className="main-bg">
          <video autoPlay loop muted>
            <source src="/assets/Home-hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="bg-gradient-to-r from-transparent via-black to-transparent w-1/2 p-4 py-20">
            <div className="flex items-center">
              <Image
                src={rating}
                alt="rating"
                className="w-25 object-contain"
              />
              <div className="poppins-medium text-white font-16">
                4.5(200+ customers available)
              </div>
            </div>
            <div className="poppins-semibold text-white font-50">
              We Boost the Growth For Startup to{" "}
              <span style={{ color: Colors.brand200 }}>fortune 500</span>{" "}
              companies
            </div>
            <div className="poppins-medium text-white mt-4 leading-[200%] font-16">
              We focus on scalability, security, and user-centric design,
              ensuring that every project is future-ready and tailored to client
              needs.
            </div>
            <div className="flex gap-8 mt-6">
              <button
                ref={refs.getStartedBtnRef}
                className="bg-gradient-to-r from-green-500 to-black-500 text-white poppins-semibold py-2 px-10 rounded-4xl font-16 cursor-pointer"
              >
                Get Started
              </button>
              {/* <button className="bg-black text-white poppins-semibold py-3 px-10 rounded-3xl mt-6 border-2 border-[#076227] hover:text-green-500 border-solid font-16">
                                Learn More
                            </button> */}
              <div className="rotating-btn" ref={refs.learnMoreBtnRef}>
                <button
                  className="rotating bg-black text-green-500 poppins-semibold py-3 px-10 rounded-4xl hover:text-green-500 font-16"
                  ref={rotatingRef}
                >
                  Learn More
                </button>
              </div>
              {/* <button className="glow-on-hover" type="button">HOVER ME, THEN CLICK ME!</button> */}
            </div>
          </div>
          <div className="w-1/2">
            <Image src={robotImg} alt="hand-image" className="hand-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepageBanner;
