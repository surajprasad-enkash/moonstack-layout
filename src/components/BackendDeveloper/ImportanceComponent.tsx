import Image from "next/image";
import React from "react";
import importance from "../../../public/assets/backend-importance.webp";
import greenTick from "../../../public/assets/green-tick-icon.svg";

import Heading from "../Heading/Heading";
import { points } from "@/pages/backend-developer/data";

const ImportanceComponent = () => {
  return (
    <div className="bg-black utilize-bg  px-4 sm:px-10 py-12 md:py-20 relative container mx-auto flex">
      <div className="w-1/2">
        <Image src={importance} alt="image" width={522} height={382} />
      </div>
      <div className="w-1/2">
        <Heading
          headingTag="h2"
          className="font-bold pt-3 font-36 text-start"
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
          className="font-medium pt-3 font-14 text-start"
          content={[
            {
              text: "Frontend development refers to the practice of creating the visual and interactive elements.",
              color: "text-white",
            },
          ]}
        />
        <ul className="flex flex-col gap-3 pt-8">
          {points.map((text, index) => (
            <li key={index} className="flex gap-5 items-start pb-5">
              <Image src={greenTick} alt="tick" width={20} height={20} />
              <Heading
                headingTag="p"
                className="font-medium font-14 text-start text-white"
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
