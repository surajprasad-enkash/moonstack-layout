"use client"

import React, { useState, useEffect } from "react"
import CustomButton from "../CommanButton/CommanButton"
import Marquee from "@/components/Homepage/Marquee"
import { submitFormAction } from "@/helper"

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [loading, setLoading] = useState(false)

  const [phone, setPhone] = useState("")
  const [error, setError] = useState<string | null>(null)

  /* ---------------- SHOW AFTER DELAY ---------------- */
  useEffect(() => {
    const isShownBefore = localStorage.getItem("leadPopupShown")
    if (!isShownBefore && !hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        setHasShown(true)
        localStorage.setItem("leadPopupShown", "true")
      }, 8000)

      return () => clearTimeout(timer)
    }
  }, [hasShown])

  if (!isOpen) return null

  const handleClose = () => {
    setIsOpen(false)
  }

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    // Basic validation
    const name = formData.get("fullname") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string

    if (!name || !email || !phone) {
      setError("Please fill all required fields")
      setLoading(false)
      return
    }

    try {
      const result = await submitFormAction(formData, "lead_popup")

      if (result.success) {
        form.reset()
        setPhone("")
        setIsOpen(false)
      } else {
        setError(result.message || "Something went wrong")
      }
    } catch (err) {
      setError("Server error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  /* ---------------- ICON ---------------- */
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
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 p-4"
      onClick={handleClose}
    >
      <div
        className="relative flex max-h-[95vh] w-[1050px] max-w-[90vw] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#FF0000] text-white hover:bg-red-600"
        >
          ✕
        </button>

        {/* HEADER */}
        <div className="px-8 pt-8 pb-4 text-center">
          <h3 className="text-3xl font-bold text-[#1a1a1a]">
            Wait! Before You Press <span className="text-[#FF0000]">X</span>,
          </h3>
          <h3 className="mt-1 text-2xl font-semibold text-[#1a1a1a]">
            See What You Could Gain!
          </h3>
        </div>

        <div className="flex flex-col gap-8 p-6 pt-2 md:flex-row">
          {/* LEFT SIDE */}
          <div className="hidden w-full flex-col justify-between rounded-2xl bg-[#F8FAFC] p-6 md:flex md:w-[45%]">
            <div className="space-y-6">
              {[
                {
                  title: "Free Exact Time & Cost Estimation",
                  desc: "Get a precise estimation for your project with clarity.",
                },
                {
                  title: "AI-Driven Revenue Boost",
                  desc: "Discover how AI can scale your business.",
                },
                {
                  title: "Avoid Common Pitfalls",
                  desc: "Learn why most ideas fail and how to succeed.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <ArrowIcon />
                  <div>
                    <h5 className="font-bold text-gray-900">{item.title}</h5>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-2xl bg-black">
              <Marquee />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="flex w-full flex-col px-2 md:w-[55%]">
            <p className="mb-4 text-xs font-medium text-red-500">
              * Mandatory Field
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 text-sm"
            >
              {/* HIDDEN */}
              <input type="hidden" name="form_name" value="lead_popup" />

              {/* NAME */}
              <div className="border-b border-gray-200">
                <input
                  name="fullname"
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent py-2 outline-none"
                />
              </div>

              {/* EMAIL */}
              <div className="border-b border-gray-200">
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent py-2 outline-none"
                />
              </div>

              {/* PHONE */}
              <div className="flex border-b border-gray-200 py-1">
                <select
                  name="country_code"
                  defaultValue="+91"
                  className="w-[80px] border-r bg-transparent outline-none"
                >
                  <option value="+91">+91</option>
                </select>

                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-transparent pl-3 outline-none"
                />
              </div>

              {/* BUDGET */}
              <div className="border-b border-gray-200">
                <select
                  name="budget"
                  defaultValue=""
                  className="w-full bg-transparent py-2 outline-none"
                >
                  <option value="" disabled>
                    Budget
                  </option>
                  <option value="Under $10k">Under $10k</option>
                  <option value="$10k - $25k">$10k - $25k</option>
                  <option value="$25k - $50k">$25k - $50k</option>
                  <option value="$50k+">$50k+</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div className="border-b border-gray-200">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={2}
                  className="w-full resize-none bg-transparent py-2 outline-none"
                />
              </div>

              {/* ERROR */}
              {error && <p className="text-sm text-red-500">{error}</p>}

              {/* BUTTON */}
              <CustomButton
                text={loading ? "Submitting..." : "Submit"}
                className="px-8 py-3"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
