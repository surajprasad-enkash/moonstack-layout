"use client"

import Heading from "@/components/Heading/Heading"
import Image from "next/image"

interface MoodboardData {
  title: string
  description: string
  images: string[]
}

const CaseStudyMoodboard = ({ data }: { data: MoodboardData }) => {
  if (!data || !data.images?.length) return null

  return (
    <section className="bg-white px-[20px] pt-[60px] md:pt-[150px]">
      <div className="container">
        {/* Header */}
        <div className="mb-[30px] justify-between md:mb-14 md:flex">
          <Heading
            headingTag="h2"
            content={[
              {
                text: data.title,
                className: "highlight-text libreItalic",
              },
            ]}
          />

          <div className="description mt-[10px] mb-[30px] md:my-[0]">
            <p
              className="max-w-[390px] !font-[500] text-[#000]"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="flex flex-wrap gap-[40px]">
          {data.images.map((image, index) => (
            <div
              key={index}
              className="w-full rounded-2xl md:w-[calc(50%-20px)] md:[&:nth-child(1)]:!w-full"
            >
              <div className="relative w-full overflow-hidden rounded-xl">
                <Image
                  src={image}
                  alt={data.title}
                  width={1500}
                  height={1500}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudyMoodboard
