import HomeBanner from "./HomeBanner";
import HomeThreeColumnLayout from "./HomeThreeColumnLayout";
import HomeTwoColumnLayout from "./HomeTwoColumnLayout";
import HomeUnique from "./HomeUnique";

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

const projectsData3 = {
  title: "The world of R.Evolution",
  data: [
    {
      img: "/assets/images/home/residence-11.jpg",
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
      img: "/assets/images/home/residence-3.jpg",
      subTitle: "Newest Urban Sancuatry",
      title: "Lorem ipsum dolor sit amet",
      ctaLink: "/project-list/eywa-tree-of-life",
      ctaTitle: "Discover More",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ],
};

const projectsUniqueness = {
  title: "The world of R.Evolution",
  desc: "In 5 dimensions with 7 senses is our secret ingredient and motto.",
  data: [
    {
      img: "/assets/images/home/uniqueness-1.jpg",
      subTitle: "Residences",
      title: "Uncover remarkable R.Evolution residences",
      ctaLink: "/project-list/22-palms",
      ctaTitle: "Discover More",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      img: "/assets/images/home/uniqueness-2.jpg",
      subTitle: "Newest Urban Sancuatry",
      title: "Lorem ipsum dolor sit amet",
      ctaLink: "/project-list/eywa-tree-of-life",
      ctaTitle: "Discover More",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      img: "/assets/images/home/uniqueness-3.jpg",
      subTitle: "Newest Urban Sancuatry",
      title: "Lorem ipsum dolor sit amet",
      ctaLink: "/project-list/eywa-tree-of-life",
      ctaTitle: "Discover More",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      img: "/assets/images/home/uniqueness-2.jpg",
      subTitle: "Newest Urban Sancuatry",
      title: "Lorem ipsum dolor sit amet",
      ctaLink: "/project-list/eywa-tree-of-life",
      ctaTitle: "Discover More",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ],
};

const HomepageComponents = () => {
  return (
    <main>
      <HomeBanner />
      <HomeTwoColumnLayout projectsData={projectsData} />
      <HomeUnique
        title={projectsUniqueness?.title}
        description={projectsUniqueness?.desc}
        data={projectsUniqueness?.data}
      />
      <HomeThreeColumnLayout titleTop={projectsData3?.title} cardData={projectsData3?.data} />
    </main>
  );
};

export default HomepageComponents;
