import Link from "next/link"
import Heading from "../Heading/Heading"
import { HiArrowRight } from "react-icons/hi"
import { getCategories } from "@/helper"

interface Category {
  id: number
  slug: string
  name: string
}

interface Props {
  classNames?: string
  ShowAll?: boolean
  showLabel?: boolean
  listClass?: string
}

export default async function CategoryList({
  classNames = " p-[20px] rounded-[10px] bg-[#05140A]",
  ShowAll = false,
  listClass = "text-white",
  showLabel = true,
}: Props) {
  let categories: Category[] = []

  try {
    categories = await getCategories()
  } catch (error) {
    return <p className="text-red-400">Unable to load categories</p>
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

      <ul>
        {ShowAll && (
          <li>
            <Link
              href="/blogs"
              className="mb-[10px] block flex justify-between rounded-[10px] px-4 py-2 text-sm text-white backdrop-blur-md transition hover:bg-white/20 hover:text-[#00ea52]"
            >
              All Topics
              <HiArrowRight className="text-xl" />
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
              <HiArrowRight className="text-xl" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
