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
import vector from "../../../public/assets/footer-vector.svg";
export interface IAccordionItem {
  title: string;
  desc: string;
}

export interface IInfoBox {
  title: string;
  content: string;
  buttonText: string;
  ref?: React.RefObject<HTMLButtonElement>;
}

interface FAQProps {
  accordionData: IAccordionItem[];
  infoBoxes?: IInfoBox[];
  tagText?: string;
  heading?: { text: string; highlightText?: string };
  className?: string;
  showInfoBoxes?: boolean;
}

const FAQ: React.FC<FAQProps> = ({
  accordionData,
  infoBoxes = [],
  tagText = "Frequently Asked",
  heading,
  className = "",
  showInfoBoxes = true,
}) => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const AccordionStyle = styled(Box)(({ theme }) => ({
    "& .MuiAccordion-root": {
      backgroundColor: "transparent",
      color: "#fff",
    },
    "& .MuiAccordion-root.Mui-expanded": {
      backgroundColor: "#062C06",
      background:
        "radial-gradient(43.91% 58.17% at 56.09% -8.17%, #195E2D 0%, #052811 100%) ",

      borderRadius: 20,
    },
    "& .MuiAccordionSummary-root": {
      marginTop: "30px",
      backgroundColor: "#062C06",
      background:
        "radial-gradient(43.91% 58.17% at 56.09% -8.17%, #195E2D 0%, #052811 100%) ",

      borderRadius: 20,
    },
  }));

  const handleAccordionChange = (index: number) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  function formatNumberWithLeadingZero(number: number) {
    return String(number).padStart(2, "0");
  }

  return (
    <div
      className={`bg-black p-6 md:p-15 text-white container mx-auto relative${className}`}
    >
      {" "}
      <div className=" absolute bottom-0 left-0">
        <Image src={vector} alt={"vector"} />
      </div>
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-[35%] lg:w-[35%] xl:w-[35%] sticky top-0 ">
          <div className="pt-10">
            <div className="poppins-semibold font-40">
              {tagText}{" "}
              {heading?.highlightText ? (
                <span className="bg-gradient-to-r from-[#25E8B1] via-[#60F90D] to-[#60F90D] text-transparent bg-clip-text">
                  {heading.highlightText}
                </span>
              ) : null}
            </div>
            {heading?.text && (
              <div className="poppins-medium leading-[200%] mt-4 w-3/4 font-16">
                {heading.text}
              </div>
            )}
          </div>
        </div>

        {/* Accordion */}
        <div className="w-full md:w-[60%] lg:w-[60%] xl:w-[60%] mt-6 md:mt-0">
          <AccordionStyle>
            <Box className="accordion-block">
              {accordionData.map((item, i) => (
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
                    <span className="mt-2">{item.title}</span>
                  </AccordionSummary>
                  <AccordionDetails className="poppins-medium leading-[200%] font-14">
                    {item.desc}
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </AccordionStyle>
        </div>
      </div>
      {/* Optional Info Boxes */}
      {showInfoBoxes && infoBoxes.length > 0 && (
        <div className="pt-20 flex flex-col md:flex-row justify-between gap-y-8">
          {infoBoxes.map((box, index) => (
            <div
              key={index}
              className="border-1 border-solid border-[#73FF6126] bg-[#73FF611F] p-5 w-full md:w-[30%] rounded-xl flex"
            >
              <div>
                <Image src={info} alt="" className="w-8 h-auto" />
              </div>
              <div className="grid w-full md:w-[90%] pl-4">
                <div className="poppins-semibold font-16">{box.title}</div>
                <div className="poppins-medium mt-2 font-14">{box.content}</div>
                <button
                  className="poppins-semibold py-2 mt-8 px-8 rounded-3xl border-1 border-green-500 border-solid font-14"
                  style={{ backgroundColor: Colors.brand950 }}
                  ref={box.ref}
                >
                  {box.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FAQ;
