import { Colors } from "@/colors/colors";
import React from "react";
import subtract from '../../../public/assets/home-star.svg'
import arrow from '../../../public/assets/arrow-down.svg'
import rectangle from '../../../public/assets/Rectangle.png'
import Image from "next/image";

const SolutionsComponent = () => {
    return (
        <>
            <div className="bg-black">
                <div className="flex items-center pt-10">
                    <div className="w-[40%] poppins-semibold text-white p-10 font-36">
                        Building Future-Ready Solutions <span style={{ color: Colors.brand200 }}>with Moonstack</span>
                    </div>
                    <div className="flex items-center justify-end w-[10%]">
                        <Image src={subtract} alt="" className="w-8 h-auto" />
                    </div>
                    <div className="w-[50%] solutions-bg poppins-medium text-white font-16">
                        Earney is a financial solution to energize and empower Small and Medium Enterprises (SMEs) and freelancers by providing them with a seamless and efficient financial platform
                    </div>
                </div>

                <div className="flex p-8 text-white">
                    <div className="w-1/4 p-10 right-gradient-bdr">
                        <Image src={arrow} alt="" className="w-5" />
                        <div className="mt-4 poppins-semibold font-18">Client-Centric Approach</div>
                        <div className="mt-4 poppins-medium font-14">Earney is a financial solution to energize and empower Small and Medium Enterprises.</div>
                    </div>
                    <div className="w-1/4 p-10 right-gradient-bdr">
                        <Image src={arrow} alt="" className="w-5" />
                        <div className="mt-4 poppins-semibold font-18">Transparent Process</div>
                        <div className="mt-4 poppins-medium font-14">Earney is a financial solution to energize and empower Small and Medium Enterprises.</div>
                    </div>
                    <div className="w-1/4 p-10 right-gradient-bdr">
                        <Image src={arrow} alt="" className="w-5" />
                        <div className="mt-4 poppins-semibold font-18">Client-Centric Approach</div>
                        <div className="mt-4 poppins-medium font-14">Earney is a financial solution to energize and empower Small and Medium Enterprises.</div>
                    </div>
                    <div className="w-1/4 p-10 right-gradient-bdr">
                        <Image src={arrow} alt="" className="w-5" />
                        <div className="mt-4 poppins-semibold font-18">Save More Money</div>
                        <div className="mt-4 poppins-medium font-14">Earney is a financial solution to energize and empower Small and Medium Enterprises.</div>
                    </div>
                </div>
                <div className="flex p-15 text-white">
                    <div className="w-1/2">
                        <Image src={rectangle} alt="" className="rounded-10 w-[80%] h-auto" />
                    </div>
                    <div className="w-1/2">
                        <div className="poppins-medium leading-[200%] h-1/3 font-16">Earney is a financial solution to energize and empower Small and Medium Enterprises (SMEs) and freelancers by providing them with a seamless and efficient financial platform</div>
                        <div className="flex gap-8 h-1/3">
                            <div className="w-1/3 py-10 pr-20 bottom-gradient-bdr">
                                <div className="poppins-semibold font-28">90%</div>
                                <div className="poppins-medium font-16">Customer Satisfaction</div>
                            </div>
                            <div className="w-1/3 py-10 pr-20 border-y-1 bottom-gradient-bdr">
                                <div className="poppins-semibold font-28">150</div>
                                <div className="poppins-medium font-16">Project Completed</div>
                            </div>
                            <div className="w-1/3 py-10 pr-20">
                                <div className="poppins-semibold font-28">10 mins</div>
                                <div className="poppins-medium font-16">Average Answer Time</div>
                            </div>
                        </div>
                        <div className="h-1/3 items-end flex">
                            <button className="bg-black text-white poppins-semibold py-3 px-10 rounded-3xl mt-6 border-1 border-green-500 border-solid font-16" style={{ backgroundColor: Colors.brand950 }}>
                                About Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SolutionsComponent;