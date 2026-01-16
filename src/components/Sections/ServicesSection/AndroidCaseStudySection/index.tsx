import clsx from "clsx"
import Heading, { HeadingSegment } from "@/components/Heading/Heading"
import CaseStudySection from "@/components/CaseStudy/CaseStudySection"
import Space from "@/components/Space"
import { getCaseStudiesServer } from "@/helper"

interface AndroidCaseStudySectionProps {
  title: string | HeadingSegment[]
  description?: string | HeadingSegment[]
  page?: number
}

export default async function AndroidCaseStudySection({
  title,
  description,
  page = 1,
}: AndroidCaseStudySectionProps) {
  const perPage = 2

  const { items, totalPages } = await getCaseStudiesServer(page, perPage)

  return (
    <section className={clsx("relative z-[2] px-[20px]")}>
      <div className="container">
        {/* Heading */}
        <div className="m-auto max-w-[768px] text-center">
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

      {/* Client Component */}
      <CaseStudySection
        initialItems={items}
        totalPages={totalPages}
        initialPage={page}
        perPage={perPage}
        loadMoreBtn={false}
      />
    </section>
  )
}
