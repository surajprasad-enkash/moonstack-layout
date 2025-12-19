import Heading from "@/components/Heading/Heading";
import React from "react";
import { GrLocation } from "react-icons/gr";
import Tag from "@/components/Tag/Tag";
import dynamic from "next/dynamic";

const WorldMap = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

const LocationSection = () => {
  return (
    <section className="bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-4 px-4 py-12 pt-28 md:grid-cols-2 md:items-start md:px-8 md:py-20">
          <div>
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
                  <div className="flex gap-3">
                    {" "}
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
                  </div>{" "}
                  <Heading
                    headingTag="p"
                    className="text-start"
                    content={[
                      {
                        text: "8 The Green, STE R, Dover, DE 19901, USA",
                        color: "text-white ",
                      },
                    ]}
                  />
                  <a
                    href="https://maps.app.goo.gl/QKwTMpTyMhJ4dNbi8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-primary text-primary z-10 rounded-full border px-4 py-2 text-sm transition hover:bg-green-600 hover:text-white"
                  >
                    Location
                  </a>
                </div>
              </div>{" "}
              <div className="relative mt-[26px] flex w-full max-w-xl items-center justify-between overflow-hidden rounded-2xl bg-[#04230F] p-5 shadow-lg">
                <div className="z-10 flex flex-col items-start gap-6">
                  <div className="flex gap-3">
                    {" "}
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
                  </div>

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
                  <a
                    href="https://maps.app.goo.gl/CieCPT4nfzxaAmEs6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-primary text-primary z-10 rounded-full border px-4 py-2 text-sm transition hover:bg-green-600 hover:text-white"
                  >
                    Location
                  </a>
                </div>
              </div>{" "}
            </div>
          </div>

          <WorldMap />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
