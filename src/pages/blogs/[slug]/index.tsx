import { useRouter } from "next/router";
import SinglePostData from "@/components/SingleBlog/SingleBlogApi";
import Layout from "@/components/Layout";

export default function BlogPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || typeof slug !== "string") {
    return <p className="text-[black]">Loading...</p>;
  }

  return (
    <Layout>
      <SinglePostData slug={slug} />
    </Layout>
  );
}
