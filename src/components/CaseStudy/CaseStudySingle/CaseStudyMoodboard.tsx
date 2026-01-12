"use client";

import Heading from "@/components/Heading/Heading";
import Image from "next/image";


interface MoodboardData {
  title: string;
  description: string;
  images: string[];
}

const CaseStudyMoodboard = ({ data }: { data: MoodboardData }) => {
  if (!data || !data.images?.length) return null;

  return (
    <section className="bg-white pt-[150px] px-[20px] ">
      <div className="container">
        {/* Header */}
        <div className="mb-14 max-w-xl">
          <Heading
            headingTag="h2"
            content={[
              {
                text: data.title,
                className: "highlight-text libreItalic",
              },
            ]}
          />

          <div className="description my-[70px] md:ml-[92px]">
            <p className="text-[#000] !font-[500] max-w-[390px]">
              {data.description}
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-[6px]">
          {data.images.map((image, index) => (
            <div key={index} className="rounded-2xl">
              <div className="relative w-full overflow-hidden rounded-xl">
                <Image
                  src={image}  
                  alt={data.title}
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyMoodboard;
