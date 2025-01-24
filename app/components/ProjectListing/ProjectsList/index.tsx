import React from "react";
import style from "./index.module.scss";
import ProjectCard from "../ProjectCard";

const projectsData = [
  {
    img: "/assets/images/project-list/project1.jpg",
    title: "22Palms",
    ctaLink: "/",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project1.jpg",
    title: "22Palms",
    ctaLink: "/",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project1.jpg",
    title: "22Palms",
    ctaLink: "/",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project1.jpg",
    title: "22Palms",
    ctaLink: "/",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project1.jpg",
    title: "22Palms",
    ctaLink: "/",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project1.jpg",
    title: "22Palms",
    ctaLink: "/",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const ProjectsList = () => {
  return (
    <>
      <section className="section">
        <div className="container-s">
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
      </section>
    </>
  );
};

export default ProjectsList;
