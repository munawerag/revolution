import HomeBanner from "./HomeBanner";
import HomeThreeColumnLayout from "./HomeThreeColumnLayout";
import HomeTwoColumnLayout from "./HomeTwoColumnLayout";





// dummy data
const projectsData = [
  {
    img: "/assets/images/home/residence-1.jpg",
    subTitle: "Residences",
    title: "Uncover remarkable R.Evolution residences",
    ctaLink: "/project-list/22-palms",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/home/residence-2.jpg",
    subTitle: "Newest Urban Sancuatry",
    title: "Lorem ipsum dolor sit amet",
    ctaLink: "/project-list/eywa-tree-of-life",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const projectsData3 = [
  {
    img: "/assets/images/home/residence-1.jpg",
    subTitle: "Residences",
    title: "Uncover remarkable R.Evolution residences",
    ctaLink: "/project-list/22-palms",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/home/residence-2.jpg",
    subTitle: "Newest Urban Sancuatry",
    title: "Lorem ipsum dolor sit amet",
    ctaLink: "/project-list/eywa-tree-of-life",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/home/residence-2.jpg",
    subTitle: "Newest Urban Sancuatry",
    title: "Lorem ipsum dolor sit amet",
    ctaLink: "/project-list/eywa-tree-of-life",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }
];




const HomepageComponents = () => {
  return (
    <main>
      <HomeBanner />
      <HomeTwoColumnLayout projectsData={projectsData} />
      <HomeThreeColumnLayout projectsData={projectsData3}/>
    </main>
  );
};

export default HomepageComponents;
