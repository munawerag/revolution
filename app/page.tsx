import HomeBanner from "./components/Home/HomeBanner";
import HomeThreeColumnLayout from "./components/Home/HomeThreeColumnLayout";
import HomeTwoColumnLayout from "./components/Home/HomeTwoColumnLayout";
import HomeUnique from "./components/Home/HomeUnique";
import generalData from "./data/general.json";

export default function Page() {
  return (
    <main>
      <HomeBanner data={generalData.homeBanner} />
      <HomeTwoColumnLayout projectsData={generalData?.homeTwoColumnLayout?.projectsData} />
      <HomeUnique
        title={generalData?.homeUniqueness?.title}
        description={generalData?.homeUniqueness?.description}
        data={generalData?.homeUniqueness?.data}
      />
      <HomeThreeColumnLayout 
        titleTop={generalData?.homeThreeColumnLayout?.title} 
        cardData={generalData?.homeThreeColumnLayout?.data} 
      />
    </main>
  );
}
