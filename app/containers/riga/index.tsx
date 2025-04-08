import Amenities from "@/app/components/ProjectDetail/Amenities";
import BeautyRiga from "@/app/components/Riga/BeautyRiga";
import DestinationRiga from "@/app/components/Riga/DestinationRiga";

export default function Riga({ page }: { page: any }) {
  const rigaData = page?.rigaData || page;

  return (
    <>
      <DestinationRiga
        subTitle={rigaData?.sectionHeading?.subTitle}
        title={rigaData?.sectionHeading?.title}
        desc={rigaData?.sectionHeading?.desc}
        cardData={rigaData?.data}
      />
      <BeautyRiga image={rigaData?.beautyRiga?.image} content={rigaData?.beautyRiga?.content} />
      <Amenities
        title={rigaData?.amenities?.title}
        description={rigaData?.amenities?.description}
        items={rigaData?.amenities?.items}
      />
    </>
  );
}
