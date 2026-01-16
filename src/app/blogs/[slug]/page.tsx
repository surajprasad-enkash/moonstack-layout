import Layout from "@/components/Layout"
import SinglePostData from "@/components/SingleBlog/SingleBlogApi"
import { getPost } from "@/helper"

interface PageProps {
  params: {
    slug: string
  }
}

async function BlogDetailsPage({ params }: PageProps) {
  const { slug } = params
  const data = await getPost(slug)

  return (
    <Layout>
      <SinglePostData post={data || undefined} />
    </Layout>
  )
}

export default BlogDetailsPage
