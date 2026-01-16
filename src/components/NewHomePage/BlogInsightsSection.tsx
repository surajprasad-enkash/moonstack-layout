import Heading from "../Heading/Heading"
import { cn } from "@/lib/utils"
import { fetchPostsblogsPage } from "@/helper"
import BlogInsightsClient from "./BlogInsightsClient"

interface Props {
  paged?: number
  title?: boolean
  postprePage?: number
  className?: string
  loadMore?: boolean
  imageHeight?: string
}

export default async function BlogInsightsSection({
  className,
  postprePage = 3,
  title = true,
  loadMore = false,
  imageHeight = "h-[270px]",
  paged = 1,
}: Props) {
  const data = await fetchPostsblogsPage(paged, postprePage)

  return (
    <section className={cn("relative z-[1] px-[20px] text-white", className)}>
      <div className="container">
        {title && (
          <div className="mb-[72px] grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <span className="block text-xs font-[500] tracking-widest text-white/60 uppercase">
              Blog
            </span>

            <Heading
              headingTag="h2"
              className="max-w-[650px]"
              content={[
                { text: "Get real" },
                {
                  text: "growth insights",
                  className: "libreItalic highlight-text font-[400]",
                },
                { text: "and proven tactics for digital success" },
              ]}
            />
          </div>
        )}

        <BlogInsightsClient
          initialPosts={data?.data || []}
          postprePage={postprePage}
          loadMore={loadMore}
          imageHeight={imageHeight}
          startPage={paged}
        />
      </div>
    </section>
  )
}
