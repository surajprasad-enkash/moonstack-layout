"use client";

import Image from "next/image";
import bgImg from "../../../public/assets/home/our-tech/our-tech.svg";
import clientLogo from "../../../public/assets/home/our-tech/client_img.png";
import img1 from "../../../public/assets/home/our-tech/img1.png";
import img2 from "../../../public/assets/home/our-tech/img2.png";
import img3 from "../../../public/assets/home/our-tech/img3.png";
import img4 from "../../../public/assets/home/our-tech/img4.png";
import Heading from "../Heading/Heading";
import Link from "next/link";

export default function TechAssistanceSection() {
  return (
    <section
      className="bg-bottom-center relative w-full overflow-hidden bg-cover px-[20px] md:px-[80px] md:py-[80px]"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <div className="container">
        {/* LEFT CONTENT */}
        <div className="row flex gap-[110px]">
          <div className="text-white md:w-[50%]">
            <Heading
              headingTag="h2"
              className="mb-[20px] max-w-[570px]"
              content={[
                { text: `Need Assistance? Our `, color: "text-white" },
                {
                  text: `Tech Experts `,
                  color: "",
                  className: "highlight-text",
                },
                {
                  text: `are Just a Click Away`,
                  className: "text-white",
                },
              ]}
            />
            <Heading
              headingTag="p"
              className="mb-[20px]"
              content={[
                {
                  text: ` Work with a team that brings your ideas to life on your terms. Moonstack is one. `,
                  color: "text-white block",
                },
              ]}
            />

            <Link href="/contact-us" className="primary-btn cursor-.01pointer inline-flex rounded-full !px-[40px] !py-[14px] text-[16px] font-[600] tracking-[0.8px] text-black transition">
              Connect With us
            </Link>
          </div>
          <div className="right_box flex w-[50%] justify-center relative">
            <div className="needAssistanceBgCircle">
              <div className="needAssistanceBgCircleOuter">
              <span className="img1">
                <Image src={img1} alt="" />
              </span>
              <span className="img2">
                <Image src={img2} alt="" />
              </span>
              </div>
              <div className="needAssistanceBgCircleInner">
                <span className="img3">
                  <Image src={img3} alt="" />
                </span>
                <span className="img4">
                  <Image src={img4} alt="" />
                </span>
              </div>
            </div>
            <Image
              src={clientLogo}
              alt="Need Assistance? Our tech"
              className="relative z-1 h-[469px] w-[382px] md:mt-[-40px] md:mb-[-81px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
