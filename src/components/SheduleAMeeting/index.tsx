"use client"

import React, { useEffect } from "react"
import { usePathname } from "next/navigation"
import Cal, { getCalApi } from "@calcom/embed-react"

const SheduleAMeeting = (): React.JSX.Element => {
  const pathname = usePathname()
  const lastSlug = pathname.split("/").filter(Boolean).pop() || "website"

  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal("ui", {
        theme: "light",
      })
    })()
  }, [])

  return (
    <div className="fixed bottom-0 z-[99] flex w-full justify-center bg-white px-[60px] py-2 md:hidden">
      <>
        <Cal
          calLink="nidhimoonstack"
          style={{ width: "0px", height: "0px", overflow: "hidden" }}
        />

        <button
          onClick={async () => {
            const cal = await getCalApi()
            cal("modal", {
              calLink: "nidhimoonstack",
            })
          }}
          className="bg-primary-300 w-[258px] rounded-lg p-3 text-center text-sm font-semibold text-white"
        >
          Schedule a Call
        </button>
      </>
    </div>
  )
}

export default SheduleAMeeting
