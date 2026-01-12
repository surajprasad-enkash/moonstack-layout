"use client";

import { useState } from "react";
import { FaUpload } from "react-icons/fa";

export default function CareerForm() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="mx-auto w-3/4 max-w-xl rounded-2xl border border-[#03361D] bg-[#021A0E] p-8 text-white shadow-xl">
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

      {/* Year of Exp */}
      <input
        type="number"
        placeholder="Year of Exp"
        className="border-primary bg-primary-100 mb-4 w-full rounded-md border p-3 outline-none placeholder:text-gray-400 focus:border-green-400"
      />

      {/* Profile Dropdown */}
      <div className="relative mb-4">
        <select className="border-primary bg-primary-100 w-full appearance-none rounded-md border p-3 pr-10 text-gray-300 outline-none focus:border-green-400">
          <option value="">Select Profile</option>
          <option value="hr">HR</option>
          <option value="sales">Sales</option>
          <option value="digital-marketing">Digital Marketing</option>
          <option value="react-js">React JS</option>
          <option value="react-native">React Native</option>
          <option value="flutter">Flutter</option>
          <option value="angular-js">Angular JS</option>
          <option value="php">PHP</option>
          <option value="node-js">Node JS</option>
          <option value="java">Java</option>
        </select>

        <span className="pointer-events-none absolute top-1/2 right-6 -translate-y-1/2 text-gray-400">
          ▼
        </span>
      </div>

      {/* Upload File */}
      <label className="border-primary mb-4 flex h-28 w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed transition hover:bg-[#03361D]/40">
        <FaUpload className="mb-2 text-green-500" />
        <span className="text-gray-400">Upload your resume</span>
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
