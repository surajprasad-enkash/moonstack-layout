"use client"

import { useState } from "react"
import { FiPaperclip } from "react-icons/fi"
import Link from "next/link"
import CustomButton from "../CommanButton/CommanButton"
import { submitFormAction } from "@/helper"

interface FormProps {
  formName: string
}

interface Errors {
  fullname?: string
  email?: string
  phone?: string
  message?: string
  attachment?: string
}
interface FormProps {
  formName: string
  onSuccess?: () => void
}

export default function Form({ formName, onSuccess }: FormProps) {
  const [fileName, setFileName] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [errors, setErrors] = useState<Errors>({})

  /* ---------------- VALIDATION ---------------- */
  const validateForm = (formData: FormData) => {
    const newErrors: Errors = {}

    const fname = formData.get("fullname") as string
    const email = formData.get("email") as string
    const msg = formData.get("message") as string
    const phone = (formData.get("phone") as string)?.trim()
    const file = formData.get("attachment") as File

    if (!fname) newErrors.fullname = "First name is required"

    if (!email) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Enter a valid email address"
    }

  
    if (!phone) {
      newErrors.phone = "Phone is required"
    } else if (!/^\+?\d{6,15}$/.test(phone)) {
      newErrors.phone = "Enter valid phone number"
    }

    if (!msg) newErrors.message = "Project description is required"

    if (file && file.size > 5 * 1024 * 1024) {
      newErrors.attachment = "File size must be under 5MB"
    }

    return newErrors
  }

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setLoading(true)

    const result = await submitFormAction(formData, formName)

    if (result.success) {
      setMessage(result.message)
      form.reset()
      setFileName(null)

      // ✅ CLOSE MODAL
      if (onSuccess) {
        setTimeout(() => {
          onSuccess()
        }, 1000) // optional delay
      }
    } else {
      setMessage(result.message)
    }

    setLoading(false)
  }

  return (
    <form
      className="formDesign space-y-[30px]"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      {/* HIDDEN FIELD */}
      <input type="hidden" name="form_name" value={formName} />

      {/* GLOBAL MESSAGE */}
      {message && <p className="text-primary-300 text-sm">{message}</p>}

      <div className="formRow gap-[20px] md:flex">
        <div className="formGroup w-[100%] md:w-[50%]">
          <input
            name="fullname"
            id="fullname"
            type="text"
            placeholder=""
            className="peer w-full border-b border-[#cecece] py-3 text-sm text-[#000] focus:!border-[#004619] focus:outline-none"
            autoComplete="name"
            onChange={() => setErrors((e) => ({ ...e, fullname: undefined }))}
          />
          <label
            htmlFor="fullname"
            className="absolute top-3 left-0 cursor-text text-sm font-[500] text-[#000] transition-all peer-not-placeholder-shown:-top-[10px] peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:text-xs peer-focus:-top-[10px] peer-focus:bg-white peer-focus:text-xs"
          >
            Full Name<span className="text-[red]">*</span>
          </label>
          {errors.fullname && (
            <p className="absolute bottom-[-18px] !text-[12px] text-[red]">
              {errors.fullname}
            </p>
          )}
        </div>

        <div className="formGroup w-[100%] md:w-[50%]">
          <input
            name="email"
            type="email"
            id="email"
            placeholder=""
            className="peer w-full border-b border-[#cecece] py-3 text-sm text-[#000] focus:!border-[#004619] focus:outline-none"
            autoComplete="email"
            onChange={() => setErrors((e) => ({ ...e, email: undefined }))}
          />
          <label
            htmlFor="email"
            className="absolute top-3 left-0 cursor-text text-sm font-[500] text-[#000] transition-all peer-not-placeholder-shown:-top-[10px] peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:text-xs peer-focus:-top-[10px] peer-focus:bg-white peer-focus:text-xs"
          >
            Email Address<span className="text-[red]">*</span>
          </label>
          {errors.email && (
            <p className="absolute bottom-[-18px] !text-[12px] text-[red]">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="formRow">
        <div className="formGroup mb-[20px] w-[100%]">
          <input
            name="phone"
            type="tel"
            id="phone"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={15}
            placeholder=""
            className="peer w-full border-b border-[#cecece] py-3 text-sm text-[#000] focus:!border-[#004619] focus:outline-none"
            autoComplete="tel"
            onChange={(e) => {
              e.target.value = e.target.value.replace(/[^\d+]/g, "")
              setErrors((err) => ({ ...err, phone: undefined }))
            }}
          />
          <label
            htmlFor="phone"
            className="absolute top-3 left-0 cursor-text text-sm font-[500] text-[#000] transition-all peer-not-placeholder-shown:-top-[10px] peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:text-xs peer-focus:-top-[10px] peer-focus:bg-white peer-focus:text-xs"
          >
            Phone Number<span className="text-[red]">*</span>
          </label>
          {errors.phone && (
            <p className="absolute bottom-[-18px] !text-[12px] text-[red]">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="formRow">
        <div className="formGroup w-[100%]">
          <textarea
            name="message"
            rows={4}
            id="message"
            placeholder=""
            className="peer w-full resize-none border-b border-[#cecece] py-3 text-sm text-[#000] focus:!border-[#004619] focus:outline-none"
            onChange={() => setErrors((e) => ({ ...e, message: undefined }))}
          />
          <label
            htmlFor="message"
            className="absolute top-3 left-0 cursor-text text-sm font-[500] text-[#000] transition-all peer-not-placeholder-shown:-top-[10px] peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:text-xs peer-focus:-top-[10px] peer-focus:bg-white peer-focus:text-xs"
          >
            About Your Project<span className="text-[red]">*</span>
          </label>
          {errors.message && (
            <p className="bottom-[-18px] !text-[12px] text-[red]">
              {errors.message}
            </p>
          )}
        </div>
        <p className="!text-[12px] text-[#8f8f8f]">
          Briefly describe your requirements, goals, and timeline.
          <br />
          Example: Website redesign, mobile app development, AI integration,
          etc.
        </p>
      </div>

      {/* FILE */}
      <div className="flex items-center gap-3">
        <label className="flex cursor-pointer items-center text-sm text-[#000]">
          <span className="popupFileIcon">
            <FiPaperclip size={16} />
          </span>
          <span className="popupFileText">Attach file</span>
          <input
            hidden
            type="file"
            name="attachment"
            accept=".doc,.pdf,.csv,.xml,.svg,.jpg,.png,.jpeg"
            onChange={(e) => {
              setFileName(e.target.files?.[0]?.name || null)
              setErrors((err) => ({ ...err, attachment: undefined }))
            }}
          />
        </label>

        {fileName && <span className="text-xs text-[#000]">{fileName}</span>}
      </div>

      {errors.attachment && (
        <p className="!text-[12px] text-[red]">{errors.attachment}</p>
      )}

      <div className="gap-[20px] md:flex">
        <p className="form_privacy_policy_links max-w-[300px] text-xs text-[#747474] md:w-[50%]">
          By submitting this form you agree to our{" "}
          <Link href="/cookies">
            <span className="cursor-pointer font-medium text-[#000]">
              Cookie Policy
            </span>
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy">
            <span className="cursor-pointer font-medium text-[#000]">
              Privacy Policy
            </span>
          </Link>
        </p>

        <div className="mt-[20px] flex items-center justify-center pt-2 md:mt-[0] md:w-[50%] md:justify-end">
          <CustomButton
            text={loading ? "Submitting..." : "Submit"}
            hoverBg="group-hover:bg-black"
            hoverText="group-hover:text-white"
            className="px-8 py-3 tracking-[0.8px] whitespace-nowrap"
          />
        </div>
      </div>
    </form>
  )
}
