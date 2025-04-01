import Amenities from "@/app/components/ProjectDetail/Amenities";
import BeautyRiga from "@/app/components/Riga/BeautyRiga";
import DestinationRiga from "@/app/components/Riga/DestinationRiga";
import rigaData from "@/app/data/riga.json";

export default function Page() {
  return (
    <main>
      <DestinationRiga 
        subTitle={rigaData?.sectionHeading?.subTitle}
        title={rigaData?.sectionHeading?.title}
        desc={rigaData?.sectionHeading?.desc}
        cardData={rigaData?.data}
      />
      <BeautyRiga
        image={rigaData?.beautyRiga?.image}
        content={rigaData?.beautyRiga?.content}
      />
      <Amenities/>
    </main>
  )
}
