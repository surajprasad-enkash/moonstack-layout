import React, { useState } from "react";
import { Colors } from "@/colors/colors";
import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";

import open from "../../../public/assets/acc-open.svg";
import close from "../../../public/assets/acc-close.svg";
import info from "../../../public/assets/info.svg";

interface IAccordionList {
  title: string;
  desc: string;
}

interface IBannerRefs {
  callNowBtnRef1?: React.RefObject<HTMLDivElement>;
  callNowBtnRef2?: React.RefObject<HTMLDivElement>;
  callNowBtnRef3?: React.RefObject<HTMLDivElement>;
}

interface FAQProps {
  refs?: IBannerRefs;
  showInfoBoxes?: boolean; // Optional prop to show/hide info boxes
}

const FAQ: React.FC<FAQProps> = ({ refs, showInfoBoxes = true }) => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const AccordionStyle = styled(Box)(({ theme }) => ({
    "& .MuiAccordion-root": {
      backgroundColor: "transparent",
      color: "#fff",
    },
    "& .MuiAccordion-root.Mui-expanded": {
      backgroundColor: "#062C06",
      borderRadius: 20,
    },
    "& .MuiAccordionSummary-root": {
      marginTop: "7%",
    },
  }));

  const accordionList: IAccordionList[] = [
    {
      title: "Do you provide post-launch support and maintenance?",
      desc: "Education is the key to success in life. It helps people gain knowledge, develop skills, and build confidence.",
    },
    {
      title: "Do you provide post-launch support and maintenance?",
      desc: "Education is the key to success in life. It helps people gain knowledge, develop skills, and build confidence.",
    },
    {
      title: "Do you provide post-launch support and maintenance?",
      desc: "Education is the key to success in life. It helps people gain knowledge, develop skills, and build confidence.",
    },
    {
      title: "Do you provide post-launch support and maintenance?",
      desc: "Education is the key to success in life. It helps people gain knowledge, develop skills, and build confidence.",
    },
    {
      title: "Do you provide post-launch support and maintenance?",
      desc: "Education is the key to success in life. It helps people gain knowledge, develop skills, and build confidence.",
    },
    {
      title: "Do you provide post-launch support and maintenance?",
      desc: "Education is the key to success in life. It helps people gain knowledge, develop skills, and build confidence.",
    },
  ];

  const handleAccordionChange = (index: number) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  function formatNumberWithLeadingZero(number: number) {
    return String(number).padStart(2, "0");
  }

  return (
    <div className="bg-black p-15 text-white container mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between mix-blend-difference">
        <div className="w-full md:w-[35%] lg:w-[35%] xl:w-[35%] sticky top-0">
          <div className="sticky top-0 pt-10">
            <div className="poppins-semibold font-40">
              Frequently Asked
              <span className="bg-gradient-to-r from-[#25E8B1] via-[#60F90D] to-[#60F90D] text-transparent bg-clip-text">
                {" "}
                Questions
              </span>
            </div>
            <div className="poppins-medium leading-[200%] mt-4 w-2/3 font-16">
              We focus on scalability, security, and user-centric design,
              ensuring that every project is future-ready and tailored to
              client needs.
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div className="w-full md:w-[60%] lg:w-[60%] xl:w-[60%]">
          <AccordionStyle>
            <Box className="accordion-block">
              {accordionList.map((items, i) => (
                <Accordion
                  key={i}
                  expanded={activeAccordion === i}
                  onChange={() => handleAccordionChange(i)}
                >
                  <AccordionSummary
                    expandIcon={
                      activeAccordion === i ? (
                        <Image
                          src={open}
                          alt=""
                          className="w-10 h-auto rotate-180"
                        />
                      ) : (
                        <Image src={close} alt="" className="w-10 h-auto" />
                      )
                    }
                    aria-controls={`panel${i}-content`}
                    id={`panel${i}-header`}
                    className="poppins-semibold font-16"
                  >
                    <span className="pr-4 font-28">
                      {formatNumberWithLeadingZero(i + 1)}
                    </span>
                    <span className="mt-2">{items.title}</span>
                  </AccordionSummary>
                  <AccordionDetails className="poppins-medium leading-[200%] font-14">
                    {items.desc}
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </AccordionStyle>
        </div>
      </div>

      {/* Optional Info Boxes */}
      {showInfoBoxes && (
        <div className="pt-20 flex flex-col md:flex-row justify-between gap-y-8 mix-blend-difference">
          {/* Contact Box */}
          <div className="border-1 border-solid border-[#73FF6126] bg-[#73FF611F] p-5 w-full md:w-[30%] rounded-xl flex">
            <div>
              <Image src={info} alt="" className="w-8 h-auto" />
            </div>
            <div className="grid w-full md:w-[90%] pl-4">
              <div className="poppins-semibold font-16">Contact Us</div>
              <div className="poppins-medium mt-2 font-14">+91 9988776655</div>
              <button
                className="poppins-semibold py-2 mt-8 px-8 rounded-3xl border-1 border-green-500 border-solid font-14"
                style={{ backgroundColor: Colors.brand950 }}
                ref={refs?.callNowBtnRef1}
              >
                Call Now
              </button>
            </div>
          </div>

          {/* Email Box */}
          <div className="border-1 border-solid border-[#73FF6126] bg-[#73FF611F] p-5 w-full md:w-[30%] rounded-xl flex">
            <div>
              <Image src={info} alt="" className="w-8 h-auto" />
            </div>
            <div className="grid w-full md:w-[90%] pl-4">
              <div className="poppins-semibold font-16">Email Address</div>
              <div className="poppins-medium mt-2 font-14">
                randomname123@gmail.com
              </div>
              <button
                className="poppins-semibold py-2 mt-8 px-8 rounded-3xl border-1 border-green-500 border-solid font-14"
                style={{ backgroundColor: Colors.brand950 }}
                ref={refs?.callNowBtnRef2}
              >
                Call Now
              </button>
            </div>
          </div>

          {/* Location Box */}
          <div className="border-1 border-solid border-[#73FF6126] bg-[#73FF611F] p-5 w-full md:w-[30%] rounded-xl flex">
            <div>
              <Image src={info} alt="" className="w-8 h-auto" />
            </div>
            <div className="grid w-full md:w-[90%] pl-4">
              <div className="poppins-semibold font-16">Location</div>
              <div className="poppins-medium mt-2 font-14">
                123 Demo Street, Springfield, USA
              </div>
              <button
                className="poppins-semibold py-2 mt-8 px-8 rounded-3xl border-1 border-green-500 border-solid font-14"
                style={{ backgroundColor: Colors.brand950 }}
                ref={refs?.callNowBtnRef3}
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQ;
