import InnerBanner from "@/app/components/common/InnerBanner";
import SectionHeading from "@/app/components/common/SectionHeading";
import MissionVission from "@/app/components/OurStory/MissionVission";

export default function OurStory({ page }: any) {
  const missonData = page?.missonData || page;

  return (
    <>
      <SectionHeading
        subTitle={missonData?.sectionHeading?.subTitle}
        title={missonData?.sectionHeading?.title}
        desc={missonData?.sectionHeading?.desc}
        isCenter={true}
      />
      <InnerBanner
        desktopImage={missonData?.innerBanner?.desktopImage}
        mobileImage={missonData?.innerBanner?.mobileImage}
      />
      <MissionVission missionVision={missonData?.missionVision} />
    </>
  );
}
