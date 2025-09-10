import React from "react";
import { Colors } from "@/colors/colors";
import Image from "next/image";
import lock from '../../../public/assets/lock.svg'

const OurServices = () => {
    return (
        <>
            <div className="bg-black p-15 text-white">
                <div className="flex flex-col md:flex-row flex-wrap justify-between gap-y-15">
                    <div className="w-full md:w-[30%] lg:w-[30%] xl:w-[30%] poppins-semibold font-40">
                        <div>Our</div><div style={{ color: Colors.brand200 }}>Sevices</div>
                        <div className="mt-6 poppins-medium leading-[200%] font-16">Earney is a financial solution to energize and empower Small and Medium Enterprises (SMEs) and freelancers by providing them with a seamless and efficient financial platform</div>
                    </div>
                    <div className="w-full md:w-[32%] lg:w-[32%] xl:w-[32%] rounded-3xl border-b-2 border-green-500 p-8 items-between grid bg-gradient-to-b from-transparent to-transparent hover:from-transparent hover:to-[#0C4A0C] transition duration-400">
                        <Image src={lock} alt="" className="w-10 h-auto" />
                        <div className="mt-auto">
                            <div className="poppins-semibold font-18 mb-4">Web Designing</div>
                            <div className="poppins-regular leading-[200%] font-16">Earney is a financial solution to energize and empower Small and Medium.</div>
                        </div>
                    </div>

                    <div className="w-full md:w-[32%] lg:w-[32%] xl:w-[32%] rounded-3xl border-b-2 border-green-500 p-8 items-between grid bg-gradient-to-b from-transparent to-transparent hover:from-transparent hover:to-[#0C4A0C] transition duration-400">
                        <Image src={lock} alt="" className="w-10 h-auto" />
                        <div className="mt-auto">
                            <div className="poppins-semibold font-18 mb-4">Mobile Development</div>
                            <div className="poppins-regular leading-[200%] font-16">Earney is a financial solution to energize and empower Small and Medium.</div>
                        </div>
                    </div>

                    <div className="w-full md:w-[32%] lg:w-[32%] xl:w-[32%] h-65 rounded-3xl border-b-2 border-green-500 p-8 items-between grid bg-gradient-to-b from-transparent to-transparent hover:from-transparent hover:to-[#0C4A0C] transition duration-400">
                        <Image src={lock} alt="" className="w-10 h-auto" />
                        <div className="mt-auto">
                            <div className="poppins-semibold font-18 mb-4">Cloud Service</div>
                            <div className="poppins-regular leading-[200%] font-16">Earney is a financial solution to energize and empower Small and Medium.</div>
                        </div>
                    </div>

                    <div className="w-full md:w-[32%] lg:w-[32%] xl:w-[32%] rounded-3xl border-b-2 border-green-500 p-8 items-between grid bg-gradient-to-b from-transparent to-transparent hover:from-transparent hover:to-[#0C4A0C] transition duration-400">
                        <Image src={lock} alt="" className="w-10 h-auto" />
                        <div className="mt-auto">
                            <div className="poppins-semibold font-18 mb-4">Frontend Development</div>
                            <div className="poppins-regular leading-[200%] font-16">Earney is a financial solution to energize and empower Small and Medium.</div>
                        </div>
                    </div>

                    <div className="w-full md:w-[32%] lg:w-[32%] xl:w-[32%] rounded-3xl border-b-2 border-green-500 p-8 items-between grid bg-gradient-to-b from-transparent to-transparent hover:from-transparent hover:to-[#0C4A0C] transition duration-400">
                        <Image src={lock} alt="" className="w-10 h-auto" />
                        <div className="mt-auto">
                            <div className="poppins-semibold font-18 mb-4">Backend Development</div>
                            <div className="poppins-regular leading-[200%] font-16">Earney is a financial solution to energize and empower Small and Medium.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurServices