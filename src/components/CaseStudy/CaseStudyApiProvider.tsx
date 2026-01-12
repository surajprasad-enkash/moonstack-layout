"use client";

import { useEffect, useState } from "react";

const API_URL = "https://moonstack.co/wp-json/moonstack/v1/case-studies";

interface Props {
  perPage?: number;
  apiKey: string;
  children: (props: {
    items: any[];
    loading: boolean;
    error: string | null;
    loadMore: () => void;
    hasMore: boolean;
  }) => React.ReactNode;
}

export default function CaseStudyApiProvider({
  perPage = 10,
  apiKey,
  children,
}: Props) {
  const [items, setItems] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCaseStudies = async (pageNum: number) => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        `${API_URL}?page=${pageNum}&per_page=${perPage}`,
        {
          headers: {
            "X-API-KEY": apiKey,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch case studies");
      }

      const data = await res.json();

      setItems((prev) => [...prev, ...data.items]);
      setTotalPages(data.totalPages);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCaseStudies(1);
  }, []);

  const loadMore = () => {
    if (page < totalPages && !loading) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchCaseStudies(nextPage);
    }
  };

  return (
    <>
      {children({
        items,
        loading,
        error,
        loadMore,
        hasMore: page < totalPages,
      })}
    </>
  );
}
