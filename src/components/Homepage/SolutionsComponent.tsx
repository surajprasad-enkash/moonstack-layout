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
import Heading from "../Heading/Heading";

const statsData = [
  { end: 98, suffix: "%", label: "Customer Satisfaction", duration: 2 },
  { end: 120, suffix: "+", label: "Active Projects", duration: 2.5 },
  { end: 10, suffix: "s", label: "Average Answer Time", duration: 2 },
];

const SolutionsComponent = () => {
  //
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between p-10 md:flex-row">
          <div className="poppins-bold font-38 mb-6 w-full text-center md:mb-0 md:w-2/5 md:text-left lg:w-2/5 xl:w-[40%]">
            <span className="bg-gradient-to-r from-[#25E8B1] to-[#60F90D] bg-clip-text text-transparent">
              Power Your Business With
            </span>{" "}
            The Moonstack Advantage
          </div>
          <Heading
            headingTag="p"
            className="w-1/2 pt-4 text-start md:text-left"
            content="      We offer tailored end-to-end web and app solutions for businesses in
            India. Whether you’re a startup interested in developing your first
            product or an MNC interested in building an enterprise app, we offer
            completely custom services personalised to your requirements."
          />
        </div>
        <div className="flex flex-col p-8 pt-0 md:flex-row">
          <div className="right-gradient-bdr w-full rounded-2xl bg-gradient-to-r from-transparent to-transparent p-10 pt-4 transition duration-400 hover:from-transparent hover:to-[#0D320D] md:w-1/4 lg:w-1/4 xl:w-1/2">
            <Image src={sol1} alt="" className="w-9" />
            <div className="poppins-semibold font-18 mt-10">
              Complete Confidentiality
            </div>
            <div className="poppins-medium font-14 mt-4 leading-[200%]">
              We sign NDAs to ensure complete confidentiality for our clients.
            </div>
          </div>
          <div className="right-gradient-bdr w-full rounded-2xl bg-gradient-to-r from-transparent to-transparent p-10 pt-4 transition duration-400 hover:from-transparent hover:to-[#0D320D] md:w-1/4 lg:w-1/4 xl:w-1/2">
            <Image src={sol2} alt="" className="w-9" />
            <div className="poppins-semibold font-18 mt-10">
              Transparent Process
            </div>
            <div className="poppins-medium font-14 mt-4 leading-[200%]">
              You’re always a part of the progress when you partner with
              Moonstack.
            </div>
          </div>
          <div className="right-gradient-bdr w-full rounded-2xl bg-gradient-to-r from-transparent to-transparent p-10 pt-4 transition duration-400 hover:from-transparent hover:to-[#0D320D] md:w-1/4 lg:w-1/4 xl:w-1/2">
            <Image src={sol3} alt="" className="w-9" />
            <div className="poppins-semibold font-18 mt-10">
              Client-Centric Approach
            </div>
            <div className="poppins-medium font-14 mt-4 leading-[200%]">
              We understand your needs and deliver bespoke results every time.
            </div>
          </div>
          <div className="right-gradient-bdr w-full rounded-2xl bg-gradient-to-r from-transparent to-transparent p-10 pt-4 transition duration-400 hover:from-transparent hover:to-[#0D320D] md:w-1/4 lg:w-1/4 xl:w-1/2">
            <Image src={sol4} alt="" className="w-9" />
            <div className="poppins-semibold font-18 mt-10">
              Save Money With Moonstack
            </div>
            <div className="poppins-medium font-14 mt-4 leading-[200%]">
              Bundle our web and app development services to save money on your
              projects.
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-6 p-15 pt-0 md:flex-row md:pt-20 lg:pt-20 xl:pt-20">
          <div className="x:w-1/2 w-full md:w-1/2 lg:w-1/2">
            <Image
              src={rectangle}
              alt=""
              className="rounded-10 h-auto w-[80%]"
            />
          </div>
          <div className="x:w-1/2 w-full md:w-1/2 lg:w-1/2">
            <div className="poppins-medium font-16 mt-10 h-1/2 leading-[200%] md:mt-0 lg:mt-0 xl:mt-0">
              As a premier web and app development agency in India, Moonstack
              has been a leading market force for the last 15+ years. We have
              completed 450+ projects for businesses of all sizes startups to
              enterprises, and we’re here to help you too.
            </div>
            <div
              ref={ref}
              className="mt-15 flex flex-col gap-8 text-center md:mt-0 md:flex-row"
            >
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="bottom-gradient-bdr flex w-full items-center justify-center px-5 py-5 md:w-1/3"
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
    </section>
  );
};

export default SolutionsComponent;
