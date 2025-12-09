import Image from "next/image";
import React from "react";
import importance from "../../../public/assets/backend-importance.webp";
import greenTick from "../../../public/assets/green-tick-icon.svg";

import Heading from "../Heading/Heading";
import { points } from "@/constants/backend-developer";

const ImportanceComponent = () => {
  return (
    <div className="utilize-bg relative container mx-auto flex bg-black px-4 py-12 sm:px-10 md:py-20">
      <div className="w-1/2">
        <Image src={importance} alt="image" width={522} height={382} />
      </div>
      <div className="w-1/2">
        <Heading
          headingTag="h2"
          className="font-36 pt-3 text-start font-bold"
          content={[
            {
              text: "Why Backend ",
              color: "text-white block",
            },
            {
              text: "Development Matters",
              color: "text-brand200",
            },
          ]}
        />
        <Heading
          headingTag="p"
          className="font-14 pt-3 text-start font-medium"
          content={[
            {
              text: "Frontend development refers to the practice of creating the visual and interactive elements.",
              color: "text-white",
            },
          ]}
        />
        <ul className="flex flex-col gap-3 pt-8">
          {points.map((text, index) => (
            <li key={index} className="flex items-start gap-5 pb-5">
              <Image src={greenTick} alt="tick" width={20} height={20} />
              <Heading
                headingTag="p"
                className="font-14 text-start font-medium text-white"
                content={[{ text }]}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImportanceComponent;
