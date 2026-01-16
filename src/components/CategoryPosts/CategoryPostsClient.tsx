"use client"

import { useState } from "react"
import CategoryPosts from "./CategoryPosts"
import { fetchPostsByCategory } from "@/helper"
import { IBlogPost } from "@/types/blog"

interface Post {
  id: number
  slug: string
  title: string
  image: string
  date: string
  excerpt: string
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
  initialPosts: Post[]
  slug: string
  totalPages: number
  categoryName: string
}

export default function CategoryPostsClient({
  initialPosts,
  slug,
  totalPages,
  categoryName,
}: Props) {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [page, setPage] = useState(1)
  const [loadingMore, setLoadingMore] = useState(false)

  const hasMore = page < totalPages

  const loadMore = async () => {
    if (!hasMore) return

    setLoadingMore(true)

    try {
      const nextPage = page + 1
      const res = await fetchPostsByCategory(slug, nextPage)

      if (res?.data?.length) {
        setPosts((prev) => [
          ...prev,
          ...res.data.map((item: IBlogPost) => ({
            id: item.id,
            slug: item.slug,
            title: item.title,
            image: item.image,
            date: item.date,
            excerpt: item.excerpt || "",
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
    <CategoryPosts
      posts={posts}
      categoryName={categoryName}
      hasMore={hasMore}
      loadingMore={loadingMore}
      onLoadMore={loadMore}
      loading={false}
    />
  )
}
