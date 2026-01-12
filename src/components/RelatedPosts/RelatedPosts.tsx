"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import bgImg from "public/assets/header/magamenu-bg.svg";

interface Post {
  author: any;
  category: any;
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
          }
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
    <section className="relative z-[2] px-[20px] py-[80px]">
      <div className="container">
        <div className="md:px-[60px]">
          <h2 className="mb-[40px] text-xl font-semibold text-white">
            Related Posts
          </h2>
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
                        className="h-[250px] w-[100%] object-cover transition group-hover:scale-102"
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
                        <span className="text-white">{post.author.name}</span>
                      </div>
                      <div>
                        <span className="text-white">{post.date}</span>
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3
                      className="!text-[20px] text-white"
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
                          className="!text-white"
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
        </div>
      </div>
    </section>
  );
}
