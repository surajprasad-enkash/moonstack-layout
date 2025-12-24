"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import bgImg from "../../../public/assets/header/magamenu-bg.svg";

interface Post {
  id: number;
  slug: string;
  title: string;
  image: string;
  date: string;
}

interface ApiResponse {
  status: boolean;
  data: Post[];
}

interface Props {
  categorySlug: string;
  notInPost: number;
}

export default function RelatedPosts({ categorySlug, notInPost }: Props) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!categorySlug) return;

    const fetchRelatedPosts = async () => {
      try {
        const res = await fetch(
          `https://moonstack.co/wp-json/moonstack/v1/posts-by-category-slug?category=${categorySlug}&page=1&per_page=3&notin=${notInPost}`,
          {
            headers: {
              "X-API-KEY": "a9f3c8d4e21b7a0c9f0a1e3d8b7c6f7hyx67",
            },
          },
        );

        const json: ApiResponse = await res.json();

        if (json?.status) {
          setPosts(json.data);
        }
      } catch (error) {
        console.error("Related posts error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedPosts();
  }, [categorySlug]);

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-[260px] animate-pulse rounded-xl bg-[#0c2a17]"
          />
        ))}
      </div>
    );
  }

  if (!posts.length) return null;

  return (
    <section
      className="mt-[80px] py-[80px] bg-[#07190D]"
    >
      <div className="container">
        <h2 className="mb-[40px] text-xl font-semibold text-white">
          Related Posts
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-[10px] bg-[#003312] text-white transition"
            >
              {/* IMAGE */}
              {post.image && (
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    height={200}
                    width={400}
                    className="h-[230px] w-[100%] object-cover object-center"
                  />
                </div>
              )}

              {/* CONTENT */}
              <div className="flex h-[calc(100%-230px)] flex-col justify-between p-5">
                <div>
                  <p className="mb-2 text-[14px] text-[#fff]/60">{post.date}</p>
                  <h5 className="mb-4 line-clamp-2 text-sm font-semibold transition hover:text-[#00EA52]">
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h5>
                </div>

                <Link
                  href={`/blogs/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-[#00EA52]"
                >
                  Read More
                  <HiArrowRight className="transition group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
