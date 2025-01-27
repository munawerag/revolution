import HomeBanner from "./HomeBanner";
import Overview from "./Overview";
import Masterpieces from "./Masterpieces";
import Amenities from "./Amenities";
import Essentials from "./Essentials";
import Landmark from "./Landmark";
import Ecosystem from "./Ecosystem";
import SvgComp from "../common/SvgComp";

const ProjectDetails = () => {
  return (
    <>
      <HomeBanner />
      <Overview />
      <Masterpieces />
      <Amenities />
      <Essentials />
      <Ecosystem />
      <Landmark />

      <div className="chat-bubble">
        <SvgComp src="/assets/svgs/chat.svg" />
      </div>
    </>
  );
};

export default ProjectDetails;
