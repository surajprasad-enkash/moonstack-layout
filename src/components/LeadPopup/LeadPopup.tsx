"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"

import CustomButton from "../CommanButton/CommanButton"

import clutch from "@/assets/newHomePage/awards/clutch.svg"
import dribbble from "@/assets/newHomePage/awards/dribbble.svg"
import goodfirms from "@/assets/newHomePage/awards/good-firms.svg"
import upwork from "@/assets/newHomePage/awards/upwork.svg"
import TrustBadges from "@/components/NewHomePage/TrustBadges"
import { badges } from "@/constants/home"
import Marquee from "@/components/Homepage/Marquee"

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [loading, setLoading] = useState(false)

  const [phone, setPhone] = useState<string>("")
  const [error, setError] = useState<string>("")

  useEffect(() => {
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        setHasShown(true)
      }, 8000)

      return () => clearTimeout(timer)
    }
  }, [hasShown])

  if (!isOpen) return null

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")

    const form = e.currentTarget
    if (!form.checkValidity()) {
      setError("Please fill out all mandatory fields correctly.")
      return
    }

    try {
      setLoading(true)
      // Simulate API call or add real submit logic here
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // On success, close popup
      setIsOpen(false)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const ArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="fill-primary-yellow text-black"
    >
      <circle cx="12" cy="12" r="10" stroke="none" />
      <path d="M12 16l4-4-4-4" stroke="black" />
      <path d="M8 12h8" stroke="black" />
    </svg>
  )

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 p-4 transition-opacity duration-300"
      onClick={handleClose}
    >
      <div
        className="animate-in fade-in zoom-in-95 relative flex max-h-[95vh] w-[1050px] max-w-[80vw] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#FF0000] text-white transition-colors hover:bg-red-600"
          aria-label="Close"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="px-8 pt-8 pb-4 text-center">
          <h3 className="text-3xl !font-bold text-[#1a1a1a]">
            Wait! Before You Press <span className="text-[ #FF0000]">X</span>,
          </h3>
          <h3 className="mt-1 text-2xl font-semibold text-[#1a1a1a]">
            See What You Could Gain!
          </h3>
        </div>

        <div className="flex flex-col gap-8 p-6 pt-2 md:flex-row">
          <div className="hidden w-full flex-col justify-between rounded-2xl bg-[#F8FAFC] p-6 md:flex md:w-[45%]">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <ArrowIcon />
                </div>
                <div>
                  <h5 className="mb-1 font-bold text-gray-900">
                    Free Exact Time & Cost Estimation
                  </h5>
                  <p className="text-sm leading-relaxed text-gray-500">
                    Get a precise estimation for the time and cost of your
                    project idea. No surprises, just clarity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <ArrowIcon />
                </div>
                <div>
                  <h5 className="mb-1 font-bold text-gray-900">
                    AI-Driven Revenue Boost
                  </h5>
                  <p className="text-sm leading-relaxed text-gray-500">
                    Discover how AI implementation can 10X your business
                    revenue. Learn the secrets to scalable success!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <ArrowIcon />
                </div>
                <div>
                  <h5 className="mb-1 font-bold text-gray-900">
                    Avoid Common Pitfalls
                  </h5>
                  <p className="text-sm leading-relaxed text-gray-500">
                    Find out why 90% of business ideas fail after launch and how
                    you can be among the successful 10%.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2.5 rounded-2xl bg-black">
              {" "}
              <Marquee />
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="flex w-full flex-col px-2 md:w-[55%]">
            <p className="mb-4 text-xs font-medium text-red-500">
              * Mandatory Field
            </p>

            <form
              className="flex flex-col gap-4 text-sm"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="border-b border-gray-200">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent py-2 text-gray-800 placeholder-gray-400 outline-none"
                  required
                />
              </div>

              <div className="border-b border-gray-200">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent py-2 text-gray-800 placeholder-gray-400 outline-none"
                  required
                />
              </div>

              <div className="flex border-b border-gray-200 py-1">
                <select
                  defaultValue="+91"
                  className="w-[80px] cursor-pointer border-r border-gray-200 bg-transparent py-1 pr-1 text-gray-800 outline-none"
                >
                  <option value="+91">+91 (IN)</option>

                </select>
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone || ""}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-transparent py-1 pl-3 text-gray-800 placeholder-gray-400 outline-none"
                  required
                />
              </div>

              <div className="border-b border-gray-200">
                <select
                  defaultValue=""
                  className="w-full cursor-pointer appearance-none bg-transparent py-2 text-gray-800 outline-none"
                >
                  <option value="" disabled className="text-gray-400">
                    Budget
                  </option>
                  <option value="Under $10k">Under $10k</option>
                  <option value="$10k - $25k">$10k - $25k</option>
                  <option value="$25k - $50k">$25k - $50k</option>
                  <option value="$50k+">$50k+</option>
                </select>
              </div>

              <div className="border-b border-gray-200">
                <textarea
                  placeholder="Message"
                  rows={2}
                  className="w-full resize-none bg-transparent py-2 text-gray-800 placeholder-gray-400 outline-none"
                ></textarea>
              </div>

              {error && <p className="text-sm font-medium text-red-500">{error}</p>}

              <CustomButton
                text={loading ? "Submitting..." : "Submit"}
                className="px-8 py-3 tracking-[0.8px] whitespace-nowrap"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
