import clsx from "clsx";
import Heading, { HeadingSegment } from "@/components/Heading/Heading";
import CaseStudySection from "@/components/CaseStudy/CaseStudySection";
import Space from "@/components/Space";

const apiKey = "a9f3c8d4e21b7a0c9f0a1e3d8b7c6f7hyx67";

interface AndroidCaseStudySectionProps {
  title: string | HeadingSegment[];
  description: string | HeadingSegment[];
}
export default function AndroidCaseStudySection({
  title,
  description,
}: AndroidCaseStudySectionProps) {
  return (
    <section className={clsx("relative z-[2] px-[20px]")}>
      <div className="container">
        {/* Heading */}
        <div className="m-[auto] max-w-[768px] text-center">
          <Heading headingTag="h2" className="text-white" content={title} />
          {description && (
            <Heading
              headingTag="p"
              className="mt-4 pb-20 !font-[500] text-white/80"
              content={description}
            />
          )}
        </div>
        <Space size={50} />
      </div>
      <CaseStudySection apiKey={apiKey} perPage={1} loadMoreBtn={false} />
    </section>
  );
}
