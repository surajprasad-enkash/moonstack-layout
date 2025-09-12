import React, { useEffect, useRef } from "react";
import { Colors } from "@/colors/colors";
import Image from "next/image";
import img1 from '../../../public/assets/insight1.png'
import img2 from '../../../public/assets/insight2.png'
import img3 from '../../../public/assets/insight3.png'
import arrow from '../../../public/assets/arrow-green.svg'

const InsightsIdeas = () => {
    const rotatingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let angle = 0;
        const rotate = () => {
            angle = (angle + 1) % 360;
            if (rotatingRef.current) {
                rotatingRef.current.style.setProperty("--angle", `${angle}deg`);
            }
            requestAnimationFrame(rotate);
        };

        rotate();
        return () => cancelAnimationFrame(rotate as any);
    }, [])

    return (
        <>
            <div className="bg-black p-15 pt-25 text-white">
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 text-center justify-self-center">
                    <div className="poppins-semibold font-40">Insights <span style={{ color: Colors.brand200 }}>& Ideas</span></div>
                    <div className="poppins-medium leading-[200%] mt-4 font-16">We focus on scalability, security, and user-centric design, ensuring that every project is future-ready and tailored to client needs.</div>
                </div>
                <div className="flex flex-col md:flex-row gap-y-8 justify-between mt-4">
                    <div className="w-full md:w-[32%] lg:w-[32%] xl:w-[32%] border-solid border-[#296329] border-1 rounded-2xl p-6">
                        <Image src={img1} alt="image-1" className="w-[100%] h-auto object-contain" />
                        <div className="poppins-medium leading-[200%] mt-4 font-14" style={{ color: Colors.brand200 }}>Development</div>
                        <div className="poppins-semibold mt-4 font-20">How To Build Real Estate App from Scratch: Step-by-Step Guide</div>
                        <div className="poppins-medium leading-[200%] mt-4 font-16">Education is the key to success in life. It helps people gain knowledge, develop skills, and build.</div>
                        <button className="bg-[#002F10] poppins-medium mt-6 py-3 px-6 rounded-4xl flex font-16" style={{ color: Colors.brand200 }}>
                            Explore Now
                            <Image src={arrow} alt="" className="w-4 h-auto ml-2" />
                        </button>
                    </div>
                    <div className="w-full md:w-[32%] lg:w-[32%] xl:w-[32%] border-solid border-[#296329] border-1 rounded-2xl p-6">
                        <Image src={img2} alt="image-1" className="w-[100%] h-auto object-contain" />
                        <div className="poppins-medium leading-[200%] mt-4 font-14" style={{ color: Colors.brand200 }}>Development</div>
                        <div className="poppins-semibold mt-4 font-20">How To Build Real Estate App from Scratch: Step-by-Step Guide</div>
                        <div className="poppins-medium leading-[200%] mt-4 font-16">Education is the key to success in life. It helps people gain knowledge, develop skills, and build.</div>
                        <button className="bg-[#002F10] poppins-medium mt-6 py-3 px-6 rounded-4xl flex font-16" style={{ color: Colors.brand200 }}>
                            Explore Now
                            <Image src={arrow} alt="" className="w-4 h-auto ml-2" />
                        </button>
                    </div>
                    <div className="w-full md:w-[32%] lg:w-[32%] xl:w-[32%] border-solid border-[#296329] border-1 rounded-2xl p-6">
                        <Image src={img3} alt="image-1" className="w-[100%] h-auto object-contain" />
                        <div className="poppins-medium leading-[200%] mt-4 font-14" style={{ color: Colors.brand200 }}>Development</div>
                        <div className="poppins-semibold mt-4 font-20">How To Build Real Estate App from Scratch: Step-by-Step Guide</div>
                        <div className="poppins-medium leading-[200%] mt-4 font-16">Education is the key to success in life. It helps people gain knowledge, develop skills, and build.</div>
                        <button className="bg-[#002F10] poppins-medium mt-6 py-4 px-6 rounded-4xl flex font-16" style={{ color: Colors.brand200 }}>
                            Explore Now
                            <Image src={arrow} alt="" className="w-4 h-auto ml-2" />
                        </button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className='rotating-btn'>
                        <button className="bg-black text-white poppins-semibold py-3 px-12 rounded-4xl mt-8 border-1 border-green-500 border-solid justify-self-center font-16"
                            style={{ backgroundColor: Colors.brand950 }} ref={rotatingRef}>
                            About Us
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InsightsIdeas