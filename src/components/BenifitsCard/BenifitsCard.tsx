import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import arrowUp from "../../../public/assets/arrow-up.svg";

interface BenifitsCardProps {
  imgSrc: StaticImageData | string;
  alt?: string;
  title: string;
  description: string;
  className?: string;
  bgColor?: string;
  buttonLabel?: string;
  buttonLink?: string;
  cardTag?: boolean;
  imgClassName?: string;
}

const BenifitsCard: React.FC<BenifitsCardProps> = ({
  imgSrc,
  alt = "",
  title,
  description,
  className = "",
  bgColor = "from-transparent to-transparent",
  buttonLabel,
  buttonLink,
  cardTag,
  imgClassName = "",
}) => {
  return (
    <div
      className={`w-full relative  p-10 bg-gradient-to-r ${bgColor} hover:from-transparent hover:to-[#0D320D] transition duration-400 rounded-2xl ${className}`}
    >
      {cardTag && (
        <div
          className="w-[134px] h-[59px] rounded-t-[20px] opacity-100 absolute left-1/2 top-1.5 -translate-x-1/2 -translate-y-1/2"
          style={{
            background: "linear-gradient(180deg, #71FFA3 0%, #031C0C 52.85%)",
          }}
        ></div>
      )}
      <div className={imgClassName}>
        <Image src={imgSrc} alt={alt} className="w-10" />
      </div>
      <div className="mt-8 poppins-semibold font-18 text-white ">{title}</div>
      <div className="mt-3 poppins-medium font-14 leading-[200%] text-white ">
        {description}
      </div>

      {buttonLabel && (
        <div className="mt-6">
          {buttonLink ? (
            <Link
              href={buttonLink}
              className="group flex items-center gap-2 bg-brand200 text-Color.primary-700 font-semibold rounded-lg  hover:bg-brand400 transition"
            >
              <span className="transition group-hover:underline">
                {buttonLabel}
              </span>
              <Image
                src={arrowUp}
                alt="arrow"
                width={15}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </Link>
          ) : (
            <button className="bg-brand200 text-Color.primary-700 font-semibold rounded-lg hover:bg-brand400 transition">
              {buttonLabel} <Image src={arrowUp} alt={arrowUp} width={15} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default BenifitsCard;
