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
    img: "/assets/images/project-list/project2.jpg",
    title: "EYWA Tree Of Life",
    ctaLink: "/",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project3.jpg",
    title: "BAC DE RODA",
    ctaLink: "/",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project4.jpg",
    title: "HOFT",
    ctaLink: "/",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project5.jpg",
    title: "LOFTS&ROSEGOLD",
    ctaLink: "/",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project6.jpg",
    title: "Philosophers Residence",
    ctaLink: "/",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project7.jpg",
    title: "Villa Milia",
    ctaLink: "/",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project8.jpg",
    title: "LEGEND.",
    ctaLink: "/",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project9.jpg",
    title: "TAL Residence",
    ctaLink: "/",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project10.jpg",
    title: "The Home",
    ctaLink: "/",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project11.jpg",
    title: "CHOCOLATE",
    ctaLink: "/",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project12.jpg",
    title: "City ZEN",
    ctaLink: "/",
    ctaTitle: "Discover More",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/images/project-list/project13.jpg",
    title: "Thompson Terraces",
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
