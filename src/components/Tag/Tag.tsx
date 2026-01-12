import React from "react";
import Image, { StaticImageData } from "next/image";

interface TagProps {
  text: string;
  className?: string;
  variant?: "gradient" | "blur";
  icon?: StaticImageData | string;
  iconAlt?: string;
}

const Tag: React.FC<TagProps> = ({
  text,
  className = "",
  variant = "gradient",
  icon,
  iconAlt = "icon",
}) => {
  const baseClasses =
    "inline-flex items-center gap-3 py-[6px] px-[20px] rounded-full text-white font-medium";

  const styles =
    variant === "gradient"
      ? {
          background:
            "linear-gradient(180deg, rgba(13, 116, 49, 0) 63.22%, #18DA5D 100%)",
        }
      : {
          background: "#10933E30",
          border: "1px solid #10933E87",
          backdropFilter: "blur(22.2px)",
        };

  return (
    <span className={`font-14 ${baseClasses} ${className}`} style={styles}>
      {icon && (
        <Image
          src={icon}
          alt={iconAlt}
          width={12}
          height={12}
          className="w-3 h-3"
        />
      )}
      {text}
    </span>
  );
};

export default Tag;
