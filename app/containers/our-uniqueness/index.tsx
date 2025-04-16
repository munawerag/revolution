import InnerBanner from "@/app/components/common/InnerBanner";
import SectionHeading from "@/app/components/common/SectionHeading";
import OurUniquenessCenter from "@/app/components/OurUniqueness/OurUniquenessCenter";
import BeautyRiga from "@/app/components/Riga/BeautyRiga";
import OurUniquenessPrinciples from "@/app/components/OurUniqueness/OurUniquenessPrinciples";
import Essentials from "@/app/components/ProjectDetail/Essentials";

export default function OurUniqueness({ page }: any) {
  const ourUniquenessData = page?.ourUniquenessData || page;

  return (
    <>
      <SectionHeading
        subTitle={ourUniquenessData?.sectionHeading?.subTitle}
        title={ourUniquenessData?.sectionHeading?.title}
        isCenter={true}
      />
      <InnerBanner
        desktopImage={ourUniquenessData?.innerBanner?.desktopImage}
        mobileImage={ourUniquenessData?.innerBanner?.mobileImage}
        alt={ourUniquenessData?.innerBanner?.alt}
      />
      <OurUniquenessCenter centerDescription={ourUniquenessData?.centerDescription} />
      <BeautyRiga
        image={ourUniquenessData?.beautyRiga?.image}
        heading={ourUniquenessData?.beautyRiga?.heading}
        content={ourUniquenessData?.beautyRiga?.content}
        reverseLayout={true}
      />
      <OurUniquenessPrinciples principles={ourUniquenessData?.principles} />

      <Essentials
        title={ourUniquenessData?.essentials?.title}
        title2={ourUniquenessData?.essentials?.title2}
        items={ourUniquenessData?.essentials?.items}
      />
      
    </>
  );
}
