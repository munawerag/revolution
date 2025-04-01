"use client";

import style from "./index.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjectCard from "../../ProjectListing/ProjectCard";

interface LandmarkProject {
  img: string;
  title: string;
  ctaLink: string;
  ctaTitle: string;
  desc: string;
}

interface LandmarkProps {
  title?: string;
  projects?: LandmarkProject[];
}

const Landmark = ({ title = "", projects = [] }: LandmarkProps) => {
  return (
    <div className={style.wrapper} id="locations">
      {title && (
        <div className={`${style.titleWrapper}`}>
          <h3 className={`${style.title}`}>{title}</h3>
        </div>
      )}

      {projects.length > 0 && (
        <div className={style.projectWrapper}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              img={project.img || ""}
              title={project.title || ""}
              ctaLink={project.ctaLink || "#"}
              ctaTitle={project.ctaTitle || "Learn more"}
              desc={project.desc || ""}
              customclass={style.customProjectCard}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Landmark;
