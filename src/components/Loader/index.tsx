// components/Loader.tsx
"use client"; // needed if using in Next.js 13+ app directory

import React from "react";

interface LoaderProps {
  size?: number; // optional size in pixels
  color?: string; // optional Tailwind color class
}

const Loader: React.FC<LoaderProps> = ({
  size = 40,
  color = "border-blue-500",
}) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`animate-spin rounded-full border-4 border-solid border-t-transparent ${color}`}
        style={{ width: size, height: size }}
      ></div>
    </div>
  );
};

export default Loader;
