"use client";

import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { cn } from "@/lib/utils";

interface PillButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  hoverBg?: string;
  id?: string;
  variant?: "default" | "rounded16" | "headerButton";
 
}

const PillButton: React.FC<PillButtonProps> = ({
  text,
  href,
  onClick,
  className,
  id,
  variant = "default",
  hoverBg = "group-hover:bg-white",
}) => {
  const isRounded16 = variant === "rounded16";
  const isHeaderButton = variant === "headerButton";

  const PillContent = (
    <div
      className={cn(
        "group relative flex cursor-pointer items-center overflow-hidden",
        isHeaderButton && "header-btn-wrapper",
        className,
      )}
    >
      {isHeaderButton ? (
        <>
          <style jsx>{`
            .button-cta {
              position: relative;
              display: inline-flex;
              align-items: center;
              justify-content: space-between;
              height: 61px;
              padding: 14px 32px;
              padding-right: 10px;
              border-radius: 100px;
              background-color: white;
              font-weight: 600;
              overflow: hidden;
              z-index: 1;
              transition: background-color 0.25s ease;
            }

            /* 👇 CRITICAL PART – BEFORE ELEMENT ARROW SE START */
            .button-cta::before {
              content: "";
              position: absolute;

              /* Start position exactly arrow circle */
              top: 9px;
              right: 10px;

              width: 44px;
              height: 44px;

              border-radius: 50%;
              background-color: black;

              transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
              z-index: -1;
            }

            /* 👇 ON HOVER – EXPAND FROM ARROW TO FULL BUTTON */
            .button-cta:hover::before {
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
              border-radius: 50px;
              background-color: #d0f601;
            }

            .arrow-cta {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 44px;
              height: 44px;
              background: black;
              border-radius: 50%;
              transform: rotate(45deg);
              transition: transform 0.3s ease;
              color: white;
              margin-left: 12px;
            }

            .button-cta:hover .arrow-cta {
              transform: rotate(0deg);
              background-color: #d0f601;
              color: black;
            }

            .cta-text {
              color: black;
              margin-right: 10px;
            }
          `}</style>

          <div className="button-cta">
            <span className="cta-text">{text}</span>

            {/* Arrow RIGHT SIDE */}
            <span className="arrow-cta">
              <FiArrowUpRight size={22} />
            </span>
          </div>
        </>
      ) : (
        <>
          {/* LEFT ICON */}
          <span
            className={cn(
              "flex h-[56px] w-[56px] items-center justify-center bg-[#D6FF00] text-black transition-all duration-300",
              isRounded16
                ? "rounded-[16px]"
                : "rounded-[0px_32px_32px_32px] group-hover:rounded-[32px_32px_32px_0px]",
              hoverBg,
            )}
          >
            <FiArrowUpRight
              size={28}
              className={cn(
                "transition-transform duration-300",
                isRounded16
                  ? "rotate-90 group-hover:rotate-45"
                  : "rotate-45 group-hover:-rotate-45",
              )}
            />
          </span>

          {/* RIGHT TEXT */}
          <span
            className={cn(
              "flex h-[56px] items-center min-w-[145px] bg-[#D6FF00] px-8 text-[16px] font-semibold text-nowrap text-black transition-all duration-300",
              hoverBg,
              isRounded16 ? "rounded-[16px]" : "rounded-full",
            )}
          >
            {text}
          </span>
        </>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} id={id} className="inline-block">
        {PillContent}
      </Link>
    );
  }

  return (
    <button id={id} onClick={onClick} className="inline-block">
      {PillContent}
    </button>
  );
};

export default PillButton;
