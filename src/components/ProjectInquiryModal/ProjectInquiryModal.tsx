"use client";

import { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FiPaperclip } from "react-icons/fi";
import Link from "next/link";

import logo from "../../../public/assets/logo/popup_logo.svg";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectInquiryModal({ isOpen, onClose }: Props) {
  const [fileName, setFileName] = useState<string | null>(null);

  // ✅ Do not render if popup is closed
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 right-[-17px] bottom-0 left-0 z-50 overflow-auto bg-[#000]/90 p-[80px] projectInquiryModalOuter"
      onClick={onClose}
    >
      <div
        className="flex items-center justify-center p-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex w-full max-w-[1040px] overflow-hidden">

          {/* LEFT PANEL */}
          <div className="hidden w-[38%] flex-col justify-between bg-[#004619] rounded-[60px] rounded-tl-none mr-[10px] p-[40px] text-white md:flex">
            <div>
              <div className="mb-8">
                <Image
                  src={logo}
                  alt="Moonstack logo"
                  width={281}
                  height={78}
                  priority
                />
              </div>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  We appreciate your interest in The NineHertz.
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  We appreciate your interest in The NineHertz.
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  We appreciate your interest in The NineHertz.
                </li>
              </ul>
            </div>

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

          {/* RIGHT FORM */}
          <div className="relative w-full bg-white p-[40px] md:w-[62%] rounded-[60px] rounded-tl-none">
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-[40px] right-[40px] text-[#848484] cursor-pointer hover:text-black"
            >
              <IoClose size={22} />
            </button>

            <h3 className="mb-6 text-[#000]">Tell us about your project</h3>

            <form className="space-y-[32px]">
              <div>
                <label className="mb-1 block text-sm font-medium text-[#000]">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-md border px-4 py-3 text-sm text-[#858585] outline-none focus:border-[#0D8035]"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-[#000]">
                  Email Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-md border px-4 py-3 text-sm text-[#858585] outline-none focus:border-[#0D8035]"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-[#000]">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full rounded-md border px-4 py-3 text-sm text-[#858585] outline-none focus:border-[#0D8035]"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-[#000]">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter your project detail"
                  className="w-full resize-none rounded-md border px-4 py-3 text-sm text-[#858585] outline-none focus:border-[#0D8035]"
                />
              </div>

              <div className="flex items-center gap-3">
                <label className="flex cursor-pointer items-center text-sm text-[#000]">
                  <span className="popupFileIcon">
                    <FiPaperclip size={16} />
                  </span>
                  <span className="popupFileText">Attach file</span>
                  <input
                    hidden
                    type="file"
                    accept=".doc,.pdf,.csv,.xml,.svg,.jpg,.png,.jpeg"
                    onChange={(e) =>
                      setFileName(e.target.files?.[0]?.name || null)
                    }
                  />
                </label>

                {fileName && (
                  <span className="text-xs text-[#000]">{fileName}</span>
                )}
              </div>

              <div className="flex gap-[20px]">
                <p className="text-xs text-[#747474] max-w-[300px] w-[50%]">
                  By submitting this form you agree to our{" "}
                  <span className="cursor-pointer font-medium text-[#000]">
                    Cookie Policy
                  </span>{" "}
                  and{" "}
                  <span className="cursor-pointer font-medium text-[#000]">
                    Privacy Policy
                  </span>
                </p>

                <div className="pt-2 w-[50%] flex items-center justify-end">
                  <button
                    type="submit"
                    className="rounded-full cursor-pointer bg-[#0D8035] px-8 py-3 text-sm font-medium text-white transition hover:bg-green-800"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
