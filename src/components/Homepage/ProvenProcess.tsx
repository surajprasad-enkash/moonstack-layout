import React from "react";
import { Colors } from "@/colors/colors";

const ProvenProcess = () => {
    return (
        <>
            <div className="bg-black p-15 text-white flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                    <div className="poppins-semibold font-40">Our <span style={{ color: Colors.brand200 }}>Proven Process</span></div>
                    <div className="poppins-medium leading-[200%] mt-4 w-full md:w-2/3 lg:w-2/3 xl:w-2/3 font-16">In today’s fast-moving digital world, creativity and innovation play a vital role in building meaningful solutions. A great design is not just about how it looks, but also about how it works and how users feel while interacting with it</div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                    <div className="mt-10 rounded-2xl border-b-1 border-green-500 p-10 justify-between grid bg-gradient-to-br from-[#177634] via-black to-black-500">
                        <div className="poppins-semibold font-28">01</div>
                        <div className="poppins-semibold font-28">Discover & Define</div>
                        <div className="poppins-regular leading-[200%] mt-4 font-16">Innovation plays a vital role in shaping the future of businesses. Companies that focus on creativity and problem-solving are able to build stronger connections with their customers. By combining technology with user-centered design, organizations can create solutions that not only meet current needs</div>
                    </div>
                    <div className="mt-10 rounded-2xl border-b-1 border-green-500 p-10 justify-between grid bg-gradient-to-br from-[#177634] via-black to-black-500">
                        <div className="poppins-semibold font-28">02</div>
                        <div className="poppins-semibold font-28">Design & Development</div>
                        <div className="poppins-regular leading-[200%] mt-4 font-16">Innovation plays a vital role in shaping the future of businesses. Companies that focus on creativity and problem-solving are able to build stronger connections with their customers. By combining technology with user-centered design, organizations can create solutions that not only meet current needs</div>
                    </div>
                    <div className="mt-10 rounded-2xl border-b-1 border-green-500 p-10 justify-between grid bg-gradient-to-br from-[#177634] via-black to-black-500">
                        <div className="poppins-semibold font-28">03</div>
                        <div className="poppins-semibold font-28">Deliver & Grow</div>
                        <div className="poppins-regular leading-[200%] mt-4 font-16">Innovation plays a vital role in shaping the future of businesses. Companies that focus on creativity and problem-solving are able to build stronger connections with their customers. By combining technology with user-centered design, organizations can create solutions that not only meet current needs</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProvenProcess;