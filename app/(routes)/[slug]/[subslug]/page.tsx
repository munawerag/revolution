import React from "react";
// import NotFound from "@/app/not-found";
// import { apiFetch } from "@/app/functions/ApiResource";

import blogDetailData from "@/app/data/blog-detail.json";
import BlogsDetail from "@/app/containers/blogs/BlogsDetail";

export default function TemplateInnerPage({
  params,
}: {
  params: { slug: string; subslug: string };
}) {
  console.log("Direct params object:", params);
  
  // Safely access slug and subslug with fallbacks
  const slug = params?.slug || "";
  const subslug = params?.subslug || "";
  
  console.log("Individual params:", slug, subslug);
  
  return (
    <main>
      {!slug || !subslug ? (
        // <NotFound />
        <div>Error: Missing parameters - Slug: {slug}, Subslug: {subslug}</div>
      ) : (
        <>
          {"rest_success" == "rest_success" ? (
            (() => {
              switch (subslug) {
                case "blogs-detail":
                  return <BlogsDetail page={blogDetailData} />;
                default:
                // return <NotFound />;
                
              }
            })()
          ) : (
            // <NotFound />
            <div>Error: Data not found</div>
          )}
        </>
      )}
    </main>
  );
}
