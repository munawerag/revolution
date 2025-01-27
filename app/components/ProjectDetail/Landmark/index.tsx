"use client";

import style from "./index.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjectCard from "../../ProjectListing/ProjectCard";

const projectsData = [
  {
    img: "/assets/images/project-detail/landmark-1.jpg",
    title: "BAC DE RODA",
    ctaLink: "/",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
  },
  {
    img: "/assets/images/project-detail/landmark-2.jpg",
    title: "CHOCOLATE",
    ctaLink: "/",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim.",
  },
];

const Landmark = () => {
  return (
    <div className={style.wrapper}>
      <div className={`${style.titleWrapper}`}>
        <h3 className={`${style.title}`}>Discover Our Landmarks</h3>
      </div>
      <div className={style.projectWrapper}>
        {projectsData?.map((project, index) => (
          <ProjectCard
            key={index}
            img={project.img}
            title={project.title}
            ctaLink={project.ctaLink}
            ctaTitle={project.ctaTitle}
            desc={project.desc}
            customclass={style.customProjectCard}
          />
        ))}
      </div>
    </div>
  );
};

export default Landmark;
