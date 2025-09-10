import React from "react";
import Image from "next/image";
import { Colors } from "@/colors/colors";
import img1 from '../../../public/assets/tech-1.png'
import img2 from '../../../public/assets/tech-2.png'
import img3 from '../../../public/assets/tech-3.png'
import img4 from '../../../public/assets/tech-4.png'

const TechnologyComponent = () => {
    return (
        <>
            <div className="text-white bg-black p-15">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[40%] poppins-semibold font-36">
                        Our Best Technology we have used in <span style={{ color: Colors.brand200 }}>our projects</span>
                    </div>
                    <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[40%] poppins-medium leading-[200%] font-16">We focus on scalability, security, and user-centric design, ensuring that every project is future-ready and tailored to client needs.</div>
                </div>
                <div className="mt-10 rounded-3xl border-t-1 border-green-500 p-10 justify-between flex flex-col md:flex-row gap-y-6 items-center bg-gradient-to-br from-[#177634] via-black to-black-500">
                    <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[40%]">
                        <div className="poppins-semibold font-36">NovaWorks</div>
                        <div className="poppins-medium leading-[200%] mt-4 font-16">Earney is a financial solution to energize and empower Small and Medium Enterprises (SMEs) and freelancers by providing them with a seamless and efficient financial platform</div>
                    </div>
                    <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[40%]">
                        <Image src={img1} alt="" className="w-[100%] h-auto rounded-l" />
                    </div>
                </div>
                <div className="mt-10 rounded-3xl border-t-1 border-green-500 p-10 justify-between flex flex-col md:flex-row gap-y-6 items-center bg-gradient-to-br from-[#177634] via-black to-black-500">
                    <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[40%]">
                        <div className="poppins-semibold font-36">PixelEdge</div>
                        <div className="poppins-medium leading-[200%] mt-4 font-16">Earney is a financial solution to energize and empower Small and Medium Enterprises (SMEs) and freelancers by providing them with a seamless and efficient financial platform</div>
                    </div>
                    <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[40%]">
                        <Image src={img2} alt="" className="w-[100%] h-auto rounded-l" />
                    </div>
                </div>
                <div className="mt-10 rounded-3xl border-t-1 border-green-500 p-10 justify-between flex flex-col md:flex-row gap-y-6 items-center bg-gradient-to-br from-[#177634] via-black to-black-500">
                    <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[40%]">
                        <div className="poppins-semibold font-36">Visionary Labs</div>
                        <div className="poppins-medium leading-[200%] mt-4 font-16">Earney is a financial solution to energize and empower Small and Medium Enterprises (SMEs) and freelancers by providing them with a seamless and efficient financial platform</div>
                    </div>
                    <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[40%]">
                        <Image src={img3} alt="" className="w-[100%] h-auto rounded-l" />
                    </div>
                </div>

                <div className="mt-10 rounded-3xl border-t-1 border-green-500 p-10 justify-between flex flex-col md:flex-row gap-y-6 items-center bg-gradient-to-br from-[#177634] via-black to-black-500">
                    <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[40%]">
                        <div className="poppins-semibold font-36">NextPhase</div>
                        <div className="poppins-medium leading-[200%] mt-4 font-16">Earney is a financial solution to energize and empower Small and Medium Enterprises (SMEs) and freelancers by providing them with a seamless and efficient financial platform</div>
                    </div>
                    <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[40%]">
                        <Image src={img4} alt="" className="w-[100%] h-auto rounded-l" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechnologyComponent;