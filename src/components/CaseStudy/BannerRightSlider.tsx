"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });
import sliderimg1 from "public/assets/newHomePage/caseStudy/nuwamaScreen2.webp";
import sliderimg2 from "public/assets/newHomePage/caseStudy/pickrightScreen3.webp";
import sliderimg3 from "public/assets/newHomePage/caseStudy/EnkashScreen2.webp";
import sliderimg4 from "public/assets/newHomePage/caseStudy/EnkashScreen3.webp";

const slides = [
  {
    image: sliderimg1,
    tag: "AI",
    category: "Digital Voice Analysing Tool",
    title:
      "MOJO-CX transforms the contact centre experience for customers and agents alike",
  },
  {
    image: sliderimg2,
    tag: "SaaS",
    category: "Customer Analytics Platform",
    title: "Advanced analytics platform improving customer engagement globally",
  },
  {
    image: sliderimg3,
    tag: "Fintech",
    category: "Finance Dashboard",
    title: "Modern fintech dashboard with real-time reporting",
  },
  {
    image: sliderimg4,
    tag: "Fintech",
    category: "Finance Dashboard",
    title: "Modern fintech dashboard with real-time reporting",
  },
];

export default function WorksImageSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    fade: true, // ✅ FADE instead of scroll
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <div className="caseStudyRightSection relative">
      <Slider {...settings}>
        {slides.map((item, index) => (
          <div key={index}>
            {/* RELATIVE wrapper is IMPORTANT */}
            <div className="caseStudyRight group relative px-2">
              {/* Image Card */}
              <div className="max-w-[500px] overflow-hidden rounded-[20px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="h-[300px] w-[100%] max-w-[500px] rounded-[20px] object-cover transition-transform duration-500 ease-out group-hover:scale-120"
                  priority={index === 0}
                />
              </div>

              {/* Info Card */}
              <div className="mt-1 min-h-[180px] max-w-[500px] rounded-xl bg-white p-5 text-black shadow-xl md:right-12 md:left-12">
                <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
                  <span className="flex items-center justify-center rounded-full bg-[#292a3b0f] px-4 py-2 text-[14px] leading-[150%] font-medium text-black">
                    {item.tag}
                  </span>
                  <span className="flex items-center justify-center rounded-full bg-[#292a3b0f] px-4 py-2 text-[14px] leading-[150%] font-medium text-black">
                    {item.category}
                  </span>
                  {/* <span>🇬🇧</span> */}
                </div>

                <h6 className="text-sm font-semibold md:text-base">
                  {item.title}
                </h6>

                {/* Progress bar (static for now) */}
                {/* <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-1/3 rounded-full bg-indigo-600" />
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
