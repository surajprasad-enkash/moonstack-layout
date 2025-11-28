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
  cardIconSize?: string;
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
  cardIconSize = "w-10",
}) => {
  return (
    <div
      className={`relative h-[-webkit-fill-available] w-full bg-gradient-to-r p-10 ${bgColor} rounded-2xl transition duration-400 hover:from-transparent hover:to-[#0D320D] ${className}`}
    >
      {cardTag && (
        <div
          className="absolute top-1.5 left-1/2 z-[-1] h-[59px] w-[134px] -translate-x-1/2 -translate-y-1/2 rounded-t-[20px] opacity-100"
          style={{
            background: "linear-gradient(180deg, #71FFA3 0%, #031C0C 52.85%)",
          }}
        ></div>
      )}
      <div className={imgClassName}>
        <Image src={imgSrc} alt={alt} className={cardIconSize} />
      </div>
      <div className="poppins-semibold font-18 mt-[60px] text-white">
        {title}
      </div>
      <div className="poppins-medium font-14 mt-2 leading-[200%] text-white">
        {description}
      </div>

      {buttonLabel && (
        <div className="mt-6">
          {buttonLink ? (
            <Link
              href={buttonLink}
              className="group bg-brand200 text-Color.primary-700 hover:bg-brand400 flex items-center gap-2 rounded-lg font-semibold transition"
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
            <button className="bg-brand200 text-Color.primary-700 hover:bg-brand400 rounded-lg font-semibold transition">
              {buttonLabel} <Image src={arrowUp} alt={arrowUp} width={15} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default BenifitsCard;
