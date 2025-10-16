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
}) => {
  return (
    <div
      className={`w-full p-10 text-white bg-gradient-to-r ${bgColor} hover:from-transparent hover:to-[#0D320D] transition duration-400 rounded-2xl ${className}`}
    >
      <Image src={imgSrc} alt={alt} className="w-6" />

      <div className="mt-8 poppins-semibold font-18">{title}</div>
      <div className="mt-3 poppins-medium font-14 leading-[200%]">
        {description}
      </div>

      {buttonLabel && (
        <div className="mt-6">
          {buttonLink ? (
            <Link
              href={buttonLink}
              className="group flex items-center gap-2 bg-brand200 text-white font-semibold rounded-lg  hover:bg-brand400 transition"
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
            <button className="bg-brand200 text-white font-semibold rounded-lg hover:bg-brand400 transition">
              {buttonLabel} <Image src={arrowUp} alt={arrowUp} width={15} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default BenifitsCard;
