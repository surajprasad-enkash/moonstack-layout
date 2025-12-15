import ContactForm from "@/components/Contact-form";
import Heading from "@/components/Heading/Heading";
import React, { useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";


const HeroSection = () => {


  return (
    <section className="bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-4 px-4 py-12 pt-28 md:grid-cols-2 md:items-start md:px-8 md:pt-[150px] md:pb-20">
          <div>
            <Heading
              headingTag="h1"
              className="pt-2 text-start font-semibold"
              content={[
                { text: "Let’s Build Something ", color: "text-gradient " },
                { text: "Great Together", color: "text-gradient " },
              ]}
            />

            {/* Email Card */}
            <div className="relative mt-[26px] flex w-full max-w-xl items-center justify-between overflow-hidden rounded-2xl bg-[#04230F] p-5 shadow-lg">
              <MdMailOutline className="text-primary-300 absolute top-[27px] right-[120px] size-[121px] -translate-y-1/2 rotate-[-30deg] opacity-20" />

              <div className="z-10 flex flex-col gap-4">
                <MdMailOutline className="text-white" size={20} />
                <div>
                  <p className="text-sm text-white/70">Email Address</p>
                  <p className="font-medium text-white">mail@moonstack.co</p>
                </div>
              </div>

              <a
                href="mailto:mail@moonstack.co"
                className="border-primary text-primary z-10 rounded-full border px-4 py-2 text-sm transition hover:bg-green-600 hover:text-white"
              >
                Mail Now
              </a>
            </div>

            {/* Phone Card */}
            <div className="relative mt-4 flex w-full max-w-xl items-center justify-between overflow-hidden rounded-2xl bg-[#04230F] p-6 shadow-lg">
              <BiPhoneCall className="text-primary-300 absolute right-[120px] bottom-[-90px] size-[120px] -translate-y-1/2 opacity-20" />

              <div className="z-10 flex flex-col gap-4">
                <BiPhoneCall className="text-white" size={20} />
                <div>
                  <p className="text-sm text-white/70">Contact Info.</p>
                  <p className="font-medium text-white">9772009900</p>
                </div>
              </div>

           

              <a
                href="tel:9772009900"
                className="border-primary text-primary z-10 rounded-full border px-4 py-2 text-sm transition hover:bg-green-600 hover:text-white"
              >
                Call Now
              </a>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
