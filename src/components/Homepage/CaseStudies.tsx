import React, { useState, useRef, useEffect } from "react";
import { Colors } from "@/colors/colors";
import { Box, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from "next/image";
import customer from '../../../public/assets/customer.png'
import arrowNext from '../../../public/assets/arrow-next.svg'
import Slider from "react-slick";
import figma from '../../../public/assets/figma.svg'
import discord from '../../../public/assets/discord.svg'
import html from '../../../public/assets/html.svg'
import py from '../../../public/assets/py.svg'
import red from '../../../public/assets/red.svg'
import meta from '../../../public/assets/meta.svg'
import vs from '../../../public/assets/vs.png'

interface IData {
    title: string;
    images: string[];
    users: any;
}

const CaseStudies = () => {
    const sliderRef = useRef(null);
    const sliderRef2 = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const dataArr: IData[] = [
        {
            title: "Frontend Developer",
            images: [figma, meta, figma, vs, red, discord, py, html],
            users: [customer, customer, customer, customer, customer]
        },
        {
            title: "UI/UX Designer",
            images: [figma, meta, figma, vs, red, discord, py, html],
            users: [customer, customer, customer, customer, customer]
        },
        {
            title: "Product Designer",
            images: [figma, meta, figma, vs, red, discord, py, html],
            users: [customer, customer, customer, customer, customer]
        },
        {
            title: "Cloud Service",
            images: [figma, meta, figma, vs, red, discord, py, html],
            users: [customer, customer, customer, customer, customer]
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '50px',
        slidesToScroll: 1,
        afterChange: (next: any) => {
            setCurrentSlide(next);
        },
        arrows: false,
        nextArrow: <div />,
        prevArrow: <div />
    };

    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '28%',
        arrows: false,
        nextArrow: <div />,
        prevArrow: <div />
    };

    const CustomArrow = (props: any) => {
        const { direction, sliderRef, sliderRef2 } = props
        const handleClick = () => {
            if (direction === 'next') {
                sliderRef.current.slickNext();
                sliderRef2.current.slickNext();
            } else {
                sliderRef.current.slickPrev();
                sliderRef2.current.slickPrev();
            }
        };

        return (
            <Image alt="" src={arrowNext} className={`w-10 h-auto ${direction == 'prev' && 'rotate-180'}`} onClick={handleClick} />
        );
    };

    function getCenterIndex(arr: string[]) {
        if (!Array.isArray(arr) || arr.length === 0) {
            return -1;
        }
        return Math.floor(arr.length / 2);
    }

    return (
        <>
            <div className="bg-black text-white pb-15">
                <div className="flex flex-col md:flex-row justify-between p-15 mix-blend-difference">
                    <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[40%] poppins-semibold font-36">
                        Case Studies That Turn Challenges <span className="bg-gradient-to-r from-[#25E8B1] via=[#60F90D] to-[#60F90D] text-transparent bg-clip-text">Into Growth</span>
                    </div>
                    <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[40%] poppins-medium leading-[200%] font-16">We focus on scalability, security, and user-centric design, ensuring that every project is future-ready and tailored to client needs.</div>
                </div>
                <div className="pt-20 justify-center flex mix-blend-difference">
                    <div className="flex w-[70%] justify-between">
                        <CustomArrow direction="prev" sliderRef={sliderRef} sliderRef2={sliderRef2} />
                        <Slider ref={sliderRef} {...settings} className='w-[80%]'>
                            {dataArr.map((review, i) => (
                                <div className="text-center">
                                    <div className={`poppins-medium leading-[200%] font-18 ${i == currentSlide && 'text-[#00EA52]'}`}>{review.title}</div>
                                </div>
                            ))}
                        </Slider>
                        <CustomArrow direction="next" sliderRef={sliderRef} sliderRef2={sliderRef2} />
                    </div>
                </div>
                <div className="center-slick mix-blend-difference">
                    <Slider ref={sliderRef2} {...settings2} className='w-[100%]'>
                        {dataArr.map((review, i) => (
                            <div>
                                {i == currentSlide &&
                                    <>
                                        <div className="justify-center flex">
                                            <svg width="20" height="20" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                                <polygon points="25,0 0,50 50,50" fill="#00EA52" />
                                            </svg>
                                        </div>
                                        <div className="h-6 overflow-hidden mt-4">
                                            <div className="arc"></div>
                                        </div>
                                    </>
                                }
                                <div className={`rounded-[100%] p-10  w-[500] h-[500] items-center justify-center flex flex-col ${currentSlide == i && 'bg-gradient-to-tl from-[#32C332] via-black to-black-500 border-[#116011] border-1'} ${currentSlide !== i && 'bg-[#041004]'}`}>
                                    <div className="flex flex-wrap justify-center gap-6">
                                        {review.images.map((img) => (
                                            <Image alt="" src={img} className="w-[54] h-auto" />
                                        ))}
                                    </div>
                                    <div className="flex justify-center items-center mt-8">
                                        {review.users.map((user: string, i: number) => {
                                            const isCenter = getCenterIndex(review.users) == i ? true : false
                                            return (
                                                <Image src={user} alt="image" className={`w-[35] h-auto ml-[-10] rounded-3xl border-black border-2 ${isCenter && 'z-999'}`} />
                                            )
                                        })}
                                    </div>
                                    <div className="poppins-semibold font-14 mt-8">900+ Experts</div>
                                    <div className="poppins-medium font-12 mt-2" style={{ color: '#FF9E2F' }}>Available</div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default CaseStudies