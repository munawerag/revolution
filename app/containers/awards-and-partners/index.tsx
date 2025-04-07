import AwardsPartners from "@/app/components/AwardsPartners";

export default function AwardsAndPartners({page}: any) {
  // console.log("page awards and partners", page);
  const awardsData = page?.awardsData || page;
  return (
    <>
        <AwardsPartners data={awardsData} />
    </>
  )
}
