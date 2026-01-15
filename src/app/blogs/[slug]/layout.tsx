import { IPostData } from "@/types/blog"

interface BlogLayoutProps {
  children: React.ReactNode
  params: Promise<{
    slug: string
  }>
}

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
    console.error("Server API Error:", error)
    return null
  }
}

async function BlogLayout({ children, params }: BlogLayoutProps) {
  //
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return <div>Post not found</div>
  }
  console.log(process.env.API_URL, "api url")

  return <>{children}</>
}

export default BlogLayout
