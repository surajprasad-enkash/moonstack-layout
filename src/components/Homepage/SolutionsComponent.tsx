import { Colors } from "@/colors/colors";
import React from "react";
import subtract from "../../../public/assets/home-star.svg";
import arrow from "../../../public/assets/arrow-down.svg";
import rectangle from "../../../public/assets/Rectangle2.png";
import sol1 from "../../../public/assets/sol1.svg";
import sol2 from "../../../public/assets/sol2.svg";
import sol3 from "../../../public/assets/sol3.svg";
import sol4 from "../../../public/assets/sol4.svg";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const statsData = [
  { end: 98, suffix: "%", label: "Customer Satisfaction", duration: 2 },
  { end: 120, suffix: "+", label: "Active Projects", duration: 2.5 },
  { end: 10, suffix: "s", label: "Average Answer Time", duration: 2 },
];

const SolutionsComponent = () => {
  //
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  return (
    <>
      <div className="bg-black text-white container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between p-10">
          <div className="w-full md:w-2/5 lg:w-2/5 xl:w-[40%] poppins-bold text-center md:text-left font-38 mb-6 md:mb-0">
            <span className="bg-gradient-to-r from-[#25E8B1] to-[#60F90D] text-transparent bg-clip-text">
              Moonstack
            </span>{" "}
            for Future-Ready Solutions
          </div>
          {/* <div className="w-full md:w-1/5 lg:w-1/5 xl:w-[10%] flex items-center justify-center md:justify-end mb-6 md:mb-0">
                        <Image src={subtract} alt="" className="w-8 h-auto" />
                    </div> */}
          <div className="w-full md:w-2/5 lg:w-2/5 xl:w-[50%] solutions-bg poppins-medium font-16 text-center md:text-left leading-[200%]">
            Earney is a financial solution to energize and empower Small and
            Medium Enterprises (SMEs) and freelancers by providing them with a
            seamless and efficient financial platform
          </div>
        </div>

        <div className="flex flex-col md:flex-row p-8 pt-0">
          <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/2 p-10 pt-4 right-gradient-bdr bg-gradient-to-r from-transparent to-transparent hover:from-transparent hover:to-[#0D320D] transition duration-400 rounded-2xl">
            <Image src={sol1} alt="" className="w-9" />
            <div className="mt-10 poppins-semibold font-18">
              Client-Centric Approach
            </div>
            <div className="mt-4 poppins-medium font-14 leading-[200%]">
              Earney is a financial solution to energize and empower Small and
              Medium Enterprises.
            </div>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/2 p-10 pt-4 right-gradient-bdr bg-gradient-to-r from-transparent to-transparent hover:from-transparent hover:to-[#0D320D] transition duration-400 rounded-2xl">
            <Image src={sol2} alt="" className="w-9" />
            <div className="mt-10 poppins-semibold font-18">
              Transparent Process
            </div>
            <div className="mt-4 poppins-medium font-14 leading-[200%]">
              Earney is a financial solution to energize and empower Small and
              Medium Enterprises.
            </div>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/2 p-10 pt-4 right-gradient-bdr bg-gradient-to-r from-transparent to-transparent hover:from-transparent hover:to-[#0D320D] transition duration-400 rounded-2xl">
            <Image src={sol3} alt="" className="w-9" />
            <div className="mt-10 poppins-semibold font-18">
              Client-Centric Approach
            </div>
            <div className="mt-4 poppins-medium font-14 leading-[200%]">
              Earney is a financial solution to energize and empower Small and
              Medium Enterprises.
            </div>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/2 p-10 pt-4 right-gradient-bdr bg-gradient-to-r from-transparent to-transparent hover:from-transparent hover:to-[#0D320D] transition duration-400 rounded-2xl">
            <Image src={sol4} alt="" className="w-9" />
            <div className="mt-10 poppins-semibold font-18">
              Save More Money
            </div>
            <div className="mt-4 poppins-medium font-14 leading-[200%]">
              Earney is a financial solution to energize and empower Small and
              Medium Enterprises.
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-6 p-15 pt-0 md:pt-20 lg:pt-20 xl:pt-20">
          <div className="w-full md:w-1/2 lg:w-1/2 x:w-1/2">
            <Image
              src={rectangle}
              alt=""
              className="rounded-10 w-[80%] h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 x:w-1/2">
            <div className="poppins-medium leading-[200%] h-1/2 font-16 mt-10 md:mt-0 lg:mt-0 xl:mt-0">
              Earney is a financial solution to energize and empower Small and
              Medium Enterprises (SMEs) and freelancers by providing them with a
              seamless and efficient financial platform
            </div>
            <div
              ref={ref}
              className="flex flex-col md:flex-row gap-8 mt-15 md:mt-0 text-center"
            >
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/3 py-5 px-5 bottom-gradient-bdr flex items-center justify-center"
                >
                  <div>
                    <div className="poppins-semibold font-38 text-white">
                      {inView ? (
                        <CountUp
                          start={0}
                          end={stat.end}
                          duration={stat.duration}
                          suffix={stat.suffix}
                        />
                      ) : (
                        `${stat.end}${stat.suffix}`
                      )}
                    </div>
                    <div className="poppins-medium font-16 mt-5 text-white">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsComponent;
