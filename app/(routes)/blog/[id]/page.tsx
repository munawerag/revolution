import Commitment from "@/app/components/BlogDetail/Commitment";
import MainTagLine from "@/app/components/BlogDetail/MainTagLine";
import mainTagLineData from "@/app/data/blog-detail-main-tagline.json";
import commitmentData from "@/app/data/blog-commitment.json";
import RelatedPosts from "@/app/components/BlogDetail/RelatedPosts";
import relatedPostsData from "@/app/data/related-posts.json";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main>
      <MainTagLine 
        date={mainTagLineData?.date}
        title={mainTagLineData?.title}
        intro={mainTagLineData?.intro}
        mainImage={mainTagLineData?.mainImage}
        centeredDescription={mainTagLineData?.centeredDescription}
      />
      <Commitment commitmentData={commitmentData} />
      <RelatedPosts relatedPosts={relatedPostsData} />
    </main>
  )
}
