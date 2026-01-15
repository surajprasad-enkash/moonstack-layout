"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";
import bannerBg from "@/assets/case-study/banner/bannerBg.svg";
import CommanButton from "../CommanButton/CommanButton";

interface Post {
  author: any;
  category: any;
  id: number;
  slug: string;
  title: string;
  image: string;
  date: string;
  excerpt: string;
}

interface ApiResponse {
  status: boolean;
  data: Post[];
  pagination: {
    current_page: number;
    total_pages: number;
  };
  category: {
    name: string;
    slug: string;
  };
}

interface Props {
  slug?: string | string[];
}

export default function CategoryPosts({ slug }: Props) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);

  /* ✅ ADDED (no existing state removed) */
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    if (!slug || typeof slug !== "string") return;

    const fetchPosts = async () => {
      page === 1 ? setLoading(true) : setLoadingMore(true);

      try {
        const res = await fetch(
          `https://resources.moonstack.co/wp-json/moonstack/v1/posts-by-category-slug?category=${slug}&page=${page}&per_page=9`,
          {
            headers: {
              "X-API-KEY": "a9f3c8d4e21b7a0c9f0a1e3d8b7c6f7hyx67",
            },
          }
        );

        const json: ApiResponse = await res.json();

        if (json?.status) {
          setPosts((prev) =>
            page === 1 ? json.data : [...prev, ...json.data]
          );
          setTotalPages(json.pagination.total_pages);
          setCategoryName(json.category.name);
        }
      } catch (error) {
        console.error("Category posts error:", error);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    };

    fetchPosts();
  }, [slug, page]);

  if (!slug || typeof slug !== "string") return null;

  return (
    <div className="px-[20px] text-[#fff]">
      <div className="container relative z-[2]">
        <h1 className="mb-10">{categoryName}</h1>

        {/* EXISTING LOADER */}
        {loading ? (
          <div className="flex h-[100vh] items-center justify-center">
            {/* <Loader /> */}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group home-blog-card relative flex flex-col overflow-hidden transition"
                >
                  {/* IMAGE */}
                  <Link href={`/blogs/${post.slug}`}>
                    <div className="relative">
                      <div className="overflow-hidden rounded-[20px]">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={500}
                          height={350}
                          className="h-[200px] w-[100%] object-cover transition group-hover:scale-102"
                        />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-1 flex-col py-6">
                      {/* META */}
                      <div className="mb-4 flex items-center justify-between gap-3 text-xs text-gray-400">
                        <div className="flex items-center gap-2">
                          <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                          <span>{post.author.name}</span>
                        </div>
                        <div>
                          <span>{post.date}</span>
                        </div>
                      </div>

                      {/* TITLE */}
                      <h3
                        className="!text-[20px]"
                        dangerouslySetInnerHTML={{
                          __html: post.title,
                        }}
                      ></h3>
                    </div>
                  </Link>
                  <div className="home-blog-tags-wrapper">
                    <div className="w-dyn-list">
                      <div
                        role="list"
                        className="home-blog-tags w-dyn-items w-row"
                      >
                        <div
                          role="listitem"
                          className="home-blog-tag-wrapper w-dyn-item w-col w-col-4"
                        >
                          <Link
                            className=""
                            href={`/category/${post.category.slug}`}
                          >
                            {post.category.name}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="code-embed-2 w-embed">
                      <svg
                        viewBox="0 0 230 230"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M230 0V230C208.672 80.6892 154.524 33.6222 0 0H230Z"
                          fill="#0A0A0A"
                        ></path>
                      </svg>
                    </div>
                    <div className="code-embed-2 right-bottom w-embed">
                      <svg
                        viewBox="0 0 230 230"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M230 0V230C208.672 80.6892 154.524 33.6222 0 0H230Z"
                          fill="#0A0A0A"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* ✅ LOAD MORE (ADDED, DOES NOT REMOVE EXISTING) */}
            {page < totalPages && (
              <div className="mt-10 flex justify-center">
                <CommanButton
                  text={loadingMore ? "Loading..." : "Load More"}
                  onClick={() => setPage((p) => p + 1)}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
