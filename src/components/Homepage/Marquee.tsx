import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import accord from "../../../public/assets/home/slider-logo/accord.svg";
import aligneur from "../../../public/assets/home/slider-logo/aligneur.svg";
import coralogix from "../../../public/assets/home/slider-logo/coralogix.svg";
import craftywekabar from "../../../public/assets/home/slider-logo/craftywekabar.svg";
import dnwe from "../../../public/assets/home/slider-logo/dnwe.svg";
import enetworks from "../../../public/assets/home/slider-logo/enetworks.svg";
import enkash from "../../../public/assets/home/slider-logo/enkash.svg";
import hydrocan from "../../../public/assets/home/slider-logo/hydrocan.svg";
import pickright from "../../../public/assets/home/slider-logo/pickright.svg";
import sabc from "../../../public/assets/home/slider-logo/sabc.svg";
import barinmate from "../../../public/assets/home/slider-logo/brainmate.svg";

const MarqueeComponent = () => {
  return (
    <div className="py-4">
      <Marquee autoFill>
        <div className="px-8">
          <Image src={accord} alt="accord" className="h-auto w-25" />
        </div>
        <div className="px-8">
          <Image src={aligneur} alt="aligneur" className="h-auto w-25" />
        </div>
        <div className="px-8">
          <Image src={coralogix} alt="coralogix" className="h-auto w-25" />
        </div>
        <div className="px-8">
          <Image
            src={craftywekabar}
            alt="craftywekabar"
            className="h-auto w-25"
          />
        </div>
        <div className="px-8">
          <Image src={dnwe} alt="dnwe" className="h-auto w-25" />
        </div>
        <div className="px-8">
          <Image src={enetworks} alt="enetworks" className="h-auto w-25" />
        </div>
        <div className="px-8">
          <Image src={enkash} alt="enkash" className="h-auto w-25" />
        </div>
        <div className="px-8">
          <Image src={hydrocan} alt="hydrocan" className="h-auto w-25" />
        </div>
        <div className="px-8">
          <Image src={pickright} alt="pickright" className="h-auto w-25" />
        </div>
        <div className="px-8">
          <Image src={sabc} alt="sabc" className="h-auto w-25" />
        </div>
        <div className="px-8">
          <Image src={barinmate} alt="barinmate" className="h-auto w-25" />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
