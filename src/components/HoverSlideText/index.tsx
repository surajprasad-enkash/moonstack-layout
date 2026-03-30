// components/HoverSlideText.tsx
import React from "react"

interface HoverSlideTextProps {
  text: string
  active?: boolean
  withArrow?: boolean
}

const HoverSlideText = ({
  text,
  active = false,
  withArrow = false,
}: HoverSlideTextProps) => {
  return (
    <span className="group relative flex items-center overflow-hidden">
      {/* Normal text */}
      <span
        className={`block transition-all duration-500 ease-out group-hover:-translate-y-full group-hover:opacity-0 ${active ? "text-[#d6ff00]" : "text-white"} `}
      >
        {text}
      </span>

      {/* Hover text */}
      <span
        className={`absolute top-full left-0 block w-full text-[#d6ff00] transition-all duration-500 ease-out group-hover:-translate-y-full`}
      >
        {text}
      </span>

      {withArrow && (
        <span
          className={`ml-1 transition-colors duration-300 ${active ? "text-[#d6ff00]" : "text-white"} group-hover:text-[#d6ff00]"`}
        >
          ▼
        </span>
      )}
    </span>
  )
}

export default HoverSlideText
