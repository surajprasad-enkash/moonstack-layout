"use client";
import React, { Ref, RefObject } from "react";
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
  ref:
    | RefObject<HTMLImageElement | HTMLDivElement | null>
    | HTMLDivElement
    | undefined;
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
    <footer className="container mx-auto bg-black p-6 text-white md:p-4">
      {/* Top Row: Logo + Links + Social Icons */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-16">
          <div className="mx-auto w-40 md:mx-0">
            <Image
              src={logo}
              alt="logo"
              className="h-auto w-auto object-contain"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start md:gap-7">
            {footerLinks.map((item, index) => (
              <React.Fragment key={item.id}>
                <div className="poppins-medium font-14 block cursor-pointer px-2 text-center text-white md:text-left">
                  {item.title}
                </div>
                {index < footerLinks.length - 1 && (
                  <span className="hidden md:inline-block">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-3 md:justify-end">
          <Image
            src={twitter}
            alt="twitter"
            className="h-auto w-7 cursor-pointer object-contain"
          />
          <Image
            src={linkedin}
            alt="linkedin"
            className="h-auto w-7 cursor-pointer object-contain"
          />
          <Image
            src={facebook}
            alt="facebook"
            className="h-auto w-7 cursor-pointer object-contain"
          />
          <Image
            src={whatsapp}
            alt="whatsapp"
            className="h-auto w-7 cursor-pointer object-contain"
          />
        </div>
      </div>

      {/* Middle Row: Images + Reviews */}
      <div className="mt-8 flex flex-col gap-6 md:flex-row md:justify-between">
        <div className="flex justify-center gap-4 md:justify-start">
          <Image
            src={img1}
            alt="footer-img-1"
            className="h-auto w-20 object-contain"
          />
          <Image
            src={img2}
            alt="footer-img-2"
            className="h-auto w-20 object-contain"
          />
        </div>

        <div className="flex flex-col flex-wrap justify-center gap-4 md:flex-row md:justify-end">
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
              // count: "IND.44.121/IS/U",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="review-pill flex flex-col gap-1 rounded-md bg-white p-2 text-black"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="poppins-medium font-12">{item.label}</span>
                {item.icon && (
                  <Image
                    alt="rating"
                    src={item.icon}
                    className="h-auto w-20 object-contain"
                  />
                )}
              </div>
              <div className="flex items-center justify-between gap-2">
                {item.platform && (
                  <Image
                    alt="platform"
                    src={item.platform}
                    className="h-auto w-10 object-contain"
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
      <div className="poppins-medium font-14 mt-6 text-center text-gray-400 md:text-left">
        © {moment().year()} Moonstack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
