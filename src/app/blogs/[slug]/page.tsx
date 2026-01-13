import SinglePostData from "@/components/SingleBlog/SingleBlogApi";
import Layout from "@/components/Layout";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogDetailsPage({ params }: PageProps) {
  const { slug } = params;

  return (
    <Layout>
      <SinglePostData slug={slug} />
    </Layout>
  );
}
