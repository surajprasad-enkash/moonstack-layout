import { IPostData, IPostsByCategoryResponse } from "@/types/blog"
import { ICaseStudyData } from "@/types/caseStudy"
import { ICategoryResponse } from "@/types/category"

async function getPost(slug: string): Promise<IPostData | null> {
  try {
    const res = await fetch(
      `${process.env.API_URL}/post-by-slug?slug=${slug}`,
      {
        headers: {
          "X-API-KEY": process.env.X_API_KEY,
        },
        cache: "no-store",
      }
    )

    const json = await res.json()
    return json?.status ? json.data : null
  } catch (error) {
    return null
  }
}

async function getCaseStudy(slug: string): Promise<ICaseStudyData | null> {
  try {
    const res = await fetch(`${process.env.API_URL}/case-study/${slug}`, {
      headers: {
        "X-API-KEY": process.env.X_API_KEY,
      },
      cache: "no-store",
    })

    const json = await res.json()

    return json
  } catch (error) {
    return null
  }
}

async function fetchPostsByCategory(
  slug: string,
  page = 1,
  perPage = 12
): Promise<IPostsByCategoryResponse | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts-by-category-slug?category=${slug}&page=${page}&per_page=${perPage}`,
      {
        headers: {
          "X-API-KEY": process.env.NEXT_PUBLIC_X_API_KEY,
        },
        cache: "no-store",
      }
    )

    if (!res.ok) return null

    const json = (await res.json()) as IPostsByCategoryResponse
    return json?.status ? json : null
  } catch (error) {
    console.error("fetchPostsByCategory error:", error)
    return null
  }
}

async function fetchPostsblogsPage(
  page = 1,
  perPage = 12
): Promise<IPostsByCategoryResponse | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/post-list?per_page=${perPage}&page=${page}`,
      {
        headers: {
          "X-API-KEY": process.env.NEXT_PUBLIC_X_API_KEY!,
        },
        cache: "no-store",
      }
    )

    if (!res.ok) {
      console.error("API error:", res.status)
      return null
    }

    const json = (await res.json()) as IPostsByCategoryResponse
    return json?.status ? json : null
  } catch (error) {
    console.error("fetchPostsblogsPage error:", error)
    return null
  }
}

async function getCategoryList(): Promise<ICategoryResponse | null> {
  try {
    const res = await fetch(`${process.env.API_URL}/categories`, {
      headers: {
        "X-API-KEY": process.env.X_API_KEY!,
      },
      cache: "no-store",
    })

    if (!res.ok) return null

    const json = (await res.json()) as ICategoryResponse
    return json?.status ? json : null
  } catch (error) {
    console.error("getCategoryList error:", error)
    return null
  }
}

async function getCaseStudiesServer(
  page = 1,
  perPage = 10
): Promise<{
  items: any[]
  totalPages: number
}> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/case-studies?page=${page}&per_page=${perPage}`,
    {
      headers: {
        "X-API-KEY": process.env.NEXT_PUBLIC_X_API_KEY as string,
      },
      cache: "no-store",
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch case studies")
  }

  const json = await res.json()

  // ✅ Normalize response shape
  const items = Array.isArray(json.items)
    ? json.items
    : Array.isArray(json.data)
      ? json.data
      : Array.isArray(json.data?.items)
        ? json.data.items
        : []

  return {
    items,
    totalPages:
      json.total_pages ?? json.totalPages ?? json.data?.total_pages ?? 1,
  }
}

async function submitFormAction(formData: FormData, formName: string) {
  try {
    formData.set("form_name", formName)

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/submit-form`, {
      method: "POST",
      headers: {
        "X-API-KEY": process.env.NEXT_PUBLIC_X_API_KEY,
      },
      body: formData,
    })

    const data = await res.json()

    if (data?.status === "success") {
      return {
        success: true,
        message: "Your inquiry has been submitted successfully.",
      }
    }

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    }
  } catch (error) {
    return { success: false, message: "Server error. Please try again later." }
  }
}

export {
  getPost,
  getCaseStudy,
  fetchPostsByCategory,
  getCategoryList,
  fetchPostsblogsPage,
  getCaseStudiesServer,
  submitFormAction,
}
