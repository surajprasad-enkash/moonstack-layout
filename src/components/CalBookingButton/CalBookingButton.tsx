"use client"

import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"
import CustomButton from "../CommanButton/CommanButton"

export default function CalBookingButton() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal("ui", {
        theme: "light",
      })
    })()
  }, [])

  return (
    <>
      <Cal
        calLink="nidhimoonstack"
        style={{ width: "0px", height: "0px", overflow: "hidden" }}
      />

      <CustomButton
        text="Book a Call"
        onClick={async () => {
          const cal = await getCalApi()
          cal("modal", {
            calLink: "nidhimoonstack",
          })
        }}
        className=""
      />
    </>
  )
}
