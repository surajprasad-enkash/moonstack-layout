import React, { useState, useRef, useEffect } from "react";
import { Colors } from "@/colors/colors";
import { Box, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from "next/image";
import customer from '../../../public/assets/customer.png'
import arrowNext from '../../../public/assets/arrow-next.svg'
import Slider from "react-slick";
import figma from '../../../public/assets/figma.svg'

const CaseStudies = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (next: any) => {
            setCurrentSlide(next);
        },
        arrows: false,
        nextArrow: <div />,
        prevArrow: <div />
    };

    const CustomArrow = (props: any) => {
        const { direction, sliderRef } = props
        const handleClick = () => {
            if (direction === 'next') {
                sliderRef.current.slickNext();
            } else {
                sliderRef.current.slickPrev();
            }
        };

        return (
            <Image alt="" src={arrowNext} className={`w-10 h-auto ${direction == 'prev' && 'rotate-180'}`} onClick={handleClick} />
        );
    };



    return (
        <>
            <div className="bg-black text-white">
                <div className="flex flex-col md:flex-row justify-between p-15">
                    <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[40%] poppins-semibold font-36">
                        Case Studies That Turn Challenges <span className="bg-gradient-to-r from-[#25E8B1] via=[#60F90D] to-[#60F90D] text-transparent bg-clip-text">Into Growth</span>
                    </div>
                    <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[40%] poppins-medium leading-[200%] font-16">We focus on scalability, security, and user-centric design, ensuring that every project is future-ready and tailored to client needs.</div>
                </div>
                <div className="flex justify-center">
                    <div className="bg-gradient-to-tl from-[#32C332] via-black to-black-500 rounded-[100%] border-[#116011] p-10 border-1 w-[500] h-[500] items-center justify-center flex flex-col">
                        <div className="flex flex-wrap justify-center gap-6">
                            <Image alt="" src={figma} className="w-[54] h-auto" />
                            <Image alt="" src={figma} className="w-[54] h-auto" />
                            <Image alt="" src={figma} className="w-[54] h-auto" />
                            <Image alt="" src={figma} className="w-[54] h-auto" />
                            <Image alt="" src={figma} className="w-[54] h-auto" />
                            <Image alt="" src={figma} className="w-[54] h-auto" />
                            <Image alt="" src={figma} className="w-[54] h-auto" />
                            <Image alt="" src={figma} className="w-[54] h-auto" />
                        </div>

                        <div className="flex justify-center items-center mt-8">
                            <Image src={customer} alt="image" className="w-[35] h-auto ml-[-10] rounded-3xl border-black border-2" />
                            <Image src={customer} alt="image" className="w-[35] h-auto ml-[-10] rounded-3xl border-black border-2" />
                            <Image src={customer} alt="image" className="w-[45] h-auto ml-[-10] rounded-3xl border-black border-2 z-999" />
                            <Image src={customer} alt="image" className="w-[35] h-auto ml-[-10] rounded-3xl border-black border-2 z-555" />
                            <Image src={customer} alt="image" className="w-[35] h-auto ml-[-10] rounded-3xl border-black border-2" />

                        </div>
                        <div className="poppins-semibold font-14 mt-8">900+ Experts</div>
                        <div className="poppins-medium font-12 mt-2" style={{ color: '#FF9E2F' }}>Available</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaseStudies