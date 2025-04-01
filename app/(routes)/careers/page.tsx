import CareersListing from "@/app/components/CareersListing";
import InnerBanner from "@/app/components/common/InnerBanner";
import SectionHeading from "@/app/components/common/SectionHeading";
import careersData from "@/app/data/careers.json";

export default function Page() {
  return (
    <main>
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
      />
      <CareersListing data={careersData?.careersListing} />
    </main>
  );
}
