
import CareersListing from "@/app/components/CareersListing";
import InnerBanner from "@/app/components/common/InnerBanner";
import SectionHeading from "@/app/components/common/SectionHeading";




export default function Careers({page}: any) {
  const careersData = page?.careersData || page;
  
  return (
    <>
      <SectionHeading
        subTitle={careersData?.sectionHeading?.subTitle}
        title={careersData?.sectionHeading?.title}
        desc={careersData?.sectionHeading?.desc}
        isCenter={true}
      />
      <InnerBanner 
        desktopImage={careersData?.innerBanner?.desktopImage}
        mobileImage={careersData?.innerBanner?.mobileImage}
        alt={careersData?.innerBanner?.alt}
        VideoUrl={careersData?.innerBanner?.videoPath}
      />
      <CareersListing data={careersData?.careersListing} />
    </>
  );
}
