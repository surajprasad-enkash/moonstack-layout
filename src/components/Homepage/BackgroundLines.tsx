"use client";

export default function BackgroundLines() {
  return (
    <div
      aria-hidden
      className="
        pointer-events-none
        fixed inset-0 z-0
        bg-[linear-gradient(#0C401E_1px,transparent_1px),linear-gradient(90deg,#0C401E_1px,transparent_1px)]
        bg-[size:10px_30px]
        opacity-30
      "
    />
  );
}