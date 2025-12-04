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
    <section className="bg-black">
      <div className="container mx-auto flex flex-col p-15 pt-0 text-white md:flex-row">
        <div className="sticky top-0 w-full mix-blend-difference md:w-1/2 lg:w-1/2 xl:w-1/2">
          <div className="sticky top-[100px] pt-10">
            <div className="poppins-semibold font-40">
              Our{" "}
              <span className="via=[#60F90D] bg-gradient-to-r from-[#25E8B1] to-[#60F90D] bg-clip-text text-transparent">
                Proven Process
              </span>
            </div>
            <div className="poppins-regular font-16 mt-4 w-full leading-[200%] md:w-2/3 lg:w-2/3 xl:w-2/3">
              Here’s how we build lasting web and app solutions for our clients.
              Our process focuses on continuous development and refinement that
              leads to products without any glitches, bugs, or functional
              limitations.
            </div>
          </div>
        </div>
        <div className="w-full mix-blend-difference md:w-1/2 lg:w-1/2 xl:w-1/2">
          <div id="cards">
            <div className="card" id={`card-1`}>
              <div
                className={`to-black-500 border-primary-300 mt-10 grid -rotate-3 justify-between rounded-3xl border-1 bg-black bg-gradient-to-br from-[#177634] via-black p-10`}
              >
                <div className="poppins-extrabold text-outline-green font-50 text-transparent">
                  {formatNumberWithLeadingZero(1)}
                </div>
                <div className="poppins-semibold font-28">
                  Design & Development
                </div>
                <div className="poppins-regular font-16 mt-4 leading-[200%]">
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
                className={`to-black-500 border-primary-300 mt-20 grid -rotate-7 justify-between rounded-3xl border-1 bg-black bg-gradient-to-bl from-[#177634] via-black p-10`}
              >
                <div className="poppins-extrabold text-outline-green font-50 text-transparent">
                  {formatNumberWithLeadingZero(2)}
                </div>
                <div className="poppins-semibold font-28">
                  Testing & Refinement
                </div>
                <div className="poppins-regular font-16 mt-4 leading-[200%]">
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
                className={`to-black-500 border-primary-300 mt-30 grid -rotate-11 justify-between rounded-3xl border-1 bg-black bg-gradient-to-tr from-[#177634] via-black p-10`}
              >
                <div className="poppins-extrabold text-outline-green font-50 text-transparent">
                  {formatNumberWithLeadingZero(3)}
                </div>
                <div className="poppins-semibold font-28">
                  Launch & Maintenance
                </div>
                <div className="poppins-regular font-16 mt-4 leading-[200%]">
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
    </section>
  );
};

export default ProvenProcess;
