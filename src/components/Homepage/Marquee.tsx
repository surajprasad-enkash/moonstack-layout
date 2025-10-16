import Image from 'next/image';
import React from 'react';
import Marquee from "react-fast-marquee";
import marqImg from '../../../public/assets/marquee-img.png'

const MarqueeComponent = () => {
    return (
        <div className='bg-black py-4 container mx-auto'>
            <Marquee autoFill>
                <div className='px-8'>
                    <Image src={marqImg} alt='Santander' className='w-25 h-auto' />
                </div>
            </Marquee>
        </div>
    );
};

export default MarqueeComponent;