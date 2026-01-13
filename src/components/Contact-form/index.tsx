"use client";

import Image from "next/image";
import { useState } from "react";
import { FiArrowUpRight, FiPaperclip } from "react-icons/fi";
import gmail from "@/assets/contact-us/gmail-icon.webp";
import Heading from "../Heading/Heading";

export default function ContactForm() {
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <div className="w-full max-w-5xl rounded-tr-[24px] rounded-br-[24px] bg-white p-10 text-black shadow-xl">
      {/* Heading */}
      <h2 className="text-4xl font-semibold text-black">
        Tell us about your project
      </h2>

      {/* Autofill */}
      <div className="mt-6 flex items-center gap-3 text-sm text-black text-gray-500">
        <span>Autofill form via</span>
        <div className="group flex h-8 w-8 items-center justify-center rounded-full border">
          <a
            href="https://accounts.google.com/v3/signin/accountchooser?client_id=319256332685-0c7kt4a953cb3v73p5cpru3rtnscfj15.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Farounda.agency%2Fcontact&response_type=token&scope=openid+email+profile&state=google%3Aclwkqrofvag&dsh=S-1224229011%3A1766408222280724&o2v=2&service=lso&flowName=GeneralOAuthFlow&opparams=%253F&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAMevlNqSkQCcdrMAWGShVkUhcfOb40qQ4hzffsXschbvVaEl-3vLmJwN5EjFy0BZOO-37hc0TKYsqwTEW-WXKqcU4s_2AhRvmCdXcml0y9RamWS04zmbkcM8i7JcpHsS1Fbz8kFZFHbvO5HDfkTgU-jksv7s1DeaSseX4a4Pd-twTEWIHFNTKxkUwk92KePChGElKpX5-pN8iZf5LFhYFiSuvBf8pBKIBLlzBdMdBhGjI1Seqx5VF5pLYfuiyNztOqfGliopjksvFRr3PhQMwa9qEt2ISBIGneIm6ar7wif0PoOz--a69AGF_rNrlM-FD2mRVW9hCD9W0K_RhJ9caC74vNEc6pXxuKvAxBzJxQUFbSSp_C9YUvN77FlHJDCMS7oKdujR21k6DB98tzuHa3x1gqd6HGm3964G1VRJXgky2c99yzrTdcQhoe7RKkcTL4SsB3fowWrn4CXZ3i-oY5qP9Xr2A%26flowName%3DGeneralOAuthFlow%26as%3DS-1224229011%253A1766408222280724%26client_id%3D319256332685-0c7kt4a953cb3v73p5cpru3rtnscfj15.apps.googleusercontent.com%26requestPath%3D%252Fsignin%252Foauth%252Fconsent%23&app_domain=https%3A%2F%2Farounda.agency"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={gmail}
              alt="gmail"
              height={40}
              width={40}
              className="cursor-pointer grayscale transition-all duration-300 group-hover:grayscale-0"
            />
          </a>
        </div>
      </div>

      {/* Form */}
      <form className="mt-10 space-y-10">
        {/* Name + Email */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-black">Full name*</label>
            <input
              type="text"
              required
              className="mt-2 w-full border-b border-gray-300 py-2 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-black">
              Corporate email*
            </label>
            <input
              type="email"
              required
              className="mt-2 w-full border-b border-gray-300 py-2 outline-none focus:border-black"
            />
          </div>
        </div>

        {/* About project */}
        <div>
          <label className="text-sm font-medium text-black">
            About project*
          </label>
          <textarea
            required
            rows={2}
            className="mt-2 w-full resize-none border-b border-gray-300 py-2 outline-none focus:border-black"
          />
        </div>

        {/* Footer */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          {/* Upload */}
          <label className="flex h-24 w-52 cursor-pointer items-center gap-4 px-5 py-3 text-sm text-gray-600">
            <span className="relative flex h-12 w-16 items-center justify-center rounded-full bg-[#c3c3c3] text-white transition-all duration-300 ease-out group-hover:bg-[#D0F601] group-hover:text-black">
              <FiPaperclip size={18} />
            </span>
            <span className="-ml-3 flex h-12 items-center rounded-full bg-[#c3c3c3] px-6 font-medium text-white transition-all duration-300 ease-out group-hover:bg-[#D0F601] group-hover:text-black">
              {fileName ?? "*.doc, .pdf"}
              <input
                type="file"
                accept=".doc,.pdf"
                className="hidden"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
              />
            </span>
          </label>

          {/* Policy + Submit */}
          <div className="flex items-center gap-6">
            <Heading
              headingTag="p"
              className="font-12 text-start"
              content={[
                {
                  text: "By submitting this form you agree to our Cookie Policy Privacy Policy",
                  color: "text-black",
                },
              ]}
            />

            <button className="group flex cursor-pointer items-center gap-4">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-all duration-300 ease-out group-hover:bg-[#D0F601] group-hover:text-black">
                <FiArrowUpRight
                  className="inline-block translate-x-[3px] translate-y-[3px] rotate-45 transform transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:-translate-y-[6px] group-hover:rotate-0"
                  size={18}
                />
              </span>

              <span className="-ml-3 flex h-12 items-center rounded-full bg-black px-6 font-medium text-white transition-all duration-300 ease-out group-hover:bg-[#D0F601] group-hover:text-black">
                Submit
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
