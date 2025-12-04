"use client";

import Image from "next/image";
import Slider from "react-slick";
import { useRef } from "react";

export default function VerticalImageSlider({ images }: { images: string[] }) {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    arrows: false,
    cssEase: "linear",
  };

  const scrollUp = () => sliderRef.current?.slickPrev();
  const scrollDown = () => sliderRef.current?.slickNext();

  return (
    <div className="flex h-full w-full flex-col items-center gap-4">
      {/* UP BUTTON */}
      <button
        onClick={scrollUp}
        className="bg-primary w-full rounded-4xl py-2 font-semibold text-white"
      >
        Up
      </button>

      {/* SLIDER */}
      <div className="slider-container h-full w-full overflow-hidden rounded-xl">
        <Slider ref={sliderRef} {...settings}>
          {images.map((src, idx) => (
            <div key={idx} className="px-2">
              <div className="h-[200px] overflow-hidden rounded-xl">
                <Image
                  src={src}
                  alt={`img-${idx}`}
                  width={350}
                  height={200}
                  className="h-[200px] max-h-[200px] w-full rounded-xl object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* DOWN BUTTON */}
      <button
        onClick={scrollDown}
        className="bg-primary w-full rounded-4xl py-2 font-semibold text-white"
      >
        Down
      </button>
    </div>
  );
}
