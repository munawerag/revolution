import React from "react";
import style from "./index.module.scss";
import ProjectCard from "../ProjectCard";

const projectsData = [
  {
    img: "/assets/images/project-list/project1.jpg",
    title: "22Palms",
    ctaLink: "/project-list/22-palms",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project2.jpg",
    title: "EYWA Tree Of Life",
    ctaLink: "/project-list/eywa-tree-of-life",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project3.jpg",
    title: "BAC DE RODA",
    ctaLink: "/project-list/bac-de-roda",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project4.jpg",
    title: "HOFT",
    ctaLink: "/project-list/hoft",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project5.jpg",
    title: "LOFTS&ROSEGOLD",
    ctaLink: "/project-list/lofts-rosegold",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project6.jpg",
    title: "Philosophers Residence",
    ctaLink: "/project-list/philosophers-residence",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project7.jpg",
    title: "Villa Milia",
    ctaLink: "/project-list/villa-milia",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project8.jpg",
    title: "LEGEND.",
    ctaLink: "/project-list/legend",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project9.jpg",
    title: "TAL Residence",
    ctaLink: "/project-list/tal-residence",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project10.jpg",
    title: "The Home",
    ctaLink: "/project-list/the-home",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project11.jpg",
    title: "CHOCOLATE",
    ctaLink: "/project-list/chocolate",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project12.jpg",
    title: "City ZEN",
    ctaLink: "/project-list/city-zen",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project13.jpg",
    title: "Thompson Terraces",
    ctaLink: "/project-list/thompson-terraces",
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
