"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";

interface Props {
  slug: string;
  apiKey: string;
}

export default function SingleCaseStudy({ slug, apiKey }: Props) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchCaseStudy = async () => {
      try {
        const res = await fetch(
          `https://resources.moonstack.co/wp-json/moonstack/v1/case-study/${slug}`,
          {
            headers: {
              "X-API-KEY": apiKey,
            },
          }
        );

        if (!res.ok) {
          throw new Error("Case study not found");
        }

        const result = await res.json();
        setData(result);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [slug, apiKey]);

  /* ---------------- LOADING ---------------- */
  if (loading) {
    return (
      <div className="flex h-[100vh] items-center justify-center">
        <Loader />
      </div>
    );
  }

  /* ---------------- ERROR ---------------- */
  if (error) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  if (!data) return null;

  /* ---------------- UI ---------------- */
  return (
    <section
      className="min-h-screen px-6 py-20"
      style={{ background: data.background }}
    >
      <div className="mx-auto max-w-5xl">
        {/* TITLE */}
        <h1
          className="mb-6 text-4xl font-bold"
          style={{ color: data.text_color || "#000" }}
          dangerouslySetInnerHTML={{ __html: data.title }}
        />

        {/* CATEGORIES */}
        {data.categories?.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-3">
            {data.categories.map((cat: any) => (
              <span
                key={cat.id}
                className="rounded-full bg-black/10 px-4 py-2 text-sm font-medium"
              >
                {cat.name}
              </span>
            ))}
          </div>
        )}

        {/* CONTENT */}
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />

        {/* LINKS */}
        {(data.links?.web || data.links?.mobile) && (
          <div className="mt-10 flex gap-6">
            {data.links.web && (
              <a
                href={data.links.web}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Visit Website
              </a>
            )}

            {data.links.mobile && (
              <a
                href={data.links.mobile}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Mobile App
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
