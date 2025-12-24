"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import Link from "next/link";

interface CategoryPost {
  id: number;
  slug: string;
  title: string;
  image: string;
  date: string;
}

interface CategoryGroup {
  category_id: number;
  category_slug: string;
  posts: CategoryPost[];
}

type ApiResponse = Record<string, CategoryGroup>;

export default function PostGrid() {
  const [data, setData] = useState<ApiResponse>({});
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        "https://moonstack.co/wp-json/moonstack/v1/posts-by-category",
        {
          headers: {
            "X-API-KEY": "a9f3c8d4e21b7a0c9f0a1e3d8b7c6f7hyx67",
          },
        },
      );

      const json: ApiResponse = await res.json();
      setData(json);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="space-y-[80px]">
      {Object.entries(data).map(([categorySlug, category]) => (
        <section key={categorySlug} className={`blogPageCategoryOuter ${categorySlug}`}>
          {/* CATEGORY TITLE */}
          <div className="flex justify-between">
            <h3 className="mb-10 text-2xl font-semibold text-white capitalize">
              {categorySlug.replace("-", " ")}
            </h3>
            <Link className="flex gap-2 items-center hover:text-[#0CE859] transition" href={`/category/${categorySlug}`}>View All <HiArrowRight className="text-xl " /></Link>
          </div>
          {/* GRID */}
          <div className="flex flex-wrap gap-y-[60px] gap-x-8 blogPageCategoryInner">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-[429px] w-full animate-pulse rounded-xl bg-[#0c2a17] md:w-[calc(33%-20px)]"
                  />
                ))
              : category.posts.map((post) => (
                  <article
                    key={post.id}
                    className="w-full md:w-[calc(33%-20px)] blogPageCategoryArticle"
                  >
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="group block h-full overflow-hidden rounded-xl bg-[#003312]/50  backdrop-blur-xl text-white"
                    >
                      {/* IMAGE */}
                      <div className="relative h-[200px]">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition"
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="flex h-[calc(100%-200px)] flex-col justify-between p-[40px]">
                        <h6 className="mb-[20px] group-hover:text-[#0CE859]">{post.title}</h6>

                        <div className="flex items-center justify-between text-sm">
                          <span className="text-[#999A99]">{post.date}</span>
                          <HiArrowRight className="text-xl transition group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
          </div>
        </section>
      ))}
    </div>
  );
}
