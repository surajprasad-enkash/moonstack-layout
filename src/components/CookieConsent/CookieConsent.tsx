"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 z-[999] mx-auto w-full max-w-4xl rounded-2xl bg-white p-6 shadow-2xl md:bottom-8 md:p-8"
        >
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-black"
          >
            ✕
          </button>

          {/* Content */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Text */}
            <div className="text-sm leading-relaxed text-gray-700 md:w-3/4">
              <p>
                This website stores cookies on your computer. These cookies
                are used to collect information about how you interact with
                our website and allow us to remember you. We use this
                information in order to improve and customize your browsing
                experience and for analytics and metrics about our visitors
                both on this website and other media. To find out more about
                the cookies we use, see our{" "}
                <Link href="/cookies" className="text-orange-500 underline">
                  Privacy Policy
                </Link>
                .
              </p>
              <p className="mt-2">
                If you decline, your information won’t be tracked when you
                visit this website. A single cookie will be used in your
                browser to remember your preference not to be tracked.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex shrink-0 items-center gap-4">
              <button
                onClick={handleAccept}
                className="cursor-pointer rounded-full bg-black px-6 py-2 text-white transition hover:bg-gray-800"
              >
                Accept
              </button>

              <button
                onClick={handleDecline}
                className="cursor-pointer rounded-full border border-gray-400 px-6 py-2 text-gray-700 transition hover:bg-gray-50"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsent
