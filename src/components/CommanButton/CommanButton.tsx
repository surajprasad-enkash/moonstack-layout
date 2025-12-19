import React, { forwardRef, useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "rotating"
    | "small"
    | "services"
    | "white";
  text: string;
  href?: string; // <-- Add link support
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ variant = "primary", text, className, href, ...props }, ref) => {
    const rotatingRef = useRef<HTMLButtonElement>(null);

    // Rotation effect only for rotating variant
    useEffect(() => {
      if (variant !== "rotating") return;
      let angle = 0;
      const rotate = () => {
        angle = (angle + 1) % 360;
        if (rotatingRef.current) {
          rotatingRef.current.style.setProperty("--angle", `${angle}deg`);
        }
        requestAnimationFrame(rotate);
      };
      rotate();
      return () => cancelAnimationFrame(rotate as any);
    }, [variant]);

    const baseStyles =
      "poppins-semibold rounded-4xl font-16 cursor-pointer transition-all duration-200";

    const variantStyles = {
      primary:
        "bg-primary-300 from-green-500 to-black-500 text-white py-2 px-10",
      secondary:
        "bg-black text-white border-2 border-[#076227] hover:text-green-500 py-3 px-10",
      rotating: "bg-black text-green-500 py-3 px-10",
      small:
        "backdrop-blur-[22.2px] bg-[#10933E30] py-[10px] px-[20px] text-[#0BD954] ",
      services:
        "bg-primary-300 from-green-500 to-black-500 text-white font-14 py-2 px-[10px]",
      white: "bg-white text-black font-14 py-4 px-[32px] font-semibold",
    };

    const classes = cn(baseStyles, variantStyles[variant], className);

    // If href exists → render a link styled like a button
    if (href) {
      return (
        <Link href={href} className={classes}>
          {text}
        </Link>
      );
    }

    return (
      <button
        ref={
          variant === "rotating"
            ? rotatingRef
            : (ref as React.RefObject<HTMLButtonElement>)
        }
        className={classes}
        {...props}
      >
        {text}
      </button>
    );
  },
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
