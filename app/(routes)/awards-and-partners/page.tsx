import AwardsPartners from "@/app/components/AwardsPartners";
import awardsData from "../../data/awards-partners.json";

export default function Page() {
  return (
    <main>
        <AwardsPartners data={awardsData} />
    </main>
  )
}
