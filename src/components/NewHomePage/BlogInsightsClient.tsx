"use client"

import { useEffect, useState } from "react"
import BlogCard from "../BlogCard/BlogCard"
import CommanButton from "../CommanButton/CommanButton"
import { fetchPostsblogsPage } from "@/helper"
import { IBlogPost } from "@/types/blog"

interface BlogPost {
  slug: string
  title: string
  image: string
  date: string
  author: {
    name: string
    avatar: string
  }
  category: {
    name: string
    slug: string
  }
}

interface Props {
  initialPosts: BlogPost[]
  postprePage: number
  loadMore: boolean
  imageHeight: string
  startPage: number
}

export default function BlogInsightsClient({
  initialPosts,
  postprePage,
  loadMore,
  imageHeight,
  startPage,
}: Props) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts)
  const [page, setPage] = useState(startPage)
  const [loadingMore, setLoadingMore] = useState(false)
  const [dots, setDots] = useState(1)
  const [hasMore, setHasMore] = useState(initialPosts.length === postprePage)

  /* ================= DOT ANIMATION ================= */
  useEffect(() => {
    if (!loadingMore) {
      setDots(1)
      return
    }

    const interval = setInterval(() => {
      setDots((d) => (d === 3 ? 1 : d + 1))
    }, 500)

    return () => clearInterval(interval)
  }, [loadingMore])

  /* ================= LOAD MORE ================= */
  const loadMorePosts = async () => {
    if (loadingMore || !hasMore) return

    setLoadingMore(true)

    try {
      const nextPage = page + 1
      const res = await fetchPostsblogsPage(nextPage)
      console.log(res)
      if (res?.data?.length) {
        setPosts((prev) => [
          ...prev,
          ...res.data.map((item: IBlogPost) => ({
            id: item.id,
            slug: item.slug,
            title: item.title,
            image: item.image,
            date: item.date,
            excerpt: item.excerpt || "", // Provide a default value if missing
            author: {
              name: item.author.name,
              avatar: item.author.avatar,
            },
            category: {
              name: item.category.name,
              slug: item.category.slug,
            },
          })),
        ])
        setPage(nextPage)
      }
    } catch (error) {
      console.error("Load more error:", error)
    } finally {
      setLoadingMore(false)
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} imageHeight={imageHeight} />
        ))}
      </div>

      {loadMore && hasMore && (
        <div className="mt-[64px] flex justify-center">
          <CommanButton
            text={loadingMore ? `Loading${".".repeat(dots)}` : "Load More"}
            onClick={loadMorePosts}
            // disabled={loadingMore}
          />
        </div>
      )}
    </>
  )
}
