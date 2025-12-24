"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import Loader from "@/components/Loader/Loader"; // ✅ ADDED

interface Post {
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

/* ✅ ONLY FIX: slug typing for Pages Router */
interface Props {
  slug?: string | string[];
}

export default function CategoryPosts({ slug }: Props) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug || typeof slug !== "string") return;

    const fetchPosts = async () => {
      setLoading(true);

      try {
        const res = await fetch(
          `https://moonstack.co/wp-json/moonstack/v1/posts-by-category-slug?category=${slug}&page=${page}&per_page=12`,
          {
            headers: {
              "X-API-KEY": "a9f3c8d4e21b7a0c9f0a1e3d8b7c6f7hyx67",
            },
          }
        );

        const json: ApiResponse = await res.json();

        if (json?.status) {
          setPosts(json.data);
          setTotalPages(json.pagination.total_pages);
          setCategoryName(json.category.name);
        }
      } catch (error) {
        console.error("Category posts error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [slug, page]);

  if (!slug || typeof slug !== "string") return null;

  return (
    <section className="px-[80px] pt-[160px] pb-[80px] categoryPageSection">
      <div className="container">
        <h1 className="mb-10">{categoryName}</h1>

        {/* ✅ LOADER */}
        {loading ? (
          <div className="flex items-center justify-center h-[100vh]">
          <Loader />
          </div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-xl bg-[#05140A] text-white"
                >
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={240}
                      className="h-[220px] w-full object-cover"
                    />
                  )}

                  <div className="p-5">

                    <h6 className="mb-[10px] transition hover:text-[#00EA52]">
                      <Link href={`/blogs/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h6>
                    <span className="mb-2 text-[14px] text-white/60">
                      {post.date}
                    </span>

                   
                  </div>
                </article>
              ))}
            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-6">
                <button
                  onClick={() => setPage((p) => p - 1)}
                  disabled={page === 1}
                  className="rounded bg-[#0c2a17] px-5 py-2 text-white disabled:opacity-40"
                >
                  Prev
                </button>

                <span className="text-white">
                  Page {page} of {totalPages}
                </span>

                <button
                  onClick={() => setPage((p) => p + 1)}
                  disabled={page === totalPages}
                  className="rounded bg-[#0c2a17] px-5 py-2 text-white disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
