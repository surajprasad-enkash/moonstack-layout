"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed right-0 bottom-0 left-0 z-50 flex flex-col items-center justify-between gap-4 bg-gray-900 bg-white p-6 shadow-2xl md:flex-row md:px-12 lg:px-20"
        >
          <div className="flex-1 text-center md:text-left">
            <h3 className="mb-2 text-lg font-bold text-black">
              We value your privacy
            </h3>
            <p className="text-sm text-gray-300">
              We use cookies to enhance your browsing experience, serve
              personalized ads or content, and analyze our traffic. By clicking
              "Accept All", you consent to our use of cookies.{" "}
              <Link
                href="/cookies"
                className="text-white underline hover:text-gray-200"
              >
                Read our Cookie Policy
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-3 font-medium sm:flex-row">
            <button
              onClick={handleDecline}
              className="rounded-full cursor-pointer border border-gray-600 px-6 py-2.5 text-sm text-gray-300 transition hover:bg-black hover:text-white"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="rounded-full cursor-pointer bg-black px-6 py-2.5 text-sm text-white transition hover:bg-white hover:text-black"
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsent
