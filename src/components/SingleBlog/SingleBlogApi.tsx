"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../Layout";
import Heading from "../Heading/Heading";
import CategoryList from "../CategoryList/CategoryList";
import LatestPosts from "../LatestPosts/LatestPosts";
import RelatedPosts from "../RelatedPosts/RelatedPosts";
import Loader from "../Loader/Loader";

/* ✅ ADDED: Category interface */
interface Category {
  id: number;
  slug: string;
  name: string;
}

interface PostData {
  id: number;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
  excerpt: string;
  category: Category | null; // ✅ ADDED
}

interface Props {
  slug: string;
}

export default function SinglePostData({ slug }: Props) {
  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        const res = await fetch(
          `https://moonstack.co/wp-json/moonstack/v1/post-by-slug?slug=${slug}`,
          {
            headers: {
              "X-API-KEY": "a9f3c8d4e21b7a0c9f0a1e3d8b7c6f7hyx67",
            },
          }
        );

        const json = await res.json();

        if (json?.status) {
          setPost(json.data);
        }
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <div className="flex items-center justify-center h-[100vh]"> <Loader /></div>;
  if (!post) return <p className="text-white">Post not found</p>;

  return (
    <>
    <section className="px-[80px] pt-[160]">
      <div className="container">
        <article className="text-white">
          <div className="mb-[40]">
            <Heading
              headingTag="h1"
              className="m-auto mb-[20px] max-w-[960px] text-center"
              content={[{ text: post.title, color: "" }]}
            />

            <p
              className="m-auto max-w-[960px] text-center"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
          </div>

          {post.image && (
            <div className="postImage mb-[80px]">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={600}
                className="mb-6 h-[100%] w-[100%] rounded-xl"
              />
            </div>
          )}

          <div className="singleBlogPost flex flex-wrap gap-[40px]">
            <div className="blogLeftSection w-[66%]">
              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            <div className="blogRightSection w-[calc(34%-40px)]">
              <CategoryList />
              <LatestPosts />
            </div>
          </div>
        </article>

        {/* ✅ SAFE CATEGORY PASS (ONLY ADDITION) */}
      </div>
    </section>
        <div className="relatedPost">
          {post.category && (
            <RelatedPosts categorySlug={post.category.slug} notInPost={post.id} />
          )}
        </div>
        </>
  );
}
