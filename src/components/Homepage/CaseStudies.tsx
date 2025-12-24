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

// frontend images
import front1 from '../../../public/assets/home/tacknologyIcon/frontend/anguler.svg';
import front2 from '../../../public/assets/home/tacknologyIcon/frontend/css.svg';
import front3 from '../../../public/assets/home/tacknologyIcon/frontend/ember.svg';
import front4 from '../../../public/assets/home/tacknologyIcon/frontend/html.svg';
import front5 from '../../../public/assets/home/tacknologyIcon/frontend/js.svg';
import front6 from '../../../public/assets/home/tacknologyIcon/frontend/meteor.svg';
import front7 from '../../../public/assets/home/tacknologyIcon/frontend/nextjs.svg';
import front8 from '../../../public/assets/home/tacknologyIcon/frontend/react.svg';
import front9 from '../../../public/assets/home/tacknologyIcon/frontend/vue.svg';

// Backend Images
import back1 from '../../../public/assets/home/tacknologyIcon/backend/c-plus-plus.svg';
import back2 from '../../../public/assets/home/tacknologyIcon/backend/dotnet.svg';
import back3 from '../../../public/assets/home/tacknologyIcon/backend/go.svg';
import back4 from '../../../public/assets/home/tacknologyIcon/backend/java.svg';
import back5 from '../../../public/assets/home/tacknologyIcon/backend/node-js.svg';
import back6 from '../../../public/assets/home/tacknologyIcon/backend/php.svg';
import back7 from '../../../public/assets/home/tacknologyIcon/backend/python.svg';

// ai Images
import ai1 from '../../../public/assets/home/tacknologyIcon/ai/google.svg'
import ai2 from '../../../public/assets/home/tacknologyIcon/ai/grok.svg'
import ai3 from '../../../public/assets/home/tacknologyIcon/ai/hugging-face.svg'
import ai4 from '../../../public/assets/home/tacknologyIcon/ai/meta-tech.svg'
import ai5 from '../../../public/assets/home/tacknologyIcon/ai/mistral-color.svg'
import ai6 from '../../../public/assets/home/tacknologyIcon/ai/openai.svg'

// cloud-db Images
import cloud1 from '../../../public/assets/home/tacknologyIcon/cloud-db/azure-blob-storage-.svg'
import cloud2 from '../../../public/assets/home/tacknologyIcon/cloud-db/azure-svgrepo-com.svg'
import cloud3 from '../../../public/assets/home/tacknologyIcon/cloud-db/azuredataexplorer.svg'
import cloud4 from '../../../public/assets/home/tacknologyIcon/cloud-db/digitalocean.svg'
import cloud5 from '../../../public/assets/home/tacknologyIcon/cloud-db/google-cloud-functions.svg'
import cloud6 from '../../../public/assets/home/tacknologyIcon/cloud-db/google-cloud-run.svg'
import cloud7 from '../../../public/assets/home/tacknologyIcon/cloud-db/rackspace-svgrepo-com.svg'

// data Base Images
import data1 from '../../../public/assets/home/tacknologyIcon/data-base/apachecassandra.svg'
import data2 from '../../../public/assets/home/tacknologyIcon/data-base/aws-dynamodb.svg'
import data3 from '../../../public/assets/home/tacknologyIcon/data-base/hive.svg'
import data4 from '../../../public/assets/home/tacknologyIcon/data-base/microsoftsqlserver.svg'
import data5 from '../../../public/assets/home/tacknologyIcon/data-base/mongo.svg'
import data6 from '../../../public/assets/home/tacknologyIcon/data-base/mysql.svg'
import data7 from '../../../public/assets/home/tacknologyIcon/data-base/oracle.svg'
import data8 from '../../../public/assets/home/tacknologyIcon/data-base/pgsql.svg'

