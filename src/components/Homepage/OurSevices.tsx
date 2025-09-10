import React from "react";
import { Colors } from "@/colors/colors";
import Image from "next/image";
import lock from '../../../public/assets/lock.svg'

const OurServices = () => {
    return (
        <>
            <div className="bg-black p-15 text-white">
                <div className="flex flex-wrap justify-between gap-y-10">
                    <div className="w-[30%] poppins-semibold font-40">
                        <div>Our</div><div style={{ color: Colors.brand200 }}>Sevices</div>
                        <div className="mt-6 poppins-medium leading-[200%] font-16">Earney is a financial solution to energize and empower Small and Medium Enterprises (SMEs) and freelancers by providing them with a seamless and efficient financial platform</div>
                    </div>
                    <div className="w-[30%] rounded-xl border-b-2 border-green-500 p-10 items-between grid">
                        <Image src={lock} alt="" className="w-10 h-auto" />
                        <div className="poppins-semibold font-18">Web Designing</div>
                        <div className="poppins-medium leading-[200%] font-16">Earney is a financial solution to energize and empower Small and Medium.</div>
                    </div>

                    <div className="w-[30%] rounded-xl border-b-2 border-green-500 p-10 items-between grid">
                        <Image src={lock} alt="" className="w-10 h-auto" />
                        <div className="poppins-semibold font-18">Mobile Development</div>
                        <div className="poppins-medium leading-[200%] font-16">Earney is a financial solution to energize and empower Small and Medium.</div>
                    </div>
                    <div className="w-[30%] rounded-xl border-b-2 border-green-500 p-10 items-between grid">
                        <Image src={lock} alt="" className="w-10 h-auto" />
                        <div className="poppins-semibold font-18">Cloud Service</div>
                        <div className="poppins-medium leading-[200%] font-16">Earney is a financial solution to energize and empower Small and Medium.</div>
                    </div>
                    <div className="w-[30%] rounded-xl border-b-2 border-green-500 p-10 items-between grid">
                        <Image src={lock} alt="" className="w-10 h-auto" />
                        <div className="poppins-semibold font-18">Frontend Development</div>
                        <div className="poppins-medium leading-[200%] font-16">Earney is a financial solution to energize and empower Small and Medium.</div>
                    </div>
                    <div className="w-[30%] rounded-xl border-b-2 border-green-500 p-10 items-between grid">
                        <Image src={lock} alt="" className="w-10 h-auto" />
                        <div className="poppins-semibold font-18">Backend Development</div>
                        <div className="poppins-medium leading-[200%] font-16">Earney is a financial solution to energize and empower Small and Medium.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurServices