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
    <section className="bg-[#000]">
      <div
        className={`relative container mx-auto px-4 py-10 text-white md:px-8 lg:px-12 ${className}`}
      >
        <div className="absolute bottom-0 left-0 opacity-40 md:opacity-100">
          <Image src={vector} alt={"vector"} />
        </div>

        {/* Header */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="sticky w-full md:top-10 md:w-[40%] lg:w-[35%]">
            <div className="pt-6 md:pt-10">
              <div className="poppins-semibold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#25E8B1] via-[#60F90D] to-[#60F90D] bg-clip-text text-transparent">
                {tagText}{" "}
                {heading?.highlightText && (
                  <span className="bg-gradient-to-r from-[#25E8B1] via-[#60F90D] to-[#60F90D] bg-clip-text text-transparent">
                    {heading.highlightText}
                  </span>
                )}
              </div>

              {heading?.text && (
                <div className="poppins-medium mt-4 text-sm leading-[180%] md:w-3/4 md:text-base">
                  {heading.text}
                </div>
              )}
            </div>
          </div>

          {/* Accordion */}
          <div className="w-full md:w-[55%]">
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
                            className="h-7 w-7 rotate-180 md:h-10 md:w-10"
                          />
                        ) : (
                          <Image
                            src={close}
                            alt=""
                            className="h-7 w-7 md:h-10 md:w-10"
                          />
                        )
                      }
                      aria-controls={`panel${i}-content`}
                      id={`panel${i}-header`}
                      className="poppins-semibold text-base md:text-lg"
                    >
                      <span className="pr-4 text-lg md:text-2xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="pt-[2px]">{item.title}</span>
                    </AccordionSummary>

                    <AccordionDetails className="poppins-medium text-sm leading-[180%] md:text-base">
                      {item.desc}
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </AccordionStyle>
          </div>
        </div>

        {/* Info Boxes */}
        {showInfoBoxes && infoBoxes.length > 0 && (
          <div className="flex flex-col gap-6 pt-14 md:flex-row md:gap-8">
            {infoBoxes.map((box, index) => (
              <div
                key={index}
                className="flex w-full rounded-xl border border-[#73FF6126] bg-[#73FF611F] p-5 md:w-1/3"
              >
                <div>
                  <Image src={info} alt="" className="h-8 w-8" />
                </div>

                <div className="w-full pl-4">
                  <div className="poppins-semibold text-base md:text-lg">
                    {box.title}
                  </div>

                  <div className="poppins-medium mt-2 text-sm leading-[170%] md:text-base">
                    {box.content}
                  </div>

                  <button
                    className="poppins-semibold mt-6 rounded-3xl border border-green-500 px-6 py-2 text-sm md:text-base"
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
    </section>
  );
};

export default FAQ;
