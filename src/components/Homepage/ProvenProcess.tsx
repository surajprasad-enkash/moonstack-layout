import React from "react";
import { Colors } from "@/colors/colors";

interface ICards {
    title: string;
    desc: string;
    mt: number,
    rotate: number
}

const ProvenProcess = () => {
    const cardsArr: ICards[] = [
        {
            title: "Discover & Define",
            desc: "Innovation plays a vital role in shaping the future of businesses. Companies that focus on creativity and problem-solving are able to build stronger connections with their customers. By combining technology with user-centered design, organizations can create solutions that not only meet current needs",
            mt: 10,
            rotate: 3
        },
        {
            title: "Design & Development",
            desc: "Innovation plays a vital role in shaping the future of businesses. Companies that focus on creativity and problem-solving are able to build stronger connections with their customers. By combining technology with user-centered design, organizations can create solutions that not only meet current needs",
            mt: 20,
            rotate: 8
        },
        {
            title: "Deliver & Grow",
            desc: "Innovation plays a vital role in shaping the future of businesses. Companies that focus on creativity and problem-solving are able to build stronger connections with their customers. By combining technology with user-centered design, organizations can create solutions that not only meet current needs",
            mt: 30,
            rotate: 13
        }
    ]

    function formatNumberWithLeadingZero(number: Number) {
        return String(number).padStart(2, '0');
    }

    return (
        <>

            <div className="bg-black p-15 pt-0 text-white flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 sticky top-0">
                    <div className="sticky top-0 pt-10">
                        <div className="poppins-semibold font-40">Our <span style={{ color: Colors.brand200 }}>Proven Process</span></div>
                        <div className="poppins-medium leading-[200%] mt-4 w-full md:w-2/3 lg:w-2/3 xl:w-2/3 font-16">In today’s fast-moving digital world, creativity and innovation play a vital role in building meaningful solutions. A great design is not just about how it looks, but also about how it works and how users feel while interacting with it</div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                    <div id="cards">
                        {cardsArr.map((li, i) => (
                            <div className="card" id={`card-${i + 1}`}>
                                <div className={`mt-${i * 20} -rotate-${li.rotate} bg-black rounded-2xl border-1 border-green-500 p-10 justify-between grid bg-gradient-to-br from-[#177634] via-black to-black-500`}>
                                    <div className="poppins-semibold font-28">{formatNumberWithLeadingZero(i + 1)}</div>
                                    <div className="poppins-semibold font-28">{li.title}</div>
                                    <div className="poppins-regular leading-[200%] mt-4 font-16">{li.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProvenProcess;