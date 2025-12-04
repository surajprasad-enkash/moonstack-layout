"use client";

import { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

export default function ContactForm() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="mx-auto w-full max-w-xl rounded-xl border border-[#03361D] bg-[#021A0E] p-8 text-white shadow-xl">
      <h2 className="mb-6 text-2xl font-semibold">Let’s Connect With Us</h2>

      {/* Name */}
      <input
        type="text"
        placeholder="Enter your name"
        className="border-primary bg-primary-100 mb-4 w-full rounded-md border p-3 outline-none placeholder:text-gray-400 focus:border-green-400"
      />

      {/* Phone + Email */}
      <div className="mb-4 flex gap-4">
        {/* Phone */}
        <div className="border-primary bg-primary-100 flex w-full items-center gap-2 rounded-md border p-3">
          <span>🇮🇳</span>
          <span className="text-gray-400">(+91)</span>
          <input
            type="text"
            placeholder="000-000-0000"
            className="bg-primary-100 w-full outline-none placeholder:text-gray-400"
          />
        </div>

        {/* Email */}
        <div className="border-primary bg-primary-100 flex w-full items-center gap-2 rounded-md border p-3">
          <input
            type="email"
            placeholder="example1234@gmail.com"
            className="bg-primary-100 w-full outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Project Title */}
      <input
        type="text"
        placeholder="Enter project title"
        className="border-primary bg-primary-100 mb-4 w-full rounded-md border p-3 outline-none placeholder:text-gray-400 focus:border-green-400"
      />

      {/* Upload File */}
      <label className="border-primary mb-4 flex h-28 w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed transition hover:bg-[#03361D]/40">
        <FaUpload className="mb-2 text-green-500" />
        <span className="text-gray-400">Upload your file</span>
        <input type="file" className="hidden" />
      </label>

      {/* Message */}
      <textarea
        placeholder="Enter your message"
        className="border-primary bg-primary-100 mb-4 h-24 w-full rounded-md border p-3 outline-none placeholder:text-gray-400 focus:border-green-400"
      />

      {/* Checkbox */}
      <label className="mb-6 flex cursor-pointer items-center gap-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="accent-primary h-4 w-4 cursor-pointer"
        />
        <span className="text-sm text-gray-300">
          I want to receive news and updates once in a while
        </span>
      </label>

      {/* Submit Button */}
      <button className="bg-primary w-full rounded-md py-3 font-semibold text-black transition hover:opacity-90">
        Send Now
      </button>
    </div>
  );
}
