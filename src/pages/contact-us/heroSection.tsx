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
          <div className="contact-hero_form-info">
            <div className="flex items-center gap-4">
              {" "}
              <Image src={logo} alt={""} className="" />
              <div>
                {" "}
                <Heading
                  headingTag="h4"
                  className="pt-2 text-start"
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
            <ContactForm />
          </div>
        </div>
      </div>
      <Marquee />
    </section>
  );
};

export default HeroSection;
