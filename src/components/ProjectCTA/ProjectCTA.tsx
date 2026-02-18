"use client"

import CustomButton from "../CommanButton/CommanButton"
import Heading from "../Heading/Heading"
import { useRouter } from "next/navigation"
import Image from "next/image"

interface ProjectCTAProps {
  title?: string
  subtitle?: string
  buttonText?: string
  redirectPath?: string
  scrollTargetId?: string
  className?: string
  bgImage?: string
  description?: string
  fontSize?: string
  marginBottom?: string
  whiteBoxClass?: string
  descriptionClass?: string
}

export default function ProjectCTA({
  title = "Got a Project in Mind?",
  subtitle = "Tell Us About It.",
  description,
  buttonText = "Contact Us",
  redirectPath = "/contact-us",
  scrollTargetId = "contact-hero",
  bgImage,
  className = "",
  whiteBoxClass = "rounded-tl-none",
  fontSize,
  descriptionClass = "",
  marginBottom = "mb-[60px]",
}: ProjectCTAProps) {
  const router = useRouter()

  const handleScroll = () => {
    // App Router push (no options object)
    router.push(redirectPath)

    // Scroll after navigation
    setTimeout(() => {
      document
        .getElementById(scrollTargetId)
        ?.scrollIntoView({ behavior: "smooth" })
    }, 200)
  }

  return (
    <section
      className={`relative z-[1] flex items-center justify-center px-[20px] pt-[60px] md:pt-[120px] ${className}`}
    >
      {bgImage && (
        <Image
          src={bgImage}
          alt="Background"
          width={1920}
          height={800}
          className="absolute inset-0 z-[1] h-[800px] w-[120%] object-cover"
          priority
        />
      )}

      <div className="relative z-[2] container">
        <div
          className={`relative rounded-[20px] bg-[#fff] px-6 py-[100px] text-center ${whiteBoxClass}`}
          style={{
            background:
              "linear-gradient(300.37deg, #cafecdff 20.68%, #f8fffaff 67.91%)",
          }}
        >
          <Heading
            headingTag="h2"
            className={`${marginBottom} ${fontSize} !leading-[60px] md:!leading-[100px]`}
            content={[
              {
                title,
                color: "text-[#000]",
                className: "block",
              },
              {
                title: subtitle,
                color: "text-black libreItalic font-[400]",
              },
            ]}
          />

          {description && (
            <p
              className={`mx-auto mt-[32px] mb-[48px] max-w-[538px] !text-[20px] !font-[500] text-[#141515] ${descriptionClass}`}
            >
              {description}
            </p>
          )}

          <div className="flex justify-center">
            <CustomButton
              text={buttonText}
              hoverBg="group-hover:bg-[#000] group-hover:text-[#fff]"
              onClick={handleScroll}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
