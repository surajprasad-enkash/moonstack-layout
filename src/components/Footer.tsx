"use client";
import React from "react";
import Image from "next/image";
import moment from "moment";

import logo from "../../public/assets/logo-green.png";
import img1 from "../../public/assets/footer-1.png";
import img2 from "../../public/assets/footer-2.png";
import twitter from "../../public/assets/twitter.svg";
import linkedin from "../../public/assets/linkedin.svg";
import facebook from "../../public/assets/facebook.svg";
import whatsapp from "../../public/assets/whatsapp.svg";
import rating from "../../public/assets/rating.svg";
import ratingRed from "../../public/assets/rating-red.svg";
import upwork from "../../public/assets/upwork.png";
import google from "../../public/assets/google.png";
import clutch from "../../public/assets/clutch.png";
import iso from "../../public/assets/iso.png";

import footerBg from '../../public/assets/footerbg.svg';

interface FooterRefs {
  footerCareer: React.RefObject<HTMLDivElement>;
  terms: React.RefObject<HTMLDivElement>;
  privacy: React.RefObject<HTMLDivElement>;
  blog: React.RefObject<HTMLDivElement>;
  footerContactUs: React.RefObject<HTMLDivElement>;
}

const Footer: React.FC<{ refs: FooterRefs }> = ({ refs }) => {
  const footerLinks = [
    { id: 1, title: "Career", ref: refs.footerCareer },
    { id: 2, title: "Terms & Conditions", ref: refs.terms },
    { id: 3, title: "Privacy Policy", ref: refs.privacy },
    { id: 4, title: "Blog", ref: refs.blog },
    { id: 5, title: "Contact Us", ref: refs.footerContactUs },
  ];

  return (
     
    <footer className="bg-black px-5 py-10 text-white md:px-8 pageFooter" style={{backgroundImage:`url(${footerBg.src})`}}>
      <div className="container mx-auto w-full">
        {/* Top Row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Logo + Links */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            <div className="w-32 md:w-40">
              <Image src={logo} alt="logo" className="w-full object-contain" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-center md:justify-start md:gap-5">
              {footerLinks.map((item, index) => (
                <React.Fragment key={item.id}>
                  <div className="cursor-pointer text-sm poppins-medium whitespace-nowrap">
                    {item.title}
                  </div>

                  {/* Divider only on desktop */}
                  {index < footerLinks.length - 1 && (
                    <span className="hidden md:inline-block">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 md:justify-end">
            <Image src={twitter} alt="twitter" className="w-6 cursor-pointer" />
            <Image src={linkedin} alt="linkedin" className="w-6 cursor-pointer" />
            <Image src={facebook} alt="facebook" className="w-6 cursor-pointer" />
            <Image src={whatsapp} alt="whatsapp" className="w-6 cursor-pointer" />
          </div>
        </div>

        {/* Middle Row */}
        <div className="mt-10 flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Images */}
          <div className="flex justify-center gap-5 md:justify-start">
            <Image src={img1} alt="footer 1" className="w-20 object-contain" />
            <Image src={img2} alt="footer 2" className="w-20 object-contain" />
          </div>

          {/* Reviews */}
          <div className="flex flex-wrap justify-center gap-4 md:justify-end">
            {[
              { label: "Review on", icon: rating, platform: upwork, count: "95 reviews" },
              { label: "Review on", icon: rating, platform: google, count: "95 reviews" },
              { label: "Review on", icon: ratingRed, platform: clutch, count: "120 reviews" },
              { label: "ISO 27001:2018", icon: iso, platform: null, count: null },
            ].map((item, idx) => (
              <div
                key={idx}
                className="w-[150px] rounded-md bg-white p-3 text-black shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs poppins-medium">{item.label}</span>
                  {item.icon && (
                    <Image src={item.icon} alt="rating" className="w-16" />
                  )}
                </div>

                <div className="mt-1 flex items-center justify-between">
                  {item.platform && (
                    <Image
                      src={item.platform}
                      alt="platform"
                      className="w-10 object-contain"
                    />
                  )}
                  {item.count && (
                    <span className="text-xs poppins-regular text-gray-500">
                      {item.count}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-400 md:text-left">
          © {moment().year()} Moonstack. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
