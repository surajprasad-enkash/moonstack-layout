"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi"

import checkIcon from "@/assets/contact-us/check icon.svg"
import logo from "@/assets/logo-white.webp"
import copyIcon from "@/assets/copyIcon.svg"

interface ContactInfoCardProps {
  className?: string
}

export default function ContactInfoCard({ className }: ContactInfoCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const email = "mail@moonstack.co"

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(email)
    } else {
      const textarea = document.createElement("textarea")
      textarea.value = email
      textarea.style.position = "fixed"
      textarea.style.opacity = "0"
      document.body.appendChild(textarea)
      textarea.focus()
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
    }

    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
            className="h-auto w-[280px]"
          />
        </div>

        {/* Features */}
        <ul className="mt-[50px] space-y-[25px] text-sm">
          <li className="flex items-center gap-2">
            <Image src={checkIcon} alt="" />
            <span className="text-[16px]">
              We will respond to you within 12 hours
            </span>
          </li>

          <li className="flex items-center gap-2">
            <Image src={checkIcon} alt="" />
            <span className="text-[16px]">We’ll sign an NDA if requested</span>
          </li>

          <li className="flex items-center gap-2">
            <Image src={checkIcon} alt="" />
            <span className="text-[16px]">
              Access to dedicated product specialists
            </span>
          </li>
        </ul>
      </div>

      {/* ---------------- BOTTOM ---------------- */}
      <div className="mt-10 space-y-4 text-sm">
        {/* Email */}
        <Link
          href="mailto:mail@moonstack.co"
          className="relative flex items-center justify-between rounded-lg bg-[#0b522b] p-3"
        >
          <span className="flex items-center gap-3 text-white">
            <HiOutlineMail size={18} />
            mail@moonstack.co
          </span>

          <button
            type="button"
            onClick={handleCopy}
            className="flex flex-col items-center text-xs text-white"
            aria-label="Copy email"
          >
            <Image
              src={copyIcon}
              alt="Copy email"
              width={18}
              height={18}
              className="cursor-pointer invert filter"
            />
            <span className="absolute top-[-22px] mt-1">
              {copied ? "Copied" : ""}
            </span>
          </button>
        </Link>

        {/* Phone */}
        <Link
          href="tel:9772009900"
          className="flex items-center gap-3 rounded-lg bg-[#0b522b] p-3 text-white"
        >
          <HiOutlinePhone size={18} />
          Book a call
        </Link>
      </div>
    </div>
  )
}
