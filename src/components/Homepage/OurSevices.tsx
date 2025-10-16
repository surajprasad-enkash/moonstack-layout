import React from "react";
import { Colors } from "@/colors/colors";
import Image from "next/image";
import lock from "../../../public/assets/lock.svg";
import arrow from "../../../public/assets/arrow-green.svg";

interface IServiceArray {
  image: string;
  title: string;
  desc: string;
}

const OurServices = () => {
  const servicesArr: IServiceArray[] = [
    {
      image: lock,
      title: "Web Designing",
      desc: "Earney is a financial solution to energize and empower Small and Medium.",
    },
    {
      image: lock,
      title: "Mobile Development",
      desc: "Earney is a financial solution to energize and empower Small and Medium.",
    },
    {
      image: lock,
      title: "Cloud Service",
      desc: "Earney is a financial solution to energize and empower Small and Medium.",
    },
    {
      image: lock,
      title: "Frontend Development",
      desc: "Earney is a financial solution to energize and empower Small and Medium.",
    },
    {
      image: lock,
      title: "Backend Development",
      desc: "Earney is a financial solution to energize and empower Small and Medium.",
    },
  ];
  return (
    <>
      <div className="bg-black p-15 text-white container mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-y-15">
          <div className="w-full md:w-[30%] lg:w-[30%] xl:w-[30%] poppins-bold font-40">
            <div>Our</div>
            <div className="bg-gradient-to-r from-[#25E8B1] via=[#60F90D] to-[#60F90D] text-transparent bg-clip-text">
              Sevices
            </div>
            <div className="mt-6 poppins-medium leading-[200%] font-16">
              Earney is a financial solution to energize and empower Small and
              Medium Enterprises (SMEs) and freelancers by providing them with a
              seamless and efficient financial platform
            </div>
          </div>
          {servicesArr.map((li) => (
            // eslint-disable-next-line react/jsx-key
            <div className="w-full group md:w-[32%] lg:w-[32%] xl:w-[32%] rounded-3xl border-b-2 border-green-500 p-8 items-between grid bg-gradient-to-b from-transparent to-transparent hover:from-transparent hover:to-[#0C4A0C] transition duration-400">
              <div className="flex justify-between mb-4">
                <Image src={li.image} alt="" className="w-10 h-auto" />
                <Image
                  src={arrow}
                  alt=""
                  className="w-8 h-auto hidden group-hover:block"
                />
              </div>
              <div className="mt-auto">
                <div className="poppins-semibold font-18 mb-4">{li.title}</div>
                <div className="poppins-regular leading-[200%] font-16">
                  {li.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurServices;
