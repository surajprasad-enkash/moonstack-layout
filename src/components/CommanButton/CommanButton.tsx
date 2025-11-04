import React, { forwardRef, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "rotating" | "small";
  text: string;
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ variant = "primary", text, className, ...props }, ref) => {
    const rotatingRef = useRef<HTMLButtonElement>(null);

    // ✅ Handle rotating animation safely
    useEffect(() => {
      if (variant !== "rotating") return;

      let angle = 0;
      let animationFrameId: number;

      const rotate = () => {
        angle = (angle + 1) % 360;
        if (rotatingRef.current) {
          rotatingRef.current.style.setProperty("--angle", `${angle}deg`);
        }
        animationFrameId = requestAnimationFrame(rotate);
      };

      rotate();

      return () => cancelAnimationFrame(animationFrameId);
    }, [variant]);

    const baseStyles =
      "poppins-semibold rounded-4xl font-16 cursor-pointer transition-all duration-200";

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-green-500 to-black-500 text-white py-2 px-10",
      secondary:
        "bg-black text-white border-2 border-[#076227] hover:text-green-500 py-3 px-10",
      rotating: "bg-black text-green-500 py-3 px-10",
      small:
        "backdrop-blur-[22.2px] bg-[#10933E30] py-[10px] px-[20px] text-[#0BD954]",
    };

    return (
      <button
        ref={
          variant === "rotating"
            ? rotatingRef
            : (ref as React.RefObject<HTMLButtonElement>)
        }
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {text}
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
