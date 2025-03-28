import InnerBanner from "@/app/components/common/InnerBanner";
import SectionHeading from "@/app/components/common/SectionHeading";
import MissionVission from "@/app/components/OurStory/MissionVission";
import missonData from "../../data/our-story.json";
import innerHeroData from "../../data/inner-hero.json";

export default function Page() {
  return (
    <main>
      <SectionHeading
        subTitle="Our Story"
        title="R.Evolution history"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        isCenter={true}
      />
      <InnerBanner 
        desktopImage={innerHeroData.innerBanner.desktopImage}
        mobileImage={innerHeroData.innerBanner.mobileImage}
        alt={innerHeroData.innerBanner.alt}
      />
      <MissionVission missionVision={missonData.missionVision} />
    </main>
  );
}
