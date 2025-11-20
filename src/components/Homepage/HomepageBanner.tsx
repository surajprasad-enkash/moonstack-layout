import React, { useEffect, useRef } from "react";
import Image from "next/image";
import rating from "../../../public/assets/rating.svg";
import robotImg from "../../../public/assets/robot-img.webp";
import { Colors } from "@/colors/colors";


const HomepageBanner = () => {
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
      <div className="container mx-auto bg-black">
        <div className="main-bg">
          <video autoPlay loop muted>
            <source src="/assets/Home-hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="w-1/2 bg-gradient-to-r from-transparent via-black to-transparent p-4 py-20">
            <div className="flex items-center">
              <Image
                src={rating}
                alt="rating"
                className="w-25 object-contain"
              />
              <div className="poppins-medium font-16 ml-2 text-white">
                4.5(200+ customers available)
              </div>
            </div>
            <h1 className="poppins-semibold font-50 leading-[125%] text-white">
              Achieve Otherworldly Growth{" "}
              <span style={{ color: Colors.brand200 }}>
                {" "}
                with Moonstack
              </span>{" "}
            </h1>
            <div className="poppins-medium font-14 mt-4 leading-[200%] text-white">
              Work with a team that brings your ideas to life on your terms.
              Moonstack is one of the most experienced and reliable app and web
              development agencies in India. Skyrocket your business growth with
              Moonstack today!
            </div>
            <div className="mt-6 flex gap-8">
              <button className="to-black-500 poppins-semibold font-16 cursor-pointer rounded-4xl bg-gradient-to-r from-green-500 px-10 py-2 text-white">
                Get Started
              </button>
              {/* <button className="bg-black text-white poppins-semibold py-3 px-10 rounded-3xl mt-6 border-2 border-[#076227] hover:text-green-500 border-solid font-16">
                                Learn More
                            </button> */}
              <div className="rotating-btn" >
                <button className="rotating poppins-semibold font-16 rounded-4xl bg-black px-10 py-3 text-green-500 hover:text-green-500">
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
