"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import blogBg from "../../../public/assets/home/blogBg.webp";
import Heading from "../Heading/Heading";
import Link from "next/link";
import clockIcon from "../../../public/assets/home/clock_icon.svg";
// import Loader from "../Loader/";

interface PostItem {
  category: {
    name: string;
    link: string;
  };
  title: string;
  post_link: string;
  description: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
}

export default function BlogCardGrid() {
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://moonstack.co/wp-json/moonstack/v1/post-list",
          {
            method: "GET",
            headers: {
              "X-api-key": "a9f3c8d4e21b7a0c9f0a1e3d8b7c6f7hyx67",
              "Content-Type": "application/json",
            },
            mode: "cors",
            cache: "no-store",
          },
        );

        const json = await res.json();

        console.log("STATUS:", res.status);
        console.log("RESPONSE:", json);

        if (!res.ok) {
          throw new Error(json?.message || "API error");
        }

        setPosts(json.data || []);
      } catch (err) {
        console.error("FETCH FAILED:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // ⏳ Loading
  if (loading) {
    return (
      <div className="flex min-h-[855px] items-center justify-center py-20">
        {/* <Loader /> */}
      </div>
    );
  }

  // ❌ Error
  if (error) {
    return <div className="py-20 text-center text-red-500">{error}</div>;
  }

  // 🚫 No posts
  if (!posts.length) {
    return (
      <div className="py-20 text-center text-gray-400">No posts found</div>
    );
  }

  return (
    <section
      className="w-full bg-black bg-cover bg-center px-5 py-20 md:px-20"
      style={{ backgroundImage: `url(${blogBg.src})` }}
    >
      <div className="container">
        <div className="row pb-20">
          <div className="m-auto max-w-[780px] text-center">
            <Heading
              headingTag="h2"
              className="font-36 mb-3 font-[500]"
              content={[
                {
                  text: `Blogs & Insights `,
                  color: "text-white block text-gradient",
                },
              ]}
            />
            <Heading
              headingTag="p"
              className="text-center"
              content={[
                {
                  text: `These voices echo the confidence and satisfaction of clients who have witnessed firsthand the impact of our solutions. At Moonstack, our clients are not just partners.`,
                  color: "text-white block",
                },
              ]}
            />
          </div>
        </div>
        <div className="row flex gap-5">
          {posts.map((post, index) => (
            <article
              key={index}
              className="relative w-[33.33%] overflow-hidden rounded-[10px] bg-[#0A7539]/20 shadow-[inset_0_0_1px_#0A7539]"
            >
              {/* IMAGE */}
              <div className="relative h-[220px] w-full">
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="rounded-[10px] object-cover object-top"
                  />
                )}
              </div>

              {/* CONTENT */}
              <div className="relative z-10 space-y-4 p-6">
                <Link
                  href={post.category.link}
                  className="text-sm font-medium text-[#00CF49]"
                >
                  {post.category.name}
                </Link>

                <h3 className="!text-[18px] text-[150%] font-semibold text-white">
                  <Link
                    href={post.post_link}
                    className=""
                    aria-label={post.title}
                  >
                    {post.title}
                  </Link>
                </h3>

                <p className="text-sm text-gray-400">{post.description}</p>

                <div className="flex items-center justify-between border-t border-[#123c2a] pt-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={36}
                      height={36}
                      className="rounded-full"
                    />
                    <span className="text-sm text-white">
                      {post.author.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={clockIcon} alt="clock icon" />
                    <span className="text-xs text-gray-400"> {post.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
