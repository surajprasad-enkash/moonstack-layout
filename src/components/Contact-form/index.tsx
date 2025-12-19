"use client";

import { useState } from "react";
import { FiArrowUpRight, FiPaperclip } from "react-icons/fi";

export default function ContactForm() {
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <div className="w-full max-w-5xl rounded-tr-[24px] rounded-br-[24px] bg-white p-10 text-black shadow-xl">
      {/* Heading */}
      <h2 className="text-4xl font-semibold text-black">
        Tell us about your project
      </h2>

      {/* Autofill */}
      <div className="mt-6 flex items-center gap-3 text-sm text-black text-gray-500">
        <span>Autofill form via</span>
        <div className="flex h-8 w-8 items-center justify-center rounded-full border">
          M
        </div>
      </div>

      {/* Form */}
      <form className="mt-10 space-y-10">
        {/* Name + Email */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-black">Full name*</label>
            <input
              type="text"
              required
              className="mt-2 w-full border-b border-gray-300 py-2 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-black">
              Corporate email*
            </label>
            <input
              type="email"
              required
              className="mt-2 w-full border-b border-gray-300 py-2 outline-none focus:border-black"
            />
          </div>
        </div>

        {/* About project */}
        <div>
          <label className="text-sm font-medium text-black">
            About project*
          </label>
          <textarea
            required
            rows={2}
            className="mt-2 w-full resize-none border-b border-gray-300 py-2 outline-none focus:border-black"
          />
        </div>

        {/* Footer */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          {/* Upload */}
          <label className="flex cursor-pointer items-center gap-3 rounded-full bg-gray-100 px-5 py-3 text-sm text-gray-600">
            <FiPaperclip />
            {fileName ?? "*.doc, .pdf"}
            <input
              type="file"
              accept=".doc,.pdf"
              className="hidden"
              onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
            />
          </label>

          {/* Policy + Submit */}
          <div className="flex items-center gap-6">
            <p className="max-w-xs text-xs text-gray-500">
              By submitting this form you agree to our{" "}
              <span className="underline">Cookie Policy</span> and{" "}
              <span className="underline">Privacy Policy</span>
            </p>

            <button
              type="submit"
              className="flex items-center gap-4 rounded-full bg-lime-400 px-8 py-4 text-black transition hover:bg-lime-300"
            >
              <FiArrowUpRight className="text-xl" />
              <span className="font-medium">Submit</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
