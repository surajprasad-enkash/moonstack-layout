"use client";
import React from "react";
import Image from "next/image";
import moment from "moment";

// Assets
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

interface IFooterLink {
  id: number;
  paths: string[];
  title: string;
  ref: React.RefObject<HTMLDivElement>;
}

interface IFooterRefs {
  footerCareer: React.RefObject<HTMLDivElement>;
  terms: React.RefObject<HTMLDivElement>;
  privacy: React.RefObject<HTMLDivElement>;
  blog: React.RefObject<HTMLDivElement>;
  footerContactUs: React.RefObject<HTMLDivElement>;
  twitter: React.RefObject<HTMLDivElement>;
  facebook: React.RefObject<HTMLDivElement>;
  whatsapp: React.RefObject<HTMLDivElement>;
  linkedin: React.RefObject<HTMLDivElement>;
}

const Footer = ({ refs }: { refs: IFooterRefs }) => {
  const footerLinks: IFooterLink[] = [
    { id: 1, paths: ["/career"], title: "Career", ref: refs.footerCareer },
    { id: 2, paths: ["/terms"], title: "Terms & Conditions", ref: refs.terms },
    { id: 3, paths: ["/privacy"], title: "Privacy Policy", ref: refs.privacy },
    { id: 4, paths: ["/blog"], title: "Blog", ref: refs.blog },
    {
      id: 5,
      paths: ["/contact-us"],
      title: "Contact Us",
      ref: refs.footerContactUs,
    },
  ];

  return (
    <footer className="bg-black text-white p-6 md:p-10 container mx-auto">
      {/* Top Row: Logo + Links + Social Icons */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        <div className="w-40 mx-auto md:mx-0">
          <Image
            src={logo}
            alt="logo"
            className="h-auto w-auto object-contain"
          />
        </div>

        <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-7">
          {footerLinks.map((item, index) => (
            <React.Fragment key={item.id}>
              <div
                className="block text-white cursor-pointer poppins-medium px-2 md:px-7 font-14 text-center md:text-left"
                ref={item.ref}
              >
                {item.title}
              </div>
              {index < footerLinks.length - 1 && (
                <span className="hidden md:inline-block separator">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="flex justify-center md:justify-end gap-3">
          <Image
            src={twitter}
            alt="twitter"
            className="w-7 h-auto object-contain cursor-pointer"
            ref={refs.twitter}
          />
          <Image
            src={linkedin}
            alt="linkedin"
            className="w-7 h-auto object-contain cursor-pointer"
            ref={refs.linkedin}
          />
          <Image
            src={facebook}
            alt="facebook"
            className="w-7 h-auto object-contain cursor-pointer"
            ref={refs.facebook}
          />
          <Image
            src={whatsapp}
            alt="whatsapp"
            className="w-7 h-auto object-contain cursor-pointer"
            ref={refs.whatsapp}
          />
        </div>
      </div>

      {/* Middle Row: Images + Reviews */}
      <div className="flex flex-col md:flex-row md:justify-between mt-8 gap-6">
        <div className="flex justify-center md:justify-start gap-4">
          <Image
            src={img1}
            alt="footer-img-1"
            className="w-20 h-auto object-contain"
          />
          <Image
            src={img2}
            alt="footer-img-2"
            className="w-20 h-auto object-contain"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-end flex-wrap">
          {/* Review Pills */}
          {[
            {
              label: "Review on",
              icon: rating,
              platform: upwork,
              count: "95 reviews",
            },
            {
              label: "Review on",
              icon: rating,
              platform: google,
              count: "95 reviews",
            },
            {
              label: "Review on",
              icon: ratingRed,
              platform: clutch,
              count: "120 reviews",
            },
            {
              label: "ISO 27001:2018",
              icon: iso,
              platform: null,
              count: "IND.44.121/IS/U",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="review-pill flex flex-col gap-1 bg-white text-black p-2 rounded-md"
            >
              <div className="flex items-center justify-between gap-2">
                {item.icon && (
                  <Image
                    alt="rating"
                    src={item.icon}
                    className="w-5 h-auto object-contain"
                  />
                )}
                <span className="poppins-medium font-12">{item.label}</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                {item.platform && (
                  <Image
                    alt="platform"
                    src={item.platform}
                    className="w-10 h-auto object-contain"
                  />
                )}
                <span className="poppins-regular font-12 text-gray-500">
                  {item.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row: Copyright */}
      <div className="poppins-medium mt-6 text-center md:text-left font-14 text-gray-400">
        © {moment().year()} Moonstack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
