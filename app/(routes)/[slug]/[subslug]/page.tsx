import NotFound from "@/app/not-found";
// import { apiFetch } from "@/app/functions/ApiResource";

import blogDetailData from "@/app/data/blog-detail.json";
import BlogsDetail from "@/app/containers/blogs/BlogsDetail";
import projectDetailData from "@/app/data/project-detail.json";
import ProjectListDetail from "@/app/containers/project-list/ProjectListDetail";

export default async function TemplateInnerPage({
  params,
}: {
  params: Promise<{ slug: string; subslug: string }>;
}) {
  const resolvedParams = await params;

  // Safely access slug and subslug with fallbacks
  const slug = resolvedParams?.slug || "";
  const subslug = resolvedParams?.subslug || "";

  return (
    <main>
      {!slug || !subslug ? (
        <NotFound />
      ) : (
        <>
          {"rest_success" == "rest_success" ? (
            (() => {
              switch (subslug) {
                case "blogs-detail":
                  return <BlogsDetail page={blogDetailData} />;
                case "22-palms":
                  return <ProjectListDetail page={projectDetailData} />;
                case "eywa-tree-of-life":
                  return <ProjectListDetail page={projectDetailData} />;
                case "bac-de-roda":
                  return <ProjectListDetail page={projectDetailData} />;
                case "hoft":
                  return <ProjectListDetail page={projectDetailData} />;
                case "lofts-rosegold":
                  return <ProjectListDetail page={projectDetailData} />;
                case "philosophers-residence":
                  return <ProjectListDetail page={projectDetailData} />;
                case "villa-milia":
                  return <ProjectListDetail page={projectDetailData} />;
                case "legend":
                  return <ProjectListDetail page={projectDetailData} />;
                case "tal-residence":
                  return <ProjectListDetail page={projectDetailData} />;
                case "the-home":
                  return <ProjectListDetail page={projectDetailData} />;
                case "chocolate":
                  return <ProjectListDetail page={projectDetailData} />;
                case "city-zen":
                  return <ProjectListDetail page={projectDetailData} />;
                case "thompson-terraces":
                  return <ProjectListDetail page={projectDetailData} />;

                default:
                  return <NotFound />;
              }
            })()
          ) : (
            <NotFound />
          )}
        </>
      )}
    </main>
  );
}
