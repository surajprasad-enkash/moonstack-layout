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
      desc: "Choose Moonstack for responsive, functional, and clean web design with an intuitive UI/UX.",
    },
    {
      image: lock,
      title: "Mobile Development",
      desc: "Build Android, web, and iOS apps that help your business scale with Moonstack.",
    },
    {
      image: lock,
      title: "Cloud Service",
      desc: "Build Android, web, and iOS apps that help your business scale with Moonstack.",
    },
    {
      image: lock,
      title: "Frontend Development",
      desc: "No matter where you go, take your business with you with Moonstack’s cloud services.",
    },
    {
      image: lock,
      title: "Backend Development",
      desc: "Get secure and scalable backend development with Moonstack, built using clean code.",
    },
  ];
  return (
    <section className="bg-black">
      <div className="container mx-auto p-15 text-white">
        <div className="flex flex-col flex-wrap justify-between gap-y-15 md:flex-row">
          <div className="poppins-bold font-40 w-full md:w-[30%] lg:w-[30%] xl:w-[30%]">
            <div>Our</div>
            <div className="via=[#60F90D] bg-gradient-to-r from-[#25E8B1] to-[#60F90D] bg-clip-text text-transparent">
              Sevices
            </div>
            <div className="poppins-medium font-16 mt-6 leading-[200%]">
              Moonstack offers completely transparent and highly secure web and
              app development solutions. Here’s a look at all of our services.
            </div>
          </div>
          {servicesArr.map((li,i) => (
            // eslint-disable-next-line react/jsx-key
            <div key={i} className="group items-between border-primary-400 grid w-full rounded-3xl border-b-2 bg-gradient-to-b from-transparent to-transparent p-8 transition duration-400 hover:from-transparent hover:to-[#0C4A0C] md:w-[32%] lg:w-[32%] xl:w-[32%]">
              <div className="mb-4 flex justify-between">
                <Image src={li.image} alt="" className="h-auto w-10" />
                <Image
                  src={arrow}
                  alt=""
                  className="hidden h-auto w-8 group-hover:block"
                />
              </div>
              <div className="mt-auto">
                <div className="poppins-semibold font-18 mb-4">{li.title}</div>
                <div className="poppins-regular font-16 leading-[200%]">
                  {li.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
