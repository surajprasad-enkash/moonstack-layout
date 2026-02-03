"use client"

import Image from "next/image"
import Link from "next/link"
import CommanButton from "../CommanButton/CommanButton"
import BlogCard from "../BlogCard/BlogCard"

interface Post {
  author: {
    name: string
    avatar: string
  }
  category: {
    name: string
    slug: string
  }
  id: number
  slug: string
  title: string
  image: string
  date: string
  excerpt: string
}

interface Props {
  posts: Post[]
  categoryName: string
  loading: boolean
  loadingMore: boolean
  hasMore: boolean
  onLoadMore: () => void
}

export default function CategoryPosts({
  posts,
  categoryName,
  loading,
  loadingMore,
  hasMore,
  onLoadMore,
}: Props) {
  return (
    <div className="text-[#fff] md:px-[20px]">
      <div className="relative z-[2] container">
        <h1 className="mt-10 mb-10 md:mt-[0]">{categoryName}</h1>

        {loading ? (
          <div className="flex h-[100vh] items-center justify-center">
            {/* <Loader /> */}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} imageHeight="h-[220px]" />
              ))}
            </div>

            {hasMore && (
              <div className="mt-10 flex justify-center">
                <CommanButton
                  text={loadingMore ? "Loading..." : "Load More"}
                  onClick={onLoadMore}
                  // disabled={loadingMore}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
