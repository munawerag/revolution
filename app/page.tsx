import HomeBanner from "./components/Home/HomeBanner";
import HomeThreeColumnLayout from "./components/Home/HomeThreeColumnLayout";
import HomeTwoColumnLayout from "./components/Home/HomeTwoColumnLayout";
import HomeUnique from "./components/Home/HomeUnique";
import homeData from "./data/homeData.json";


export default function Page() {
  return (
    <main>
      <HomeBanner data={homeData.homeBanner} />
      <HomeTwoColumnLayout projectsData={homeData?.homeTwoColumnLayout?.projectsData} />
      <HomeUnique
        title={homeData?.homeUniqueness?.title}
        description={homeData?.homeUniqueness?.description}
        data={homeData?.homeUniqueness?.data}
      />
      <HomeThreeColumnLayout 
        titleTop={homeData?.homeThreeColumnLayout?.title} 
        cardData={homeData?.homeThreeColumnLayout?.data} 
      />
    </main>
  );
}
