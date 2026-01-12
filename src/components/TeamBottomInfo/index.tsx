"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import check_icon from "public/assets/app-development-images/checkmark-green-v2.svg";
interface TeamBottomInfoProps {
  text: string;
  bgImage: string;
  index: number;
  className?: string;
}

const TeamBottomInfo: React.FC<TeamBottomInfoProps> = ({
  text,
  bgImage,
  index,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[140px] items-center overflow-hidden rounded-2xl p-6",
        index === 0 && "rounded-tl-none",
        index === 3 && "rounded-br-none",
        className
      )}
    >
      <Image
        src={bgImage}
        alt="card background"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

      <div className="relative z-10 flex items-start gap-4 text-white">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/20">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <Image src={check_icon} alt={""} />
        <p className="text-lg leading-snug">{text}</p>
      </div>
    </div>
  );
};

export default TeamBottomInfo;
