"use client";

import { useState } from "react";
import { FiPaperclip } from "react-icons/fi";
import Link from "next/link";
import CustomButton from "../CommanButton/CommanButton";

interface FormProps {
  formName: string;
  apiUrl?: string;
  apiKey?: string;
}

export default function Form({
  formName,
  apiUrl = "https://moonstack.co/wp-json/moonstack/v1/submit-form",
  apiKey = "a9f3c8d4e21b7a0c9f0a1e3d8b7c6f7hyx67",
}: FormProps) {
  const [fileName, setFileName] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // ✅ dynamic form name
    formData.set("form_name", formName);

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "X-API-KEY": apiKey,
        },
        body: formData,
      });

      const data = await res.json();

      if (data?.status === "success") {
        setMessage("Your inquiry has been submitted successfully.");
        form.reset();
        setFileName(null);
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (err) {
      setMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="formDesign space-y-[30px]"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      {/* HIDDEN FIELD */}
      <input type="hidden" name="form_name" value={formName} />

      {/* MESSAGE */}
      {message && <p className="text-sm text-green-700">{message}</p>}
      <div className="formRow gap-[20px] md:flex">
        <div className="formGroup w-[100%] md:w-[50%]">
          <input
            name="fname"
            id="fname"
            type="text"
            placeholder=""
            className="peer w-full  border-b border-[#cecece] py-3 text-sm text-[#000] focus:outline-none focus:!border-[#004619] "
            required
             autoComplete="name"
          />
          <label htmlFor="fname" className="absolute cursor-text top-3 left-0 text-sm text-[#000] transition-all peer-not-placeholder-shown:-top-[10px] peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-0 peer-not-placeholder-shown:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-[10px] peer-focus:bg-white peer-focus:px-0 peer-focus:text-xs font-[500]">
            Frist Name<span className="text-[red]">*</span>
          </label>
        </div>
       <div className="formGroup w-[100%] md:w-[50%]">
          
          <input
            name="email"
            type="email"
            id="email"
            placeholder=""
            className="peer w-full border-[#cecece] border-b py-3 text-sm text-[#000] focus:outline-none focus:!border-[#004619]"
            required
            autoComplete="email"
          />
            <label htmlFor="email" className="absolute cursor-text top-3 left-0 text-sm text-[#000] transition-all peer-not-placeholder-shown:-top-[10px] peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-0 peer-not-placeholder-shown:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-[10px] peer-focus:bg-white peer-focus:px-0 peer-focus:text-xs font-[500]">
            Email Address<span className="text-[red]">*</span>
          </label>
        </div>
      </div>
    
      <div className="formRow">
        <div className="formGroup w-[100%]">
        
          <textarea
            name="message"
            rows={4}
            id="message"
            placeholder=""
            required
            className="resize-none border-[#cecece] peer w-full  border-b py-3 text-sm text-[#000] focus:outline-none focus:!border-[#004619]"
          />
            <label htmlFor="message" className="absolute cursor-text top-3 left-0 text-sm text-[#000] transition-all peer-not-placeholder-shown:-top-[10px] peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-0 peer-not-placeholder-shown:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-[10px] peer-focus:bg-white peer-focus:px-0 peer-focus:text-xs font-[500]">
            About project<span className="text-[red]">*</span>
          </label>
        </div>
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
            onChange={(e) => setFileName(e.target.files?.[0]?.name || null)}
          />
        </label>

        {fileName && <span className="text-xs text-[#000]">{fileName}</span>}
      </div>

      <div className="flex gap-[20px]">
        <p className="form_privacy_policy_links w-[50%] max-w-[300px] text-xs text-[#747474]">
          By submitting this form you agree to our{" "}
          <Link href="#">
            <span className="cursor-pointer font-medium text-[#000]">
              Cookie Policy
            </span>
          </Link>{" "}
          and{" "}
          <Link href="#">
            <span className="cursor-pointer font-medium text-[#000]">
              Privacy Policy
            </span>
          </Link>
        </p>

        <div className="flex w-[50%] items-center justify-end pt-2">
          <CustomButton
            text={loading ? "Submitting..." : "Submit"}
            className="px-8 py-3 tracking-[0.8px] whitespace-nowrap"
          />
        </div>
      </div>
    </form>
  );
}
