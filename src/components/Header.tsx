"use client";
import React, { useState } from "react";
import logo from "../../public/assets/logo-white.png";
import Image from "next/image";
import { Colors } from "@/colors/colors";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineMenu } from "react-icons/md";

interface IHeaderRefs {
  home: React.RefObject<HTMLDivElement>;
  service: React.RefObject<HTMLDivElement>;
  aboutUs: React.RefObject<HTMLDivElement>;
  contactUs: React.RefObject<HTMLDivElement>;
  career: React.RefObject<HTMLDivElement>;
  talkBtn: React.RefObject<HTMLDivElement>;
}

interface IMenuItems {
  id: number;
  paths: string[];
  title: string;
  ref: React.RefObject<HTMLDivElement>;
}

const Header = ({ refs }: { refs: IHeaderRefs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: IMenuItems[] = [
    { id: 1, paths: ["/"], title: "Home", ref: refs.home },
    { id: 2, paths: ["/services"], title: "Services", ref: refs.service },
    { id: 3, paths: ["/about-us"], title: "About Us", ref: refs.aboutUs },
    { id: 4, paths: ["/contact-us"], title: "Contact Us", ref: refs.contactUs },
    { id: 5, paths: ["/career"], title: "Career", ref: refs.career },
  ];

  return (
    <header className="bg-black text-white p-4 fixed z-50 w-full">
      <div className="mx-auto container flex justify-between items-center">
        {/* Logo */}
        <div className="w-40">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              className="h-auto w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {menuItems.map((item, index) => {
            const isActive = item.paths.includes("/");
            return (
              <div
                key={index}
                className="hover-white-text ml-3 py-1.5 px-5 text-white cursor-pointer poppins-medium font-14"
                style={{ color: isActive ? Colors.brand200 : "#fff" }}
                ref={item.ref}
              >
                {item.title}
              </div>
            );
          })}
        </nav>

        {/* Let's Talk Button (Desktop only) */}
        <div className="hidden md:block">
          <button
            className="talk-btn px-6 py-2 rounded-md"
            style={{ backgroundColor: Colors.brand400 }}
            // ref={refs.talkBtn}
          >
            <span className="text-black poppins-semibold font-16">
              Let&apos;s Talk
            </span>
          </button>
        </div>

  
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
             
              <RxCross2 className="w-7 h-7 text-white" />
            ) : (
       
              <MdOutlineMenu className="w-7 h-7 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 mt-3">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="py-3 px-6 border-b border-gray-800 text-white poppins-medium font-14"
              style={{ color: "#fff" }}
              onClick={() => setIsMenuOpen(false)}
              ref={item.ref}
            >
              <Link href={item.paths[0]}>{item.title}</Link>
            </div>
          ))}
          <div className="py-4 px-6">
            <button
              className="w-full py-2 rounded-md"
              style={{ backgroundColor: Colors.brand400 }}
              // ref={refs.talkBtn}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-black poppins-semibold font-16">
                Let&apos;s Talk
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
