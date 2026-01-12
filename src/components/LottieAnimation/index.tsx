"use client";

import { CSSProperties, MutableRefObject } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface LottiePlayerProps {
  animationData: object;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: CSSProperties;
  speed?: number;
  onComplete?: () => void;
  lottieRef?: MutableRefObject<LottieRefCurrentProps | null>;
}

export default function LottiePlayer({
  animationData,
  loop = true,
  autoplay = true,
  className,
  style,
  // speed = 1,
  onComplete,
  lottieRef,
}: LottiePlayerProps) {
  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      // speed={speed}
      onComplete={onComplete}
      className={className}
      style={style}
    />
  );
}
