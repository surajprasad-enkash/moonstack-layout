import Heading from "@/components/Heading/Heading";
import React from "react";
import { GrLocation } from "react-icons/gr";
import Image from "next/image";
import mapImg from "../../../public/assets/mapImg.webp";
import Tag from "@/components/Tag/Tag";

const LocationSection = () => {
  return (
    <section className="bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-[180px] px-4 py-12 pt-28 md:grid-cols-2 md:items-start md:px-8 md:py-20">
          <div>
            <Tag text={"Location"} />
            <Heading
              headingTag="h3"
              className="pt-5 text-start font-semibold"
              content={[
                {
                  text: "Meet With US  ",
                  color: "text-white ",
                },
                {
                  text: "For Great Experience",
                  color: "text-gradient ",
                },
              ]}
            />
            <div className="relative mt-[26px] flex w-full max-w-xl items-center justify-between overflow-hidden rounded-2xl bg-[#04230F] p-5 shadow-lg">
              <div className="z-10 flex flex-col items-start gap-6">
                <GrLocation className="text-white" size={28} />
                <Heading
                  headingTag="p"
                  className="text-start"
                  content={[
                    {
                      text: "Moonstack Pvt. Ltd ",
                      color: "text-white ",
                    },
                  ]}
                />
                <Heading
                  headingTag="p"
                  className="text-start"
                  content={[
                    {
                      text: "E6, 3rd Floor, Gautam Marg, Vaishali Nagar, Jaipur, Rajasthan 302021",
                      color: "text-white ",
                    },
                  ]}
                />
                <a className="border-primary text-primary z-10 rounded-full border px-4 py-2 text-sm transition hover:bg-green-600 hover:text-white">
                  Location
                </a>
              </div>
            </div>{" "}
          </div>
          <div className="absolute right-0">
            <Image src={mapImg} alt={"map"} height={544} width={700} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