// dev ops Images
import dev1 from '../../../public/assets/home/tacknologyIcon/dev-ops/azure-devops.svg'
import dev2 from '../../../public/assets/home/tacknologyIcon/dev-ops/ci-cd.svg'
import dev3 from '../../../public/assets/home/tacknologyIcon/dev-ops/grafana.svg'
import dev4 from '../../../public/assets/home/tacknologyIcon/dev-ops/openshift.svg'
import dev5 from '../../../public/assets/home/tacknologyIcon/dev-ops/packer.svg'
import dev6 from '../../../public/assets/home/tacknologyIcon/dev-ops/saltstack.svg'
import dev7 from '../../../public/assets/home/tacknologyIcon/dev-ops/terraform.svg'

// tool
import tool1 from '../../../public/assets/home/tacknologyIcon/dev-ops/appium.svg'
import tool2 from '../../../public/assets/home/tacknologyIcon/dev-ops/protractor.svg'
import tool3 from '../../../public/assets/home/tacknologyIcon/dev-ops/apachejmeter.svg'
import tool4 from '../../../public/assets/home/tacknologyIcon/dev-ops/postman-icon.png'

// mobile Images
import mobile1 from '../../../public/assets/home/tacknologyIcon/mobile/android.svg'
import mobile2 from '../../../public/assets/home/tacknologyIcon/mobile/cordova.svg'
import mobile3 from '../../../public/assets/home/tacknologyIcon/mobile/flutter.svg'
import mobile4 from '../../../public/assets/home/tacknologyIcon/mobile/ionic.svg'
import mobile5 from '../../../public/assets/home/tacknologyIcon/mobile/os-ios.svg'
import mobile6 from '../../../public/assets/home/tacknologyIcon/mobile/pwa.svg'
import mobile7 from '../../../public/assets/home/tacknologyIcon/mobile/xamarin.svg'

// product design
import product1 from '../../../public/assets/home/tacknologyIcon/product-design/adobe-illustrator.svg'
import product2 from '../../../public/assets/home/tacknologyIcon/product-design/adobe-xd.svg'
import product3 from '../../../public/assets/home/tacknologyIcon/product-design/figma.svg'
import product4 from '../../../public/assets/home/tacknologyIcon/product-design/photoshop.svg'
import product5 from '../../../public/assets/home/tacknologyIcon/product-design/sketch.svg'



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
      title: "Frontend Development",
      images: [front1,front2,front3,front4,front5,front6,front7,front8,front9
      ],
      users: [customer],
    },
    {
      title: "Backend Development",
      images: [back1,back2,back3,back4,back5,back6,back7],
      users: [customer],
    },
    {
      title: "Product Design",
      images: [product1,product2,product3,product4,product5],
      users: [customer],
    },
    {
      title: "Cloud Service",
      images: [cloud1,cloud2,cloud3,cloud4,cloud5,cloud6,cloud7],
      users: [customer],
    },
    {
      title: "Mobile App",
      images: [mobile1,mobile2,mobile3,mobile4,mobile5,mobile6,mobile7],
      users: [customer],
    },
    {
      title: "Ai",
      images: [ai1,ai2,ai3,ai4,ai5,ai6],
      users: [customer],
    },
    {
      title: "Data Base",
      images: [data1,data2,data3,data4,data5,data6,data7,data8],
      users: [customer],
    },
    {
      title: "Cloud DB",
      images: [cloud1,cloud2,cloud3,cloud4,cloud5,cloud6,cloud7],
      users: [customer],
    },
    {
      title: "Dev Ops",
      images: [dev1,dev2,dev3,dev4,dev5,dev6,dev7],
      users: [customer],
    },
    {
      title: "Test Automation Tools",
      images: [tool1,tool2,tool3,tool4],
      users: [customer],
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
    <section className="caseStudySliderHomePageSection relative z-1 px-[0px] pb-[80px] pt-[80px]">
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
                    <span  key={i} className="sliderInnerCardImageOuter">
                    <Image alt="" src={img} className="h-auto w-[54]" />
                    </span>
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
