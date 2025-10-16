import React, { useState } from "react";
import logo from "../../public/assets/logo-white.png";
import Image from "next/image";
import { Colors } from "@/colors/colors";
import Link from "next/link";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const menuItems: IMenuItems[] = [
    { id: 1, paths: ["/"], title: "Home", ref: refs.home },
    { id: 2, paths: ["/services"], title: "Services", ref: refs.service },
    { id: 3, paths: ["/about-us"], title: "About Us", ref: refs.aboutUs },
    { id: 4, paths: ["/contact-us"], title: "Contact Us", ref: refs.contactUs },
    { id: 5, paths: ["/career"], title: "Career", ref: refs.career },
  ];

  return (
    <header className="bg-black text-white p-4 fixed z-50 w-full ">
      <div className="mx-auto container flex justify-between items-center">
        <div className="w-40">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              className="h-auto w-auto object-contain"
            />
          </Link>
        </div>

        <nav className="flex items-center space-x-10">
          {menuItems.map((item, index) => {
            const isActive = item.paths.includes("/");
            return (
              <div
                key={index}
                className={`hover-white-text  ml-3 py-1.5 px-5 flex justify-between items-center text-white cursor-pointer poppins-medium font-14`}
                style={{ color: isActive ? Colors.brand200 : "#fff" }}
                ref={item.ref}
              >
                {item.title}
              </div>
            );
          })}
        </nav>

        <div>
          <button
            className="talk-btn"
            style={{ backgroundColor: Colors.brand400 }}
            ref={refs.talkBtn}
          >
            <span className="text-black poppins-semibold font-16">
              Let's Talk
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
