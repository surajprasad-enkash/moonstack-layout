import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/assets/logo-green.png'
import img1 from '../../public/assets/footer-1.png'
import img2 from '../../public/assets/footer-2.png'
import twitter from '../../public/assets/twitter.svg'
import linkedin from '../../public/assets/linkedin.svg'
import facebook from '../../public/assets/facebook.svg'
import whatsapp from '../../public/assets/whatsapp.svg'
import rating from '../../public/assets/rating.svg'
import ratingRed from '../../public/assets/rating-red.svg'
import upwork from '../../public/assets/upwork.png'
import google from '../../public/assets/google.png'
import clutch from '../../public/assets/clutch.png'
import iso from '../../public/assets/iso.png'

import { Colors } from '@/colors/colors';

const footerLinks = [
    { id: 1, paths: ["/career"], title: "Career" },
    { id: 2, paths: ["/terms"], title: "Terms & conditions" },
    { id: 3, paths: ["/privacy"], title: "Privacy Policy" },
    { id: 4, paths: ["/blog"], title: "Blog" },
    { id: 5, paths: ["/contact-us"], title: "Contact Us" },
]

const Footer = () => {
    return (
        <>
            <footer className="bg-black text-white p-4">
                <div className='flex gap-6 justify-between'>
                    <div className="w-40">
                        <Image src={logo} alt='logo' className="h-auto w-auto object-contain" />
                    </div>
                    <div className='flex items-center'>
                        {footerLinks.map((item, index) => (
                            <>
                                <div className={`block text-white cursor-pointer poppins-medium px-7 font-14`}>
                                    {item.title}
                                </div>
                                {index < footerLinks.length - 1 &&
                                    <span className='separator' />
                                }
                            </>
                        ))}
                    </div>
                    <div className='flex gap-3 justify-end'>
                        <Image src={twitter} alt='img-1' className='w-7 h-auto object-contain cursor-pointer' />
                        <Image src={linkedin} alt='img-1' className='w-7 h-auto object-contain cursor-pointer' />
                        <Image src={facebook} alt='img-1' className='w-7 h-auto object-contain cursor-pointer' />
                        <Image src={whatsapp} alt='img-1' className='w-7 h-auto object-contain cursor-pointer' />

                    </div>
                </div>
                <div className='flex mt-8 justify-between items-center'>
                    <div className='flex gap-4'>
                        <Image src={img1} alt='img-1' className='w-25 h-auto object-contain' />
                        <Image src={img2} alt='img-1' className='w-25 h-auto object-contain' />
                    </div>
                    <div style={{ display: 'ruby' }}>
                        <div className='review-pill'>
                            <div className='flex justify-between gap-2'>
                                <div className='poppins-medium text-black font-12'>Review on</div>
                                <Image alt='rating' src={rating} className='w-20 h-auto object-contain' />
                            </div>
                            <div className='flex justify-between gap-1'>
                                <Image alt='upwork' src={upwork} className='w-16 h-auto object-contain' />
                                <div className='poppins-regular font-12' style={{ color: '#808080' }}>(95 reviews)</div>
                            </div>
                        </div>

                        <div className='review-pill'>
                            <div className='flex justify-between gap-2'>
                                <div className='poppins-medium text-black font-12'>Review on</div>
                                <Image alt='rating' src={rating} className='w-20 h-auto object-contain' />
                            </div>
                            <div className='flex justify-between gap-1 items-center'>
                                <Image alt='google' src={google} className='w-15 h-auto object-contain' />
                                <div className='poppins-regular font-12' style={{ color: '#808080' }}>(95 reviews)</div>
                            </div>
                        </div>

                        <div className='review-pill'>
                            <div className='flex justify-between gap-2'>
                                <div className='poppins-regular font-12' style={{ color: '#808080' }}>REVIEW ON</div>
                                <Image alt='rating' src={ratingRed} className='w-20 h-auto object-contain' />
                            </div>
                            <div className='flex justify-between gap-1 items-center'>
                                <Image alt='clutch' src={clutch} className='w-15 h-auto object-contain' />
                                <div className='poppins-medium text-black font-12'>(120 reviews)</div>
                            </div>
                        </div>

                        <div className='review-pill'>
                            <div className='flex justify-between gap-2'>
                                <Image alt='iso' src={iso} className='w-15 h-auto object-contain' />
                                <div>
                                    <div className='poppins-regular font-12' style={{ color: '#0D5BAA' }}>27001 :2018</div>
                                    <div className='poppins-medium text-black font-12'>IND.44.121/IS/U</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='poppins-medium mt-8 font-14' style={{ color: '#B4B4B4' }}>
                    Copyright 2025 @ moonstack All rights reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer;