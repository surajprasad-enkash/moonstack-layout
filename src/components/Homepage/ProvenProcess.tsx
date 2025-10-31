import React from "react";
import { Colors } from "@/colors/colors";

interface ICards {
  title: string;
  desc: string;
  mt: number;
  rotate: number;
}

const ProvenProcess = () => {
  const cardsArr: ICards[] = [
    {
      title: "Discover & Define",
      desc: "Innovation plays a vital role in shaping the future of businesses. Companies that focus on creativity and problem-solving are able to build stronger connections with their customers. By combining technology with user-centered design, organizations can create solutions that not only meet current needs",
      mt: 10,
      rotate: 3,
    },
    {
      title: "Design & Development",
      desc: "Innovation plays a vital role in shaping the future of businesses. Companies that focus on creativity and problem-solving are able to build stronger connections with their customers. By combining technology with user-centered design, organizations can create solutions that not only meet current needs",
      mt: 20,
      rotate: 8,
    },
    {
      title: "Deliver & Grow",
      desc: "Innovation plays a vital role in shaping the future of businesses. Companies that focus on creativity and problem-solving are able to build stronger connections with their customers. By combining technology with user-centered design, organizations can create solutions that not only meet current needs",
      mt: 30,
      rotate: 13,
    },
  ];

  function formatNumberWithLeadingZero(number: Number) {
    return String(number).padStart(2, "0");
  }

  return (
    <>
      <div className="bg-black p-15 pt-0 text-white flex flex-col md:flex-row container mx-auto">
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 sticky top-0 mix-blend-difference">
          <div className="sticky top-0 pt-10">
            <div className="poppins-semibold font-40">
              Our{" "}
              <span className="bg-gradient-to-r from-[#25E8B1] via=[#60F90D] to-[#60F90D] text-transparent bg-clip-text">
                Proven Process
              </span>
            </div>
            <div className="poppins-regular leading-[200%] mt-4 w-full md:w-2/3 lg:w-2/3 xl:w-2/3 font-16">
              Here’s how we build lasting web and app solutions for our clients.
              Our process focuses on continuous development and refinement that
              leads to products without any glitches, bugs, or functional
              limitations.
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mix-blend-difference">
          <div id="cards">
            <div className="card" id={`card-1`}>
              <div
                className={`mt-10 -rotate-3 bg-black rounded-3xl border-1 border-green-500 p-10 justify-between grid bg-gradient-to-br from-[#177634] via-black to-black-500`}
              >
                <div className="poppins-extrabold text-outline-green text-transparent font-50">
                  {formatNumberWithLeadingZero(1)}
                </div>
                <div className="poppins-semibold font-28">
                  Design & Development
                </div>
                <div className="poppins-regular leading-[200%] mt-4 font-16">
                  We understand our client’s requirements thoroughly and create
                  solutions that are robust, scalable, and secure while meeting
                  their business goals. Our design and development process is
                  completely transparent with clients to ensure a collaborative
                  building experience.
                </div>
              </div>
            </div>
            <div className="card" id={`card-2`}>
              <div
                className={`mt-20 -rotate-7 bg-black rounded-3xl border-1 border-green-500 p-10 justify-between grid bg-gradient-to-bl from-[#177634] via-black to-black-500`}
              >
                <div className="poppins-extrabold text-outline-green text-transparent font-50">
                  {formatNumberWithLeadingZero(2)}
                </div>
                <div className="poppins-semibold font-28">
                  Testing & Refinement
                </div>
                <div className="poppins-regular leading-[200%] mt-4 font-16">
                  We stand on our promise of continuous refinement and offer
                  optimisations to our builds that improve functionality,
                  loading time, accessibility, and user experience, all as a
                  part of our quality assurance program. This level of
                  refinement helps us stand out among the competition.
                </div>
              </div>
            </div>
            <div className="card" id={`card-3`}>
              <div
                className={`mt-30 -rotate-11 bg-black rounded-3xl border-1 border-green-500 p-10 justify-between grid bg-gradient-to-tr from-[#177634] via-black to-black-500`}
              >
                <div className="poppins-extrabold text-outline-green text-transparent font-50">
                  {formatNumberWithLeadingZero(3)}
                </div>
                <div className="poppins-semibold font-28">
                  Launch & Maintenance
                </div>
                <div className="poppins-regular leading-[200%] mt-4 font-16">
                  We offer complete support for web and app product launches,
                  complete with deployment to app stores and listing
                  optimisation for SEO. We also offer long-term maintenance to
                  ensure future-proof compatibility and bug-free user
                  experience.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProvenProcess;
