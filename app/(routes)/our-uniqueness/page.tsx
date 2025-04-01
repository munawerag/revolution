import InnerBanner from "@/app/components/common/InnerBanner";
import SectionHeading from "@/app/components/common/SectionHeading";
import ourUniquenessData from "../../data/our-uniqueness.json";
import OurUniquenessCenter from "@/app/components/OurUniqueness/OurUniquenessCenter";
import BeautyRiga from "@/app/components/Riga/BeautyRiga";
import OurUniquenessPrinciples from "@/app/components/OurUniqueness/OurUniquenessPrinciples";

export default function Page() {
  return (
    <main>
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
        content={ourUniquenessData?.beautyRiga?.content}
        reverseLayout={true}
      />
      <OurUniquenessPrinciples principles={ourUniquenessData?.principles} />
    </main>
  );
}
