"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Heading from "../Heading/Heading"
import { title } from "process"
import { HiArrowLeft, HiArrowRight } from "react-icons/hi"

interface Category {
  id: number
  slug: string
  name: string
}

interface ApiResponse {
  status: boolean
  count: number
  data: Category[]
}

interface Props {
  classNames?: string
  ShowAll?: boolean
  showLabel?: boolean
  listClass?: string
}

export default function CategoryList({
  classNames = " p-[20px] rounded-[10px] bg-[#05140A]",
  ShowAll = false,
  listClass = "text-white",
  showLabel = true,
}: Props) {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://resources.moonstack.co/wp-json/moonstack/v1/categories",
          {
            headers: {
              "X-API-KEY": "a9f3c8d4e21b7a0c9f0a1e3d8b7c6f7hyx67",
            },
          }
        )

        if (!res.ok) {
          throw new Error("Failed to fetch categories")
        }

        const json: ApiResponse = await res.json()

        if (!json.status) {
          throw new Error("API returned error")
        }

        setCategories(json.data)
      } catch (err: any) {
        console.error("Category API Error:", err)
        setError("Unable to load categories")
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  if (loading) {
    return <p className="px-[20px] text-white">Loading categories…</p>
  }

  if (error) {
    return <p className="text-red-400">{error}</p>
  }

  return (
    <div className={`${classNames}`}>
      {showLabel && (
        <div className="mb-[20px]">
          <Heading
            headingTag="h4"
            content={[
              {
                text: "Categories",
                color: "",
              },
            ]}
          />
        </div>
      )}
      <ul className="">
        {ShowAll && (
          <li>
            <Link
              href={`/blogs`}
              className={`mb-[10px] block flex justify-between rounded-[10px] px-4 py-2 text-sm text-white backdrop-blur-md transition hover:bg-white/20 hover:text-[#00ea52]`}
            >
              All Topics
              <span className="CategoryIcon">
                <HiArrowRight className="text-xl" />
              </span>
            </Link>
          </li>
        )}
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link
              href={`/category/${cat.slug}`}
              className={`mb-[10px] block flex justify-between rounded-[10px] px-4 py-2 text-sm font-[500] text-white backdrop-blur-md transition hover:bg-white/20 hover:!text-[#00ea52] ${listClass}`}
            >
              {cat.name}
              <span className="CategoryIcon">
                <HiArrowRight className="text-xl" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
