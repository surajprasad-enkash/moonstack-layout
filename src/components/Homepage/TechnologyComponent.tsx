import React from "react";
// import video1 from '../../../public/assets/video1.mp4'
import Video from "next-video";
import getStarted from "../../../videos/get-started.mp4";
import Heading from "../Heading/Heading";
import { Link } from "@mui/material";

const TechnologyComponent = () => {
  return (
    <section className="techonologyhomePageSection z-1 relative  text-white px-[80px] pt-[00px]">
      <div className="container">
        <div className="flex flex-wrap techonologyhomePageSectionRight">
          <div className="w-[100%] md:w-[50%]">
           <Heading
              headingTag="h2"
              className="mb-[20px] "
              content={[
                { text: `Case Studies That Highlight Smart,`, color: "text-white" },
                {
                  text: `Scalable Solutions`,
                  color: "",
                  className: "highlight-text",
                },
              ]}
            />
          </div>
          <div className="w-[100%] md:w-[50%] flex items-end justify-end">
       <Link href="" className="cursor-pointer inline-flex rounded-full !px-[40px] !py-[14px] text-[16px] font-[600] tracking-[0.8px] text-black transition">Explore Now</Link>
          </div>
        </div>
        
        <div id="cards" className="mix-blend-difference">
          <div className="card" id="card-1">
            <div className="to-black-500 flex flex-col items-center justify-between gap-y-6 rounded-4xl border-t-2 border-primary-300 bg-gradient-to-br from-[#177634] via-black p-10 md:flex-row">
              <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[40%]">
                <div className="poppins-semibold font-36">NovaWorks</div>
                <div className="poppins-medium font-16 mt-4 leading-[200%]">
                  Earney is a financial solution to energize and empower Small
                  and Medium Enterprises (SMEs) and freelancers by providing
                  them with a seamless and efficient financial platform
                </div>
              </div>
              <div className="w-full rounded-l md:w-[40%] lg:w-[40%] xl:w-[40%]">
                {/* <Image src={img1} alt="" className="w-[100%] h-auto rounded-l" /> */}
                {/* <Video src={video1} /> */}
                <Video src={getStarted} autoPlay controls={false} muted />
              </div>
            </div>
          </div>

          <div className="card" id="card-2">
            <div className="to-black-500 flex flex-col items-center justify-between gap-y-6 rounded-4xl border-t-2 border-primary-300 bg-gradient-to-br from-[#177634] via-black p-10 md:flex-row">
              <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[40%]">
                <div className="poppins-semibold font-36">PixelEdge</div>
                <div className="poppins-medium font-16 mt-4 leading-[200%]">
                  Earney is a financial solution to energize and empower Small
                  and Medium Enterprises (SMEs) and freelancers by providing
                  them with a seamless and efficient financial platform
                </div>
              </div>
              <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[40%]">
                {/* <Image src={img2} alt="" className="w-[100%] h-auto rounded-l" /> */}
                <Video src={getStarted} autoPlay controls={false} muted />
              </div>
            </div>
          </div>

          <div className="card" id="card-3">
            <div className="to-black-500 flex flex-col items-center justify-between gap-y-6 rounded-4xl border-t-2 border-primary-300 bg-gradient-to-br from-[#177634] via-black p-10 md:flex-row">
              <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[40%]">
                <div className="poppins-semibold font-36">Visionary Labs</div>
                <div className="poppins-medium font-16 mt-4 leading-[200%]">
                  Earney is a financial solution to energize and empower Small
                  and Medium Enterprises (SMEs) and freelancers by providing
                  them with a seamless and efficient financial platform
                </div>
              </div>
              <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[40%]">
                {/* <Image src={img3} alt="" className="w-[100%] h-auto rounded-l" /> */}
                <Video src={getStarted} autoPlay controls={false} muted />
              </div>
            </div>
          </div>

          <div className="card" id="card-4">
            <div className="to-black-500 flex flex-col items-center justify-between gap-y-6 rounded-4xl border-t-2 border-primary-300 bg-gradient-to-br from-[#177634] via-black p-10 md:flex-row">
              <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[40%]">
                <div className="poppins-semibold font-36">NextPhase</div>
                <div className="poppins-medium font-16 mt-4 leading-[200%]">
                  Earney is a financial solution to energize and empower Small
                  and Medium Enterprises (SMEs) and freelancers by providing
                  them with a seamless and efficient financial platform
                </div>
              </div>
              <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[40%]">
                {/* <Image src={img4} alt="" className="w-[100%] h-auto rounded-l" /> */}
                <Video src={getStarted} autoPlay controls={false} muted />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyComponent;
