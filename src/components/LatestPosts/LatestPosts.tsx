"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import Heading from "../Heading/Heading";

interface Post {
  id: number;
  slug: string;
  title: string;
  image: string;
  date: string;
  link?: string;
}

interface ApiResponse {
  status: boolean;
  data: Post[];
}

export default function LatestPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const res = await fetch(
          "https://moonstack.co/wp-json/moonstack/v1/post-list?per_page=6",
          {
            method: "GET",
            headers: {
              "X-API-KEY": "a9f3c8d4e21b7a0c9f0a1e3d8b7c6f7hyx67",
            },
            cache: "no-store",
          },
        );

        if (!res.ok) throw new Error("Failed to fetch posts");

        const json: ApiResponse = await res.json();

        if (!json.status) throw new Error("API returned error");

        setPosts(json.data);
      } catch (err) {
        console.error("LatestPosts API error:", err);
        setError("Unable to load latest posts");
      } finally {
        setLoading(false);
      }
    };

    fetchLatest();
  }, []);

  if (loading) {
    return (
      <div className="">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-[100px] mb-[20px] animate-pulse rounded-xl bg-[#0c2a17]"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return <p className="text-red-400">{error}</p>;
  }

  return (
    <div className="mt-[60px] rounded-[10px] ] p-[20px]">
      <div className="mb-[20px]">
        <Heading
          headingTag="h4"
          content={[
            {
              text: "Letest Blogs",
              color: "",
            },
          ]}
        />
      </div>

      <div className="">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group flex gap-[20px] overflow-hidden  transition "
          >
         
            {/* CONTENT */}
            <div className="flex w-[calc(100%)] text-[#000] flex-col justify-between p-2">
              <div>
                <span className="mb-1 text-xs text-[#000]">{post.date}</span>
                <h6 className="mb-4 line-clamp-2 text-sm font-semibold transition hover:text-[#00ea52]">
                  <Link className="" href={`/blogs/${post.slug}`}>{post.title}</Link>
                </h6>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
