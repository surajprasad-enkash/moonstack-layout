import Image from "next/image"
import Link from "next/link"
import author from "../../app/favicon.ico"
interface BlogAuthor {
  name: string
  avatar: string
}

interface BlogCategory {
  name: string
  slug: string
}

export interface BlogPostCard {
  slug: string
  title: string
  image: string
  date: string
  author: BlogAuthor
  category: BlogCategory
}

interface Props {
  post: BlogPostCard
  imageHeight?: string
}

export default function BlogCard({ post, imageHeight = "h-[200px]" }: Props) {
  return (
    <article className="group home-blog-card relative flex flex-col overflow-hidden transition">
      {/* IMAGE */}
      <Link href={`/blogs/${post.slug}`}>
        <div className="relative">
          <div className="overflow-hidden rounded-[20px]">
            <Image
              src={post.image}
              alt={post.title}
              width={500}
              height={350}
              loading="lazy"
              className={`${imageHeight} w-full object-cover transition group-hover:scale-102`}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col py-6">
          {/* META */}
          <div className="mb-4 flex items-center justify-between gap-3 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <Image
                src={author}
                alt={post.author.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span>{post.author.name}</span>
            </div>
            <span>{post.date}</span>
          </div>

          {/* TITLE */}
          <h3
            className="!text-[20px]"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
        </div>
      </Link>

      {/* CATEGORY TAG */}
      <div className="home-blog-tags-wrapper">
        <div className="w-dyn-list">
          <div role="list" className="home-blog-tags w-dyn-items w-row">
            <div
              role="listitem"
              className="home-blog-tag-wrapper w-dyn-item w-col w-col-4"
            >
              <Link href={`/category/${post.category.slug}`}>
                {post.category.name}
              </Link>
            </div>
          </div>
        </div>

        {/* SVG DECORATION */}
        <SvgCorner />
        <SvgCorner position="right-bottom" />
      </div>
    </article>
  )
}

/* ===================== SVG COMPONENT ===================== */

function SvgCorner({ position = "" }: { position?: string }) {
  return (
    <div className={`code-embed-2 ${position} w-embed`}>
      <svg viewBox="0 0 230 230" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M230 0V230C208.672 80.6892 154.524 33.6222 0 0H230Z"
          fill="#0A0A0A"
        />
      </svg>
    </div>
  )
}
