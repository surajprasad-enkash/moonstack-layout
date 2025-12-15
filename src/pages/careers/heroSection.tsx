import CareerForm from "@/components/careers-form";
import Heading from "@/components/Heading/Heading";
import React from "react";
import Image from "next/image";
import vectorOne from "../../../public/assets/carreers/center-vector.svg";
import vectorTwo from "../../../public/assets/carreers/med-ball.svg";
import vectorThree from "../../../public/assets/carreers/small-ball.svg";
import vectorFour from "../../../public/assets/carreers/right-vector.svg";

const HeroSection = () => {
  return (
    <section className="relative bg-[radial-gradient(85.1%_243.68%_at_3.54%_41.36%,#0D361C_0%,#072010_50%,#000000_100%)]">
      <div className="absolute top-40 right-0">
        <Image src={vectorFour} alt={"vector"} />
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-4 px-4 py-12 pt-28 md:grid-cols-2 md:items-start md:px-8 md:pt-[150px] md:pb-20">
          <div className="w-[80%]">
            <Heading
              headingTag="h1"
              className="pt-2 text-start font-semibold"
              content={[
                {
                  text: "Explore new job vacancies all over the world",
                  color: "text-gradient ",
                },
              ]}
            />
            <Heading
              headingTag="p"
              className="pt-2 text-start"
              content={[
                {
                  text: "The fox is a small, intelligent, and clever animal known for its quick thinking and adaptability. It belongs to the dog family but has unique traits that make it different from wolves and domestic dogs. ",
                  color: "text-white ",
                },
              ]}
            />
            <div className="flex gap-4">
              <div className="mt-[26px] flex w-full flex-col items-start rounded-2xl bg-[#04230F] bg-[radial-gradient(89.69%_124.58%_at_80.2%_10.31%,_#0F8338_0%,_#0C411E_100%)] p-5 shadow-lg">
                <Heading
                  headingTag="h5"
                  className="pt-2 text-start"
                  content={[
                    {
                      text: "50 + ",
                      color: "text-white font-semibold ",
                    },
                  ]}
                />
                <Heading
                  headingTag="p"
                  className="pt-2 text-start"
                  content={[
                    {
                      text: "Team Member",
                      color: "text-white ",
                    },
                  ]}
                />
              </div>{" "}
              <div className="mt-[26px] flex w-full flex-col items-start rounded-2xl bg-[#04230F] bg-[radial-gradient(89.69%_124.58%_at_80.2%_10.31%,_#0F8338_0%,_#0C411E_100%)] p-5 shadow-lg">
                <Heading
                  headingTag="h5"
                  className="pt-2 text-start"
                  content={[
                    {
                      text: "200 + ",
                      color: "text-white font-semibold ",
                    },
                  ]}
                />
                <Heading
                  headingTag="p"
                  className="pt-2 text-start"
                  content={[
                    {
                      text: "Projects",
                      color: "text-white ",
                    },
                  ]}
                />
              </div>{" "}
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-0">
              <Image src={vectorThree} alt={"vector"} />
            </div>

            <div className="absolute top-0">
              <Image src={vectorThree} alt={"vector"} />
            </div>
            <div className="absolute right-0 bottom-20">
              <Image src={vectorTwo} alt={"vector"} />
            </div>
            <div className="absolute bottom-[50px] left-[-44px]">
              <Image src={vectorOne} alt={"vector"} width={120} />
            </div>
            <CareerForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
