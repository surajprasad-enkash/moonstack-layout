import BlogCardGrid2 from "@/components/BlogCardGrid/BlogCardGrid2";
import Layout from "@/components/Layout";
import PostGrid from "@/components/PostGrid/PostGrid";

export default function BlogsPage() {
  return (
    <Layout>
      <div className="blogPageTopSection px-[0] pt-[160px] pb-[0px]">
        <BlogCardGrid2 showHeading={false} />
      </div>
      <section className="px-[80px] pt-[0px] pb-[80px]">
        <div className="container">
          <PostGrid />
        </div>
      </section>
    </Layout>
  );
}
