"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Heading from "../Heading/Heading";
import { cn } from "@/lib/utils";
import Loader from "../Loader/Loader";
import CommanButton from "../CommanButton/CommanButton";

interface BlogPost {
  title: string;
  description: string;
  image: string;
  post_link: string;
  slug: string;
  date: string;
  category: {
    name: string;
    link: string;
    slug: string;
  };
  author: {
    name: string;
    avatar: string;
  };
}

interface ApiResponse {
  status: boolean;
  data: BlogPost[];
}

interface Props {
  paged?: number;
  title?: boolean;
  postprePage?: number;
  className?: string;
  loadMore?: boolean;
  imageHeight?: string;
}

export default function BlogInsightsSection({
  className,
  postprePage = 3,
  title = true,
  loadMore = false,
  imageHeight = "h-[270px]",
  paged = 1,
}: Props) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(paged);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  /* ✅ NEW STATE FOR DOT ANIMATION */
  const [loadingDots, setLoadingDots] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `https://moonstack.co/wp-json/moonstack/v1/post-list?per_page=${postprePage}&page=${page}`,
          {
            method: "GET",
            headers: {
              "X-API-KEY": "a9f3c8d4e21b7a0c9f0a1e3d8b7c6f7hyx67",
            },
            cache: "no-store",
          }
        );

        const json: ApiResponse = await res.json();

        if (json.status) {
          setPosts(prev =>
            page === 1 ? json.data : [...prev, ...json.data]
          );

          if (json.data.length < postprePage) {
            setHasMore(false);
          }
        }
      } catch (error) {
        console.error("Blog API Error:", error);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    };

    fetchPosts();
  }, [page, postprePage]);

  /* ✅ DOT ANIMATION EFFECT (NO OTHER LOGIC TOUCHED) */
  useEffect(() => {
    if (!loadingMore) {
      setLoadingDots(1);
      return;
    }

    const interval = setInterval(() => {
      setLoadingDots(prev => (prev === 3 ? 1 : prev + 1));
    }, 500);

    return () => clearInterval(interval);
  }, [loadingMore]);

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

        {loading && page === 1 ? (
          <div className="flex h-[100vh] items-center justify-center">
            {/* <Loader /> */}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <article
                  key={index}
                  className="group home-blog-card relative flex flex-col overflow-hidden transition"
                >
                  <Link href={`/blogs/${post.slug}`}>
                    <div className="relative">
                      <div className="overflow-hidden rounded-[20px]">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={500}
                          height={350}
                          className={`${imageHeight} w-[100%] object-cover transition group-hover:scale-102`}
                        />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col py-6">
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
                        <span>{post.date}</span>
                      </div>

                      <h3
                        className="!text-[20px]"
                        dangerouslySetInnerHTML={{
                          __html: post.title,
                        }}
                      />
                    </div>
                  </Link>

                  <div className="home-blog-tags-wrapper">
                    <Link href={`/category/${post.category.slug}`}>
                      {post.category.name}
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {loadMore && hasMore && (
              <div className="mt-[64px] flex justify-center">
                <CommanButton
                  text={
                    loadingMore
                      ? `Loading${".".repeat(loadingDots)}`
                      : "Load More"
                  }
                  onClick={() => {
                    setLoadingMore(true);
                    setPage(prev => prev + 1);
                  }}
                />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
