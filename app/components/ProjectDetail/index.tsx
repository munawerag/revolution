import Overview from "./Overview";
import Masterpieces from "./Masterpieces";
import Amenities from "./Amenities";
import Essentials from "./Essentials";
import Landmark from "./Landmark";
import Ecosystem from "./Ecosystem";
import SvgComp from "../common/SvgComp";
import BannerHero from "./BannerHero";
import projectDetailData from "../../data/project-detail.json";

const ProjectDetails = () => {
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
        title={projectDetailData?.essentials?.title}
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

      <div className="chat-bubble">
        <SvgComp src="/assets/svgs/chat.svg" />
      </div>
    </>
  );
};

export default ProjectDetails;
