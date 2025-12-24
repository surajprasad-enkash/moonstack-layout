import ContactForm from "@/components/Contact-form";
import Heading from "@/components/Heading/Heading";
import Image from "next/image";
import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import checkIcon from "../../../public/assets/contact-us/check icon.svg";
import logo from "../../../public/assets/contact-us/MoonstackLogo.svg";
import mail from "../../../public/assets/contact-us/mailIcon.svg";
import call from "../../../public/assets/contact-us/callIcon.svg";
import Marquee from "@/components/Homepage/Marquee";

const HeroSection = () => {
  const email = "mail@moonstack.co";
  const [copied, setCopied] = useState(false);

  const copyEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // prevent mailto click
    await navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section className="bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-4 px-4 py-12 pt-28 md:grid-cols-2 md:items-start md:px-8 md:pt-[150px] md:pb-20">
          {/* <div>
            <Heading
              headingTag="h1"
              className="pt-2 text-start "
              content={[
                { text: "Let’s Build Something ", color: "text-gradient " },
                { text: "Great Together", color: "text-gradient " },
              ]}
            />

        
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
          </div> */}
          <div className="contact-hero_form-info">
            <div className="flex items-center gap-4">
              {" "}
              <Image src={logo} alt={""} className="" />
              <div>
                {" "}
                <Heading
                  headingTag="h4"
                  className="pt-2 text-start italic"
                  content={[
                    { text: "Moonstack Pvt. Ltd. ", color: "text-white " },
                  ]}
                />
                <Heading
                  headingTag="p"
                  className="pt-2 text-start"
                  content={[
                    {
                      text: "Web development | Mobile App development Company in India ",
                      color: "text-primary-grey ",
                    },
                  ]}
                />
              </div>
            </div>

            <ul className="flex flex-col gap-5">
              <li className="flex gap-4">
                <Image src={checkIcon} alt={""} className="" />
                <Heading
                  headingTag="p"
                  className=""
                  content={[
                    {
                      text: "We will respond to you within 12 hours ",
                      color: "text-white ",
                    },
                  ]}
                />
              </li>
              <li className="flex gap-4">
                <Image src={checkIcon} alt={""} className="" />
                <Heading
                  headingTag="p"
                  className=""
                  content={[
                    {
                      text: "We’ll sign an NDA if requested ",
                      color: "text-white ",
                    },
                  ]}
                />
              </li>
              <li className="flex gap-4">
                <Image src={checkIcon} alt={""} className="" />
                <Heading
                  headingTag="p"
                  className=""
                  content={[
                    {
                      text: "Access to dedicated product specialists ",
                      color: "text-white ",
                    },
                  ]}
                />
              </li>
            </ul>
            <div>
              <Heading
                headingTag="p"
                className="font-12 text-start"
                content={[
                  {
                    text: "Project inquiries",
                    color: "text-primary-grey ",
                  },
                ]}
              />
              <div className="contact-hero_reach-out-info mt-4">
                <div className="z-10 flex w-full items-center justify-between text-white">
                  <div className="flex gap-3">
                    <Image src={mail} alt="Mail" />
                    <a href="mailto:mail@moonstack.co">
                      <Heading
                        headingTag="p"
                        className="text-start"
                        content={[
                          {
                            text: email,
                            color: "text-white",
                          },
                        ]}
                      />
                    </a>
                  </div>

                  <button
                    onClick={copyEmail}
                    aria-label="Copy email"
                    className="ml-1 cursor-pointer text-white/70 transition hover:text-white"
                    type="button"
                  >
                    {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
                  </button>
                </div>
              </div>
              <div className="contact-hero_reach-out-info mt-1">
                <div className="z-10 flex w-full items-center justify-between text-white">
                  <div className="flex gap-3">
                    <Image src={call} alt="Mail" />
                    <a href="tel:9772009900">
                      <Heading
                        headingTag="p"
                        className="text-start"
                        content={[
                          {
                            text: "Book a call",
                            color: "text-white",
                          },
                        ]}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* <ContactForm /> */}
          </div>
        </div>
        <Marquee />
      </div>
    </section>
  );
};

export default HeroSection;
