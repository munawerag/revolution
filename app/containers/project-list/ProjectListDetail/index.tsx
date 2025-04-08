import Amenities from "@/app/components/ProjectDetail/Amenities";
import BannerHero from "@/app/components/ProjectDetail/BannerHero";
import Ecosystem from "@/app/components/ProjectDetail/Ecosystem";
import Essentials from "@/app/components/ProjectDetail/Essentials";
import Landmark from "@/app/components/ProjectDetail/Landmark";
import Masterpieces from "@/app/components/ProjectDetail/Masterpieces";
import Overview from "@/app/components/ProjectDetail/Overview";

const ProjectListDetail = ({ page }: { page: any }) => {
  const projectDetailData = page?.projectDetailData || page;

  return (
    <>
      <BannerHero
        bannerData={projectDetailData?.bannerHero}
        logoData={projectDetailData?.bannerLogo}
        titleOneData={projectDetailData?.titleOne}
        titleTwoData={projectDetailData?.titleTwo}
      />

      <Overview
        subtitle={projectDetailData?.overview?.subtitle}
        title={projectDetailData?.overview?.title}
        description={projectDetailData?.overview?.description}
        imagePath={projectDetailData?.overview?.imagePath}
      />

      <Masterpieces
        subtitle={projectDetailData?.masterpieces?.subtitle}
        title={projectDetailData?.masterpieces?.title}
        description={projectDetailData?.masterpieces?.description}
        slides={projectDetailData?.masterpieces?.slides}
      />

      <Amenities
        title={projectDetailData?.amenities?.title}
        description={projectDetailData?.amenities?.description}
        items={projectDetailData?.amenities?.items}
      />

      <Essentials
        title2={projectDetailData?.essentials?.title2}
        description={projectDetailData?.essentials?.description}
        items={projectDetailData?.essentials?.items}
      />

      <Ecosystem
        title={projectDetailData?.ecosystem?.title}
        description={projectDetailData?.ecosystem?.description}
        slides={projectDetailData?.ecosystem?.slides}
      />

      <Landmark
        title={projectDetailData?.landmark?.title}
        projects={projectDetailData?.landmark?.projects}
      />

      {/* <div className="chat-bubble">
        <SvgComp src="/assets/svgs/chat.svg" />
      </div> */}
    </>
  );
};

export default ProjectListDetail;
