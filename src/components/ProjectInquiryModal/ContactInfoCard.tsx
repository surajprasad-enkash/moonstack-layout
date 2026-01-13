"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

import checkIcon from "@/assets/contact-us/check icon.svg";
// import logo from "@/assets/logo/popup_logo.svg";
import logo from "@/assets/logo-white.png";

interface ContactInfoCardProps {
  className?: string;
}

export default function ContactInfoCard({ className }: ContactInfoCardProps) {
  return (
    <div className={`${className ?? ""}`}>
      {/* ---------------- TOP ---------------- */}
      <div>
        {/* Logo */}
        <div className="mb-8">
          <Image
            src={logo}
            alt="Moonstack logo"
            width={281}
            height={78}
            priority
            className="w-[280px] h-[auto]"
          />
        </div>

        {/* Features */}
        <ul className="space-y-[25px] mt-[50px] text-sm">
          <li className="flex items-center gap-2">
            <Image src={checkIcon} alt="" />
            <span className=" block text-[16px]">
              We will respond to you within 12 hours{" "}
            </span>
          </li>

          <li className="flex items-center gap-2">
            <Image src={checkIcon} alt="" />
            <span className=" block text-[16px]">
              We’ll sign an NDA if requested{" "}
            </span>
          </li>

          <li className="flex items-center gap-2">
            <Image src={checkIcon} alt="" />
            <span className=" block text-[16px]">
              Access to dedicated product specialists{" "}
            </span>
          </li>
        </ul>
      </div>

      {/* ---------------- BOTTOM ---------------- */}
      <div className="space-y-4 text-sm">
        <Link
          href="mailto:mail@moonstack.co"
          className="flex items-center gap-3 rounded-lg bg-[#0b522b] p-3"
        >
          <HiOutlineMail size={18} />
          mail@moonstack.co
        </Link>

        <Link
          href="tel:9772009900"
          className="flex items-center gap-3 rounded-lg bg-[#0b522b] p-3"
        >
          <HiOutlinePhone size={18} />
          Book a call
        </Link>
      </div>
    </div>
  );
}
