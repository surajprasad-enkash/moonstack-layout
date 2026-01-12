"use client";

import Heading from "@/components/Heading/Heading";
import bgImage from "public/assets/industries/ai/icon/partnership-bg-1440.svg";
import Image from "next/image";
import MarqueeComponent from "../Marquee";
interface TrustBannerProps {
  title: string;
  highlight?: string;
}

export default function TrustBanner({ title, highlight }: TrustBannerProps) {
  return (
    <section className={`relative px-[20px]`}>
      {bgImage && (
        <Image
          src={bgImage}
          alt="Background"
          className="absolute top-[0px] right-[0] left-[0] z-[1] w-[200%]"
        />
      )}
      {/* subtle dots / noise overlay (optional) */}
      <div className="relative z-[2] container">
        <div className="relative z-10 px-4 text-center max-w-[640px] m-[auto]">
          <Heading
            headingTag="h2"
            className="text-white"
            content={[
              {
                text: highlight,
                className: "libreItalic highlight-text",
                color: "text-white",
              },
              { text: title, color: "text-white" },
            ]}
          />
        </div>

        <div className="slider mt-[96px]">
          <MarqueeComponent />
        </div>
      </div>
    </section>
  );
}
