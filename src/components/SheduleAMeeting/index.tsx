"use client"

import React from "react"
import { getCalApi } from "@calcom/embed-react"

const SheduleAMeeting = (): React.JSX.Element => {
  const handleClick = async () => {
    const cal = await getCalApi()

    cal("ui", {
      theme: "light",
    })

    cal("modal", {
      calLink: "moonstack",
    })
  }

  return (
    <div className="fixed bottom-0 z-[99] flex w-full justify-center bg-white px-[20px] py-2 md:hidden">
      <button
        onClick={handleClick}
        className="bg-primary-300 w-full rounded-lg p-3 text-center text-sm font-semibold text-white"
      >
        Schedule a Call
      </button>
    </div>
  )
}

export default SheduleAMeeting
