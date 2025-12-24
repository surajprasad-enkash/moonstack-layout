import Layout from "@/components/Layout";
import CategoryPosts from "@/components/CategoryPosts/CategoryPosts";
import { useRouter } from "next/router";

export default function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Layout>
      <CategoryPosts slug={slug} />
    </Layout>
  );
}
