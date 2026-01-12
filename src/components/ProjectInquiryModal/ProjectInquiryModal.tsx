"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Form from "../Form/Form";
import ContactInfoCard from "./ContactInfoCard";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectInquiryModal({ isOpen, onClose }: Props) {
  const [fileName, setFileName] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        "https://moonstack.co/wp-json/moonstack/v1/submit-form",
        {
          method: "POST",
          headers: {
            "X-API-KEY": "a9f3c8d4e21b7a0c9f0a1e3d8b7c6f7hyx67",
          },
          body: formData,
        },
      );

      const data = await res.json();

      if (data.status === "success") {
        setMessage("Your inquiry has been submitted successfully.");
        form.reset();
        setFileName(null);
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="projectInquiryModalOuter fixed top-0 right-[-17px] bottom-0 left-0 z-50 overflow-auto bg-[#000]/90 p-[80px]"
      onClick={onClose}
    >
      <div
        className="flex items-center justify-center p-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex w-full max-w-[1040px] overflow-hidden">
          {/* LEFT PANEL */}
         <ContactInfoCard className="mr-[10px] hidden w-[38%] flex-col justify-between rounded-[60px] rounded-tl-none bg-[#004619] p-[40px] text-white md:flex" />

          {/* RIGHT FORM */}
          <div className="relative w-full rounded-[60px] rounded-tl-none bg-white p-[40px] md:w-[62%]">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-[40px] right-[40px] cursor-pointer text-[#848484]"
            >
              <IoClose size={22} />
            </button>

            <h3 className="mb-6 text-[#000]">Tell us about your project</h3>

            {/* MESSAGE */}

            <Form formName="project_inquiry" />
          </div>
        </div>
      </div>
    </div>
  );
}
