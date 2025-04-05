import Blog from "@/app/components/Blog";
import blogSection from "@/app/data/blog-section.json";

export default function Page() {
  return (
    <main>
      <Blog 
        sectionHeading={blogSection?.sectionHeading}
        blogItems={blogSection?.blogItems}
      />
    </main>
  );
}
