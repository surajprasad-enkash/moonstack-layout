import React from "react";
import { cn } from "@/lib/utils"; // your utility for classNames

export interface OrbitingCirclesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number; // in seconds
  radius?: number; // in px
  iconSize?: number; // in px
  speed?: number; // multiplier
  showPath?: boolean; // show circle path
}

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  radius = 120,
  iconSize = 30,
  speed = 1,
  showPath = true,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;

  return (
    <div className="relative w-full h-full" {...props}>
      {/* Optional circular path */}
      {showPath && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="rgba(0,0,0,0.1)"
            strokeWidth={1}
          />
        </svg>
      )}

      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;

        return (
          <div
            style={
              {
                "--angle": angle,
                "--radius": `${radius}px`,
                "--icon-size": `${iconSize}px`,
                "--duration": `${calculatedDuration}s`,
              } as React.CSSProperties
            }
            className={cn(
              "animate-orbit absolute flex items-center justify-center rounded-full",
              reverse && "[animation-direction:reverse]",
              className
            )}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
