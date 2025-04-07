import Blog from "@/app/components/Blog";

export default function Blogs({ page }: { page: any }) {
  const blogSection = page?.blogSection || page;

  return (
    <>
      <Blog sectionHeading={blogSection?.sectionHeading} blogItems={blogSection?.blogItems} />
    </>
  );
}
