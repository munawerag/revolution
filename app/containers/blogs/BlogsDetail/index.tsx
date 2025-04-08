import Commitment from "@/app/components/BlogDetail/Commitment";
import MainTagLine from "@/app/components/BlogDetail/MainTagLine";
import RelatedPosts from "@/app/components/BlogDetail/RelatedPosts";

export default function BlogsDetail({ page }: { page: any }) {
  
  const blogDetailData = page?.blogDetailData || page;
  
  // console.log("page details", blogDetailData);


  return (
    <>
      <MainTagLine
        date={blogDetailData?.mainTagline?.date}
        title={blogDetailData?.mainTagline?.title}
        intro={blogDetailData?.mainTagline?.intro}
        mainImage={blogDetailData?.mainTagline?.mainImage}
        centeredDescription={blogDetailData?.mainTagline?.centeredDescription}
      />
      <Commitment commitmentData={blogDetailData?.commitment} />
      <RelatedPosts relatedPosts={blogDetailData?.relatedPosts} />
    </>
  );
}
