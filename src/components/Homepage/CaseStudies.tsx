"use client";

import React, {
  useState,
  useRef,
  useCallback,
  memo,
} from "react";
import Image from "next/image";
import customer from "../../../public/assets/customer.png";
import arrowNext from "../../../public/assets/arrow-next.svg";
import Slider from "react-slick";
import figma from "../../../public/assets/figma.svg";
import discord from "../../../public/assets/discord.svg";
import html from "../../../public/assets/html.svg";
import py from "../../../public/assets/py.svg";
import red from "../../../public/assets/red.svg";
import meta from "../../../public/assets/meta.svg";
import vs from "../../../public/assets/vs.png";
import Heading from "../Heading/Heading";

interface IData {
  title: string;
  images: any[];
  users: any;
}

/* ---------------- MEMOIZED ARROW (LOGIC SAME) ---------------- */
const CustomArrow = memo(({ direction, onClick }: any) => {
  return (
    <Image
      alt=""
      src={arrowNext}
      onClick={onClick}
      className={`h-auto w-10 cursor-pointer ${
        direction === "prev" && "rotate-180"
      }`}
    />
  );
});

CustomArrow.displayName = "CustomArrow";

const CaseStudies = () => {
  const sliderRef = useRef<any>(null);
  const sliderRef2 = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const dataArr: IData[] = [
    {
      title: "Frontend Developer",
      images: [
        figma, meta, figma, vs, red, discord, py, html,
        figma, meta, figma, vs, red, discord, py, html, figma,
      ],
      users: [customer, customer, customer, customer, customer],
    },
    {
      title: "UI/UX Designer",
      images: [figma, meta, figma, vs, red, discord, py, html],
      users: [customer, customer, customer, customer, customer],
    },
    {
      title: "Product Designer",
      images: [figma, meta, figma, vs, red, discord, py, html],
      users: [customer, customer, customer, customer, customer],
    },
    {
      title: "Cloud Service",
      images: [figma, meta, figma, vs, red, discord, py, html],
      users: [customer, customer, customer, customer, customer],
    },
  ];

  /* ---------------- SLIDER SETTINGS (UNCHANGED) ---------------- */
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "50px",
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
      sliderRef2.current?.slickGoTo(newIndex);
    },
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "28%",
    arrows: false,
    beforeChange: (oldIndex: number, newIndex: number) => {
      sliderRef.current?.slickGoTo(newIndex);
    },
  };

  /* ---------------- ARROW HANDLERS (STABLE) ---------------- */
  const totalSlides = dataArr.length;

  const handleNext = useCallback(() => {
    if (currentSlide === totalSlides - 1) {
      sliderRef.current.slickGoTo(0);
      sliderRef2.current.slickGoTo(0);
    } else {
      sliderRef.current.slickNext();
      sliderRef2.current.slickNext();
    }
  }, [currentSlide, totalSlides]);

  const handlePrev = useCallback(() => {
    if (currentSlide === 0) {
      sliderRef.current.slickGoTo(totalSlides - 1);
      sliderRef2.current.slickGoTo(totalSlides - 1);
    } else {
      sliderRef.current.slickPrev();
      sliderRef2.current.slickPrev();
    }
  }, [currentSlide, totalSlides]);

  return (
    <section className="caseStudySliderHomePageSection relative z-1 px-[0px] pt-[80px]">
      <div className="container">
        <div className="flex flex-col justify-between mix-blend-difference md:flex-row">
          <div className="w-full md:max-w-[700px] m-auto">
            <Heading
              headingTag="h2"
              content={[
                {
                  text: "Real-World Case Studies of Smart,",
                  color: "text-white",
                },
                {
                  text: "Scalable Technology",
                  className: "highlight-text",
                },
              ]}
            />
          </div>
        </div>
      </div>

      {/* ---------- TOP SLIDER WITH TABS ---------- */}
      <div className="flex justify-center pt-20 mix-blend-difference">
        <div className="flex w-[70%] justify-between">
          <CustomArrow direction="prev" onClick={handlePrev} />

          <Slider ref={sliderRef} {...settings} className="w-[80%]">
            {dataArr.map((review, i) => (
              <div className="text-center" key={i}>
                <div
                  className={`poppins-medium font-18 ${
                    i === currentSlide && "text-[#00EA52]"
                  }`}
                >
                  {review.title}
                </div>
              </div>
            ))}
          </Slider>

          <CustomArrow direction="next" onClick={handleNext} />
        </div>
      </div>

      {/* ---------- CIRCLE SLIDER ---------- */}
      <div className="center-slick mix-blend-difference">
        <Slider ref={sliderRef2} {...settings2} className="w-[100%]">
          {dataArr.map((review, i) => (
            <div className="sliderSlideInner" key={i}>
              <div className="icon mt-4 mb-10 flex justify-center">
                <svg width="20" height="20" viewBox="0 0 50 50">
                  <polygon points="25,0 0,50 50,50" fill="#00EA52" />
                </svg>
              </div>

              <div className="activeSlideline">
                <div className="h-6 overflow-hidden">
                  <div className="arc"></div>
                </div>
              </div>

              <div className="sliderInnerCard flex h-[500] w-[500] flex-col items-center justify-center rounded-[100%] p-10">
                <div className="flex flex-wrap justify-center gap-6">
                  {review.images.map((img, i) => (
                    <Image alt="" key={i} src={img} className="h-auto w-[54]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CaseStudies;
