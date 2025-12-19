"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FaClock } from "react-icons/fa";

import Heading from "../Heading/Heading";
import Loader from "../Loader/Loader";


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
          "https://moonstack.co/wp-json/moonstack/v1/post-list?per_page=4",
          {
            method: "GET",
            headers: {
              // ⚠️ Use your VALID API key
              "X-API-KEY": "a9f3c8d4e21b7a0c9f0a1e3d8b7c6f7hyx67",
            },
            cache: "no-store",
          },
        );

        const json = await res.json();

        if (!res.ok) {
          throw new Error(json?.message || "API error");
        }

        setPosts(json.data || []);
      } catch (err: any) {
        setError(err.message || "Failed to load posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  /* ---------------- STATES ---------------- */

  if (loading) {
    return (
      <div className="flex min-h-[600px] items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div className="py-20 text-center text-red-500">{error}</div>;
  }

  if (!posts.length) {
    return (
      <div className="py-20 text-center text-gray-400">No posts found</div>
    );
  }

  const firstPost = posts[0];
  const sidePosts = posts.slice(1);

  /* ---------------- UI ---------------- */

  return (
    <section className="w-full blogSectionHomePage px-5 py-20 md:px-20">
      <div className="container">
        {/* HEADING */}
        <div className="pb-20 text-center">
          <Heading
            headingTag="h2"
            className="mb-3"
            content={[
              { text: "Blogs ", color: "text-white", className: "" },
              { text: "& Insights", color: "", className: "text-gradient" },
            ]}
          />
          <Heading
            headingTag="p"
            content={[
              {
                text: "These voices echo the confidence and satisfaction of clients who have witnessed firsthand the impact of our solutions.",
                color: "text-white",
              },
            ]}
          />
        </div>

        {/* GRID */}
        <div className="flex gap-5">
          {/* LEFT BIG CARD */}
          <div className="leftBox w-[50%]">
            <article className=" backdrop-blur relative overflow-hidden rounded-[16px] bg-[#0A7539]/20 shadow-[inset_0_0_1px_#0A7539]">
              <div className="relative p-6 pb-0">
                <Image
                  src={firstPost.image}
                  alt={firstPost.title}
                  width={500}
                  height={300}
                  className="w-[100%] max-h-[290px] rounded-[16px] object-cover object-top"
                />
              </div>

              <div className="relative z-10 space-y-4 p-6">
                {/* CATEGORY BADGE */}
                <Link
                  href={firstPost.category.link}
                  className="inline-block text-[#0CE859] mb-2"
                >
                  {firstPost.category.name}
                </Link>

                <h6 className="text-[18px] font-[500] text-white transition hover:text-[#0CE859]">
                  <Link href={firstPost.post_link}>{firstPost.title}</Link>
                </h6>

                <Link
                  href={firstPost.post_link}
                  className="relative inline-flex items-center gap-2 font-medium text-white after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-[#0CE859] after:transition-all after:duration-300 after:content-[''] hover:text-[#0CE859] hover:after:w-full"
                >
                  ▶ Read More
                </Link>
              </div>
            </article>
          </div>
          {/* RIGHT STACKED POSTS */}
          <div className="between flex w-[50%] flex-col justify-between gap-6">
            {sidePosts.map((post, index) => (
              <article
                key={index}
                className="backdrop-blur flex gap-4 rounded-[14px] bg-[#0A7539]/10 p-4 shadow-[inset_0_0_1px_#0A7539]"
              >
                {/* IMAGE */}
                <div className="relative h-[100%] w-[140px] flex-shrink-0 overflow-hidden rounded-[10px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col gap-2">
                  {/* CATEGORY BADGE */}
                  <Link
                    href={post.category.link}
                    className="w-fit text-[#0CE859]"
                  >
                    {post.category.name}
                  </Link>

                  <h6 className=" leading-snug font-semibold text-white">
                    <Link
                      className="transition hover:text-[#0CE859]"
                      href={post.post_link}
                    >
                      {post.title}
                    </Link>
                  </h6>

                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <FaClock />
                    {post.date}
                  </div>
                </div>

                <Link
                  href={post.post_link}
                  className="ml-auto text-xl text-white hover:text-[#0CE859]"
                >
                  {/* → */}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function decodeHtml(html: string) {
  if (typeof window === "undefined") return html;
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}
